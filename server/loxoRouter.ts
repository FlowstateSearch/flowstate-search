import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import axios from "axios";
import FormData from "form-data";
import { ENV } from "./_core/env";

export const loxoRouter = router({
  submitApplication: publicProcedure
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        linkedinUrl: z.string().optional(),
        resume: z.object({
          name: z.string(),
          type: z.string(),
          base64: z.string(),
        }),
        consent: z.boolean().optional(),
        jobId: z.string().optional(), // Allow override for different job postings
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { name, email, phone, linkedinUrl, resume, consent, jobId } = input;

        // Use provided jobId or fall back to default from env
        const targetJobId = jobId || ENV.loxoJobId;

        if (!ENV.loxoAgencySlug || !targetJobId) {
          throw new Error("Loxo configuration is incomplete");
        }

        // Step 1: Fetch the Loxo form page to get authenticity token
        const formPageUrl = `https://${ENV.loxoAgencySlug}.app.loxo.co/job/${targetJobId}/form?source_type=app`;

        const formPageResponse = await axios.get(formPageUrl);
        const html = formPageResponse.data;

        // Extract authenticity token from the HTML
        // Handle both single and double quotes, with or without spaces
        const tokenMatch = html.match(/name=['"]authenticity_token['"]\s*value=(['"])([^'"]+)\1/) ||
                          html.match(/name=['"]authenticity_token['"]\s*value=([^\s>\/]+)/);
        const sourceTypeMatch = html.match(/name=['"]source_type_id['"]\s*value=(['"])([^'"]+)\1/) ||
                               html.match(/name=['"]source_type_id['"]\s*value=([^\s>\/]+)/);
        
        const authenticityToken = tokenMatch ? (tokenMatch[2] || tokenMatch[1]) : null;
        const sourceTypeId = sourceTypeMatch ? (sourceTypeMatch[2] || sourceTypeMatch[1]) : null;

        if (!authenticityToken || !sourceTypeId) {
          throw new Error("Could not extract required tokens from Loxo form");
        }

        // Step 2: Prepare form data for Loxo submission
        const loxoFormData = new FormData();
        loxoFormData.append("utf8", "✓");
        loxoFormData.append("authenticity_token", authenticityToken);
        loxoFormData.append("source_type_id", sourceTypeId);
        loxoFormData.append("name", name);
        loxoFormData.append("email", email);
        loxoFormData.append("phone", phone || "");
        if (linkedinUrl) {
          loxoFormData.append("linkedin", linkedinUrl);
        }

        // Convert base64 to Buffer for form-data
        const resumeBuffer = Buffer.from(resume.base64, "base64");
        loxoFormData.append("resume_uploaded_file[]", resumeBuffer, {
          filename: resume.name,
          contentType: resume.type,
        });
        loxoFormData.append("resume_source_type_id", sourceTypeId);

        if (consent) {
          loxoFormData.append("contact-consent-box", "on");
        }

        // Step 3: Submit to Loxo
        const submitUrl = `https://${ENV.loxoAgencySlug}.app.loxo.co/job/${targetJobId}/finish?source_type=app`;

        const submitResponse = await axios.post(submitUrl, loxoFormData, {
          headers: {
            ...loxoFormData.getHeaders(),
            Cookie: formPageResponse.headers["set-cookie"]?.join("; ") || "",
          },
          maxRedirects: 0,
          validateStatus: (status) => status >= 200 && status < 400,
        });

        // Check if submission was successful
        if (submitResponse.status === 302 || submitResponse.status === 200) {
          return {
            success: true,
            message: "Application submitted successfully!",
          };
        } else {
          throw new Error("Unexpected response from Loxo");
        }
      } catch (error: any) {
        console.error("Error submitting application:", error);
        throw new Error(error.message || "Failed to submit application");
      }
    }),
});
