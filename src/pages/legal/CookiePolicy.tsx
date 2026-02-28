import { SEOHead } from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy | PLR Organizer Pro"
        description="Learn about how PLR Organizer Pro uses cookies and similar technologies on our website."
        keywords="cookie policy, cookies, tracking, PLR Organizer Pro, website cookies"
        canonicalUrl="https://organizer.aiwriterpros.com/cookies"
        robots="index, follow"
        author="PLR Organizer Pro"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 25, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">
                PLR Organizer Pro uses cookies and similar technologies for the following purposes:
              </p>
              
              <h3 className="text-xl font-medium text-secondary mb-2">2.1 Essential Cookies</h3>
              <p className="text-muted-foreground mb-4">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-2">2.2 Analytics Cookies</h3>
              <p className="text-muted-foreground mb-4">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and services. These cookies collect information anonymously.
              </p>

              <h3 className="text-xl font-medium text-secondary mb-2">2.3 Marketing Cookies</h3>
              <p className="text-muted-foreground">
                These cookies are used to track visitors across websites to display relevant advertisements. They may be set by our advertising partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-4">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-secondary">Cookie Name</th>
                      <th className="border border-border p-3 text-left text-secondary">Purpose</th>
                      <th className="border border-border p-3 text-left text-secondary">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr>
                      <td className="border border-border p-3">session_id</td>
                      <td className="border border-border p-3">Maintains user session</td>
                      <td className="border border-border p-3">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">preferences</td>
                      <td className="border border-border p-3">Stores user preferences</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">_ga</td>
                      <td className="border border-border p-3">Google Analytics tracking</td>
                      <td className="border border-border p-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">consent</td>
                      <td className="border border-border p-3">Stores cookie consent choice</td>
                      <td className="border border-border p-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                Some cookies on our website are set by third-party services. These include analytics providers (like Google Analytics) and payment processors. These third parties have their own cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> When you first visit our website, you can choose which types of cookies to accept</li>
                <li><strong>Opt-Out Links:</strong> You can opt out of specific analytics cookies using provider opt-out tools</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">6. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. We will notify you of any significant changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at:
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
