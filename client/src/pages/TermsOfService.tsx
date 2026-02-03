import { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Flowstate Search";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-16">
        <h1 className="text-4xl font-heading font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: January 28, 2026</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              By accessing or using the Flowstate Search website (the "Site") and submitting job applications through our platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site or submit applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">2. Eligibility</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              You must be at least 18 years of age to use this Site and submit job applications. By using the Site, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">3. Job Applications</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              When you submit a job application through the Site, you agree to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>All information you provide is accurate, truthful, and complete to the best of your knowledge.</li>
              <li>You authorize Flowstate Search to share your application materials (including your resume, contact information, and any other submitted documents) with potential employers and clients.</li>
              <li>You grant Flowstate Search permission to process and store your application data in accordance with our Privacy Policy.</li>
              <li>Submitting an application does not guarantee an interview, job offer, or any specific outcome.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Submit false, misleading, or fraudulent information in your job applications.</li>
              <li>Use automated tools, bots, or scripts to access the Site or submit applications.</li>
              <li>Attempt to interfere with the proper functioning of the Site or its security measures.</li>
              <li>Use the Site for any unlawful purpose or in violation of any applicable laws or regulations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              All content on the Site, including text, graphics, logos, and design elements, is the property of Flowstate Search or its licensors and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any Site content without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">6. No Guarantees</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Flowstate Search provides recruitment services but does not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Your application will result in an interview or job offer.</li>
              <li>Any specific job posting will remain available or be filled.</li>
              <li>The Site will be available at all times without interruption or errors.</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Site or our services at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              To the fullest extent permitted by law, Flowstate Search shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site or submission of job applications, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Loss of employment opportunities or income.</li>
              <li>Errors or omissions in job postings or application processing.</li>
              <li>Unauthorized access to or alteration of your application data.</li>
              <li>Any actions or omissions by potential employers or third parties.</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              The Site and all services are provided "as is" without warranties of any kind, express or implied.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">8. Indemnification</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              You agree to indemnify and hold harmless Flowstate Search, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Your use of the Site or submission of applications.</li>
              <li>Your violation of these Terms of Service.</li>
              <li>Any false, misleading, or inaccurate information you provide.</li>
              <li>Your violation of any third-party rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">9. Termination</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We reserve the right to refuse, reject, or remove any job application at our sole discretion, including if we believe you have violated these Terms of Service or engaged in conduct that may harm other users, employers, or Flowstate Search.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">10. Governing Law</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law principles. Any disputes arising from these terms or your use of the Site shall be resolved in the state or federal courts located in Denver County, Colorado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Site after such changes constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-4">12. Contact Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-foreground/90 leading-relaxed">
              <strong>Flowstate Search</strong><br />
              Email: hello@flowstatesearch.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
