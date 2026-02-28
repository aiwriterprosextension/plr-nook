import { Link } from "react-router-dom";
import { Mail, Twitter, Facebook, Youtube, Lock, Monitor } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "PLR Organizer", href: "/plr-organizer" },
    { name: "Download", href: "/download" },
  ],
  tools: [
    { name: "PLR Organizer", href: "/plr-organizer" },
    { name: "Content Spinner", href: "/tools/content-spinner" },
    { name: "License Decoder", href: "/tools/license-decoder" },
    { name: "HTML Editor", href: "/tools/html-editor" },
    { name: "Duplicate Detector", href: "/tools/duplicate-detector" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
  ],
  resources: [
    { name: "PLR Organisation Guide", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Help Documentation", href: "#" },
    { name: "PLR Resource Centre", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Logo Row */}
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10 pb-8 border-b border-sidebar-border">
          <div>
            <Link to="/" className="flex items-center mb-3">
              <img
                src={logo}
                alt="PLR Organizer Pro"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              The ultimate desktop application for organizing, managing, and maximizing your PLR content library.
            </p>
            <p className="text-muted-foreground text-xs mt-2 flex items-center gap-1">
              <Monitor className="h-3 w-3" /> Windows • Mac • Linux
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* 4-Column Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4 capitalize text-white">{key}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sidebar-border">
        <div className="container py-6 flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PLR Organizer Pro. All rights reserved.
          </p>
        </div>
        <div className="container pb-6">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3" />
              Secure & Trusted Platform
            </span>
            <span>|</span>
            <span>7-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
