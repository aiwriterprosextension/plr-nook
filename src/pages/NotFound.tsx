import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Home, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to PLR Organizer Pro homepage."
      />
      <div className="flex min-h-[60vh] items-center justify-center bg-background py-20">
        <div className="container max-w-lg text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <FileSearch className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
          <p className="text-xl font-semibold text-secondary mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="cta">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outlineGhost">
                Browse Tools
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
