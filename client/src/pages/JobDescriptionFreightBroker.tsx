import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function JobDescriptionFreightBroker() {
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
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Freight Broker</h1>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Remote (US Based)
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  Full Time / Contract
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Posted Recently
                </div>
              </div>
            </div>
            <Button size="lg" className="shrink-0" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Freight Broker"}>
              Apply Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Logistics</Badge>
            <Badge variant="secondary">Sales</Badge>
            <Badge variant="secondary">Remote</Badge>
            <Badge variant="secondary">Freight</Badge>
            <Badge variant="secondary">Business Development</Badge>
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
                  Flowstate is representing multiple logistics companies across the United States, all seeking experienced Freight Brokers. 
                  This unique opportunity allows you to be considered for several industry-leading firms simultaneously, each offering 
                  competitive commission structures and the ability to maximize your earning potential while building your book of business.
                </p>
                <p>
                  Our logistics clients range from tech-forward 3PLs to established industry leaders across the country. One of our key 
                  clients is a tech-centric, growing 3PL provider with 75 collective years of industry experience and access to 100,000+ carriers.
                </p>
              </div>
            </section>

            {/* The 4 W's */}
            <section className="space-y-6">
              <div className="bg-muted/30 p-6 rounded-lg space-y-4 border border-border/50">
                <div>
                  <h3 className="font-bold text-foreground">THE WHY</h3>
                  <p className="text-sm text-muted-foreground">
                    By applying through Flowstate, you'll gain access to multiple opportunities simultaneously, allowing you to compare and choose 
                    the best fit for your career goals. Common threads include uncapped earning potential, autonomy, and top-tier support.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHERE</h3>
                  <p className="text-sm text-muted-foreground">
                    All positions are 100% remote and open to candidates based anywhere in the United States. You'll have the flexibility to 
                    work from your home office, a co-working space, or anywhere with a reliable internet connection.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE WHO</h3>
                  <p className="text-sm text-muted-foreground">
                    Our logistics clients range from tech-forward 3PLs to established industry leaders. All operate with fully remote teams, 
                    embracing flexibility and autonomy.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">THE HOW</h3>
                  <p className="text-sm text-muted-foreground">
                    As a Freight Broker, you'll operate as a full-desk professional, managing the entire logistics process from prospecting 
                    to delivery with entrepreneurial freedom within an established remote framework.
                  </p>
                </div>
              </div>
            </section>

            {/* Role Details */}
            <section className="space-y-4">
              <h2 className="text-xl font-heading font-bold border-b border-border pb-2">The Opportunity</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  This is a high-yielding opportunity for a motivated, tenacious, and ambitious broker. You'll be surrounded by driven 
                  professionals who value work ethic, innovation, and integrity.
                </p>
                <h3 className="text-foreground font-bold text-lg pt-2">Your DNA</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are relationship-focused and known for building strong, lasting connections in the logistics space.</li>
                  <li>You are a hunter who thrives on closing deals and has the competitive fire to win in a fast-paced environment.</li>
                  <li>You're self-motivated and entrepreneurial, treating your desk like your own business.</li>
                  <li>You have a competitive spirit and resilience that drives you to win.</li>
                  <li>You understand the logistics industry and speak the language fluently (dry van vs reefer, detention, DOT regs).</li>
                  <li>You're responsive and available when opportunities arise - timing is everything.</li>
                  <li>You excel in remote work environments through self-discipline and proactive communication.</li>
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
                      "Minimum 2-5 years of experience in logistics/freight brokerage",
                      "Proven track record of building and maintaining a book of business (required)",
                      "Strong negotiation skills and relationship-building capabilities",
                      "Self-motivated with an entrepreneurial mindset",
                      "Experience with industry-standard TMS and load board systems",
                      "Ability to thrive in a remote work environment"
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
                      "Strong existing book of business (auto transport, FTL, LTL, expedited, CPG, retail, etc.)",
                      "Experience as a 1099 or W2 broker",
                      "Deep knowledge of logistics industry best practices",
                      "Strong network of shipper and carrier contacts"
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
                  <div className="text-sm text-muted-foreground">Estimated annual earnings</div>
                </div>
                <div className="text-sm text-muted-foreground pt-2 border-t border-primary/10">
                  <p>Commission: 45-70%</p>
                  <p>+ Uncapped Potential</p>
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
                    100% Remote Work
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Uncapped Commissions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Access to TMS & Load Boards
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Back-office Support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Flexible Schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Healthcare (varies by company)
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

            <Button size="lg" className="w-full" onClick={() => window.location.href = "mailto:hello@flowstatesearch.com?subject=Application: Freight Broker"}>
              Apply for this Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
