import { useEffect } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-pm-salary_71f36616.jpg";

export default function PMSalary() {
  useEffect(() => {
    document.title = "Construction Project Manager Salary Guide 2026 | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "What do construction project managers actually earn in 2026? National medians, salary by experience level, project type, and geography — plus what drives above-market comp.");

    // Article schema
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Construction Project Manager Salary Guide 2026: What PMs Actually Earn",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search" },
      "datePublished": "2026-03-16",
      "description": "What do construction project managers actually earn in 2026? National medians, salary by experience level, project type, and geography — plus what drives above-market comp.",
      "url": "https://flowstatesearch.com/blog/construction-project-manager-salary"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction project manager on site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-3">Compensation</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Construction Project Manager Salary Guide 2026: What PMs Actually Earn
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
            <span className="text-xs text-gray-400 font-mono">8 min read</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-6 py-14 prose prose-lg prose-gray max-w-none">

        <p className="text-xl text-gray-700 leading-relaxed font-light">
          Every year, someone publishes a construction project manager salary guide. Every year, hiring managers use it to set their comp range. And every year, the best project managers they are trying to hire turn down the offer.
        </p>
        <p>
          Here is why. Most salary guides tell you what people are being paid. They do not tell you what it takes to get the person you actually want to say yes. This guide covers both.
        </p>

        <h2>The National Median — And Why It Lies to You</h2>
        <p>
          According to the U.S. Bureau of Labor Statistics, the median annual wage for construction managers is $104,900 as of the most recent reporting period. That number is accurate. It is also nearly useless for making a competitive offer to a high-performing project manager in 2026.
        </p>
        <p>
          The median includes every construction manager in the country — from residential PMs in rural markets to senior project executives running $500 million commercial projects in major metros. When you compress that range into a single number, you get a figure that is too high for some markets and embarrassingly low for others.
        </p>
        <p>
          The number you need is not the median. It is the 75th percentile for your specific project type, in your specific market, for a PM with your specific experience requirements. That number looks very different.
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
                ["Project Manager I", "3–6 years", "$75,000 – $95,000", "Manages projects up to $10M"],
                ["Project Manager II", "6–10 years", "$95,000 – $130,000", "Manages projects $10M–$50M"],
                ["Senior Project Manager", "10–15 years", "$130,000 – $165,000", "Manages projects $50M–$150M"],
                ["Project Executive", "15+ years", "$165,000 – $220,000+", "Manages multiple projects or programs"],
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
        <p>
          These ranges represent base salary only. Total compensation — including bonuses, profit sharing, vehicle allowances, and benefits — typically adds 15 to 30 percent on top of base for experienced PMs.
        </p>

        <h2>Salary by Project Type</h2>
        <p>
          Project type matters more than most hiring managers realize when setting comp. A PM who has spent their career on ground-up commercial office buildings commands a different market rate than one who has been doing tenant improvement work. Even if their titles are identical.
        </p>
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
                ["Heavy Civil / Infrastructure", "+15–25%", "High complexity, regulatory burden"],
                ["Industrial / Data Center", "+20–30%", "Specialized technical knowledge"],
                ["Healthcare / Life Sciences", "+15–20%", "Strict compliance requirements"],
                ["Ground-Up Commercial", "At or above median", "Core market"],
                ["Multifamily / Residential", "At or below median", "Higher volume, lower complexity"],
                ["Tenant Improvement", "Below median", "Lower project values"],
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
        <p>
          If you are hiring for industrial or data center work and offering ground-up commercial rates, you will lose the candidate. Every time.
        </p>

        <h2>Salary by Geography: The 10 Markets That Pay the Most</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200 font-semibold">Market</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Median PM Salary</th>
                <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
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

        <h2>What Drives a PM's Salary Above Market</h2>
        <p>Four things consistently push a project manager's comp above the market range for their experience level and geography.</p>
        <p>
          <strong>P&L ownership.</strong> A PM who has managed their own project budget — not just tracked it, but owned it, reported on it, and been accountable for it — commands a premium. This is the single biggest differentiator between a PM who is worth market rate and one who is worth above it.
        </p>
        <p>
          <strong>Project size and complexity.</strong> There is a real difference between a PM who has run a $20 million project and one who has run a $150 million project. The skills required, the subcontractor relationships managed, the risk exposure handled. All of it scales. Comp scales with it.
        </p>
        <p>
          <strong>Certifications.</strong> A PMP certification adds approximately $10,000 to $20,000 to base salary on average. LEED AP, OSHA 30, and specialty certifications add smaller but meaningful premiums depending on project type.
        </p>
        <p>
          <strong>Passive status.</strong> This one surprises people. A PM who is currently employed, performing well, and not looking for a job commands a premium over one who is actively on the market. The market is telling you something when someone is not looking. Pay attention to it.
        </p>

        <h2>The Passive Candidate Premium</h2>
        <p>
          Here is the thing about the construction project managers you actually want. They are not on Indeed. They are not refreshing LinkedIn looking for your job posting. They are on a job site somewhere, running a project well, and being paid reasonably well to do it.
        </p>
        <p>
          To get that person, you have to go find them. You have to reach out through a channel they trust, with a message that respects their time, and make a case compelling enough to get them to take a conversation they were not planning to have.
        </p>
        <p>
          That process, done right, typically results in a candidate who expects 10 to 20 percent above their current compensation to make a move. Not because they are greedy. Because they are not desperate. They are doing fine where they are. You are asking them to take a risk, and risk costs something.
        </p>
        <p>
          This is why the salary ranges in this guide skew higher than what you will find in most published data. The published data reflects what people are currently earning. This guide reflects what it takes to get the people you actually want.
        </p>
        <p>
          If you are trying to hire a high-performing <Link href="/construction-project-manager-recruiter" className="text-[#00a69c] hover:underline">construction project manager</Link> and your offer is at the 50th percentile, you will get 50th-percentile candidates. The ones at the 75th percentile are still employed. And they are staying that way until someone makes it worth their while to leave.
        </p>

        <h2>What This Means If You're Hiring</h2>
        <p>
          Set your comp range before you start the search, not after you meet the candidate. The worst thing you can do is fall in love with someone and then find out your budget is $30,000 short of what it takes to close them. That is a painful conversation that did not need to happen.
        </p>
        <p>
          Be honest about what the role actually requires. If you need someone who has run $100 million projects, price the role accordingly. If you are trying to hire that person at $90 million project rates, you are going to waste everyone's time.
        </p>
        <p>
          And if you are not sure what the market looks like for the specific role you are trying to fill — in your market, for your project type, at your experience level — that is exactly what a <Link href="/start-your-search" className="text-[#00a69c] hover:underline">free market insight call</Link> is for. We will tell you what the number actually is. No pitch. No obligation. Just a straight answer.
        </p>
      </article>

      {/* CTA Block */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to hire?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Not sure what the market looks like for your role?</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We will give you a straight answer on comp, candidate availability, and what it actually takes to close the person you want. No pitch. No obligation.
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
