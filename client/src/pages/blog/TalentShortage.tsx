import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
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
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2025-11-11",
      "description": "The construction talent shortage is worse than the headlines suggest.",
      "url": "https://flowstatesearch.com/blog/construction-talent-shortage-2026"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction site with workers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-4xl mx-auto w-full">
          <Link href="/insights">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer mb-5 uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" /> Insights
            </div>
          </Link>
          <span className="inline-block bg-white/10 text-white/80 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full mb-5 border border-white/20">
            Industry Insight
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know
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
            <Calendar className="w-3.5 h-3.5" /><span>November 11, 2025</span>
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
          If you have been trying to fill a senior construction role in the last 12 months, you already know something is different.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed mb-6">
          The resumes are not as strong. The timelines are longer. The candidates you want are harder to reach and slower to move.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          You are not imagining it. The construction talent shortage is real, it is structural, and it is not going away on its own.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Numbers Are Bad. The Reality Is Worse.
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The U.S. Bureau of Labor Statistics projects that the construction industry will need to add approximately 546,000 workers annually through 2026 just to meet demand and replace retiring workers. The Associated General Contractors of America reports that 91 percent of construction firms are having difficulty finding qualified workers. A number that has been climbing for several years.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          At the executive and field leadership level, the problem is more acute. The retirement wave hitting the industry right now is concentrated at the top. The experienced project managers, superintendents, and directors who built their careers over 20 to 30 years are leaving the workforce faster than the next generation can replace them.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The headline numbers understate the problem because they measure quantity, not quality. There are construction managers available. There are not enough good ones.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "The companies that are winning in this market are not the ones with the best job postings. They are the ones that figured out how to reach the people who are not looking."
          </p>
        </blockquote>

        {/* Section 2 — Table */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Which Roles Are Hardest to Fill Right Now
        </h2>
        <div className="overflow-x-auto mb-16 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Role</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Difficulty</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Primary Reason</th>
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
              ].map(([role, difficulty, reason], i) => (
                <tr key={role} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4 font-medium text-gray-900">{role}</td>
                  <td className={`px-5 py-4 font-semibold ${difficulty === "Very High" ? "text-red-500" : difficulty === "High" ? "text-orange-500" : "text-yellow-600"}`}>{difficulty}</td>
                  <td className="px-5 py-4 text-gray-500">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why the Shortage Is Worse Than the Data Shows
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The talent shortage data measures how many people are available. It does not measure how many of those people are actually good at the job.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          In a tight market, the active candidate pool skews toward people who are between jobs for a reason. Not always a bad reason. Layoffs happen. Companies close. Markets shift. But the best construction leaders are almost never in the active pool. They are employed, performing well, and not thinking about making a move.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          This means that in a shortage market, the gap between what the data says is available and what is actually available for a high-performing role is significant. You are not just competing for a smaller pool. You are competing for a smaller pool that already skews toward the less competitive candidates. The companies that are winning figured out how to reach the people who are not looking. That is <Link href="/blog/how-to-find-passive-construction-candidates"><span className="text-[#00a69c] hover:underline cursor-pointer">a different conversation entirely</span></Link>.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What Companies Doing It Right Are Doing Differently
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-10">
          The companies that are consistently hiring well in this market share a few characteristics that have nothing to do with budget.
        </p>

        <div className="space-y-8 mb-16">
          {[
            { title: "They move fast", body: "When a strong candidate is identified, they do not take three weeks to schedule a second interview. They know that a passive candidate who is mildly interested on Monday can be completely disengaged by Friday if the process feels slow or disorganized. Speed signals respect." },
            { title: "They are straight with candidates about the role", body: "The best candidates are evaluating the opportunity as much as they are being evaluated. Companies that are honest about the challenges, the project complexity, the team dynamics, the growth path. they build more trust in the process than companies that oversell. The candidates worth hiring have seen enough to know when they are being pitched." },
            { title: "They pay what the market actually requires", body: "Not what they budgeted two years ago. Not what they paid for the last person in the role. What the market requires right now, for the specific experience they need, in their specific geography. The companies that are losing candidates at the offer stage are almost always losing them on comp, and almost always because they set the range before they understood the market." },
          ].map(({ title, body }) => (
            <div key={title} className="pl-6 border-l-2 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Role of Retained Search in a Tight Talent Market
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          In a normal market, a contingency recruiter can work. Post the role, send over some resumes, see what sticks. When there are enough candidates in the active pool, volume can compensate for precision.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          In a shortage market, that model breaks down. There are not enough active candidates to compensate for a lack of precision. You need to reach the passive candidates, and that requires a different approach.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Retained search is built for exactly this. The recruiter is engaged exclusively on your role, with the time and the mandate to do the market mapping, the outreach, and the relationship work that passive candidate recruiting requires.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The <Link href="/blog/cost-of-bad-hire-construction"><span className="text-[#00a69c] hover:underline cursor-pointer">cost of a bad hire</span></Link> in construction is $500,000 to $1.2 million. The cost of a retained search engagement is a fraction of that, with a replacement guarantee if the hire does not work out. In a tight market, it is not a luxury. It is risk management.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What to Do If You Are Hiring Right Now
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          If you are trying to fill a senior construction role right now, the most important thing you can do is stop treating it like a normal market. It is not.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Set your comp range based on current data, not last year's budget. Move fast when you find a strong candidate. Be honest about the role. And if you have been at it for more than 60 days without finding the right person, consider whether your process is reaching the candidates you actually want or just the ones who are available.
        </p>
        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">The shortage is real. Your strategy needs to match it.</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            Tell us what you are trying to fill. We will tell you what the market actually looks like.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            No pitch. Just a straight answer about whether we are the right fit for your search.
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
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Recruiting Strategy</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">How to Find Passive Construction Candidates (Who Aren't on Job Boards)</p>
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
