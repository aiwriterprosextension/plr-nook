import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Search, 
  Wand2, 
  Code, 
  FileCheck, 
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    name: "PLR Scanner",
    description: "Instantly analyze any PLR package for quality, licensing terms, and commercial viability. Get detailed reports on content value and resale potential.",
    icon: Search,
    href: "/tools/plr-scanner",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "Content Transformer",
    description: "Check PLR content for uniqueness and transform it into 100% original content. AI-powered rewriting with real-time plagiarism detection.",
    icon: Wand2,
    href: "/tools/content-transformer",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    name: "HTML Editor",
    description: "Professional HTML editing for PLR sales pages and content. Visual editor with live preview and clean code output.",
    icon: Code,
    href: "/tools/html-editor",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    name: "License Tracker",
    description: "Never lose track of your PLR licenses again. Organize, search, and manage all your license terms in one secure location.",
    icon: FileCheck,
    href: "/tools/license-tracker",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  }
];

const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>PLR Tools - 4 Powerful Tools for PLR Content Management</title>
        <meta 
          name="description" 
          content="Discover our suite of 4 specialized PLR tools: Scanner, Content Transformer, HTML Editor, and License Tracker." 
        />
        <link rel="canonical" href="https://plr-nook.lovable.app/tools" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              PLR Organizer Pro Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four specialized tools designed to help you scan, transform, edit, and organize PLR content.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card 
                  key={tool.name} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mb-4`}>
                      <tool.icon className={`w-6 h-6 ${tool.color}`} />
                    </div>
                    <CardTitle className="text-xl">{tool.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="group-hover:text-primary p-0">
                      <Link to={tool.href} className="flex items-center gap-2">
                        Explore Tool
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your PLR Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get access to all 4 tools and start turning PLR content into profitable digital products today.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/funnel/offer">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;
