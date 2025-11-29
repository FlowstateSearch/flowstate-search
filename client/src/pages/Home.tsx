import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, BarChart3, Users, Target, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10"></div>
          <img 
            src="/flow-blueprint-bg.png" 
            alt="Abstract Flow Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container relative z-20 grid lg:grid-cols-2 gap-12 items-center py-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight text-foreground">
              We Don't Wait for Applications. <span className="text-primary">We Recruit the Talent</span> Already Working for Your Competitors.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We source project managers, superintendents, and construction directors who are already crushing it—then place them where they'll thrive on your team for the long haul.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link href="/start-search">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer">
                  Start Your Search
                </div>
              </Link>
              <Link href="/how-it-works">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base h-12 border-primary/20 hover:bg-primary/5 cursor-pointer">
                  See How It Works
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>NO JOB BOARDS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>91% RETENTION</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
              <img 
                src="/hero-construction-team.png" 
                alt="Construction Leadership Team" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              
              {/* Floating UI Element - Portal Preview */}
              <div className="absolute -bottom-12 -left-12 w-2/3 rounded-xl overflow-hidden shadow-2xl border border-border bg-background/95 backdrop-blur p-1 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                <img 
                  src="/portal-dashboard-abstract.png" 
                  alt="Portal Interface" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl opacity-50"></div>
                <Card className="relative border-border/50 bg-background/80 backdrop-blur shadow-xl">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                        <div className="mt-1 text-destructive">❌</div>
                        <div>
                          <h4 className="font-bold text-foreground">High Turnover</h4>
                          <p className="text-sm text-muted-foreground">Critical leadership roles revolving door.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                        <div className="mt-1 text-destructive">❌</div>
                        <div>
                          <h4 className="font-bold text-foreground">Project Backlogs</h4>
                          <p className="text-sm text-muted-foreground">Can't clear work because you can't hire fast enough.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                        <div className="mt-1 text-destructive">❌</div>
                        <div>
                          <h4 className="font-bold text-foreground">Culture Misfits</h4>
                          <p className="text-sm text-muted-foreground">Look good on paper, fail on the job site.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Your Best Hires Aren't on Job Boards
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The top project managers, supers, and construction directors aren't scrolling LinkedIn. They're already employed, already performing, already embedded at other companies in your market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You don't need more applications. You need someone who will recruit the people who aren't looking—but should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-5 bg-cover bg-center bg-fixed"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Strategic Recruiting Meets Seamless Execution</h2>
            <p className="text-lg text-muted-foreground">
              We map your market, identify the talent already performing at your competitors, and recruit them to join your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading">We Recruit, We Don't Wait</h3>
                <p className="text-muted-foreground">
                  We identify and recruit the project managers, superintendents, and directors already excelling at other companies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading">Your Hiring Portal</h3>
                <p className="text-muted-foreground">
                  See every candidate, every document, every piece of feedback in one place. No email attachments. Just clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading">91% Retention Rate</h3>
                <p className="text-muted-foreground">
                  Our placements stay. One year later, 91% of the construction leaders we place are still thriving on your team.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group cursor-pointer">
                See How It Works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="p-4 space-y-2">
              <div className="text-5xl font-bold font-mono tracking-tighter">91%</div>
              <div className="text-lg font-medium opacity-90">Retention Rate</div>
              <p className="text-sm opacity-75 max-w-[200px] mx-auto">After one year, our placements are still thriving.</p>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-5xl font-bold font-mono tracking-tighter">5-Star</div>
              <div className="text-lg font-medium opacity-90">Candidate Satisfaction</div>
              <p className="text-sm opacity-75 max-w-[200px] mx-auto">We treat candidates like professionals, not numbers.</p>
            </div>
            <div className="p-4 space-y-2">
              <div className="text-5xl font-bold font-mono tracking-tighter">200+</div>
              <div className="text-lg font-medium opacity-90">Candidates Per Search</div>
              <p className="text-sm opacity-75 max-w-[200px] mx-auto">Evaluated to present you with the top 8-12 fits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">The Construction Leaders We Place</h2>
              <p className="text-lg text-muted-foreground">
                We specialize in mid-to-senior level roles across construction operations, sales, and project delivery.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Project Managers",
                  "Superintendents",
                  "Director of Operations",
                  "Director of Construction",
                  "Director of Sales / BD",
                  "VP of Operations",
                  "Regional Managers",
                  "Senior Estimators"
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
              <img 
                src="/construction-leader-portrait.png" 
                alt="Construction Leader" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to Stop Competing on Job Boards?</h2>
          <p className="text-xl text-muted-foreground">
            Let's find the construction leaders already performing at your competitors—and bring them to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/start-search">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base px-10 h-14 shadow-xl shadow-primary/20 cursor-pointer">
                Start Your Search
              </div>
            </Link>
            <Link href="/contact">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-base px-10 h-14 cursor-pointer">
                Request a Portal Demo
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
