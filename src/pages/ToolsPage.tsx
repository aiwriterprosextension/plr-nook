import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Wand2, 
  Search, 
  Code, 
  FileCheck, 
  Languages, 
  Palette,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    name: "Content Spinner",
    description: "Transform generic PLR into 100% unique content. AI-powered rewriting with adjustable uniqueness levels and brand voice preservation.",
    icon: Wand2,
    href: "/tools/content-spinner",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    name: "SEO Analyzer",
    description: "Get tailored SEO recommendations to help your PLR content rank higher. PLR-specific scoring, keyword optimization, and readability assessment.",
    icon: Search,
    href: "/tools/seo-analyzer",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "HTML Editor",
    description: "Create & format website content without coding skills. WYSIWYG editing, drag-and-drop media insertion, and responsive design tools.",
    icon: Code,
    href: "/tools/html-editor",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    name: "License Tracker",
    description: "Never risk copyright issues with your PLR content. Track usage rights, restrictions, and expiration dates for all your licenses.",
    icon: FileCheck,
    href: "/tools/license-tracker",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    name: "Multi-Language Translator",
    description: "Convert PLR content into 27 different languages. Context-aware translations with formatting preservation for global audiences.",
    icon: Languages,
    href: "/tools/multi-language-translator",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    name: "Brand Kit Tool",
    description: "Create a consistent brand identity across all your PLR content. Store logos, colors, fonts and apply them with one click.",
    icon: Palette,
    href: "/tools/brand-kit",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10"
  }
];

const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>PLR Tools - 6 Powerful Tools for PLR Content Management</title>
        <meta 
          name="description" 
          content="Discover our suite of 6 specialized PLR tools: Content Spinner, SEO Analyzer, HTML Editor, License Tracker, Multi-Language Translator, and Brand Kit Tool." 
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
              Six specialized tools designed to help you spin, optimize, edit, translate, brand, and organize PLR content.
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
              Get access to all 6 tools and start turning PLR content into profitable digital products today.
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
