import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Users, Target, LayoutDashboard, MessageSquare, UserCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Market Mapping",
      description: "We dig into your culture, team dynamics, and hiring goals. Then we map every project manager, super, and director in your market who could be a fit. This targets the right talent pool from day one—no wasted outreach.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Targeted Sourcing & Outreach",
      description: "We find candidates where other recruiters don't look—personalized video messages, direct outreach, industry groups, and certification databases. You get access to top performers who aren't actively looking—the ones your competitors want but can't reach.",
      icon: Target,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      id: 3,
      title: "Culture-First Evaluation",
      description: "We evaluate proven performance, leadership style, communication strength, and job-site behavior. We look for leaders who perform under pressure and elevate field + office execution.",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      id: 4,
      title: "Seamless Presentation",
      description: "You log into your custom hiring portal and see full candidate profiles, resumes, assessments, and interview recordings. Your team stays aligned, decisions happen faster, and nothing gets lost.",
      icon: LayoutDashboard,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      id: 5,
      title: "Interview Support & Closing",
      description: "We're with you through interview prep, debrief sessions, offer strategy, and background checks. We're your partner, not a resume vendor—which means fewer rejected offers, smoother negotiations, and confidence in your hire.",
      icon: MessageSquare,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      id: 6,
      title: "Post-Hire Follow-Up",
      description: "We check in during onboarding to ensure your new hire is settling in and thriving. Early intervention prevents small issues from becoming turnover.",
      icon: UserCheck,
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-5 bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight" style={{fontSize: '41px'}}>
            A Hiring Process <span className="text-primary">Built for Construction</span>. <br className="hidden md:block" />Designed to Maintain Schedule, Reduce Turnover, and Strengthen Project Delivery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No stops and starts. No email chaos. Just a clear, strategic path to finding construction leaders who will thrive on your team.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">A True Partner, Not Just a Resume Vendor</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional recruiting is full of friction which leads to missed deadlines, frustrated clients, and millions lost in backlog bottlenecks.
          </p>
          <p className="text-lg font-medium text-foreground">
            Our process keeps projects moving and hiring momentum strong. From the moment we kick off your search to the day your new hire starts, you'll have visibility, momentum, and a partner who stays in the zone.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm font-mono font-bold text-muted-foreground tracking-wider uppercase">Step {step.id}</div>
                    <h3 className="text-3xl font-heading font-bold">{step.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                    {step.id === 1 && (
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                     <p className="font-bold text-primary">6-8 Finalist Candidates</p>                    <p className="text-sm text-muted-foreground">We narrow the field so you only see the best.</p>
                      </div>
                    )}
                    {step.id === 2 && (
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-primary">Average 27-Day Time to Shortlist</p>
                        <p className="text-sm text-muted-foreground">Speed without sacrificing quality.</p>
                      </div>
                    )}
                    {step.id === 5 && (
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                 <p className="font-bold text-primary">5-Star Candidate Satisfaction</p>                        <p className="text-sm text-muted-foreground">We treat your future leaders with respect.</p>
                      </div>
                    )}
                    {step.id === 6 && (
                      <div className="mt-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary">
                  <p className="font-bold text-primary">91% Retention After 1 Year</p>                       <p className="text-sm text-muted-foreground">Our placements stick because they fit.</p>
                      </div>
                    )}
                  </div>
                  {step.id === 4 && (
                    <Link href="/contact">
                      <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover-brand-yellow h-10 px-4 py-2 mt-4 cursor-pointer">
                        Request a Portal Demo
                      </div>
                    </Link>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <Card className="overflow-hidden border-border/50 bg-background/50 backdrop-blur shadow-xl">
                    {step.id === 1 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/market-mapping.png" 
                          alt="Market Mapping Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : step.id === 2 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/targeted-outreach.png" 
                          alt="Targeted Outreach Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : step.id === 3 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/culture-evaluation.png" 
                          alt="Culture-First Evaluation Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : step.id === 4 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/seamless-presentation.png" 
                          alt="Seamless Presentation Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : step.id === 5 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/interview-support.png" 
                          alt="Interview Support Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : step.id === 6 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="/post-hire-followup.png" 
                          alt="Post-Hire Follow-Up Visualization" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <CardContent className="p-8 min-h-[300px] flex items-center justify-center bg-muted/20">
                        {/* Placeholder for step-specific visuals */}
                        <div className="text-center space-y-4 opacity-50">
                          <step.icon className="w-24 h-24 mx-auto text-muted-foreground/20" />
                          <p className="text-sm font-mono text-muted-foreground">Visual representation of {step.title}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Build a Team That Builds the Future</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Stop reacting to hiring emergencies. Start proactively recruiting proven construction leaders who drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://schedule.flowstatesearch.com/start-your-search" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover-brand-yellow h-11 px-8 text-base px-10 h-14 font-bold text-primary bg-white hover-brand-yellow cursor-pointer" style={{backgroundColor: '#969696', fontWeight: '700'}}>
                Start Your Search
              </div>
            </a>
            <a href="https://zcal.co/flowstate/market-map" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover-brand-yellow h-11 px-8 text-base px-10 h-14 border-white/20 text-white hover-brand-yellow cursor-pointer" style={{backgroundColor: '#969696', fontWeight: '700'}}>
                See a Live Example of a Market Map
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
