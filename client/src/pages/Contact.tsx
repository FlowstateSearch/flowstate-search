import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, Monitor } from "lucide-react";

export default function Contact() {
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

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Construction" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">What role are you hiring for?</Label>
                  <Input id="role" placeholder="e.g. Senior Project Manager" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge">What's your biggest hiring challenge?</Label>
                  <Textarea 
                    id="challenge" 
                    placeholder="Tell us about your current situation..." 
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select>
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
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                  Send Message
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
