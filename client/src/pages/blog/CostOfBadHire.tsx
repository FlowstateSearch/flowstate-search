import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-cost-bad-hire_d2f179a0.jpg";

export default function CostOfBadHire() {
  useEffect(() => {
    document.title = "The Real Cost of a Bad Construction Executive Hire in 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A failed construction executive hire costs $500K–$1.2M and 12–18 months of your time. Here's exactly where the money goes — and how to stop it from happening again.");

    // Article schema
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Real Cost of a Bad Construction Executive Hire in 2026",
      "description": "A failed construction executive hire costs $500K–$1.2M and 12–18 months of your time. Here's exactly where the money goes — and how to stop it from happening again.",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2026-03-16",
      "url": "https://flowstatesearch.com/blog/cost-of-bad-hire-construction",
      "image": HERO_IMAGE,
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <article className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Construction site — cost of a bad hire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-10">
          <Link href="/insights">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-primary/80 hover:text-primary transition-colors cursor-pointer mb-4 uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" />
              Insights
            </div>
          </Link>
          <div className="inline-block bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-primary/20">
            Hiring Strategy
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight max-w-3xl">
            The Real Cost of a Bad Construction Executive Hire in 2026
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-border/40 bg-muted/20">
        <div className="container py-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={AUTHOR.photo} alt={AUTHOR.name} className="w-9 h-9 rounded-full object-cover object-top" />
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">{AUTHOR.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{AUTHOR.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>March 16, 2026</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>7 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Intro */}
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-light">
            You already know it was a mistake. You knew it six months in. Maybe sooner. But by the time you admitted it out loud, you'd already spent a year trying to make it work — because the alternative felt worse than the problem.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            That's the part nobody talks about. The cost of a bad hire in construction isn't just the money. It's the months you spent hoping it would turn around. The conversations you avoided. The project that slipped. The team that watched and wondered if you were going to do something about it.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            The money is bad enough. Let's start there.
          </p>

          {/* H2: The Number */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">The Number Nobody Wants to Say Out Loud</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The average cost of a failed construction executive hire is somewhere between $500,000 and $1.2 million.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            That number comes from a straightforward calculation: 2x to 5x the employee's annual salary, depending on their seniority and how long they stayed. For a project manager earning $120,000, you're looking at $240,000 on the low end. For a Director of Operations at $200,000, the ceiling is $1 million before you've counted a single project delay.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            Most companies never calculate this number. They absorb it across departments — some in HR, some in operations, some in the project P&L — and it disappears into the noise. That's exactly why it keeps happening.
          </p>

          {/* Callout */}
          <div className="bg-muted/40 border-l-4 border-primary rounded-r-lg p-6 mb-12">
            <p className="text-base font-semibold text-foreground leading-relaxed">
              "The average time to replace a construction executive is 12 to 18 months from the moment you admit the hire didn't work."
            </p>
          </div>

          {/* H2: Where the Money Goes */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Where the Money Actually Goes</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The direct costs are the easy ones to count. Recruiting fees paid to the original firm. Job board postings. Interview time from your leadership team, typically 15 to 20 hours per hire across multiple rounds. Background checks, assessments, onboarding costs. Add a relocation package if the person moved for the role.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Then they leave, or you let them go, and you do it all again. The average time to replace a construction executive is 12 to 18 months from the moment you admit the hire didn't work. That's 12 to 18 months of a role operating below capacity, covered by people who already have full jobs, or sitting vacant while projects keep moving.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            The recruiting cost alone for a senior construction hire typically runs 20 to 30 percent of first-year compensation. On a $150,000 salary, that's $30,000 to $45,000. Paid twice if the first hire doesn't stick.
          </p>

          {/* H2: Hidden Costs */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">The Hidden Costs That Don't Show Up on a Spreadsheet</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Project delays are the one that hurts the most. A construction executive who isn't the right fit doesn't just underperform. They create drag. Decisions slow down. Subcontractors get mixed signals. Change orders pile up. Industry research consistently shows that leadership transitions contribute to 5 to 10 percent cost overruns on active projects. On a $10 million project, that's $500,000 to $1 million tied directly to the wrong person in the wrong seat.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Then there's the team. Your superintendents and project managers are watching. They know before you do when someone isn't right. And the best ones — the ones you actually can't afford to lose — start updating their resumes quietly. Not because they're disloyal. Because they're paying attention.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            Safety is the one nobody wants to put a dollar amount on. But the research is clear. Leadership instability on construction sites correlates with increased incident rates. The wrong leader in a field leadership role isn't just an operational problem. It's a safety problem.
          </p>

          {/* H2: Why Hires Fail */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Why Construction Executive Hires Fail</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Most bad construction hires fail for one of three reasons.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The first is a skills mismatch that wasn't caught in the interview process. The candidate interviewed well, had the right titles on their resume, and said the right things. But nobody actually tested whether they could do the job in your specific context — your project types, your subcontractor relationships, your risk profile.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The second is a fit mismatch that nobody wanted to address. The candidate was technically qualified but didn't work the way your company actually operates. Maybe they came from a top-down firm and you run a collaborative shop. Maybe they were used to a support structure you don't have. Either way, it was visible early and nobody said the hard thing.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            The third, and most common, is that the hire came from a pool of active candidates. People who are actively looking for jobs are, by definition, available. The best construction executives are rarely available. They're employed, performing well, and not checking job boards. When you hire from the active pool, you're choosing from the people who are looking — not the people who are winning.
          </p>

          {/* H2: Retention Numbers */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">What the Retention Numbers Actually Tell You</h2>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-muted/30 rounded-xl p-5 text-center border border-border/40">
              <p className="text-3xl font-heading font-bold text-primary mb-1">57%</p>
              <p className="text-xs text-muted-foreground leading-snug">Industry avg retention at 24 months</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5 text-center border border-primary/20">
              <p className="text-3xl font-heading font-bold text-primary mb-1">91%</p>
              <p className="text-xs text-muted-foreground leading-snug">Flowstate retention at 24 months</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-5 text-center border border-border/40">
              <p className="text-3xl font-heading font-bold text-destructive mb-1">33%</p>
              <p className="text-xs text-muted-foreground leading-snug">DIY hiring retention at 24 months</p>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The industry average retention rate for construction executive hires at 24 months is 57 percent. That means nearly half of all construction executive hires are gone within two years — either by choice or by necessity.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Flowstate Search's <Link href="/why-flowstate"><span className="text-primary hover:underline cursor-pointer">retention rate at 24 months is 91 percent</span></Link>. The difference isn't luck. It's the result of a process built specifically to avoid the three failure modes above: rigorous skills assessment, deep culture alignment work, and a candidate pool built from passive candidates — people who are currently employed and performing, not people who are looking.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            For context: the DIY hiring rate — companies that hire without a specialized recruiter — sits at approximately 33 percent retention at 24 months. One in three. That's the cost of treating executive search like a job posting.
          </p>

          {/* H2: How to Stop */}
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">How to Stop Paying This Tax</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The math isn't complicated. A retained search engagement with a specialized construction recruiter costs 20 to 30 percent of first-year compensation, paid once, with a replacement guarantee if the hire doesn't work out. A bad hire costs 2 to 5 times that, paid twice, with no guarantee and 12 to 18 months of organizational drag in between.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-12">
            The question isn't whether you can afford to use a specialized recruiter. The question is whether you can afford not to.
          </p>

          {/* CTA */}
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-10">
            <p className="text-lg font-heading font-bold mb-2">Ready to stop paying the bad-hire tax?</p>
            <p className="text-sm text-background/70 mb-6 leading-relaxed">
              If you want to understand <Link href="/how-we-work"><span className="text-primary hover:underline cursor-pointer">how we work</span></Link> before you commit to anything, start there. Or if you're ready to move:
            </p>
            <Link href="/start-search">
              <div className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
                Start Your Search
              </div>
            </Link>
            <p className="text-xs text-background/50 mt-4">No pitch. No pressure. Just a straight answer about whether we're the right fit.</p>
          </div>
        </div>
      </div>

      {/* Related posts placeholder */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="container py-12">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">More From the Field</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <Link href="/blog/how-to-find-passive-construction-candidates">
              <div className="group cursor-pointer">
                <p className="text-xs text-primary font-mono uppercase tracking-wider mb-1">Hiring Strategy</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">How to Find Passive Construction Candidates (Who Aren't on Job Boards)</p>
              </div>
            </Link>
            <Link href="/blog/retained-vs-contingency-construction-recruiting">
              <div className="group cursor-pointer">
                <p className="text-xs text-primary font-mono uppercase tracking-wider mb-1">Recruiting Models</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
