import { useEffect } from "react";
import { Link } from "wouter";

const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-super-salary_92d0929a.jpg";

export default function SuperintendentSalary() {
  useEffect(() => {
    document.title = "Construction Superintendent Salary Guide 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What do construction superintendents actually earn in 2026? Salary by experience level, project type, and market — plus the superintendent shortage driving comp above median.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Construction Superintendent Salary Guide 2026: What Supers Actually Earn",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search" },
      "datePublished": "2026-03-16",
      "description": "What do construction superintendents actually earn in 2026? Salary by experience level, project type, and market — plus the superintendent shortage driving comp above median.",
      "url": "https://flowstatesearch.com/blog/construction-superintendent-salary"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction superintendent on job site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-3">Compensation</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Construction Superintendent Salary Guide 2026: What Supers Actually Earn
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
            <span className="text-xs text-gray-400 font-mono">7 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-14 prose prose-lg prose-gray max-w-none">

        <p className="text-xl text-gray-700 leading-relaxed font-light">
          The superintendent is the most important person on your job site. They are the ones who make or break a project — not on paper, but in the field, every day, with every subcontractor, every inspection, every problem that was not in the schedule.
        </p>
        <p>They are also among the hardest people in construction to find. And in 2026, they know it.</p>

        <h2>The Superintendent Shortage Is Real — And It's Driving Comp Up</h2>
        <p>
          The construction industry is facing a real superintendent shortage driven by two converging forces: a retirement wave among experienced field leaders and a pipeline that has not kept up with demand. The Associated General Contractors of America has reported that construction firms consistently rank field supervision as one of their hardest roles to fill. Harder than project management. Harder than estimating.
        </p>
        <p>
          The result is straightforward. Supply is down, demand is up, and compensation is moving accordingly. Superintendents who were at market rate two years ago are now below it. Companies that have not adjusted their comp ranges are losing their best field leaders to competitors who have.
        </p>

        <h2>Salary by Experience Level</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Title</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Years Experience</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Typical Base Salary Range</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Superintendent", "5–10 years", "$85,000 – $115,000", "Single project, up to $20M"],
                ["Senior Superintendent", "10–15 years", "$115,000 – $145,000", "Complex projects, $20M–$100M"],
                ["General Superintendent", "15–20+ years", "$145,000 – $185,000+", "Multiple projects or programs"],
                ["VP of Field Operations", "20+ years", "$185,000 – $240,000+", "Firm-wide field leadership"],
              ].map(([title, exp, range, notes]) => (
                <tr key={title} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 font-medium">{title}</td>
                  <td className="p-3 border border-gray-200">{exp}</td>
                  <td className="p-3 border border-gray-200 text-[#00a69c] font-semibold">{range}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Total compensation including bonuses, truck allowances, and per diem for travel-heavy roles typically adds 15 to 25 percent above base.</p>

        <h2>Salary by Project Type</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Project Type</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Salary Premium vs. Median</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
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
              ].map(([type, premium, notes]) => (
                <tr key={type} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 font-medium">{type}</td>
                  <td className="p-3 border border-gray-200 text-[#00a69c] font-semibold">{premium}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>A superintendent who has run industrial or mission-critical projects is not interchangeable with one who has run multifamily. Treating them as equivalent on comp is one of the fastest ways to lose a candidate before the offer stage.</p>

        <h2>Salary by Geography</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Market</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Median Superintendent Salary</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
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
              ].map(([market, salary, notes]) => (
                <tr key={market} className="border-b border-gray-100">
                  <td className="p-3 border border-gray-200 font-medium">{market}</td>
                  <td className="p-3 border border-gray-200 text-[#00a69c] font-semibold">{salary}</td>
                  <td className="p-3 border border-gray-200 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>What Separates a Good Super From a Great One — And What It Costs</h2>
        <p>A good superintendent runs the schedule. A great superintendent owns the outcome.</p>
        <p>
          The difference shows up in how they handle the moments that are not in the plan, because those are the moments that define every project. The subcontractor who does not show up. The inspection that fails. The owner who changes their mind on a Friday afternoon. A great superintendent has seen enough of these to know exactly what to do, and more importantly, they have the relationships and the credibility to get it done.
        </p>
        <p>
          That kind of experience does not come cheap. And it should not. The cost of having the wrong superintendent on a $50 million project — in delays, rework, subcontractor disputes, and safety incidents — dwarfs the cost of paying the right one above market. Every time. If you want the full breakdown on what a bad hire actually costs, <Link href="/blog/cost-of-bad-hire-construction" className="text-[#00a69c] hover:underline">that is here</Link>.
        </p>
        <p>
          The other thing that separates great supers: they are not looking for a job. They are running a project somewhere right now. Finding them requires someone who knows where to look and how to have a conversation that makes them want to listen.
        </p>

        <h2>What This Means If You're Hiring a Superintendent</h2>
        <p>
          If you are hiring a superintendent in 2026 and your comp range is based on data from 2023, you are already behind. The shortage is real, the competition is real, and the best field leaders have options.
        </p>
        <p>
          Set your range at the 75th percentile for your market and project type before you start the search. Know what total comp looks like — base, bonus, truck, per diem — and be ready to talk about all of it. The candidates worth hiring are evaluating you as much as you are evaluating them.
        </p>
        <p>
          If you want to know exactly what the market looks like for the superintendent role you are trying to fill, in your market, for your project type, a <Link href="/start-your-search" className="text-[#00a69c] hover:underline">free market insight call</Link> will give you a straight answer in 15 minutes. No pitch. No obligation. Just the number.
        </p>
      </article>

      {/* CTA Block */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to hire?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to know what the market looks like for your superintendent search?</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We will give you a straight answer on comp, candidate availability, and what it takes to close the right person. 15 minutes. No pitch.
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
