import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Flowstate Search";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-16">
        <h1 className="text-4xl font-heading font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 28, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. Introduction</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Flowstate Search ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and submit job applications through our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              When you use our Site or submit a job application, we collect the following types of information:
            </p>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
              <li><strong>Resume and Application Materials:</strong> Your resume, cover letter, work history, education, skills, and any other documents you submit.</li>
              <li><strong>Professional Information:</strong> Job preferences, career objectives, and other information relevant to your job search.</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited on our Site.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar technologies to enhance your experience and analyze Site usage.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Recruitment Services:</strong> To process your job applications and match you with potential employers and open positions.</li>
              <li><strong>Communication:</strong> To contact you regarding job opportunities, application status updates, and recruitment-related inquiries.</li>
              <li><strong>Sharing with Employers:</strong> To share your application materials with our clients (hiring companies) who have open positions that match your qualifications.</li>
              <li><strong>Site Improvement:</strong> To analyze Site usage, improve our services, and enhance user experience.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. How We Share Your Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may share your personal information with the following parties:
            </p>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Employers and Clients</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              When you submit a job application through our Site, we share your application materials (including your resume, contact information, and other submitted documents) with the hiring companies and employers who have engaged our recruitment services.
            </p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Service Providers</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We use third-party service providers to assist with our operations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Applicant Tracking System (ATS):</strong> We use Loxo to process and manage job applications. Your application data is transmitted to and stored within Loxo's platform.</li>
              <li><strong>Cloud Storage:</strong> We use secure cloud storage services to store application materials and documents.</li>
              <li><strong>Analytics Providers:</strong> We may use analytics tools to understand how users interact with our Site.</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Legal Requirements</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may disclose your information if required to do so by law or in response to valid legal requests (such as subpoenas, court orders, or government investigations).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Data Retention</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Typically, we retain application data for up to two years from the date of submission, or until you request deletion of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. Your Privacy Rights</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li><strong>Access:</strong> You may request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain legal exceptions.</li>
              <li><strong>Opt-Out:</strong> You may opt out of receiving marketing communications from us at any time.</li>
              <li><strong>Data Portability:</strong> You may request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at info@flowstatesearch.com. We will respond to your request within a reasonable timeframe as required by applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Data Security</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may use cookies and similar tracking technologies to collect information about your browsing activity on our Site. Cookies are small text files stored on your device that help us improve Site functionality and analyze usage patterns. You can control cookie settings through your browser preferences, but disabling cookies may limit certain Site features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Third-Party Links</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Our Site may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">11. International Data Transfers</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your jurisdiction. By using our Site and submitting applications, you consent to the transfer of your information to the United States and other countries where we or our service providers operate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">13. Contact Us</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Flowstate Search</strong><br />
              Email: info@flowstatesearch.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
