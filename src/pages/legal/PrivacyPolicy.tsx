import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | PLR Organizer Pro"
        description="Read our privacy policy to understand how PLR Organizer Pro collects, uses, and protects your personal information."
        keywords="privacy policy, data protection, PLR Organizer Pro, personal information"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 25, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                PLR Organizer Pro ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our desktop application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-secondary mb-2">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Purchase our software</li>
                <li>Create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our support team</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This information may include your name, email address, billing address, and payment information.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-2 mt-6">2.2 Desktop Application Data</h3>
              <p className="text-muted-foreground">
                <strong>Important:</strong> PLR Organizer Pro is a desktop application. Your files and content remain on your local computer. We do not have access to, collect, or store any of your PLR content, files, or documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process your purchases and deliver licenses</li>
                <li>Send you product updates and important notices</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services for payment processing, email delivery, and analytics. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">7. Cookies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to enhance your browsing experience. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: privacy@plrorganizerpro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
