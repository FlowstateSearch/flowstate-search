import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function JobDescriptionCPM() {
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Construction Project Manager</h1>
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
            <Button size="lg" className="shrink-0" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Construction Project Manager - Indianapolis"}>
              Apply Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Operations</Badge>
            <Badge variant="secondary">Management</Badge>
            <Badge variant="secondary">Commercial</Badge>
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
                  Our client is hiring a Construction Project Manager to lead high-profile ground-up commercial projects while mentoring future construction leaders. 
                  This is a career-defining opportunity with one of the Midwest's most respected general contractors.
                </p>
              </div>
            </section>

            {/* The 4 W's */}
            <section className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg space-y-4 border border-border/50">
                <div>
                  <h3 className="font-bold text-foreground">THE WHO</h3>
                  <p className="text-sm text-muted-foreground">Our client is a family-owned construction powerhouse with $1.6 billion in annual revenue and 2,000+ employees across the Midwest. For 97 years, they've led the industry in commercial construction.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHAT</h3>
                  <p className="text-sm text-muted-foreground">You'll quarterback complex ground-up commercial projects valued at $10-50 million, responsible for safety, quality, completion, and financial outcomes from budget through closeout.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHY</h3>
                  <p className="text-sm text-muted-foreground">Join a safety-first culture building critical community infrastructure – healthcare facilities, educational campuses, and manufacturing facilities. Plus, mentor the next generation of construction leaders.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHERE</h3>
                  <p className="text-sm text-muted-foreground">Indianapolis, Indiana, with project locations throughout the state. Travel within Indiana expected.</p>
                </div>
              </div>
            </section>

            {/* Role Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">The Role</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  You are a ground-up project orchestrator and technology-savvy leader who builds the playbook, calls the plays, and leads diverse teams to victory on complex commercial projects.
                </p>
                <h3 className="text-foreground font-bold text-lg pt-2">Key Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lead complex ground-up commercial projects ($10-50M) from preconstruction through closeout</li>
                  <li>Serve as primary owner/subcontractor liaison ensuring seamless communication</li>
                  <li>Develop sophisticated CPM schedules using Primavera for optimal resource allocation</li>
                  <li>Execute advanced cost control and financial forecasting throughout project lifecycles</li>
                  <li>Lead Owner-Architect-Contractor (OAC) meetings with strategic vision</li>
                  <li>Manage complex MEP coordination across multiple trade partners</li>
                  <li>Mentor junior staff on advanced project management methodologies</li>
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
                      "Bachelor's in Construction Management/Engineering (required)",
                      "6-10 years ground-up commercial PM experience ($10-50M projects)",
                      "Advanced proficiency: Procore, Bluebeam, Primavera (required)",
                      "CPM scheduling and cost control expertise",
                      "Owner/subcontractor liaison experience"
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
                      "Healthcare, education, industrial, or manufacturing experience",
                      "Experience mentoring junior staff",
                      "Strong business development skills"
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
                  <div className="text-2xl font-bold text-foreground">$118k - $125k</div>
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
                    Student loan repayment
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

            <Button size="lg" className="w-full" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Construction Project Manager - Indianapolis"}>
              Apply for this Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
