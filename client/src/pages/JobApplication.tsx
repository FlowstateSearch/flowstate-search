import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface JobApplicationProps {
  jobTitle: string;
  jobLocation: string;
  jobSalary: string;
  jobDescription: React.ReactNode;
  jobId?: string;
}

export default function JobApplication({
  jobTitle,
  jobLocation,
  jobSalary,
  jobDescription,
  jobId,
}: JobApplicationProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = trpc.loxo.submitApplication.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit application");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (16MB limit)
      if (file.size > 16 * 1024 * 1024) {
        toast.error("File size must be less than 16MB");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = (reader.result as string).split(",")[1];

        await submitMutation.mutateAsync({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          resume: {
            name: resumeFile.name,
            type: resumeFile.type,
            base64,
          },
          consent: formData.consent,
          jobId,
        });
      };
      reader.readAsDataURL(resumeFile);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-2xl shadow-xl border-border/50">
          <CardContent className="pt-12 pb-12 text-center px-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you for applying to the {jobTitle} position. We'll review your application and be in touch soon.
            </p>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="container max-w-4xl">
        {/* Job Header */}
        <Card className="mb-8 shadow-lg border-border/50">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{jobTitle}</h1>
                <div className="flex gap-6 text-muted-foreground">
                  <span>📍 {jobLocation}</span>
                  <span>💰 {jobSalary}</span>
                </div>
              </div>
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Job Description */}
        <Card className="mb-8 shadow-lg border-border/50">
          <CardContent className="p-8 prose prose-slate max-w-none">
            {jobDescription}
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="shadow-lg border-border/50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV *</Label>
                <Input
                  id="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                <p className="text-sm text-muted-foreground">
                  Accepted formats: PDF, DOC, DOCX (Max 16MB)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                  I consent to be contacted about job opportunities.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitMutation.isPending}
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
