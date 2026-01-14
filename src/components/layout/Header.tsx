import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Scan, RotateCw, Gauge, Search, Code, FileKey, Palette, BookOpen, Video, HelpCircle, Users, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const tools = [
  { name: "PLR Scanner", desc: "Scan and organize your library", icon: Scan, href: "/tools/plr-scanner" },
  { name: "Content Spinner", desc: "Make PLR unique", icon: RotateCw, href: "/tools/content-spinner" },
  { name: "Uniqueness Meter", desc: "Verify originality", icon: Gauge, href: "/tools/uniqueness-meter" },
  { name: "SEO Analyzer", desc: "Optimize for rankings", icon: Search, href: "/tools/seo-analyzer" },
  { name: "HTML Editor", desc: "Edit sales pages", icon: Code, href: "/tools/html-editor" },
  { name: "License Tracker", desc: "Track usage rights", icon: FileKey, href: "/tools/license-tracker" },
  { name: "Rebranding Tool", desc: "Customize assets", icon: Palette, href: "/tools/rebranding-tool" },
];

const resources = [
  { name: "PLR Organization Guides", icon: BookOpen, href: "/resources/guides" },
  { name: "Video Tutorials", icon: Video, href: "/resources/tutorials" },
  { name: "Knowledge Base", icon: HelpCircle, href: "/resources/knowledge-base" },
  { name: "Community Forum", icon: Users, href: "/resources/community", badge: "Coming Soon" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
            <Scan className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-secondary">PLR Organizer Pro</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  {resources.map((item) => (
                    <li key={item.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.name}</span>
                            {item.badge && (
                              <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2">
                  {tools.map((tool) => (
                    <li key={tool.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={tool.href}
                          className="flex items-start gap-3 rounded-lg p-3 hover:bg-muted transition-colors"
                        >
                          <tool.icon className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium block">{tool.name}</span>
                            <span className="text-sm text-muted-foreground">{tool.desc}</span>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/pricing" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/support" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Support
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden sm:flex">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/funnel/offer">
            <Button variant="cta" className="hidden sm:flex">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 space-y-4">
            <Link to="/" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <div className="space-y-2">
              <span className="text-sm font-semibold text-muted-foreground">Resources</span>
              {resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <span className="text-sm font-semibold text-muted-foreground">Tools</span>
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.href}
                  className="flex items-center gap-2 py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <tool.icon className="h-4 w-4 text-primary" />
                  {tool.name}
                </Link>
              ))}
            </div>
            <Link to="/pricing" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/support" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Support
            </Link>
            <div className="flex gap-2 pt-4 border-t border-border">
              <Link to="/funnel/offer" className="flex-1">
                <Button variant="cta" className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
