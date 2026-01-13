import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  HelpCircle, BookOpen, Video, MessageCircle, Mail, 
  Search, ExternalLink, ChevronRight, Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const supportSchema = z.object({
  subject: z.string().trim().min(5, "Subject must be at least 5 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(20, "Message must be at least 20 characters").max(2000, "Message must be less than 2000 characters"),
});

type SupportFormValues = z.infer<typeof supportSchema>;

const helpResources = [
  { 
    title: "Getting Started Guide", 
    desc: "Learn the basics of PLR Organizer Pro", 
    icon: BookOpen,
    href: "#" 
  },
  { 
    title: "Video Tutorials", 
    desc: "Watch step-by-step video guides", 
    icon: Video,
    href: "#" 
  },
  { 
    title: "Knowledge Base", 
    desc: "Browse our comprehensive documentation", 
    icon: HelpCircle,
    href: "#" 
  },
  { 
    title: "Community Forum", 
    desc: "Connect with other users", 
    icon: MessageCircle,
    href: "#" 
  },
];

const faqs = [
  {
    q: "How do I scan my computer for PLR content?",
    a: "Open PLR Organizer Pro, click the 'Scan' button in the top navigation, and select the drives or folders you want to scan. The app will automatically detect and catalog all PLR content found."
  },
  {
    q: "Can I use PLR Organizer Pro on multiple computers?",
    a: "Yes! Your license allows activation on up to 3 devices. You can manage your activations from the License Status page in your dashboard."
  },
  {
    q: "How do I transfer my license to a new computer?",
    a: "First, deactivate the license on your old computer from the License Status page. Then, install PLR Organizer Pro on your new computer and enter your license key to activate."
  },
  {
    q: "What file types does PLR Organizer Pro recognize?",
    a: "PLR Organizer Pro recognizes common PLR formats including ZIP, PDF, DOC/DOCX, TXT, MP3, MP4, and various image formats. It also reads license files and readme documents to extract metadata."
  },
  {
    q: "How do I get updates for the software?",
    a: "With your lifetime license, all updates are free. The app will automatically notify you when updates are available, or you can check for updates manually from the Help menu."
  },
];

export default function DashboardHelp() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: SupportFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    form.reset();
    toast({
      title: "Support Ticket Submitted",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary">Help & Support</h1>
        <p className="text-muted-foreground">Find answers and get help with PLR Organizer Pro.</p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 h-12 text-lg"
        />
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {helpResources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            className="group block"
          >
            <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-1">
                  {resource.title}
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground">{resource.desc}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* FAQ Section */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-2">
              {filteredFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No results found for "{searchQuery}"</p>
              <p className="text-sm">Try different keywords or contact support below.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Can't find what you're looking for? Send us a message.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief description of your issue" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your issue in detail..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="cta" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Or email us directly at{" "}
              <a href="mailto:support@plrorganizerpro.com" className="text-primary hover:underline">
                support@plrorganizerpro.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              We typically respond within 24 hours.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
