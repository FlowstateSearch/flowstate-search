import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Calendar, Search, UserCheck, ArrowRight } from "lucide-react";

export default function StartSearch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            Let's Find Your Next Construction Leader
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            If you're tired of high turnover, resume spam, and hiring processes that stall out—let's build something better together.
          </p>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              We Partner with Construction Companies Who Care About Long-Term Fit
            </h2>
            <p className="text-lg text-muted-foreground">
              Flowstate Search is built for companies who are ready to stop churning through hires and start building a legacy team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Frustrated with high turnover in critical leadership roles",
              "Have project backlogs they can't clear because they can't hire fast enough",
              "Value culture fit as much as technical skills",
              "Want a recruiting partner, not a resume vendor",
              "Tired of email chaos and want a seamless hiring experience"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What To Expect Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Here's How We Partner Together</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border-border/50 bg-background shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading">Step 1: Discovery Call</h3>
                  <p className="text-muted-foreground">
                    We'll spend 30 minutes understanding your culture, team dynamics, hiring goals, and the role you're filling.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border/50 bg-background shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Search className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading">Step 2: Search Kickoff</h3>
                  <p className="text-muted-foreground">
                    We map your market, benchmark compensation, and begin strategic recruiting. You'll get access to your hiring portal immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-border/50 bg-background shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading">Step 3: Hire & Onboard</h3>
                  <p className="text-muted-foreground">
                    We present deeply vetted candidates. You interview your top picks. We support you through offer, negotiation, and close.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Pricing Built for Results</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our fee structure is performance-based—we only get paid when you hire. Let's discuss your specific search during our discovery call. Every role is different, and we'll build a partnership that makes sense for both of us.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-muted/20 p-8 rounded-2xl border border-border/50">
            <div className="font-bold text-lg mb-4 col-span-full">What You Get:</div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Custom hiring portal access</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Strategic market mapping</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Culture-first evaluation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>91% retention rate</span>
            </div>
          </div>

          <div className="pt-8">
            <Link href="/contact">
              <Button size="lg" className="text-base px-10 h-14 shadow-xl shadow-primary/20">
                Schedule a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">Common Questions</h2>
          
          <div className="space-y-8">
            {[
              {
                q: "How long does a typical search take?",
                a: "Most searches take 4-8 weeks from kickoff to offer accepted, depending on the role and market conditions. We prioritize quality over speed—but we move fast."
              },
              {
                q: "What if the hire doesn't work out?",
                a: "We offer a guarantee period. If the hire doesn't work out due to performance or fit, we'll re-open the search at no additional fee."
              },
              {
                q: "Do you only work with large construction companies?",
                a: "No. We work with companies of all sizes—from growing regional builders to established GCs. If you care about culture fit and long-term retention, we're a fit."
              },
              {
                q: "How is the portal different from email?",
                a: "Your portal is a centralized hiring hub. No more hunting for email attachments, no more lost resumes. Everything lives in one organized, accessible place."
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold font-heading">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to Stop Competing on Job Boards?</h2>
          <p className="text-xl text-muted-foreground">
            Let's hunt the construction leaders already performing at your competitors—and bring them to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="text-base px-10 h-14 shadow-xl shadow-primary/20">
                Schedule a Discovery Call
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-base px-10 h-14">
                Request a Portal Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
