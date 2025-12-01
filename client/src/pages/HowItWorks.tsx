import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Users, Target, LayoutDashboard, MessageSquare, UserCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Market Mapping",
      description: "We dig into your culture, team dynamics, and hiring goals. Then we map your market—every project manager, super, and director in your area who could be a fit.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Targeted Sourcing & Outreach",
      description: "We find candidates where other recruiters don't look. Our omni-channel outreach includes personalized video messages, direct outreach, and industry-specific groups.",
      icon: Target,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      id: 3,
      title: "Culture-First Evaluation",
      description: "Every candidate goes through a rigorous evaluation. We're not looking for 'qualified' candidates. We're looking for people who will hit flow state in this specific role.",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      id: 4,
      title: "Seamless Presentation",
      description: "No more email attachments. You'll log into your custom hiring portal and see full candidate profiles, resumes, assessments, and interview recordings.",
      icon: LayoutDashboard,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      id: 5,
      title: "Interview Support & Closing",
      description: "We're with you through the entire process: interview prep, debrief sessions, offer strategy, and background checks. We're your partner, not a resume vendor.",
      icon: MessageSquare,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      id: 6,
      title: "Post-Hire Follow-Up",
      description: "We check in during onboarding to make sure your new hire is settling in. This is why our retention rate is 91% after one year.",
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">
            A Recruiting Process That <span className="text-primary">Flows</span> From Brief to Hire
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No stops and starts. No email chaos. Just a clear, strategic path to finding construction leaders who will thrive on your team.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">The Problem With Traditional Recruiting</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional recruiting is full of friction—ghosted candidates, outdated resumes buried in email threads, hiring managers going dark for weeks, offers rejected at the last minute.
          </p>
          <p className="text-lg font-medium text-foreground">
            Our process flows. From the moment we kick off your search to the day your new hire starts, you'll have visibility, momentum, and a partner who stays in the zone.
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
                  </div>
                  {step.id === 4 && (
                    <Link href="/contact">
                      <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-4 cursor-pointer">
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
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to Experience a Search That Flows?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/start-search">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 text-base px-10 h-14 font-bold text-primary bg-white hover:bg-white/90 cursor-pointer">
                Start Your Search
              </div>
            </Link>
            <Link href="/contact">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base px-10 h-14 border-white/20 text-white hover:bg-white/10 hover:text-white cursor-pointer">
                Request a Portal Demo
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
