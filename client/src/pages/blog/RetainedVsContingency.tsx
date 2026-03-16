import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-retained-vs-contingency_f0d5f3c3.jpg";

export default function RetainedVsContingency() {
  useEffect(() => {
    document.title = "Retained vs. Contingency Construction Recruiting: Which Model Is Right for You? | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Retained vs. contingency recruiting — what's the actual difference, when does each model make sense, and why Flowstate only does retained. A straight answer with no spin.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2025-12-09",
      "description": "Retained vs. contingency recruiting — what's the actual difference, when does each model make sense, and why Flowstate only does retained.",
      "url": "https://flowstatesearch.com/blog/retained-vs-contingency-construction-recruiting"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction leadership meeting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto w-full">
          <Link href="/insights">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer mb-5 uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" /> Insights
            </div>
          </Link>
          <span className="inline-block bg-white/10 text-white/80 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-5 border border-white/20">
            Recruiting Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?
          </h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={AUTHOR.photo} alt={AUTHOR.name} className="w-10 h-10 rounded-full object-cover object-top ring-2 ring-gray-100" />
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-none">{AUTHOR.name}</p>
              <p className="text-xs text-gray-400 mt-1">{AUTHOR.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="w-3.5 h-3.5" /><span>December 9, 2025</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Clock className="w-3.5 h-3.5" /><span>6 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">

        {/* Hook */}
        <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-light mb-8">
          Most people who call a recruiting firm do not fully understand the difference between retained and contingency search.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed mb-6">
          They know one costs money upfront and one does not. Beyond that, it gets murky.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Here is a straight answer — including the parts that do not make retained search look great, because you deserve to know what you are actually choosing between.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What Contingency Recruiting Actually Is
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          In a contingency model, the recruiter only gets paid if you hire one of their candidates. No placement, no fee. This sounds like a good deal for the client. You are not paying for effort, only for results.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The reality is more complicated. Because the recruiter only gets paid on placement, they have a strong incentive to move fast and send you candidates quickly. That is not always bad. But it creates pressure to present candidates who are available, not necessarily candidates who are right.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          It also means the recruiter is often working your role simultaneously with five or ten other clients, because they need volume to make the model work. They are not exclusively focused on your search. They are running a portfolio.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          And because they are only paid on placement, they have limited incentive to do the deep market mapping and passive candidate outreach that senior roles require. That work is expensive and time-consuming, and there is no guarantee of a fee at the end of it.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What Retained Search Actually Is
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          In a retained model, the client pays a portion of the fee upfront — typically one-third — to engage the recruiter exclusively on their search. The recruiter is committed to that role, with the time and resources to do the full market mapping, passive candidate outreach, and relationship work that a senior search requires.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The fee is typically the same percentage of first-year compensation as contingency — usually 20 to 30 percent — but it is structured differently. Part upfront, part at candidate presentation, part at placement. The recruiter has skin in the game from day one, and so does the client.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The tradeoff is obvious. You are paying for work before you see results. That requires trust. It also requires a recruiter who has earned that trust.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "The incentives point toward speed and volume, not depth and precision. In a market where the best candidates are passive, that model consistently underperforms."
          </p>
          <footer className="mt-4 text-sm text-gray-400">Jordan Arp, Founder — Flowstate Search</footer>
        </blockquote>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Incentive Problem Nobody Talks About
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Here is the uncomfortable truth about contingency recruiting. The model creates incentives that are not always aligned with your interests.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          A contingency recruiter who sends you a candidate who is available, acceptable, and closeable gets paid. A contingency recruiter who spends six weeks doing deep market mapping to find the best passive candidate, who then takes another two weeks to close, gets paid the same amount but has done three times the work. The rational economic choice, for the recruiter, is to move fast and present available candidates.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          This is not a character flaw. It is a structural reality of the model. The incentives point toward speed and volume, not depth and precision.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          In a market where the best candidates are passive — employed, not looking, hard to reach — a model built around speed and volume will consistently underperform a model built around depth and precision. That is not an opinion. That is math.
        </p>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-xl border border-gray-100 p-8 bg-gray-50">
            <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">Contingency</p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">·</span> No upfront cost</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">·</span> Recruiter works multiple clients simultaneously</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">·</span> Incentivized toward speed over precision</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">·</span> Best for mid-level, high-volume, active candidate roles</li>
              <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">·</span> Limited passive candidate outreach</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[#00a69c]/30 p-8 bg-[#00a69c]/5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Retained</p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-[#00a69c] mt-0.5">·</span> Partial fee upfront</li>
              <li className="flex items-start gap-2"><span className="text-[#00a69c] mt-0.5">·</span> Recruiter exclusively focused on your search</li>
              <li className="flex items-start gap-2"><span className="text-[#00a69c] mt-0.5">·</span> Incentivized toward depth and precision</li>
              <li className="flex items-start gap-2"><span className="text-[#00a69c] mt-0.5">·</span> Best for senior, specialized, passive candidate roles</li>
              <li className="flex items-start gap-2"><span className="text-[#00a69c] mt-0.5">·</span> Full market mapping and passive outreach</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          When Contingency Makes Sense
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Contingency recruiting works well in specific situations. If you are filling a mid-level role where there is a healthy pool of active candidates, a contingency recruiter can move quickly and efficiently. If you are hiring in volume — multiple similar roles at the same time — contingency can work because the recruiter can spread their effort across a larger pool.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          For senior roles, specialized roles, and passive candidate searches, contingency consistently underperforms. Not because the recruiters are bad. Because the model is not built for that kind of work.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          When Retained Is the Only Option That Works
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Retained search is the right model when the role is senior enough that the best candidates are passive, when the search needs to be confidential, when the role is highly specialized, or when the cost of a bad hire is high enough that speed is less important than precision.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          For most construction executive searches — project managers above $120,000, superintendents, directors, VPs — retained is the appropriate model. The candidates worth finding are not in the active pool. Getting to them requires the kind of sustained, relationship-based outreach that only works when the recruiter is fully committed to the search.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The <Link href="/blog/cost-of-bad-hire-construction"><span className="text-[#00a69c] hover:underline cursor-pointer">cost of a bad hire</span></Link> in construction is $500,000 to $1.2 million. A retained search fee is a fraction of that. The math is not complicated.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why Flowstate Only Does Retained
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          We only do retained search. Not because it is more profitable — it is actually more work for a similar fee. Because it is the only model that lets us do the job the way it should be done.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Retained means we are exclusively focused on your search. We are not splitting our attention across ten other clients. We are doing the market mapping, the passive outreach, the relationship work, because we have the time and the mandate to do it right.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          It also means we are selective about who we work with. We do not take every search that comes through the door. We take the ones where we believe we can genuinely help. If we are not the right fit, we will tell you that upfront. <Link href="/how-it-works"><span className="text-[#00a69c] hover:underline cursor-pointer">That is how we work</span></Link>.
        </p>

        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Want the best candidate, not just the best available one?</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            That is what retained search is for. Let us talk about whether we are the right fit.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            No pitch. Just a straight answer about your search and whether we can help.
          </p>
          <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#00a69c] text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-[#008f86] transition-colors">
            Book a 15-Minute Call
          </a>
          <p className="text-xs text-gray-500 mt-5">No pitch. No pressure. Just a straight answer.</p>
        </div>
      </div>

      {/* Related posts */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-8">More From the Field</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/construction-talent-shortage-2026">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Industry Insight</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know</p>
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
