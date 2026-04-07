import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";

const AUTHOR = {
  name: "Jordan Arp",
  title: "Founder, Flowstate Search",
  photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg",
};
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-passive-candidates_394d5afe.jpg";

export default function PassiveCandidates() {
  useEffect(() => {
    document.title = "How to Find Passive Construction Candidates (Who Aren't on Job Boards) | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The best construction executives aren't on job boards. Here's exactly how to find passive candidates who are currently employed, performing well, and not looking but open to the right conversation.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Find Passive Construction Candidates (Who Aren't on Job Boards)",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search", "url": "https://flowstatesearch.com" },
      "datePublished": "2025-10-14",
      "description": "The best construction executives aren't on job boards. Here's exactly how to find passive candidates who are currently employed, performing well, and not looking.",
      "url": "https://flowstatesearch.com/blog/how-to-find-passive-construction-candidates"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <article className="min-h-screen bg-white">

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction executive in the field" className="w-full h-full object-cover" />
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
            How to Find Passive Construction Candidates (Who Aren't on Job Boards)
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
            <Calendar className="w-3.5 h-3.5" /><span>October 14, 2025</span>
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
          The person you actually want for your open role is probably not applying for it.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed mb-6">
          They are not on Indeed. They are not refreshing LinkedIn. They are on a job site somewhere, running a project well, collecting a paycheck, and not thinking about you at all.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          That is not a problem. That is the starting point.
        </p>

        <hr className="border-gray-100 mb-16" />

        {/* Section 1 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why the Best Construction Leaders Are Not Looking
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Passive candidates. people who are currently employed and not actively seeking a new role. make up approximately 70 percent of the total workforce at any given time. In construction, that number skews even higher for experienced field and project leadership, because the best operators in the industry are almost always employed. They get recruited before they ever have to look.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          This creates a fundamental problem with traditional recruiting. If your strategy is to post a job and wait, you are only reaching the 30 percent who are actively looking. And within that 30 percent, the best candidates are usually there for a reason. A layoff, a company closure, a situation they are trying to get out of. That is not always a red flag. But it is a much smaller and less competitive pool than the full market.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The people who are performing well, staying out of trouble, and building a track record. those people are not on job boards. They have to be found.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#00a69c] pl-8 py-2 mb-16">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic">
            "The best passive candidates do not respond to job offers. They respond to genuine interest in their career and a compelling reason to listen."
          </p>
        </blockquote>

        {/* Section 2 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Three Ways Companies Try to Find Passive Candidates
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-10">
          Most companies attempt passive candidate outreach through one of three approaches, with varying degrees of success.
        </p>

        <div className="space-y-10 mb-16">
          {[
            {
              n: "01",
              title: "LinkedIn outreach",
              body: "The most common approach. A hiring manager sends a connection request or InMail to someone whose profile looks right. The response rate for cold LinkedIn outreach from an unknown company to a passive candidate is typically under 10 percent. For senior construction leaders who get these messages constantly, it is often lower. The message gets ignored not because the opportunity is bad, but because there is no relationship and no reason to trust the messenger."
            },
            {
              n: "02",
              title: "Employee referrals",
              body: "These work better. Someone on your team knows someone who might be right. The warm introduction creates credibility that cold outreach never can. The problem is scale. Your referral network is limited to who your people know, and it is not always the right pool for senior or specialized roles."
            },
            {
              n: "03",
              title: "Retained search firms",
              body: "The approach that actually works for senior roles. A specialized recruiter has spent years building relationships with the people you are trying to reach. They know who is performing well, who might be open to a conversation, and how to have that conversation in a way that gets a response. They are not cold-calling. They are calling people who know them, trust them, and will at least take the meeting."
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-6">
              <span className="text-4xl font-bold text-[#00a69c]/20 font-mono shrink-0 leading-none mt-1">{n}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Why DIY Passive Outreach Usually Fails
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          The reason most companies fail at passive candidate outreach is not effort. It is credibility.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          When a recruiter from a firm that has placed 50 construction superintendents calls a superintendent and says "I have something worth hearing about," that superintendent has a reason to listen. They may have worked with that recruiter before. They may know someone who has. The call has context.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          When a hiring manager from a company the superintendent has never heard of sends a LinkedIn message, there is no context. There is no relationship. There is no reason to respond, especially when the superintendent is busy running a project and not thinking about making a move. This is not a knock on hiring managers. It is a structural reality. Building the kind of network that makes passive outreach effective takes years of consistent relationship-building in a specific industry.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What a Retained Search Firm Actually Does Differently
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          A retained search engagement is not a job posting with a higher price tag. It is a fundamentally different process.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          It starts with market mapping. identifying every qualified person in the relevant market for the role, not just the ones who are available. That map might include 40 to 80 people for a senior project manager role. Most of them are employed. Most of them are not looking. That is the point.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          From that map, the recruiter identifies the 10 to 15 candidates who are the strongest fit on paper, then does the work of finding out which of them might be open to a conversation. Not a job offer. A conversation.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          The ones who are open to a conversation get a proper introduction to the opportunity. The ones who are not get treated with respect and added to the relationship for the future. Because in construction, the person who is not right for this role might be exactly right for the next one.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The Competitive Talent Map: How Flowstate Approaches It
        </h2>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          Every Flowstate engagement starts with a competitive talent map. Before we reach out to a single candidate, we build a full picture of the market for your role. Who is doing the work you need done, where they are doing it, who they are doing it for, and what it would take to get them to have a conversation.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-6">
          That map becomes the foundation of the search. It tells us who to prioritize, what the comp range needs to look like to be competitive, and where the realistic candidates are. Not just the available ones.
        </p>
        <p className="text-base text-gray-500 leading-relaxed mb-16">
          If you have been posting the same role for 60 days and getting resumes that are not right, the problem is not the role. The problem is the pool you are fishing in.
        </p>


        {/* LinkedIn Share */}
        <div className="flex items-center justify-center gap-3 py-6 border-t border-gray-100">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Share this article</span>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://flowstatesearch.com/blog/how-to-find-passive-construction-candidates"
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
          <p className="text-xs font-mono uppercase tracking-widest text-[#00a69c] mb-4">Stop fishing in the wrong pool</p>
          <h3 className="text-2xl font-bold mb-4 leading-snug">
            The candidates you want are not on job boards. We know where they are.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            If you want to understand <Link href="/how-it-works"><span className="text-[#00a69c] hover:underline cursor-pointer">how we work</span></Link> before you commit to anything, start there. Or if you are ready to move:
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
            <Link href="/blog/cost-of-bad-hire-construction">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Hiring Strategy</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">The Real Cost of a Bad Construction Executive Hire in 2026</p>
              </div>
            </Link>
            <Link href="/blog/retained-vs-contingency-construction-recruiting">
              <div className="group cursor-pointer">
                <p className="text-xs text-[#00a69c] font-mono uppercase tracking-wider mb-2">Recruiting Models</p>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-[#00a69c] transition-colors leading-snug">Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
