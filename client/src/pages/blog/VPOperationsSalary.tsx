import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/VPofOpssalaryguide_2e9165f2.webp";

export default function VPOperationsSalary() {
  useEffect(() => {
    document.title = "VP of Operations Construction Salary Guide 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What does a VP of Operations actually earn in construction in 2026? Real comp data from CFMA, bonus structures, and why most companies are losing this search before it starts.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "VP of Operations Construction Salary Guide 2026: What the Market Actually Pays",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2026-04-07",
      "description": "What does a VP of Operations actually earn in construction in 2026? Real comp data from CFMA, bonus structures, and why most companies are losing this search before it starts.",
      "url": "https://flowstatesearch.com/blog/construction-vp-operations-salary"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction executive on site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto w-full">
          <Link href="/insights">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer mb-5 uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" /> Insights
            </div>
          </Link>
          <span className="inline-block bg-white/10 text-white/80 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-5 border border-white/20">
            Compensation
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            VP of Operations Construction Salary Guide 2026: What the Market Actually Pays
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
            <Calendar className="w-3.5 h-3.5" /><span>April 7, 2026</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" /><span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">

        {/* Hook */}
        <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light mb-8">
          You would not bid a $100 million project with a $60 million budget. Stop hiring your VP of Operations that way.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The VP of Operations is the person who determines whether your company makes money or loses it at scale. They run your project portfolio, manage your project executives and superintendents, own your margins, and decide whether your firm can actually execute on the work you are selling. And yet, more often than not, companies price this role like a senior project manager with a fancier title. Then they wonder why the candidates they actually want keep saying no.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 — CFMA Data */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What the Data Actually Says
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          According to CFMA's 2025 Executive Compensation Survey for Contractors, the most comprehensive compensation study in the construction industry, the average VP of Operations base salary is $215,613. The average bonus is $113,143. That puts average total compensation at roughly $328,000.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          That is the average. The candidates you are trying to recruit are not average. The ones who are currently employed, performing well, and not looking for a job are sitting at the 75th percentile or above. The 75th percentile for VP of Operations base salary is $249,000 before bonus. The 25th percentile is $180,000.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Read that again. If your offer starts at $180,000 base, you are not making a competitive offer. You are making an offer at the bottom quarter of the market and hoping the candidate does not know what the market looks like. They do.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-4">
          VP of Operations compensation varies meaningfully based on company revenue, portfolio complexity, and geography. A VP Ops at a $30 million regional GC is a different job than a VP Ops at a $300 million multi-market contractor. The CFMA figures reflect the full respondent pool across all revenue sizes. Firms at the smaller end of the spectrum will generally see comp toward the lower end of the range. Firms at the larger end should expect to be well above the average. Use these numbers as a floor for your planning, not a ceiling.
        </p>
        <p className="text-sm text-gray-400 mb-16">
          Source: CFMA 2025 Executive Compensation Survey for Contractors, published by PAS, Inc.
        </p>

        {/* Section 2 — The Gap */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Gap Between Retained and Recruited
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The salary data above reflects what people are currently earning. It does not reflect what it takes to get the person you actually want to leave a job they are comfortable in and take a chance on yours.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Recruiting a passive candidate at this level almost always requires a meaningful premium over their current total comp. The person who is performing well, trusted by their leadership team, and not actively looking is not going to move for a lateral offer. They need a reason. That reason is usually a combination of a better opportunity and better money. If you are not prepared to offer both, you are not going to close the candidate you actually want.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          If you are competing against a company that understands this and your offer is at the CFMA average, you are not competing. You are hoping they say yes out of politeness.
        </p>

        {/* Section 3 — Bonus Table */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          How Bonuses Are Structured at This Level
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-8">
          Base salary is only part of the conversation. At the VP of Operations level, the bonus structure is often what separates a good offer from a great one. The industry has moved away from discretionary bonuses toward metric-driven structures tied to things a VP Ops can actually control.
        </p>
        <div className="overflow-x-auto mb-4 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Bonus Type</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Typical Range</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">What Drives It</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Annual performance bonus", "25% – 75% of base", "Revenue growth, margin improvement, safety metrics"],
                ["EBITDA-based bonus", "30% – 100% of base", "Stair-stepped incremental EBITDA improvement"],
                ["Signing bonus", "$25,000 – $75,000+", "Used to close the gap when base is constrained"],
                ["Long-term incentive / equity", "15% – 30% of base annually", "Deferred comp, phantom stock, profit-sharing"],
                ["Vehicle allowance", "$800 – $1,500/month", "Standard at this level across most GC and CM firms"],
              ].map(([type, range, driver], i) => (
                <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4 font-medium text-gray-900">{type}</td>
                  <td className="px-5 py-4 text-[#00a69c] font-semibold">{range}</td>
                  <td className="px-5 py-4 text-gray-500">{driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mb-16">
          Source: CFMA 2025 Executive Compensation Survey for Contractors.
        </p>

        {/* Section 4 — What Drives Above Market */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What Drives a VP Ops Salary Above Market
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-10">
          Not every VP of Operations commands the same number. Four things consistently push comp above the market range for this role.
        </p>
        <div className="space-y-8 mb-16">
          {[
            {
              title: "Portfolio size and complexity",
              body: "A VP Ops managing $150 million in annual volume is a different animal than one managing $500 million across multiple markets and project types. The complexity of the portfolio, the number of direct reports, and the risk exposure all factor into comp. If you are asking someone to manage a portfolio that has grown significantly, price it accordingly."
            },
            {
              title: "P&L ownership",
              body: "The best VPs of Operations have owned their numbers. Not just reported them. Owned them. They have been accountable for margin, have made the hard calls on underperforming projects, and have a track record of improving profitability at scale. That track record commands a premium. It should."
            },
            {
              title: "Passive status",
              body: "The VP of Operations you actually want is not on the market. They are running projects somewhere, being paid reasonably well, and not thinking about your job posting because they have never seen it. Getting that person to take a conversation requires a compelling case and a compelling number. Budget for it."
            },
            {
              title: "Market and sector specialization",
              body: "A VP Ops with deep experience in data center construction, healthcare, or heavy civil commands a premium over a generalist. The specialty trades in particular are running hot right now due to the data center boom. If you need someone with that background, expect to pay for it."
            },
          ].map(({ title, body }) => (
            <div key={title} className="pl-6 border-l-2 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Section 5 — ROI */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The ROI Argument You Should Be Making Internally
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          If a VP of Operations at market-rate comp, roughly $215,000 base plus bonus, oversees $100 million in annual project volume and improves your average project margin by two points, that is $2 million in additional profit. Three points is $3 million. One good hire at this level pays for itself many times over in the first year alone.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          So when the conversation internally is about whether you can justify paying above the CFMA average for this role, the real question is whether you can afford not to. A mediocre VP of Operations who costs you two margin points on a $100 million portfolio is not a bargain. They are the most expensive hire you ever made.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The companies that understand this are the ones willing to pay above market to get the right person. The companies that do not understand it are the ones losing searches to those companies and wondering why.
        </p>

        {/* Section 6 — What This Means If You Are Hiring */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What This Means If You Are Hiring
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Set your comp range before you start the search. Not after you meet the candidate. The worst thing you can do is spend six weeks running a search, find the right person, and then discover your budget is $40,000 short of what it takes to close them. That is not a budget problem. That is a planning problem.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Know what the market looks like for your specific revenue size, your specific geography, and the specific background you actually need. Then build an offer that gives you a real chance of closing the person you want. Not the person who was available.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          And if you are not sure what that number is, that is exactly what a <Link href="/start-your-search"><span className="text-[#00a69c] hover:underline cursor-pointer">free market insight call</span></Link> is for. We will tell you what the number actually is for your market, your company size, and the profile you are trying to hire.
        </p>

        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Running a VP of Operations search?</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            Want the best candidate, not just the best available one? That is what retained search is for. Let us talk about whether we are the right fit.
          </h3>
          <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00a69c] text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-[#008f86] transition-colors">
            Book a 15-Minute Call
          </a>
          <p className="text-xs text-gray-500 mt-5">No pitch. Just a straight answer.</p>
        </div>
      </div>

      {/* Related posts */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">More From the Field</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/construction-project-manager-salary">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Compensation</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">Construction Project Manager Salary Guide 2026: What PMs Actually Earn</p>
              </div>
            </Link>
            <Link href="/blog/cost-of-bad-hire-construction">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Hiring Strategy</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">The Real Cost of a Bad Construction Executive Hire in 2026</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
