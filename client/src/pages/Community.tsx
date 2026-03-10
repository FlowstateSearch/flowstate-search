import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Heart, Users, TreePine } from "lucide-react";
import { useEffect } from "react";

const TRAIL_BUILD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/IMG_1736_e22718ed.JPG";
const GROUP_PHOTO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/IMG_1737_a0056aa5.JPG";

export default function Community() {
  useEffect(() => {
    document.title = "Community | Flowstate Field Days | Flowstate Search";
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  };

  const howItWorks = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "At Intake",
      body: "Every new client tells us what matters in their community. Which green spaces need support. Which parks need funding. Which trails need building. This becomes part of the partnership from day one — not an afterthought.",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "At Placement",
      body: "A donation is made in the client's and candidate's names — not Flowstate's. This isn't about us. It's about them and the community they're now both invested in together.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Annually",
      body: "We host Flowstate Field Days — volunteer events open to our entire network. Clients. Candidates. Team members. No business cards. No formal agenda. No networking theater. Just people, outside, doing something that matters.",
    },
    {
      icon: <TreePine className="w-6 h-6 text-primary" />,
      title: "In New Markets",
      body: "We call local leaders. We ask what they care about, what needs funding, and what projects are already in motion. Local community leaders know more than we ever could — and they're always willing to talk when someone shows up genuinely trying to help.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
          <img
            src={TRAIL_BUILD_URL}
            alt="Flowstate Field Days — trail building with Outdoor Colorado in the Rocky Mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 pb-20 pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-3xl space-y-5"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-none tracking-tight">
              Flowstate<br /><span className="text-primary">Field Days</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-2xl md:text-3xl font-heading font-bold text-white/90 leading-snug">
              Get Outside. Give Back.<br />
              <span className="text-primary">Build Something Real.</span>
            </motion.p>
            <motion.p variants={fadeIn} className="text-xl text-white/80 max-w-xl leading-relaxed">
              We help you build a stronger community. One placement at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Copy */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Every placement creates a ripple.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A great candidate finds meaningful work. They show up differently. As a better partner, parent, friend, and neighbor. The company gains a leader who is bought in, engaged, and invested. That company serves its clients better, builds safer job sites, and strengthens its community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              One placement. The ripple goes further than you think. That is why we exist.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Jordan's Why */}
      <section className="py-12 bg-background border-t border-border/40">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-4"
          >
            <p className="text-sm font-mono uppercase tracking-widest text-primary">From the Founder</p>
            <p className="text-lg text-foreground leading-relaxed">
              I started Flowstate Search because I believe business can be a force for good. Not in a bumper sticker way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I got tired of watching companies write checks to causes nobody in the room actually cared about, and call it community. I wanted something different. Something where the people we work with could stand in the same place, get their hands dirty, and build something that outlasts the deal.
            </p>
            <p className="text-lg font-medium text-foreground">That's where Flowstate Field Days came from.</p>
            <p className="text-sm text-muted-foreground">— Jordan Arp, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Community isn't a line item. It's built into every engagement from the first conversation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background rounded-2xl p-8 border border-border space-y-4"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-lg font-heading font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Break */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-snug"
          >
            The dollars matter. The hours matter more.<br />The relationships change everything.
          </motion.p>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                You can't build community<br />
                <span className="text-primary">by sending a check.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You have to show up. Put a smile on someone's face. Get your hands dirty. Learn from people whose lives look nothing like yours. Every person has a perspective worth hearing. Every neighborhood has a story worth knowing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Flowstate Field Days exists because we believe the best relationships in business and in life are built outside, side by side, doing something real.
              </p>
              <p className="font-medium text-foreground">
                Experiences over stuff. Connection over recognition. Presence over plaques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden order-1 lg:order-2"
            >
              <img
                src={GROUP_PHOTO_URL}
                alt="Flowstate Field Days volunteer crew — Outdoor Colorado trail build team photo in the Rocky Mountains"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-white bg-black/65 backdrop-blur-sm px-3 py-1.5 rounded-md">Colorado Trail Build — Lost Lake</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spirit Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Three years from now, the measure of our success isn't a revenue number.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three years from now, the measure of our success isn't a revenue number. It's this. People are more human because of the work we do. Relationships run deeper. Communities are stronger. And somewhere out there, a kid is playing in a park that exists because a great candidate found a great company and Flowstate made it happen.
            </p>
            <p className="text-primary font-semibold text-lg">That's when we'll know we made it.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Want to be part of it?
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Whether you're a client, a candidate, or just someone who gives a damn. There's a place for you at the next Flowstate Field Day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-[#ffc229] hover:text-background transition-all shadow-lg px-8 h-12 text-base">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/start-search">
                <Button size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground transition-all px-8 h-12 text-base">
                  Start a Search
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
