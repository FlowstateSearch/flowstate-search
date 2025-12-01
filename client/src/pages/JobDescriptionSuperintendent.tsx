import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function JobDescriptionSuperintendent() {
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Senior Superintendent</h1>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Indianapolis, IN
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
            <Button size="lg" className="shrink-0" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Senior Superintendent - Indianapolis"}>
              Apply Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Operations</Badge>
            <Badge variant="secondary">Management</Badge>
            <Badge variant="secondary">Leadership</Badge>
            <Badge variant="secondary">Ground-Up</Badge>
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
                  Our client is hiring a Senior Superintendent for a nearly 100-year-old construction powerhouse with $1.6B in annual revenue. 
                  This is your chance to lead high-profile ground-up projects while working for one of the Midwest's most respected general contractors.
                </p>
              </div>
            </section>

            {/* The 4 W's */}
            <section className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg space-y-4 border border-border/50">
                <div>
                  <h3 className="font-bold text-foreground">THE WHO</h3>
                  <p className="text-sm text-muted-foreground">A family-owned construction giant with over 2,000 employees across Illinois, Wisconsin, Indiana, and Ohio. Leading the industry since 1927.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHAT</h3>
                  <p className="text-sm text-muted-foreground">You'll be the field general for ground-up commercial construction projects in the $10-50M range, responsible for field operations, schedules, and budget outcomes.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHY</h3>
                  <p className="text-sm text-muted-foreground">Lead coordination of complex mechanical, electrical, and plumbing systems across ground-up projects with a company that values sustainable and lean construction.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHERE</h3>
                  <p className="text-sm text-muted-foreground">Indianapolis, Indiana, with projects throughout the region.</p>
                </div>
              </div>
            </section>

            {/* Role Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">The Role</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  You are a field commander and systems thinker. You lead with conviction, presence, and accountability while earning respect from trade partners to C-suite executives.
                </p>
                <h3 className="text-foreground font-bold text-lg pt-2">Key Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lead field teams on $10-50M ground-up commercial projects</li>
                  <li>Execute sophisticated 3-6 week lookahead scheduling</li>
                  <li>Coordinate complex MEP systems integration</li>
                  <li>Manage all project functions through Procore platform</li>
                  <li>Control costs through weekly evaluation and strategic adjustments</li>
                  <li>Champion safety culture and maintain exemplary safety records</li>
                  <li>Mentor supervisory personnel and emerging leaders</li>
                </ul>
              </div>
            </section>

            {/* Requirements */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">Requirements</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Must Haves</h3>
                  <ul className="space-y-2">
                    {[
                      "8-15 years field supervision experience (ground-up commercial)",
                      "Proven track record with $10-50M projects",
                      "MEP-strong background with systems coordination expertise",
                      "Advanced 3-6 week lookahead scheduling proficiency",
                      "Exemplary safety record and OSHA knowledge",
                      "Procore platform expertise (non-negotiable)"
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
                      "9+ independently managed projects from start to finish",
                      "Bachelor's in Construction Management"
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
                  <div className="text-2xl font-bold text-foreground">$150k - $165k</div>
                  <div className="text-sm text-muted-foreground">Base Salary</div>
                </div>
                <div className="text-sm text-muted-foreground pt-2 border-t border-primary/10">
                  <p>+ Performance Bonuses</p>
                  <p>+ Comprehensive Benefits</p>
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
                    Medical, dental, vision plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    401k matching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Company vehicle allowance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Paid time off (PTO)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Professional development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Career advancement opportunities
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

            <Button size="lg" className="w-full" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Senior Superintendent - Indianapolis"}>
              Apply for this Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
