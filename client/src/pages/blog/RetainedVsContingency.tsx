import { useEffect } from "react";
import { Link } from "wouter";

const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg";
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
      "publisher": { "@type": "Organization", "name": "Flowstate Search" },
      "datePublished": "2026-03-16",
      "description": "Retained vs. contingency recruiting — what's the actual difference, when does each model make sense, and why Flowstate only does retained. A straight answer with no spin.",
      "url": "https://flowstatesearch.com/blog/retained-vs-contingency-construction-recruiting"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction leadership meeting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-3">Recruiting Strategy</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?
          </h1>
        </div>
      </div>

      {/* Author bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-4">
          <img src={AUTHOR_PHOTO} alt="Jordan Arp" className="w-10 h-10 rounded-full object-cover object-top" />
          <div>
            <p className="text-sm font-semibold text-gray-900">Jordan Arp</p>
            <p className="text-xs text-gray-500">Founder, Flowstate Search &nbsp;·&nbsp; March 2026</p>
          </div>
          <div className="ml-auto">
            <span className="text-xs text-gray-400 font-mono">6 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-14 prose prose-lg prose-gray max-w-none">

        <p className="text-xl text-gray-700 leading-relaxed font-light">
          Most people who call a recruiting firm do not fully understand the difference between retained and contingency search. They know one costs money upfront and one does not. Beyond that, it gets murky.
        </p>
        <p>
          Here is a straight answer — including the parts that do not make retained search look great, because you deserve to know what you are actually choosing between.
        </p>

        <h2>What Contingency Recruiting Actually Is</h2>
        <p>
          In a contingency model, the recruiter only gets paid if you hire one of their candidates. No placement, no fee. This sounds like a good deal for the client — you are not paying for effort, only for results.
        </p>
        <p>
          The reality is more complicated. Because the recruiter only gets paid on placement, they have a strong incentive to move fast and send you candidates quickly. That is not always bad. But it creates pressure to present candidates who are available — not necessarily candidates who are right.
        </p>
        <p>
          It also means the recruiter is often working your role simultaneously with five or ten other clients, because they need volume to make the model work. They are not exclusively focused on your search. They are running a portfolio.
        </p>
        <p>
          And because they are only paid on placement, they have limited incentive to do the deep market mapping and passive candidate outreach that senior roles require. That work is expensive and time-consuming, and there is no guarantee of a fee at the end of it.
        </p>

        <h2>What Retained Search Actually Is</h2>
        <p>
          In a retained model, the client pays a portion of the fee upfront — typically one-third — to engage the recruiter exclusively on their search. The recruiter is committed to that role, with the time and resources to do the full market mapping, passive candidate outreach, and relationship work that a senior search requires.
        </p>
        <p>
          The fee is typically the same percentage of first-year compensation as contingency — usually 20 to 30 percent — but it is structured differently. Part upfront, part at candidate presentation, part at placement. The recruiter has skin in the game from day one, and so does the client.
        </p>
        <p>
          The tradeoff is obvious: you are paying for work before you see results. That requires trust. It also requires a recruiter who has earned that trust.
        </p>

        <h2>The Incentive Problem Nobody Talks About</h2>
        <p>Here is the uncomfortable truth about contingency recruiting. The model creates incentives that are not always aligned with your interests.</p>
        <p>
          A contingency recruiter who sends you a candidate who is available, acceptable, and closeable gets paid. A contingency recruiter who spends six weeks doing deep market mapping to find the best passive candidate, who then takes another two weeks to close, gets paid the same amount but has done three times the work. The rational economic choice, for the recruiter, is to move fast and present available candidates.
        </p>
        <p>
          This is not a character flaw. It is a structural reality of the model. The incentives point toward speed and volume, not depth and precision.
        </p>
        <p>
          In a market where the best candidates are passive — employed, not looking, hard to reach — a model built around speed and volume will consistently underperform a model built around depth and precision. That is not an opinion. That is math.
        </p>

        {/* Pullquote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-6 my-8 not-prose">
          <p className="text-xl font-light text-gray-700 leading-relaxed italic">
            "The incentives point toward speed and volume, not depth and precision. In a market where the best candidates are passive, that model consistently underperforms."
          </p>
          <footer className="mt-3 text-sm text-gray-500">Jordan Arp, Founder — Flowstate Search</footer>
        </blockquote>

        <h2>When Contingency Makes Sense</h2>
        <p>
          Contingency recruiting works well in specific situations. If you are filling a mid-level role where there is a healthy pool of active candidates, a contingency recruiter can move quickly and efficiently. If you are hiring in volume — multiple similar roles at the same time — contingency can work because the recruiter can spread their effort across a larger pool.
        </p>
        <p>
          It also works when the role is not highly specialized and the candidate pool is broad. Entry-level and mid-level project management, administrative roles, field labor — these are situations where active candidates are plentiful and the cost of a bad hire is lower.
        </p>
        <p>
          For senior roles, specialized roles, and passive candidate searches, contingency consistently underperforms. Not because the recruiters are bad. Because the model is not built for that kind of work.
        </p>

        <h2>When Retained Is the Only Option That Works</h2>
        <p>
          Retained search is the right model when the role is senior enough that the best candidates are passive, when the search needs to be confidential, when the role is highly specialized, or when the cost of a bad hire is high enough that speed is less important than precision.
        </p>
        <p>
          For most construction executive searches — project managers above $120,000, superintendents, directors, VPs — retained is the appropriate model. The candidates worth finding are not in the active pool. Getting to them requires the kind of sustained, relationship-based outreach that only works when the recruiter is fully committed to the search.
        </p>
        <p>
          The <Link href="/blog/cost-of-bad-hire-construction" className="text-[#00a69c] hover:underline">cost of a bad hire</Link> in construction is $500,000 to $1.2 million. A retained search fee is a fraction of that. The math is not complicated.
        </p>

        <h2>Why Flowstate Only Does Retained</h2>
        <p>
          We only do retained search. Not because it is more profitable — it is actually more work for a similar fee. Because it is the only model that lets us do the job the way it should be done.
        </p>
        <p>
          Retained means we are exclusively focused on your search. We are not splitting our attention across ten other clients. We are doing the market mapping, the passive outreach, the relationship work, because we have the time and the mandate to do it right.
        </p>
        <p>
          It also means we are selective about who we work with. We do not take every search that comes through the door. We take the ones where we believe we can genuinely help. Where the role fits our expertise, the client fits our process, and the partnership has a real shot at working. If we are not the right fit, we will tell you that upfront. <Link href="/how-it-works" className="text-[#00a69c] hover:underline">That is how we work</Link>.
        </p>

        <h2>The Honest Answer</h2>
        <p>
          If you are filling a senior construction role and you want the best candidate — not just the best available candidate — retained search is the right model.
        </p>
        <p>
          If you want to understand whether Flowstate is the right retained search partner for your specific situation, <Link href="/start-your-search" className="text-[#00a69c] hover:underline">start here</Link>. We will give you a straight answer. That is the whole point.
        </p>
      </article>

      {/* CTA Block */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to hire?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want the best candidate, not just the best available one?</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            That is what retained search is for. Let us talk about whether we are the right fit for your search.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#00a69c] text-white font-semibold rounded-md hover:bg-[#008f86] transition-colors">
              Book a 15-Minute Call
            </a>
            <Link href="/insights"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-md hover:border-white/40 transition-colors">
              More from the Field
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
