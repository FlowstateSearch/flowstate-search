import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, Monitor, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [source, setSource] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    setIsSubmitting(true);

    // Prepare template parameters matching the form fields
    // Note: The template in EmailJS should expect these variable names:
    // user_name, user_email, user_phone, company, role, message, source
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully! We'll be in touch soon.");
          if (form.current) form.current.reset();
          setSource("");
          setIsSubmitting(false);
      }, (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again or email us directly.");
          setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/10 border-b border-border/50">
        <div className="container text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">Let's Talk</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're ready to kick off a search or just exploring your options, we're here.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-heading font-bold">Send us a message</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user_name">Name</Label>
                    <Input id="user_name" name="user_name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Acme Construction" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="user_email">Email</Label>
                    <Input id="user_email" name="user_email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user_phone">Phone (Optional)</Label>
                    <Input id="user_phone" name="user_phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">What role are you hiring for?</Label>
                  <Input id="role" name="role" placeholder="e.g. Senior Project Manager" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What's your biggest hiring challenge?</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your current situation..." 
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select name="source" value={source} onValueChange={setSource}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* Hidden input to include select value in form data for EmailJS */}
                  <input type="hidden" name="source" value={source} />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Alternative Contact Options */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-heading font-bold">Other ways to connect</h2>
                <p className="text-muted-foreground">Choose the method that works best for you.</p>
              </div>

              <div className="grid gap-6">
                <a href="https://zcal.co/flowstate/discovery-call" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">Schedule a Discovery Call</h3>
                        <p className="text-muted-foreground text-sm">Book a 30-minute discovery call to discuss your hiring goals.</p>
                        <div className="pt-2 text-primary font-medium text-sm group-hover:underline">Book now →</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a href="https://zcal.co/flowstate/portal-demo" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">Request a Portal Demo</h3>
                        <p className="text-muted-foreground text-sm">See how our hiring portal works and how it streamlines your process.</p>
                        <div className="pt-2 text-primary font-medium text-sm group-hover:underline">View demo →</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>

                <a href="mailto:hello@flowstatesearch.com" className="block">
                  <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg">Email Us Directly</h3>
                        <p className="text-muted-foreground text-sm">Prefer email? Drop us a line and we'll respond within 24 hours.</p>
                        <div className="pt-2 text-primary font-medium text-sm group-hover:underline">hello@flowstatesearch.com</div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
