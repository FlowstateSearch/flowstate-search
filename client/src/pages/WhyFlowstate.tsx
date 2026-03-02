import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Layout, Users, ShieldCheck, Target, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function WhyFlowstate() {
  useEffect(() => {
    document.title = "Why Flowstate | Flowstate Search";
  }, []);

  const coreValues = [
    {
      title: "Say the Hard Thing",
      body: "Honesty is the highest form of caring. We tell you what you need to hear — especially when it's uncomfortable.",
    },
    {
      title: "Walk in Their Boots",
      body: "See it from their side first. Always.",
    },
    {
      title: "Never the Finished Product",
      body: "A building is never truly done. Neither are we.",
    },
    {
      title: "Get Outside. Get Perspective.",
      body: "Put the podcast down. Nature has better answers.",
    },
    {
      title: "Built-In, Not Bolted On",
      body: "We learn your company like we work there — because that's the only way to find people who truly fit.",
    },
    {
      title: "Automate the Process. Never the Relationship.",
      body: "Technology makes us faster and smarter. It will never replace the moments that actually matter.",
    },
  ];

  const forYou = [
    "You know who you are and what you're building",
    "You pay your people what they're worth — and you know what that number is",
    "You have a mission that your leadership actually lives by",
    "You believe your employees are your greatest competitive advantage",
    "You want a long-term partner, not a resume delivery service",
    "You're obsessed with growth — for your company, your people, and your community",
    "You communicate openly, give feedback freely, and hate operating in silos",
    "You believe business can be a force for good in the world",
  ];

  const notForYou = [
    "You're working with 12 recruiters simultaneously and treating search like a numbers game",
    "You pay below market and wonder why your best people leave",
    "You don't have a company mission — or have one nobody believes",
    "You think ghosting candidates is acceptable",
    "You see recruiting as a transaction",
    "You're not willing to be radically transparent about your culture, your challenges, and your goals",
    "You believe parks are wasted space",
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-muted/10">
        <div className="container relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="text-4xl md:text-6xl font-heading font-bold tracking-tight"
          >
            The Portal. The Process.<br />
            <span className="text-primary">The Results.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Every delayed hire is a delayed project. We built a system that keeps your pipeline moving, cuts turnover, and gets proven leaders onto your job sites — without the runaround.
          </motion.p>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                You shouldn't have to wonder what's happening in your search.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built a portal so you always know where things stand — no chasing emails, no guessing. Faster decisions mean projects staffed sooner and less scrambling in the field.
              </p>
              <div className="space-y-4">
                {[
                  "Align office and field decision-makers without the back-and-forth",
                  "Reduce weeks of delays so projects start on schedule",
                  "Prevent costly mis-hires before they happen",
                  "Full transparency into your search — every step of the way",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover-brand-yellow">
                  Request a Portal Demo
                </Button>
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/XahDLgPgyLuUBKFG.png"
                alt="Flowstate Search custom hiring portal showing real-time construction candidate tracking, interview recordings, and team collaboration tools"
                className="relative rounded-xl shadow-2xl border border-border/50 w-full h-auto"
                loading="lazy"
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
                  <p className="text-sm text-muted-foreground">Evaluating fit, risk, and real opportunity.</p>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <Target className="w-8 h-8 text-red-500 mb-4" />
                    <h3 className="font-bold">Market Mapping</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Finding every candidate worth knowing about.</p>
                </Card>
                <Card className="bg-background/80 backdrop-blur border-border/50 p-6 space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <ShieldCheck className="w-8 h-8 text-green-500 mb-4" />
                    <h3 className="font-bold">Omni-Channel</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Reaching candidates where they actually are.</p>
                </Card>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>THE PROCESS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                We don't post-and-pray. We hunt.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI ranks performance indicators, track records, and career progression. Then our people evaluate leadership style, communication, and job site fit. Technology makes us faster. Judgment makes us right.
              </p>
              <div className="p-6 bg-background rounded-xl border border-border shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🎯</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Pipeline</h4>
                    <p className="text-muted-foreground">
                      200+ professionals evaluated → 6–8 presented → 1 excellent hire who stays.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results Section */}
      <section className="py-24 border-b border-border/50">
        <div className="container text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>THE RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              People who thrive. Not just survive.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When someone's in flow state, they make fewer mistakes, communicate better, and build safer job sites. Projects finish on time. Teams stay together. That's what we're after.
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
              <h3 className="font-bold text-lg">Candidate Experience</h3>
              <p className="text-sm text-muted-foreground">Everyone gets feedback. Everyone gets respect.</p>
            </div>
            <div className="p-8 rounded-2xl bg-muted/30 border border-border/50 space-y-4">
              <div className="text-4xl font-bold font-mono text-primary">200+</div>
              <h3 className="font-bold text-lg">Candidates Evaluated</h3>
              <p className="text-sm text-muted-foreground">Per search. So you only see the ones worth your time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-widest text-primary">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              These aren't on a poster in a break room. They're how we make decisions, have hard conversations, and show up for the people we work with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background rounded-2xl p-8 border border-border space-y-3 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-heading font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're For / Not For */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16 space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-widest text-primary">Honest Assessment</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Are We Right for Each Other?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't say this to be difficult. We say it because a bad fit wastes everyone's time and helps nobody. The right fit changes everything.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For You */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                We're Built For You If:
              </h3>
              <ul className="space-y-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For You */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-muted/30 border border-border rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-xl font-heading font-bold text-foreground flex items-center gap-2">
                <X className="w-5 h-5 text-muted-foreground" />
                We're Probably Not Your Firm If:
              </h3>
              <ul className="space-y-4">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <X className="w-4 h-4 text-muted-foreground/60 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="relative md:col-span-1">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-xl opacity-30"></div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/opDxOReLoludiVdO.jpg"
                alt="Jordan Arp, Founder of Flowstate Search — construction executive recruiter specializing in project managers and superintendents"
                className="relative rounded-xl shadow-lg border border-border/50 w-full h-auto object-cover aspect-[3/4] max-w-[300px] mx-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 md:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>MEET THE FOUNDER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Built by someone who gives a damn.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I started Flowstate Search because I saw too many great construction companies struggling to find the leaders they deserved — and too many great candidates being ghosted, lowballed, and treated like a number. That's not how this should work.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built this to be the partner I wish existed. Honest about what we know, honest about what we don't, and relentlessly focused on getting it right. When you work with Flowstate, you get a strategic ally who's bought in for the long haul — not someone chasing a quick placement fee.
              </p>
              <div className="pt-4">
                <p className="font-bold text-xl">Jordan Arp</p>
                <p className="text-muted-foreground">Founder, Flowstate Search</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
            If you're tired of waiting on applications, fighting turnover, and losing your best people to competitors — it's time for a different approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="hover-brand-yellow px-10 h-14 shadow-xl shadow-primary/20 text-base">
                Book a 15-Minute Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="hover-brand-yellow px-10 h-14 text-base">
                See a Sample Portal
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
