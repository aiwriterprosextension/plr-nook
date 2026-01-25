import { SEOHead } from "@/components/SEOHead";

export default function RefundPolicy() {
  return (
    <>
      <SEOHead
        title="Refund Policy | PLR Organizer Pro"
        description="Learn about our refund policy and money-back guarantee for PLR Organizer Pro software purchases."
        keywords="refund policy, money back guarantee, PLR Organizer Pro, returns"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold text-secondary mb-8">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 25, 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Guarantee</h2>
              <p className="text-muted-foreground">
                At PLR Organizer Pro, we stand behind our software with a <strong>30-day money-back guarantee</strong>. If you're not completely satisfied with your purchase, we'll provide a full refund—no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Eligibility for Refunds</h2>
              <p className="text-muted-foreground mb-4">
                You are eligible for a full refund if:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your refund request is made within 30 days of the original purchase date</li>
                <li>You purchased the software directly from our website or authorized resellers</li>
                <li>This is your first refund request for this product</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">How to Request a Refund</h2>
              <p className="text-muted-foreground mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Email our support team at support@plrorganizerpro.com</li>
                <li>Include your order number and the email address used for purchase</li>
                <li>Briefly explain why you're requesting a refund (optional but helpful)</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                We aim to process all refund requests within 3-5 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Refund Process</h2>
              <p className="text-muted-foreground mb-4">
                Once your refund is approved:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your payment will be refunded to the original payment method</li>
                <li>Refunds typically appear within 5-10 business days, depending on your bank</li>
                <li>Your software license will be deactivated</li>
                <li>You should uninstall the software from your computer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Exceptions</h2>
              <p className="text-muted-foreground mb-4">
                Refunds may not be available in the following cases:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Requests made after the 30-day guarantee period</li>
                <li>Purchases made through unauthorized third-party sellers</li>
                <li>Multiple refund requests for the same product</li>
                <li>Evidence of license abuse or terms of service violations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Upgrades and Add-ons</h2>
              <p className="text-muted-foreground">
                Upgrades and add-on purchases are also covered by our 30-day guarantee. If you purchased an upgrade within 30 days, you can request a refund for the upgrade amount. The original license will remain active.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Partial Refunds</h2>
              <p className="text-muted-foreground">
                In some cases, we may offer partial refunds for bundle purchases if you wish to keep certain components. Contact our support team to discuss your options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our refund policy or need assistance with a refund request, please contact us:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: support@plrorganizerpro.com
              </p>
              <p className="text-muted-foreground mt-4">
                We're committed to ensuring your satisfaction with PLR Organizer Pro.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
