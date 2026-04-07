import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-pm-salary_71f36616.jpg";

export default function PMSalary() {
  useEffect(() => {
    document.title = "Construction Project Manager Salary Guide 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What do construction project managers actually earn in 2026? National medians, salary by experience level, project type, and geography. plus what drives above-market comp.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Construction Project Manager Salary Guide 2026: What PMs Actually Earn",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2026-02-11",
      "description": "What do construction project managers actually earn in 2026?",
      "url": "https://flowstatesearch.com/blog/construction-project-manager-salary"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction project manager on site" className="w-full h-full object-cover" />
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
            Construction Project Manager Salary Guide 2026: What PMs Actually Earn
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
            <Calendar className="w-3.5 h-3.5" /><span>February 11, 2026</span>
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
          Every year, someone publishes a construction project manager salary guide. Every year, hiring managers use it to set their comp range. And every year, the best project managers they are trying to hire turn down the offer.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Here is why. Most salary guides tell you what people are being paid. They do not tell you what it takes to get the person you actually want to say yes. This guide covers both.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The National Median. And Why It Lies to You
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          According to the U.S. Bureau of Labor Statistics, the median annual wage for construction managers is $104,900 as of the most recent reporting period. That number is accurate. It is also nearly useless for making a competitive offer to a high-performing project manager in 2026.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The median includes every construction manager in the country. from residential PMs in rural markets to senior project executives running $500 million commercial projects in major metros. When you compress that range into a single number, you get a figure that is too high for some markets and embarrassingly low for others.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The number you need is not the median. It is the 75th percentile for your specific project type, in your specific market, for a PM with your specific experience requirements. That number looks very different.
        </p>

        {/* Section 2 — Table */}
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
                ["Project Manager I", "3–6 years", "$75,000 – $95,000", "Projects up to $10M"],
                ["Project Manager II", "6–10 years", "$95,000 – $130,000", "Projects $10M–$50M"],
                ["Senior Project Manager", "10–15 years", "$130,000 – $165,000", "Projects $50M–$150M"],
                ["Project Executive", "15+ years", "$165,000 – $220,000+", "Multiple projects or programs"],
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
          Base salary only. Total compensation. including bonuses, profit sharing, vehicle allowances, and benefits. typically adds 15 to 30 percent on top.
        </p>

        {/* Section 3 — Table */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Salary by Project Type
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-8">
          Project type matters more than most hiring managers realize when setting comp. A PM who has spent their career on ground-up commercial office buildings commands a different market rate than one who has been doing tenant improvement work. Even if their titles are identical.
        </p>
        <div className="overflow-x-auto mb-16 rounded-xl border border-gray-100">
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
                ["Heavy Civil / Infrastructure", "+15–25%", "High complexity, regulatory burden"],
                ["Industrial / Data Center", "+20–30%", "Specialized technical knowledge"],
                ["Healthcare / Life Sciences", "+15–20%", "Strict compliance requirements"],
                ["Ground-Up Commercial", "At or above median", "Core market"],
                ["Multifamily / Residential", "At or below median", "Higher volume, lower complexity"],
                ["Tenant Improvement", "Below median", "Lower project values"],
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

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "The number you need is not the median. It is the 75th percentile for your specific project type, in your specific market, for a PM with your specific experience requirements."
          </p>
        </blockquote>

        {/* Section 4 — Table */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Salary by Geography: The 10 Markets That Pay the Most
        </h2>
        <div className="overflow-x-auto mb-16 rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Market</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Median PM Salary</th>
                <th className="text-left px-5 py-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["San Francisco / Bay Area", "$145,000 – $185,000", "Highest cost of living adjustment"],
                ["New York City", "$135,000 – $175,000", "Union market dynamics"],
                ["Seattle", "$125,000 – $160,000", "Tech-driven construction boom"],
                ["Boston", "$120,000 – $155,000", "Strong healthcare/life sciences"],
                ["Washington D.C.", "$115,000 – $150,000", "Government and federal projects"],
                ["Los Angeles", "$115,000 – $150,000", "High volume, high competition"],
                ["Denver", "$105,000 – $140,000", "Fast-growing market"],
                ["Austin", "$100,000 – $135,000", "Rapid expansion"],
                ["Chicago", "$100,000 – $130,000", "Established union market"],
                ["Phoenix", "$95,000 – $125,000", "High growth, competitive"],
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
          What Drives a PM's Salary Above Market
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-10">
          Four things consistently push a project manager's comp above the market range for their experience level and geography.
        </p>
        <div className="space-y-8 mb-16">
          {[
            { title: "P&L ownership", body: "A PM who has managed their own project budget. Not just tracked it, but owned it, reported on it, and been accountable for it. commands a premium. This is the single biggest differentiator between a PM who is worth market rate and one who is worth above it." },
            { title: "Project size and complexity", body: "There is a real difference between a PM who has run a $20 million project and one who has run a $150 million project. The skills required, the subcontractor relationships managed, the risk exposure handled. All of it scales. Comp scales with it." },
            { title: "Certifications", body: "A PMP certification adds approximately $10,000 to $20,000 to base salary on average. LEED AP, OSHA 30, and specialty certifications add smaller but meaningful premiums depending on project type." },
            { title: "Passive status", body: "A PM who is currently employed, performing well, and not looking for a job commands a premium over one who is actively on the market. The market is telling you something when someone is not looking. Pay attention to it." },
          ].map(({ title, body }) => (
            <div key={title} className="pl-6 border-l-2 border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Passive Candidate Premium
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Here is the thing about the construction project managers you actually want. They are not on Indeed. They are not refreshing LinkedIn looking for your job posting. They are on a job site somewhere, running a project well, and being paid reasonably well to do it.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          To get that person, you have to go find them. You have to reach out through a channel they trust, with a message that respects their time, and make a case compelling enough to get them to take a conversation they were not planning to have.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          This is why the salary ranges in this guide skew higher than what you will find in most published data. The published data reflects what people are currently earning. This guide reflects what it takes to get the people you actually want.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          If you are trying to hire a high-performing <Link href="/construction-project-manager-recruiter"><span className="text-[#00a69c] hover:underline cursor-pointer">construction project manager</span></Link> and your offer is at the 50th percentile, you will get 50th-percentile candidates. The ones at the 75th percentile are still employed. And they are staying that way until someone makes it worth their while to leave.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What This Means If You Are Hiring
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Set your comp range before you start the search, not after you meet the candidate. The worst thing you can do is fall in love with someone and then find out your budget is $30,000 short of what it takes to close them.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          Be honest about what the role actually requires. If you need someone who has run $100 million projects, price the role accordingly. And if you are not sure what the market looks like for the specific role you are trying to fill, that is exactly what a <Link href="/start-your-search"><span className="text-[#00a69c] hover:underline cursor-pointer">free market insight call</span></Link> is for. We will tell you what the number actually is. No pitch. No obligation.
        </p>


        {/* LinkedIn Share */}
        <div className="flex items-center justify-center gap-3 py-6 border-t border-gray-100">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Share this article</span>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://flowstatesearch.com/blog/construction-project-manager-salary"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] text-white text-sm font-semibold hover:bg-[#006097] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            Share on LinkedIn
          </a>
        </div>

        {/* CTA block */}
        <div className="bg-gray-950 text-white rounded-2xl p-10 md:p-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Not sure what the market looks like for your role?</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            We will give you a straight answer on comp, candidate availability, and what it takes to close the person you want.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            No pitch. No obligation. Just a real conversation about your search.
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
            <Link href="/blog/construction-superintendent-salary">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Compensation</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">Construction Superintendent Salary Guide 2026: What Supers Actually Earn</p>
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
