import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Check, Zap, Layout, Users, ShieldCheck, Target } from "lucide-react";

export default function WhyFlowstate() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-muted/10">
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            The Portal. The Process.<br />
            <span className="text-primary">The Results.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{fontSize: '18px'}}>
            Because every delayed hire is a delayed project. Our system keeps your pipeline moving, reduces turnover, and gets proven leaders onto your job sites faster.
          </p>
        </div>
      </section>

      {/* The Portal Section */}
      <section className="py-16 md:py-20 border-b border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Layout className="w-4 h-4" />
                <span>THE PORTAL</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{fontSize: '35px'}}>
                We built a portal so you actually know what's happening in your search all in one place.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Faster decisions = projects staffed sooner. No more delaying mobilization or asking the team to do more with less.
              </p>
              
              
              <div className="space-y-4">
                {[
                  "Align office and field decision-makers faster",
                  "Reduce weeks of back-and-forth so projects start on schedule",
                  "Prevent costly mis-hires and turnover cycles",
                  "Full transparency into your search pipeline"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="https://zcal.co/flowstate/portal-demo" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-[#294e7a] hover:text-white hover:border-[#294e7a] h-11 px-8 cursor-pointer">
                  Request a Portal Demo
                </div>
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
              <img 
                src="/portal-dashboard-abstract.png" 
                alt="Portal Dashboard" 
                className="relative rounded-xl shadow-2xl border border-border/50 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-muted/30 border-b border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <Zap className="w-8 h-8 text-amber-500 mb-4" />
                    <h3 className="font-bold">AI-Powered Ranking</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Scoring 200+ candidates in minutes.</p>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <Users className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="font-bold">Human Expertise</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Evaluating fit, risk, and opportunity.</p>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <Target className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="font-bold">Market Mapping</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Identifying every potential candidate.</p>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="font-bold">Omni-Channel</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Reaching candidates where they are.</p>
                </Card>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>THE PROCESS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Strategic Sourcing + Human Expertise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't post-and-pray. We hunt. AI ranks candidate performance indicators, track records, and career progression — then our industry experts evaluate leadership style, communication skills, and job site fit.
              </p>
              
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Pipeline Stats</h4>
                    <p className="text-muted-foreground">
                      200+ professionals evaluated → 6-8 presented → 1 excellent hire who stays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-24">
        <div className="container text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>THE RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              We Find People Who Thrive, Not Just Survive
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Flow state means fewer mistakes, better communication, safer job sites, and projects that finish on time and under budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
              <div className="text-4xl font-bold font-mono text-primary">91%</div>
              <h3 className="font-bold text-lg">Retention Rate</h3>
              <p className="text-sm text-muted-foreground">After one year, our placements are still thriving.</p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
              <div className="text-4xl font-bold font-mono text-primary">5-Star</div>
              <h3 className="font-bold text-lg">Candidate Satisfaction</h3>
              <p className="text-sm text-muted-foreground">We treat candidates like professionals.</p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
              <div className="text-4xl font-bold font-mono text-primary">200+</div>
              <h3 className="font-bold text-lg">Candidates Evaluated</h3>
              <p className="text-sm text-muted-foreground">Per search to find your perfect match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
              <img 
                src="/images/founder-headshot.png" 
                alt="Jordan Arp, Founder of Flowstate Search" 
                className="relative rounded-xl shadow-2xl border border-border/50 w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>MEET THE FOUNDER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Recruiting Built by Construction Insiders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started Flowstate Search because I saw too many great construction companies struggling to find the leaders they deserved. Traditional recruiters didn't understand the field, and job boards were just noise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built this system to be the partner I wish I had—transparent, data-driven, and relentlessly focused on quality. When you work with us, you're not just getting resumes, you're getting a strategic ally committed to your long-term success.
              </p>
              <div className="pt-4">
                <p className="font-bold text-xl">Jordan Arp</p>
                <p className="text-muted-foreground">Founder, Flowstate Search</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concrete Ending Section */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            If you’re tired of waiting for applications, fighting turnover, and losing talent to competitors, it’s time for a recruiting system built for construction. Let’s build your leadership pipeline.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">See the Difference for Yourself</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://zcal.co/flowstate/15-min-call" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base px-10 h-14 shadow-xl shadow-primary/20 cursor-pointer">
                Book a 15-Minute Discovery Call
              </div>
            </a>
            <a href="https://zcal.co/flowstate/portal-demo" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-[#294e7a] hover:text-white hover:border-[#294e7a] h-11 px-8 text-base px-10 h-14 cursor-pointer">
                See a Sample Portal Dashboard
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
