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
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-tight text-foreground" style={{fontSize: '37px'}}>
              Recruit The <span className="text-[#00a69c]">High-Performing Construction Leaders</span> Your Competitors Fear Losing.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              The project managers and superintendents driving your
competitors' biggest wins—we bring them to you.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a href="https://zcal.co/flowstate/your-next-hire" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-brand-yellow h-11 px-8 text-base h-12 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer">
                  Find Your Next Hire
                </div>
              </a>
              <a href="https://zcal.co/flowstate/how-we-work" target="_blank" rel="noopener noreferrer">
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover-brand-yellow h-11 px-8 text-base h-12 border-primary/20 cursor-pointer">
                  See How It Works
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-8 flex items-center gap-8 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span style={{fontSize: '20px'}}>STRATEGIC TALENT HUNTING</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span style={{fontSize: '20px'}}>91% RETENTION</span>
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
                src="/images/hero-strategic-leader.jpg" 
                alt="Construction Leadership Team" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              

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
                          <p className="text-sm text-muted-foreground">Stop the revolving door. Hire leaders committed to long-term growth.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                        <div className="mt-1 text-destructive">❌</div>
                        <div>
                          <h4 className="font-bold text-foreground">Project Backlogs</h4>
                          <p className="text-sm text-muted-foreground">Can't clear work because you can't hire fast enough.</p>
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
              <ul className="text-lg text-muted-foreground leading-relaxed space-y-4 list-disc pl-5">
                <li>The top project managers, supers, and construction directors aren't scrolling LinkedIn.</li>
                <li>They're already employed, already performing, already embedded at other companies in your market.</li>
              </ul>
              <ul className="text-lg text-muted-foreground leading-relaxed space-y-4 list-disc pl-5">
                <li>You don't need more applications.</li>
                <li>You need someone who will recruit the people who aren't looking—but should be.</li>
              </ul>
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
                <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Faster decision-making</li>
                  <li>Live status tracking</li>
                </ul>
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
            <a href="https://zcal.co/flowstate/how-we-work" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover-brand-yellow h-10 px-4 py-2 group cursor-pointer">
                See How It Works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
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

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              A transparent, data-driven process designed to deliver results, not just resumes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Market Mapping",
                description: "We identify every qualified leader in your region."
              },
              {
                step: "02",
                title: "Direct Outreach",
                description: "We recruit high-performers currently employed."
              },
              {
                step: "03",
                title: "Candidate Evaluation",
                description: "Skill, culture, proven results."
              },
              {
                step: "04",
                title: "Shortlist Delivery",
                description: "Top 6-8 ready to interview."
              }
            ].map((item, index) => (
              <div key={index} className="relative p-6 bg-background rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-5xl font-heading font-bold" style={{fontSize: '32px'}}>Stop Competing on Job Boards. Start Recruiting the Leaders Driving Results in Your Market.</h2>
          <p className="text-xl text-muted-foreground">
            If you're tired of backlog, turnover, and hiring risk—it's time for a proactive recruiting strategy built for construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://zcal.co/flowstate/15-min-call" target="_blank" rel="noopener noreferrer">
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover-brand-yellow h-11 px-8 text-base px-10 h-14 shadow-xl shadow-primary/20 cursor-pointer">
                Book a 15-Minute Call
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
