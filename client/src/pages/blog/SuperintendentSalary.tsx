import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-super-salary_92d0929a.jpg";

export default function SuperintendentSalary() {
  useEffect(() => {
    document.title = "Construction Superintendent Salary Guide 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What do construction superintendents actually earn in 2026? Salary by experience level, project type, and market. plus the superintendent shortage driving comp above median.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Construction Superintendent Salary Guide 2026: What Supers Actually Earn",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2026-01-14",
      "description": "What do construction superintendents actually earn in 2026?",
      "url": "https://flowstatesearch.com/blog/construction-superintendent-salary"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction superintendent on job site" className="w-full h-full object-cover" />
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
            Construction Superintendent Salary Guide 2026: What Supers Actually Earn
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
            <Calendar className="w-3.5 h-3.5" /><span>January 14, 2026</span>
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
          The superintendent is the most important person on your job site. They are the ones who make or break a project. Not on paper, but in the field, every day, with every subcontractor, every inspection, every problem that was not in the schedule.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          They are also among the hardest people in construction to find. And in 2026, they know it.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Superintendent Shortage Is Real. And It Is Driving Comp Up.
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The construction industry is facing a real superintendent shortage driven by two converging forces: a retirement wave among experienced field leaders and a pipeline that has not kept up with demand. The Associated General Contractors of America has reported that construction firms consistently rank field supervision as one of their hardest roles to fill. Harder than project management. Harder than estimating.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The result is straightforward. Supply is down, demand is up, and compensation is moving accordingly. Superintendents who were at market rate two years ago are now below it. Companies that have not adjusted their comp ranges are losing their best field leaders to competitors who have.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Salary by Experience Level
        </h2>
        <div className="overflow-x-auto mb-4 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Title</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Experience</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Base Salary Range</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Superintendent", "5–10 years", "$85,000 – $115,000", "Single project, up to $20M"],
                ["Senior Superintendent", "10–15 years", "$115,000 – $145,000", "Complex projects, $20M–$100M"],
                ["General Superintendent", "15–20+ years", "$145,000 – $185,000+", "Multiple projects or programs"],
                ["VP of Field Operations", "20+ years", "$185,000 – $240,000+", "Firm-wide field leadership"],
              ].map(([title, exp, range, notes], i) => (
                <tr key={title} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4 font-medium text-gray-900">{title}</td>
                  <td className="px-5 py-4 text-gray-500">{exp}</td>
                  <td className="px-5 py-4 text-[#00a69c] font-semibold">{range}</td>
                  <td className="px-5 py-4 text-gray-400 text-xs">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mb-16">
          Total compensation including bonuses, truck allowances, and per diem for travel-heavy roles typically adds 15 to 25 percent above base.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Salary by Project Type
        </h2>
        <div className="overflow-x-auto mb-4 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Project Type</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">vs. Median</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Industrial / Petrochemical", "+20–35%", "High hazard, specialized safety"],
                ["Data Center / Mission Critical", "+20–30%", "Tight tolerances, 24/7 operations"],
                ["Healthcare", "+15–20%", "Infection control, ICRA requirements"],
                ["Heavy Civil", "+15–25%", "Complex logistics, regulatory burden"],
                ["Ground-Up Commercial", "At median", "Core market"],
                ["Multifamily", "At or below median", "Higher volume, lower complexity"],
              ].map(([type, premium, notes], i) => (
                <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4 font-medium text-gray-900">{type}</td>
                  <td className="px-5 py-4 text-[#00a69c] font-semibold">{premium}</td>
                  <td className="px-5 py-4 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          A superintendent who has run industrial or mission-critical projects is not interchangeable with one who has run multifamily. Treating them as equivalent on comp is one of the fastest ways to lose a candidate before the offer stage.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "A good superintendent runs the schedule. A great superintendent owns the outcome."
          </p>
        </blockquote>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Salary by Geography
        </h2>
        <div className="overflow-x-auto mb-16 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Market</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Median Superintendent Salary</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["San Francisco / Bay Area", "$135,000 – $170,000", "Highest cost adjustment"],
                ["New York City", "$125,000 – $165,000", "Union market dynamics"],
                ["Seattle", "$115,000 – $150,000", "Active construction market"],
                ["Boston", "$110,000 – $145,000", "Healthcare and life sciences"],
                ["Washington D.C.", "$105,000 – $140,000", "Federal and government projects"],
                ["Los Angeles", "$105,000 – $140,000", "High volume"],
                ["Denver", "$95,000 – $125,000", "Growing market"],
                ["Austin", "$90,000 – $120,000", "Rapid expansion"],
                ["Phoenix", "$88,000 – $118,000", "High growth"],
                ["Nashville", "$85,000 – $115,000", "Emerging market"],
              ].map(([market, salary, notes], i) => (
                <tr key={market} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="px-5 py-4 font-medium text-gray-900">{market}</td>
                  <td className="px-5 py-4 text-[#00a69c] font-semibold">{salary}</td>
                  <td className="px-5 py-4 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What Separates a Good Super From a Great One. And What It Costs.
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The difference shows up in how they handle the moments that are not in the plan, because those are the moments that define every project. The subcontractor who does not show up. The inspection that fails. The owner who changes their mind on a Friday afternoon. A great superintendent has seen enough of these to know exactly what to do, and more importantly, they have the relationships and the credibility to get it done.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          That kind of experience does not come cheap. And it should not. The cost of having the wrong superintendent on a $50 million project. in delays, rework, subcontractor disputes, and safety incidents. dwarfs the cost of paying the right one above market. Every time. If you want the full breakdown on what a bad hire actually costs, <Link href="/blog/cost-of-bad-hire-construction"><span className="text-[#00a69c] hover:underline cursor-pointer">that is here</span></Link>.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The other thing that separates great supers: they are not looking for a job. They are running a project somewhere right now. Finding them requires someone who knows where to look and how to have a conversation that makes them want to listen.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What This Means If You Are Hiring a Superintendent
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          If you are hiring a superintendent in 2026 and your comp range is based on data from 2023, you are already behind. The shortage is real, the competition is real, and the best field leaders have options.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Set your range at the 75th percentile for your market and project type before you start the search. Know what total comp looks like. base, bonus, truck, per diem and be ready to talk about all of it. If you want to know exactly what the market looks like for the superintendent role you are trying to fill, a <Link href="/start-your-search"><span className="text-[#00a69c] hover:underline cursor-pointer">free market insight call</span></Link> will give you a straight answer in 15 minutes. No pitch. Just a straight answer.
        </p>
        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Ready to hire?</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            Want to know what the market looks like for your superintendent search?
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
