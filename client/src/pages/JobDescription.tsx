import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function JobDescription() {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/">
            <div className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </div>
          </Link>
        </div>

        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Senior Project Manager NY</h1>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  New York, NY & New Jersey
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  Full Time
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Posted Recently
                </div>
              </div>
            </div>
            <Button size="lg" className="shrink-0" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Senior Project Manager NY"}>
              Apply Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Operations</Badge>
            <Badge variant="secondary">Management</Badge>
            <Badge variant="secondary">Leadership</Badge>
            <Badge variant="secondary">Construction</Badge>
            <Badge variant="secondary">Restoration</Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Main Details */}
          <div className="md:col-span-2 space-y-10">
            
            {/* Quick Overview */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">Quick Overview</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground">
                <p>
                  Our client is hiring a Senior Project Manager - a true leader responsible for managing reconstruction projects, 
                  including project managers, clients, insurance adjusters, and projects. This position plays a pivotal role in 
                  driving departmental success and contributing significantly to the company's future.
                </p>
                <p>
                  Our client is a leader in the restoration and reconstruction space with nearly 400 markets across the United States 
                  and Canada. For over 50 years, they have served their communities in their time of need when facing disaster.
                </p>
              </div>
            </section>

            {/* The 4 W's */}
            <section className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg space-y-4 border border-border/50">
                <div>
                  <h3 className="font-bold text-foreground">THE WHY</h3>
                  <p className="text-sm text-muted-foreground">A subsection of the construction industry that's all about helping people during incredibly hard times/disasters - floods, fires, mold, emergencies, and accidents.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHERE</h3>
                  <p className="text-sm text-muted-foreground">Based in New York City (all boroughs) and New Jersey (Bergen, Essex, and Hudson Counties). Only candidates within 20 miles or willing to relocate will be considered.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHO</h3>
                  <p className="text-sm text-muted-foreground">One of the leading companies in the space - great people-first culture. This specific office/market is thriving and is one of the larger markets in our clients' footprint.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE HOW</h3>
                  <p className="text-sm text-muted-foreground">Lead a diverse set of projects...ranging from small week-long needs to multi-faceted and complex projects across residential and commercial.</p>
                </div>
              </div>
            </section>

            {/* Role Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">The Opportunity</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  This office has an opportunity to realize huge potential and hyper-growth through its focus on the residential and commercial side of the business. 
                  As such, this market is ripe for people ready to roll up their sleeves, see the opportunities from all angles, and push, progress, cultivate, mature, and breed success.
                </p>
                <h3 className="text-foreground font-bold text-lg pt-2">Your DNA</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You've got your hand in all the pots on a project…managing people, a variety of projects (big and small), ideas, systems, and change.</li>
                  <li>You're keeping everything in check, making sure things run smoothly, you get the team motivated, and you're the glue that keeps everything and everyone together.</li>
                  <li>The construction/reconstruction industry is unique - and you love it, you know it, you've lived it.</li>
                  <li>You thrive independently, have the moxie and ambition to pursue AND execute strategies.</li>
                  <li>You are a strategist, an independent thinker, vision caster, and someone that builds the playbook.</li>
                  <li>You are competitive, you love to win, hate complacency, and working hard just comes naturally.</li>
                </ul>
              </div>
            </section>

            {/* Requirements */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">Requirements</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Required Experience</h3>
                  <ul className="space-y-2">
                    {[
                      "Strong background in construction/restoration (5-7 years)",
                      "Experience as a Project Manager (PM) is essential",
                      "Familiarity with Xactimate is preferred",
                      "Experience with budgets, P&L statements, and financials",
                      "Strong team leadership, coaching, and mentorship skills",
                      "Experience hiring, training, and managing project managers"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Preferred</h3>
                  <ul className="space-y-2">
                    {[
                      "Bachelor's degree preferred but not required",
                      "Experience using Xactimate, Symbility and Microsoft Suite",
                      "Previous role as Head of Reconstruction or similar"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-muted-foreground/50 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Salary Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <DollarSign className="w-5 h-5" />
                  Compensation
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-foreground">$120k - $200k+</div>
                  <div className="text-sm text-muted-foreground">Total expected compensation</div>
                </div>
                <div className="text-sm text-muted-foreground pt-2 border-t border-primary/10">
                  <p>Base: $60k - $75k</p>
                  <p>+ Uncapped Commissions</p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-foreground">Benefits & Perks</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Medical, dental and vision plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Paid vacation & sick leave
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Paid holidays
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Car & Phone Allowance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    401k match
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Leadership development programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* About Flowstate */}
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">About Flowstate</h3>
              <p className="text-sm text-muted-foreground mb-4">
                We are Flowstate – a network of recruiters changing the way we get hired. We represent only the top talent in their fields.
              </p>
              <Link href="/">
                <div className="text-primary text-sm font-medium hover:underline cursor-pointer">Learn more about us →</div>
              </Link>
            </div>

            <Button size="lg" className="w-full" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Senior Project Manager NY"}>
              Apply for this Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
