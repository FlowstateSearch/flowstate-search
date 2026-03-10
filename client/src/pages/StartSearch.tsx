import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Calendar, Search, UserCheck, ArrowRight } from "lucide-react";

export default function StartSearch() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/rCadWruzySwIXenp.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            Hire Leaders,<br />Not Applications.
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto" style={{fontSize: '25px'}}>
            The project managers and superintendents driving your competitors' biggest wins. We bring them to you.
          </p>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Before we talk, make sure we're actually right for each other.
            </h2>
            <p className="text-lg text-muted-foreground">
              We're selective about who we work with. Not to be difficult, but because the right fit produces results that last. We do our best work with companies who:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "Know who they are and what they're building",
              "Pay their people what they're worth and know what that number is",
              "Believe their employees are their greatest competitive advantage",
              "Want a long-term partner, not a resume delivery service"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-muted/20 border border-border/50 text-center space-y-6">
            <h3 className="text-2xl font-heading font-bold">What comes with every search</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto pt-4">
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
                <span>Beyond-the-resume evaluation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>91% retention rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What To Expect Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">What working together actually looks like</h2>
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
                    We spend 30 minutes learning your company. How your team works, what's clicked before, what hasn't.
                    <br /><br />
                    We only put people in front of you who could actually thrive there. No wasted interviews.
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
                    We map every qualified leader in your market. Not just the ones actively looking.
                    <br /><br />
                    You'll know who's out there. That changes how you make decisions.
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
                    Vetted candidates show up in your portal. You interview your top picks. We stay in it through offer, negotiation, and close.
                    <br /><br />
                    Faster decisions. Fewer rejected offers. A hire you're confident in.
                  </p>
                </div>
              </CardContent>
            </Card>
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
                a: "Most searches run 4–8 weeks from kickoff to offer accepted, depending on the role and market. We move fast. But we don't cut corners on fit."
              },
              {
                q: "What if the hire doesn't work out?",
                a: "We stand behind our work. If a placement doesn't stick due to performance or fit issues, we'll re-open the search at no additional fee."
              },
              {
                q: "Do you only work with large construction companies?",
                a: "Size doesn't matter to us. We work with growing regional builders and established GCs alike. What matters is that you care about who you're building with. And that you're serious about building a team that lasts."
              },
              {
                q: "How is the portal different from email?",
                a: "Email is chaos. The portal is clarity. Every candidate, every note, every interview recording. All in one place. Your whole team sees the same thing at the same time."
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
        <div className="container text-center max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            The leaders your competitors are afraid to lose. Let's go find them.
          </h2>
          <p className="text-xl text-muted-foreground">
            If you're ready to stop reacting to hiring emergencies and start building a team that actually sticks, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://schedule.flowstatesearch.com/competitive-edge" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-brand-yellow h-11 px-8 text-base px-10 h-14 shadow-xl shadow-primary/20 cursor-pointer">
                Claim Your Competitive Edge
              </div>
            </a>
            <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover-brand-yellow h-11 px-8 text-base px-10 h-14 cursor-pointer">
                Request a Portal Demo
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
