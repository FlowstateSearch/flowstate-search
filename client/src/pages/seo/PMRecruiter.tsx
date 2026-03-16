import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function PMRecruiter() {
  useEffect(() => {
    document.title = "Construction Project Manager Recruiter | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Flowstate Search specializes in placing construction project managers across commercial, industrial, and specialty construction. Retained search built for the construction industry.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Flowstate Search — Construction Project Manager Recruiter",
      "description": "Retained executive search firm specializing in construction project manager placement across commercial, industrial, and specialty construction.",
      "url": "https://flowstatesearch.com/construction-project-manager-recruiter",
      "areaServed": "United States",
      "serviceType": "Construction Executive Recruiting"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const pmTypes = [
    { title: "Commercial Construction PM", desc: "Office, retail, mixed-use, and ground-up commercial projects from $5M to $200M+." },
    { title: "Industrial Construction PM", desc: "Manufacturing, warehouse, distribution, and heavy industrial projects requiring specialized safety and process knowledge." },
    { title: "Healthcare Construction PM", desc: "Hospital, clinic, and medical office projects with ICRA requirements and complex phasing." },
    { title: "Data Center / Mission Critical PM", desc: "High-tolerance, 24/7 operational environments requiring precision scheduling and commissioning experience." },
    { title: "Multifamily Construction PM", desc: "Mid-rise and high-rise residential projects with complex subcontractor coordination and unit-count scale." },
    { title: "Specialty / Tenant Improvement PM", desc: "Interior build-outs, renovations, and tenant improvement projects in occupied environments." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gray-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Construction Recruiting</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Construction Project Manager Recruiter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            Flowstate Search places construction project managers who are currently employed, performing well, and not on job boards. We find the people your competitors are trying to keep.
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
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Construction PM Roles We Place</h2>
        <p className="text-gray-500 mb-10">We specialize in project management leadership across every major construction vertical.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {pmTypes.map(({ title, desc }) => (
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

      {/* How it works */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">How a Construction PM Search Works</h2>
          <p className="text-gray-500 mb-10">Retained search is not a job posting with a higher price tag. It is a fundamentally different process.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Market Mapping", desc: "We identify every qualified PM in your target market — not just the ones who are available. That map becomes the foundation of the search." },
              { step: "02", title: "Passive Outreach", desc: "We reach out to the candidates who are employed and not looking. Our relationships in the industry get us responses that cold outreach never does." },
              { step: "03", title: "Qualified Presentation", desc: "You only meet candidates who have been fully vetted — background, comp expectations, motivation, and fit. No resume dumps." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <p className="text-4xl font-bold text-[#00a69c]/20 font-mono mb-3">{step}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Flowstate */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Construction Companies Choose Flowstate</h2>
        <div className="prose prose-lg prose-gray max-w-none">
          <p>
            Most recruiting firms treat construction project manager searches the same way they treat every other search: post the role, collect resumes, send over whoever applies. That works when the active candidate pool is strong. In today's market, it does not.
          </p>
          <p>
            The construction project managers worth hiring are almost never on job boards. They are running projects somewhere right now, performing well, and not thinking about making a move. Finding them requires a recruiter who has spent years building relationships in the construction industry — someone who can call a PM who is mid-project and have a conversation that actually gets a response.
          </p>
          <p>
            That is what Flowstate does. We have built a network of 500+ construction executives who trust us because we have treated them well — given them honest feedback, respected their time, and never pushed them toward a role that was not right for them. That network is what makes our searches work.
          </p>
          <p>
            We only do retained search. We only take searches we believe we can win. And we back every placement with a replacement guarantee. If it does not work out in the first year, we do the search again at no additional fee.
          </p>
        </div>
      </div>

      {/* Salary context */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Construction PM Salary Context</h2>
          <p className="text-gray-500 mb-8">Before you start a search, you need to know what the market actually requires. Here is a quick reference.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Experience Level</th>
                  <th className="text-left p-4 font-semibold">Typical Base Salary</th>
                  <th className="text-left p-4 font-semibold">Project Size</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Project Engineer / APM", "$65,000 – $85,000", "Under $10M"],
                  ["Project Manager", "$85,000 – $115,000", "$10M – $50M"],
                  ["Senior Project Manager", "$115,000 – $155,000", "$50M – $150M"],
                  ["Principal / Sr. PM", "$150,000 – $200,000+", "$150M+"],
                ].map(([level, salary, size]) => (
                  <tr key={level} className="border-t border-gray-100">
                    <td className="p-4 font-medium">{level}</td>
                    <td className="p-4 text-[#00a69c] font-semibold">{salary}</td>
                    <td className="p-4 text-gray-500">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            For a full breakdown by market and project type, see our <Link href="/blog/construction-project-manager-salary" className="text-[#00a69c] hover:underline">Construction PM Salary Guide</Link>.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to start?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Tell us about the PM you need.</h3>
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
