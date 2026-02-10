import { Link } from "react-router-dom";
import { Construction, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
      />
      <div className="py-20 bg-background">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <Construction className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <p className="text-muted-foreground mb-8">
            This page is coming soon. In the meantime, check out what PLR Organizer Pro can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="cta">
                Back to Home
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/funnel/offer">
              <Button variant="outlineGhost">
                Get Started — $27
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
