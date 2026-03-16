import { useEffect } from "react";
import { Link } from "wouter";

const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-talent-shortage_bc9cb61f.jpg";

export default function TalentShortage() {
  useEffect(() => {
    document.title = "Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The construction talent shortage is worse than the headlines suggest. Here's what's actually driving it, which roles are hardest to fill, and what companies doing it right are doing differently.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search" },
      "datePublished": "2026-03-16",
      "description": "The construction talent shortage is worse than the headlines suggest. Here's what's actually driving it, which roles are hardest to fill, and what companies doing it right are doing differently.",
      "url": "https://flowstatesearch.com/blog/construction-talent-shortage-2026"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction site with workers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-3">Industry Insight</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know
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
          If you have been trying to fill a senior construction role in the last 12 months, you already know something is different. The resumes are not as strong. The timelines are longer. The candidates you want are harder to reach and slower to move.
        </p>
        <p>You are not imagining it. The construction talent shortage is real, it is structural, and it is not going away on its own.</p>

        <h2>The Numbers Are Bad. The Reality Is Worse.</h2>
        <p>
          The U.S. Bureau of Labor Statistics projects that the construction industry will need to add approximately 546,000 workers annually through 2026 just to meet demand and replace retiring workers. The Associated General Contractors of America reports that 91 percent of construction firms are having difficulty finding qualified workers — a number that has been climbing for several years.
        </p>
        <p>
          At the executive and field leadership level, the problem is more acute. The retirement wave hitting the industry right now is concentrated at the top — the experienced project managers, superintendents, and directors who built their careers over 20 to 30 years are leaving the workforce faster than the next generation can replace them. And the next generation, while capable, often lacks the depth of experience that comes from running projects through a full market cycle.
        </p>
        <p>
          The headline numbers understate the problem because they measure quantity, not quality. There are construction managers available. There are not enough good ones.
        </p>

        <h2>Which Roles Are Hardest to Fill Right Now</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Role</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Difficulty to Fill</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Primary Reason</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["General Superintendent", "Very High", "Retirement wave, 20+ year experience requirement"],
                ["Senior Project Manager", "Very High", "High demand, low passive availability"],
                ["Preconstruction Manager / Chief Estimator", "High", "Specialized skills, small talent pool"],
                ["Director of Operations", "High", "Senior passive candidates rarely available"],
                ["Superintendent", "High", "Shortage across all markets"],
                ["Project Manager (Mid-Level)", "Moderate-High", "More candidates, but quality varies significantly"],
              ].map(([role, difficulty, reason]) => (
                <tr key={role} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 font-medium">{role}</td>
                  <td className={`p-3 border border-gray-200 font-semibold ${difficulty === "Very High" ? "text-red-600" : difficulty === "High" ? "text-orange-500" : "text-yellow-600"}`}>{difficulty}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Why the Shortage Is Worse Than the Data Shows</h2>
        <p>
          The talent shortage data measures how many people are available. It does not measure how many of those people are actually good at the job.
        </p>
        <p>
          In a tight market, the active candidate pool skews toward people who are between jobs for a reason. Not always a bad reason. Layoffs happen. Companies close. Markets shift. But the best construction leaders are almost never in the active pool. They are employed, performing well, and not thinking about making a move.
        </p>
        <p>
          This means that in a shortage market, the gap between what the data says is available and what is actually available for a high-performing role is significant. You are not just competing for a smaller pool. You are competing for a smaller pool that already skews toward the less competitive candidates.
        </p>
        <p>
          The companies that are winning in this market are not the ones with the best job postings. They are the ones that figured out how to reach the people who are not looking. That is <Link href="/blog/how-to-find-passive-construction-candidates" className="text-[#00a69c] hover:underline">a different conversation entirely</Link>.
        </p>

        <h2>What Companies Doing It Right Are Doing Differently</h2>
        <p>The companies that are consistently hiring well in this market share a few characteristics that have nothing to do with budget.</p>
        <p>
          <strong>They move fast.</strong> When a strong candidate is identified, they do not take three weeks to schedule a second interview. They know that a passive candidate who is mildly interested on Monday can be completely disengaged by Friday if the process feels slow or disorganized. Speed signals respect.
        </p>
        <p>
          <strong>They are straight with candidates about the role.</strong> The best candidates are evaluating the opportunity as much as they are being evaluated. Companies that are honest about the challenges, the project complexity, the team dynamics, the growth path — they build more trust in the process than companies that oversell. The candidates worth hiring have seen enough to know when they are being pitched.
        </p>
        <p>
          <strong>They pay what the market actually requires.</strong> Not what they budgeted two years ago. Not what they paid for the last person in the role. What the market requires right now, for the specific experience they need, in their specific geography. The companies that are losing candidates at the offer stage are almost always losing them on comp, and almost always because they set the range before they understood the market.
        </p>

        <h2>The Role of Retained Search in a Tight Talent Market</h2>
        <p>
          In a normal market, a contingency recruiter can work. Post the role, send over some resumes, see what sticks. When there are enough candidates in the active pool, volume can compensate for precision.
        </p>
        <p>
          In a shortage market, that model breaks down. There are not enough active candidates to compensate for a lack of precision. You need to reach the passive candidates — the ones who are employed, performing well, and not looking — and that requires a different approach.
        </p>
        <p>
          Retained search is built for exactly this. The recruiter is engaged exclusively on your role, with the time and the mandate to do the market mapping, the outreach, and the relationship work that passive candidate recruiting requires. The fee is paid upfront because the work is done upfront — before a single candidate is presented.
        </p>
        <p>
          The <Link href="/blog/cost-of-bad-hire-construction" className="text-[#00a69c] hover:underline">cost of a bad hire</Link> in construction is $500,000 to $1.2 million. The cost of a retained search engagement is a fraction of that, with a replacement guarantee if the hire does not work out. In a tight market, it is not a luxury. It is risk management.
        </p>

        <h2>What to Do If You're Hiring Right Now</h2>
        <p>
          If you are trying to fill a senior construction role right now, the most important thing you can do is stop treating it like a normal market. It is not.
        </p>
        <p>
          Set your comp range based on current data, not last year's budget. Move fast when you find a strong candidate. Be honest about the role. And if you have been at it for more than 60 days without finding the right person, consider whether your process is reaching the candidates you actually want — or just the ones who are available.
        </p>
        <p>
          If you want a straight conversation about what the market looks like for your specific role, <Link href="/start-your-search" className="text-[#00a69c] hover:underline">start here</Link>. We will tell you what we are seeing. No pitch. No obligation.
        </p>
      </article>

      {/* CTA Block */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to hire?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">The shortage is real. Your strategy needs to match it.</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Let us tell you what the market actually looks like for your role right now. No pitch. Just a straight answer.
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
