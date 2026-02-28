import { SEOHead } from "@/components/SEOHead";

export default function TermsOfService() {
  return (
    <>
      <SEOHead
        title="Terms of Service | PLR Organizer Pro"
        description="Read our terms of service to understand the rules and guidelines for using PLR Organizer Pro software and services."
        keywords="terms of service, terms and conditions, PLR Organizer Pro, software license"
        canonicalUrl="https://organizer.aiwriterpros.com/terms"
        robots="index, follow"
        author="PLR Organizer Pro"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 25, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using PLR Organizer Pro ("the Software"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our software or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">2. License Grant</h2>
              <p className="text-muted-foreground mb-4">
                Upon purchase, we grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Install and use the Software on the number of computers specified by your license type</li>
                <li>Use the Software for personal or commercial purposes</li>
                <li>Receive updates during your license period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">3. Restrictions</h2>
              <p className="text-muted-foreground mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Copy, modify, or distribute the Software</li>
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Rent, lease, or lend the Software to third parties</li>
                <li>Use the Software to violate any laws or regulations</li>
                <li>Remove any proprietary notices or labels</li>
                <li>Share your license key with others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                PLR Organizer Pro and all related intellectual property rights are owned by us. Your purchase grants you a license to use the Software but does not transfer ownership of any intellectual property.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">5. Your Content</h2>
              <p className="text-muted-foreground">
                You retain all rights to your PLR content and files. The Software processes your files locally on your computer. We do not access, collect, or store your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">6. Updates and Support</h2>
              <p className="text-muted-foreground">
                We may provide updates to improve functionality and fix issues. Support is provided via email during your license period. We reserve the right to modify support terms with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE ERROR-FREE OR UNINTERRUPTED. YOUR USE OF THE SOFTWARE IS AT YOUR OWN RISK.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">9. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate your license if you violate these terms. Upon termination, you must stop using the Software and delete all copies. Sections relating to intellectual property, disclaimers, and limitations of liability survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Software.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: legal@plrorganizerpro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
