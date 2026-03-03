import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Users, Target, LayoutDashboard, MessageSquare, UserCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Discovery & Market Mapping",
      description: "Before we reach out to a single candidate, we learn your company. How your team actually works, what's clicked before, what hasn't. Then we map every PM, super, and director in your market worth knowing about. No wasted outreach. No guessing.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      id: 2,
      title: "Targeted Sourcing & Outreach",
      description: "The best candidates aren't on job boards — they're already employed and not looking. We reach them through phone, email, LinkedIn, and industry networks your competitors don't have access to.",
      icon: Target,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      id: 3,
      title: "Beyond the Resume",
      description: "We're not just checking boxes. We evaluate track record, leadership style, how they communicate under pressure, and how they show up on the job site. We're looking for the person who makes your whole team better — not just someone who can do the job.",
      icon: Users,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      id: 4,
      title: "Everything in One Place",
      description: "You log into your custom hiring portal and see everything — full profiles, resumes, assessments, and job-specific scorecards. Your whole team is looking at the same information. Decisions happen faster. Nothing falls through the cracks.",
      icon: LayoutDashboard,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10"
    },
    {
      id: 5,
      title: "Interview Support & Closing",
      description: "We stay in it with you through interview prep, debrief calls, offer strategy, and background checks. This is where most recruiters disappear. We don't. Fewer rejected offers, smoother negotiations, and you walk away confident in your decision.",
      icon: MessageSquare,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      id: 6,
      title: "Post-Hire Follow-Up",
      description: "The hire isn't the finish line. We check in during onboarding to make sure your new leader is settling in and your team is clicking. Small issues caught early don't become expensive turnover problems later.",
      icon: UserCheck,
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/rCadWruzySwIXenp.png')] opacity-5 bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-heading font-bold tracking-tight whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}>
            A Hiring Process <span className="text-primary">Built for Construction</span>.
          </h1>
          <p className="font-heading font-bold mt-3 mb-6" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>
            Designed to Maintain Schedule, Reduce Turnover, and Strengthen Project Delivery.
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No stops and starts. No email chaos. A clear, strategic path to finding leaders who will actually thrive on your team.
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
                          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/SgdmXMekzxbKnGLc.png" 
                          alt="Construction executive recruitment market mapping showing network of qualified project managers and superintendents" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : step.id === 2 ? (
                      <div className="relative h-[300px] w-full bg-muted/20 flex items-center justify-center p-8">
                        <div className="w-full max-w-sm space-y-4">
                          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">We reach them where they are</p>
                          <div className="grid grid-cols-2 gap-4">
                            {/* Phone & Text */}
                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                              </div>
                              <span className="text-sm font-semibold text-foreground">Phone & Text</span>
                            </div>
                            {/* LinkedIn */}
                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                              </div>
                              <span className="text-sm font-semibold text-foreground">LinkedIn</span>
                            </div>
                            {/* Email */}
                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                              </div>
                              <span className="text-sm font-semibold text-foreground">Email</span>
                            </div>
                            {/* Industry Networks */}
                            <div className="flex flex-col items-center gap-3 p-5 rounded-xl bg-background border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="3" cy="6" r="2"/><circle cx="21" cy="6" r="2"/><circle cx="3" cy="18" r="2"/><circle cx="21" cy="18" r="2"/><path d="M5 6h5M14 6h5M5 18h5M14 18h5M12 9v-1.5M12 15v1.5"/></svg>
                              </div>
                              <span className="text-sm font-semibold text-foreground">Industry Networks</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : step.id === 3 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/step3_interview_0f415a25.jpeg" 
                          alt="Construction leadership evaluation — assessing job site performance, communication skills, and how candidates show up under pressure" 
                          className="w-full h-full object-cover object-[center_30%]"
                          loading="lazy"
                        />
                      </div>
                    ) : step.id === 4 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/UivsYaueeBALwPyP.png" 
                          alt="Custom hiring portal dashboard displaying construction candidate profiles, resumes, and interview assessments" 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : step.id === 5 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/step5_closing_c0c37d6d.jpeg" 
                          alt="Construction executive confident on job site — the moment after a successful hire and placement" 
                          className="w-full h-full object-cover object-[center_40%]"
                          loading="lazy"
                        />
                      </div>
                    ) : step.id === 6 ? (
                      <div className="relative h-[300px] w-full">
                        <img 
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/step6_followup_v3_3fcf5679.jpeg" 
                          alt="New construction hire reviewing plans with team on job site — settled in and operating" 
                          className="w-full h-full object-cover object-[left_center]"
                          loading="lazy"
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
        <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/rCadWruzySwIXenp.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to stop reacting and start building?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            The best construction leaders aren't waiting around. Let's go find yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://schedule.flowstatesearch.com/start-your-search" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover-brand-yellow h-11 px-8 text-base px-10 h-14 font-bold text-primary bg-white hover-brand-yellow cursor-pointer" style={{backgroundColor: '#969696', fontWeight: '700'}}>
                Start Your Search
              </div>
            </a>
            <a href="https://schedule.flowstatesearch.com/market-map" target="_blank" rel="noopener noreferrer">
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
