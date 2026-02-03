import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, BarChart3, Users, Target, Briefcase, Star, Play, X, CheckCircle, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    document.title = "Flowstate Search | Construction Executive Recruitment";
  }, []);
  
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
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80 z-10"></div>
          <img 
            src="/images/hero-construction-site.jpg" 
            alt="Construction Site" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-20 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Value Prop + CTA */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-tight text-foreground">
                Recruit The <span className="text-[#00a69c]">High-Performing Construction Leaders</span> Your Competitors Fear Losing.
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                The project managers and superintendents driving your competitors' biggest wins—we bring them to you.
              </motion.p>
              
              {/* 5-Star Review Badge */}
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by Construction Leaders
                </span>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="https://schedule.flowstatesearch.com/15-min-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[#ffc229] hover:text-background transition-all shadow-lg text-base px-8 h-12">
                    Book a 15-Minute Call
                  </Button>
                </a>
                <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-[#ffc229] hover:text-background hover:border-[#ffc229] transition-all text-base px-8 h-12">
                    Book a Discovery Call
                  </Button>
                </a>
              </motion.div>

              <motion.div variants={fadeIn} className="pt-4 flex items-center gap-6 text-sm font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-base">STRATEGIC TALENT HUNTING</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-base">91% RETENTION</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Testimonial */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="bg-background/90 backdrop-blur border-primary/20 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-2">
                    <div className="text-6xl text-primary/20 font-serif leading-none">"</div>
                    <p className="text-lg text-foreground leading-relaxed pt-4">
                      Most recruiters throw resumes at you and hope something sticks. Flowstate took the time to understand our culture, our challenges, and what 'great' actually looked like for us. They were radically transparent—told us the red flags and the green flags for every candidate. We made a hire we feel great about, and we're already planning our next search with them.
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">CEO</p>
                    <p className="text-sm text-muted-foreground">Infrastructure & Heavy Civil Contractor</p>
                  </div>
                </CardContent>
              </Card>

              {/* Intro Video Placeholder (Bottom Right) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-2xl cursor-pointer group transition-transform duration-300 hover:scale-110"
                onClick={() => setShowVideo(true)}
              >
                <div className="relative w-full h-full bg-black flex items-center justify-center">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/dbBspvJJKWBHFkln.gif" 
                    alt="Founder Introduction" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <p className="text-white text-sm font-bold drop-shadow-lg">Intro Video</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Video Modal - Compact Overlay */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full bg-background rounded-xl shadow-2xl border-2 border-border overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background rounded-full p-2 text-muted-foreground hover:text-foreground transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663232464487/mXrFvWhbzTPTVOIQ.mov"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* Comparison Chart Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">How Do You Find Your Next Executive Hire?</h2>
            <p className="text-lg text-muted-foreground">
              Most companies try one of three approaches. Only one actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: DIY Hiring (Chaotic) */}
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-destructive/80 text-destructive-foreground py-3 text-center font-bold text-lg">
                HIRING BY YOURSELF
              </div>
              <CardContent className="pt-20 pb-8 px-6 space-y-4 min-h-[600px] relative">
                {/* Chaotic/Messy Layout */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3 transform -rotate-2">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Where do I even start?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform rotate-1 ml-6">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Which job boards actually work?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform -rotate-1">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">How do I find passive candidates?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform rotate-2 ml-4">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">What if they leave in 6 months?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform -rotate-2 ml-8">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Am I offering competitive comp?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform rotate-1">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">How do I assess construction leadership skills?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform -rotate-1 ml-3">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Who's writing the show notes?</p>
                  </div>
                  
                  <div className="flex items-start gap-3 transform rotate-2 ml-6">
                    <HelpCircle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">How long will this take?</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
                    <p className="text-sm font-bold text-destructive">Overwhelming & Risky</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 2: Traditional Agencies (Middle Ground) */}
            <Card className="bg-gradient-to-br from-muted to-muted/50 border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-muted-foreground/80 text-background py-3 text-center font-bold text-lg">
                TRADITIONAL AGENCIES
              </div>
              <CardContent className="pt-20 pb-8 px-6 space-y-3 min-h-[600px] relative">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Post & pray (job board reliance)</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Surface-level LinkedIn searches</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Transactional relationship</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Focus on speed over fit</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Limited construction expertise</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">"Here are 3 resumes, good luck"</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">Juggling 30-50 searches at once</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground">~60% retention rate</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-muted border border-border rounded-lg p-4 text-center">
                    <p className="text-sm font-bold text-muted-foreground">Lazy & Transactional</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Column 3: Flowstate (Clean & Organized) */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-3 text-center font-bold text-lg">
                FLOWSTATE SEARCH
              </div>
              <CardContent className="pt-20 pb-8 px-6 space-y-3 min-h-[600px] relative">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Proactive market mapping</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Ranked candidate scoring</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">30+ years construction networks</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Trusted executive referrals</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Partnership approach (radical transparency)</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">91% retention focus</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Competitive advantage, not just a hire</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">Weekly communication & pipeline management</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                    <p className="text-sm font-bold text-primary">Strategic & Proven</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://schedule.flowstatesearch.com/15-min-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[#ffc229] hover:text-background transition-all shadow-lg">
                Book a 15-Minute Market Insight Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Cost of Bad Hire Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  The Real Cost of a Bad Hire
                </h2>
                <div className="grid md:grid-cols-3 gap-8 py-8">
                  <div>
                    <p className="text-5xl font-bold text-destructive">$250K-$500K</p>
                    <p className="text-sm text-muted-foreground mt-2">Average cost of a failed executive hire</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-destructive">60%</p>
                    <p className="text-sm text-muted-foreground mt-2">Industry average retention rate (24 months)</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-primary">91%</p>
                    <p className="text-sm text-muted-foreground mt-2">Flowstate retention rate (24 months)</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Turnover costs include lost productivity, team morale damage, project delays, and the expense of rehiring. Flowstate's 91% retention rate means you hire once, not twice.
                </p>
                <div className="pt-4">
                  <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-[#ffc229] hover:text-background transition-all">
                      Get a Free Competitive Talent Map
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
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
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
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
            </motion.div>
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
              We've built trust with 500+ construction executives who refer us to their peers when we're mapping the market—giving us access to talent that never hits job boards. Every placement is built on a foundation of trust and designed to create lasting impact—for your business, your new hire, and your community.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full">
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
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full">
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
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">Radical Transparency</h3>
                  <p className="text-muted-foreground">
                    We tell you the red flags and the green flags for every candidate. No surprises, no spin—just honest partnership.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Condensed */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 text-center h-full">
                <CardContent className="p-8 space-y-3">
                  <div className="text-5xl font-bold text-primary">91%</div>
                  <h3 className="text-lg font-bold font-heading">Retention Rate</h3>
                  <p className="text-sm text-muted-foreground">After 24 months, our placements are still thriving.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 text-center h-full">
                <CardContent className="p-8 space-y-3">
                  <div className="text-5xl font-bold text-primary">200+</div>
                  <h3 className="text-lg font-bold font-heading">Candidates Per Search</h3>
                  <p className="text-sm text-muted-foreground">Evaluated to present you with the top 6-8 fits.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-background/50 backdrop-blur border-primary/10 text-center h-full">
                <CardContent className="p-8 space-y-3">
                  <div className="text-5xl font-bold text-primary">30+</div>
                  <h3 className="text-lg font-bold font-heading">Years of Expertise</h3>
                  <p className="text-sm text-muted-foreground">Construction recruiting experience across all sectors.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Place Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">The Construction Leaders We Place</h2>
            <p className="text-lg text-muted-foreground">
              We specialize in mid-to-senior level roles across construction operations, sales, and project delivery.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              "Project Managers",
              "Superintendents",
              "Director of Operations",
              "Director of Construction",
              "Director of Sales / BD",
              "VP of Operations",
              "Regional Managers",
              "Senior Estimators"
            ].map((role, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-muted/30 border-border/50 hover:border-primary/30 transition-all hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <p className="font-bold text-foreground">{role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/flow-blueprint-bg.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Stop Competing on Job Boards.<br />Start Recruiting the Leaders Driving Results in Your Market.
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              If you're tired of backlog, turnover, and hiring risk—it's time for a proactive recruiting strategy built for construction.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://schedule.flowstatesearch.com/15-min-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-[#ffc229] hover:text-background transition-all shadow-lg px-8 h-12 text-base">
                Book a 15-Minute Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground transition-all px-8 h-12 text-base">
                Book a Discovery Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Old CTA Section - Removed */}
      <section className="py-24 bg-primary text-primary-foreground" style={{display: 'none'}}>
        <div className="container text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to Hire Leaders Who Stay?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Book a 15-minute call to see how we map your market and identify the talent your competitors don't want to lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://schedule.flowstatesearch.com/15-min-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-[#ffc229] hover:text-background transition-all shadow-lg px-8 h-12 text-base">
                Book a 15-Minute Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground transition-all px-8 h-12 text-base">
                Book a Discovery Call
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
