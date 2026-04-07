import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function SuperintendentRecruiter() {
  useEffect(() => {
    document.title = "Construction Superintendent Recruiter | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Flowstate Search places construction superintendents who are currently running projects and not on job boards. Retained search for the field leaders your competitors don't want to lose.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Flowstate Search. Construction Superintendent Recruiter",
      "description": "Retained executive search firm specializing in construction superintendent placement across commercial, industrial, and specialty construction.",
      "url": "https://flowstatesearch.com/construction-superintendent-recruiter",
      "areaServed": "United States",
      "serviceType": "Construction Executive Recruiting"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const superTypes = [
    { title: "Commercial Superintendent", desc: "Office, retail, mixed-use, and ground-up commercial projects. Strong subcontractor management and schedule ownership." },
    { title: "Industrial Superintendent", desc: "Manufacturing, warehouse, and heavy industrial projects with specialized safety protocols and process knowledge." },
    { title: "Healthcare Superintendent", desc: "Hospital and medical facility projects with ICRA requirements, infection control, and complex phasing in occupied environments." },
    { title: "Data Center Superintendent", desc: "Mission-critical environments with tight tolerances, 24/7 operations, and commissioning experience." },
    { title: "General Superintendent", desc: "Multi-project oversight and field operations leadership for firms running concurrent projects across a region." },
    { title: "Senior / Area Superintendent", desc: "Large-scale projects above $100M requiring deep subcontractor relationships and multi-trade coordination." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Construction Recruiting</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Construction Superintendent Recruiter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            The best superintendents are not on job boards. They are running a project somewhere right now. Flowstate finds them, builds the relationship, and brings them to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#00a69c] text-white font-semibold rounded-md hover:bg-[#008f86] transition-colors">
              Start Your Search
            </a>
            <Link href="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-md hover:border-white/40 transition-colors">
              How We Work
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "91%", label: "Retention at 12 months" },
            { stat: "500+", label: "Construction executives in our network" },
            { stat: "100%", label: "Retained search model" },
            { stat: "30 days", label: "Average time to first qualified candidate" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-bold text-[#00a69c]">{stat}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What we place */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Superintendent Roles We Place</h2>
        <p className="text-gray-500 mb-10">We specialize in field leadership across every major construction vertical.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {superTypes.map(({ title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-xl p-6 hover:border-[#00a69c]/30 transition-colors">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00a69c] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why supers are hard to find */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Superintendent Searches Are Different</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              The superintendent shortage is the most acute talent problem in construction right now. The AGC consistently ranks field supervision as harder to fill than project management, estimating, or any other role in the industry. The retirement wave hitting experienced supers is real, and the pipeline has not kept up.
            </p>
            <p>
              What makes superintendent searches particularly difficult is that the best ones are almost never available. A great superintendent is always employed. They get recruited before they ever have to look. The ones who are on job boards are there for a reason and that reason is worth understanding before you make an offer.
            </p>
            <p>
              Finding a great superintendent requires going to where they are: on a job site, running a project, not thinking about you. Getting their attention requires a recruiter they know, trust, and will take a call from. That is not something you can replicate with a LinkedIn message or a job posting.
            </p>
            <p>
              Flowstate has spent years building relationships with field leaders across the country. When we call a superintendent, they pick up. That is the difference.
            </p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How a Superintendent Search Works</h2>
        <p className="text-gray-500 mb-10">Retained search is not a job posting with a higher price tag. It is a fundamentally different process.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Market Mapping", desc: "We identify every qualified superintendent in your target market. Not just the ones who are available. That map becomes the foundation of the search." },
            { step: "02", title: "Passive Outreach", desc: "We reach the candidates who are employed and not looking. Our relationships in the field get us responses that cold outreach never does." },
            { step: "03", title: "Qualified Presentation", desc: "You only meet candidates who have been fully vetted, background, project history, comp expectations, and fit. No resume dumps." },
          ].map(({ step, title, desc }) => (
            <div key={step}>
              <p className="text-4xl font-bold text-[#00a69c]/20 font-mono mb-3">{step}</p>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Salary context */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Superintendent Salary Context</h2>
          <p className="text-gray-500 mb-8">Before you start a search, you need to know what the market actually requires. Here is a quick reference.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Title</th>
                  <th className="text-left p-4 font-semibold">Typical Base Salary</th>
                  <th className="text-left p-4 font-semibold">Project Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Superintendent", "$85,000 – $115,000", "Up to $20M"],
                  ["Senior Superintendent", "$115,000 – $145,000", "$20M – $100M"],
                  ["General Superintendent", "$145,000 – $185,000+", "Multiple projects"],
                  ["VP of Field Operations", "$185,000 – $240,000+", "Firm-wide leadership"],
                ].map(([title, salary, size]) => (
                  <tr key={title} className="border-t border-gray-100">
                    <td className="p-4 font-medium">{title}</td>
                    <td className="p-4 text-[#00a69c] font-semibold">{salary}</td>
                    <td className="p-4 text-gray-500">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            For a full breakdown by market and project type, see our <Link href="/blog/construction-superintendent-salary" className="text-[#00a69c] hover:underline">Construction Superintendent Salary Guide</Link>.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to start?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Tell us about the superintendent you need.</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We will tell you what the market looks like, what it will take to close the right person, and whether we are the right firm for the search. 15 minutes. No pitch.
          </p>
          <a href="https://schedule.flowstatesearch.com/your-next-hire" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#00a69c] text-white font-semibold rounded-md hover:bg-[#008f86] transition-colors">
            Book a 15-Minute Call
          </a>
        </div>
      </div>
    </div>
  );
}
