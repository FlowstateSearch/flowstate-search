import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-post1-hero_5bdbd104.webp";

export default function CostOfBadHire() {
  useEffect(() => {
    document.title = "The Real Cost of a Bad Construction Executive Hire in 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A failed construction executive hire costs $500K to $1.2M and 12 to 18 months of your time. Here is exactly where the money goes and how to stop it from happening again.");

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Real Cost of a Bad Construction Executive Hire in 2026",
      "description": "A failed construction executive hire costs $500K to $1.2M and 12 to 18 months of your time.",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2026-03-04",
      "url": "https://flowstatesearch.com/blog/cost-of-bad-hire-construction",
      "image": HERO_IMAGE,
    });
    document.head.appendChild(schema);
    return () => { document.head.removeChild(schema); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction site aerial view" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto w-full">
          <Link href="/insights">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer mb-5 uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" /> Insights
            </div>
          </Link>
          <span className="inline-block bg-white/10 text-white/80 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-5 border border-white/20">
            Hiring Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            The Real Cost of a Bad Construction Executive Hire in 2026
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={AUTHOR.photo} alt={AUTHOR.name} className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-gray-100" />
            <div>
              <a href="https://www.linkedin.com/in/jordan-arp/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 leading-none hover:text-[#00a69c] transition-colors flex items-center gap-1">{AUTHOR.name}<Linkedin className="w-3 h-3 inline ml-1" /></a>
              <p className="text-xs text-gray-400 mt-1">{AUTHOR.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" /><span>March 4, 2026</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" /><span>7 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">

        {/* Hook */}
        <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light mb-8">
          You knew six months in. Maybe sooner. But you kept waiting for it to turn around, because admitting it felt worse than living with it.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed mb-6">
          That decision cost you more than you think.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The cost of a bad hire in construction is not just the money. It is the months you spent hoping. The conversations you avoided. The project that slipped. The team that watched and wondered when you were going to do something about it.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The money is bad enough. Let's start there.
        </p>

        {/* Divider */}
        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Number Nobody Wants to Say Out Loud
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The average cost of a failed construction executive hire lands somewhere between $500,000 and $1.2 million.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          That number comes from a straightforward calculation: 2x to 5x the employee's annual salary, depending on seniority and how long they stayed. For a project manager earning $120,000, you are looking at $240,000 on the low end. For a Director of Operations at $200,000, the ceiling hits $1 million before you count a single project delay.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Most companies never calculate this number. They absorb it across departments. Some in HR, some in operations, some buried in the project P&L. It disappears into the noise. That is exactly why it keeps happening.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "The average time to replace a construction executive is 12 to 18 months from the moment you admit the hire did not work."
          </p>
        </blockquote>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Where the Money Actually Goes
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The direct costs are the easy ones to count. Recruiting fees paid to the original firm. Job board postings. Interview time from your leadership team, typically 15 to 20 hours per hire across multiple rounds. Background checks, assessments, onboarding. Add a relocation package if the person moved for the role.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Then they leave, or you let them go, and you do it all again. The average time to replace a construction executive is 12 to 18 months from the moment you admit the hire did not work. That is 12 to 18 months of a role operating below capacity, covered by people who already have full jobs, or sitting vacant while projects keep moving.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The recruiting cost alone for a senior construction hire typically runs 20 to 30 percent of first-year compensation. On a $150,000 salary, that is $30,000 to $45,000. Paid twice if the first hire does not stick.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Hidden Costs That Do Not Show Up on a Spreadsheet
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Project delays are the one that hurts most. A construction executive who is not the right fit does not just underperform. They create drag. Decisions slow down. Subcontractors get mixed signals. Change orders pile up. Industry research consistently shows that leadership transitions contribute to 5 to 10 percent cost overruns on active projects. On a $10 million project, that is $500,000 to $1 million tied directly to the wrong person in the wrong seat.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Then there is the team. Your superintendents and project managers are watching. They know before you do when someone is not right. And the best ones, the ones you actually cannot afford to lose, start updating their resumes quietly. Not because they are disloyal. Because they are paying attention.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Safety is the one nobody wants to put a dollar amount on. But the research is clear. Leadership instability on construction sites correlates with increased incident rates. The wrong leader in a field leadership role is not just an operational problem. It is a safety problem.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why Construction Executive Hires Fail
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Most bad construction hires fail for one of three reasons.
        </p>

        {/* Numbered reasons */}
        <div className="space-y-8 mb-16">
          {[
            { n: "01", title: "Skills mismatch not caught in the interview", body: "The candidate interviewed well, had the right titles on their resume, and said the right things. But nobody actually tested whether they could do the job in your specific context. Your project types, your subcontractor relationships, your risk profile." },
            { n: "02", title: "Fit mismatch nobody wanted to address", body: "The candidate was technically qualified but did not work the way your company actually operates. Maybe they came from a top-down firm and you run a collaborative shop. Maybe they were used to a support structure you do not have. Either way, it was visible early and nobody said the hard thing." },
            { n: "03", title: "The hire came from the wrong pool", body: "The most common failure. People who are actively looking for jobs are, by definition, available. The best construction executives are rarely available. They are employed, performing well, and not checking job boards. When you hire from the active pool, you are choosing from the people who are looking. Not the people who are winning." },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-6">
              <span className="text-4xl font-bold text-[#00a69c]/20 font-mono shrink-0 leading-none mt-1">{n}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 5 — Stats */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What the Retention Numbers Actually Tell You
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
            <p className="text-4xl font-bold text-red-500 mb-2">33%</p>
            <p className="text-xs text-gray-400 leading-snug">DIY hiring retention at 24 months</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
            <p className="text-4xl font-bold text-amber-500 mb-2">57%</p>
            <p className="text-xs text-gray-400 leading-snug">Industry avg retention at 24 months</p>
          </div>
          <div className="bg-[#00a69c]/5 rounded-2xl p-6 text-center border border-[#00a69c]/20">
            <p className="text-4xl font-bold text-[#00a69c] mb-2">91%</p>
            <p className="text-xs text-gray-400 leading-snug">Flowstate retention at 24 months</p>
          </div>
        </div>

        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The industry average retention rate for construction executive hires at 24 months is 57 percent. That means nearly half of all construction executive hires are gone within two years. Either by choice or by necessity.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Flowstate Search's <Link href="/why-flowstate"><span className="text-[#00a69c] hover:underline cursor-pointer">retention rate at 24 months is 91 percent</span></Link>. The difference is not luck. It is the result of a process built specifically to avoid the three failure modes above: rigorous skills assessment, deep culture alignment work, and a candidate pool built from passive talent that is not available anywhere else.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          For context, the DIY hiring rate, companies that hire without a specialized recruiter, sits at approximately 33 percent retention at 24 months. One in three. That is the cost of treating executive search like a job posting.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          How to Stop Paying This Tax
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The math is not complicated. A retained search engagement with a specialized construction recruiter costs 20 to 30 percent of first-year compensation, paid once, with a replacement guarantee if the hire does not work out. A bad hire costs 2 to 5 times that, paid twice, with no guarantee and 12 to 18 months of organizational drag in between.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The question is not whether you can afford to use a specialized recruiter. The question is whether you can afford not to.
        </p>

        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Ready to stop paying the bad-hire tax?</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            Tell us about the role you need to fill.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            If you want to understand <Link href="/how-it-works"><span className="text-[#00a69c] hover:underline cursor-pointer">how we work</span></Link> before you commit to anything, start there. Or if you are ready to move:
          </p>
          <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00a69c] text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-[#008f86] transition-colors">
            Book a 15-Minute Call
          </a>
          <p className="text-xs text-gray-500 mt-5">No pitch. No pressure. Just a straight answer about whether we are the right fit.</p>
        </div>
      </div>

      {/* Related posts */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">More From the Field</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/how-to-find-passive-construction-candidates">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Hiring Strategy</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">How to Find Passive Construction Candidates (Who Are Not on Job Boards)</p>
              </div>
            </Link>
            <Link href="/blog/retained-vs-contingency-construction-recruiting">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Recruiting Models</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
