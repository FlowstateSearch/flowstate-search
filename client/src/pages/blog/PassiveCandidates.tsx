import { useEffect } from "react";
import { Link } from "wouter";

const AUTHOR_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/jordan-arp-headshot_4d62367f.jpg";
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-passive-candidates_394d5afe.jpg";

export default function PassiveCandidates() {
  useEffect(() => {
    document.title = "How to Find Passive Construction Candidates (Who Aren't on Job Boards) | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "The best construction executives aren't on job boards. Here's exactly how to find passive candidates who are currently employed, performing well, and not looking — but open to the right conversation.");

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Find Passive Construction Candidates (Who Aren't on Job Boards)",
      "author": { "@type": "Person", "name": "Jordan Arp" },
      "publisher": { "@type": "Organization", "name": "Flowstate Search" },
      "datePublished": "2026-03-16",
      "description": "The best construction executives aren't on job boards. Here's exactly how to find passive candidates who are currently employed, performing well, and not looking — but open to the right conversation.",
      "url": "https://flowstatesearch.com/blog/how-to-find-passive-construction-candidates"
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={HERO_IMAGE} alt="Construction executive in the field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto">
          <span className="inline-block text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-3">Recruiting Strategy</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            How to Find Passive Construction Candidates (Who Aren't on Job Boards)
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
          Here is the uncomfortable truth about construction recruiting: the person you actually want for your open role is probably not applying for it.
        </p>
        <p>
          They are not on Indeed. They are not refreshing LinkedIn. They are on a job site somewhere, running a project well, collecting a paycheck, and not thinking about you at all.
        </p>
        <p>That is not a problem. That is the starting point.</p>

        <h2>Why the Best Construction Leaders Aren't Looking</h2>
        <p>
          Passive candidates — people who are currently employed and not actively seeking a new role — make up approximately 70 percent of the total workforce at any given time. In construction, that number skews even higher for experienced field and project leadership, because the best operators in the industry are almost always employed. They get recruited before they ever have to look.
        </p>
        <p>
          This creates a fundamental problem with traditional recruiting. If your strategy is to post a job and wait, you are only reaching the 30 percent who are actively looking. And within that 30 percent, the best candidates are usually there for a reason. A layoff, a company closure, a situation they are trying to get out of. That is not always a red flag. But it is a much smaller and less competitive pool than the full market.
        </p>
        <p>
          The people who are performing well, staying out of trouble, and building a track record — those people are not on job boards. They have to be found.
        </p>

        <h2>The Three Ways Companies Try to Find Passive Candidates</h2>
        <p>Most companies attempt passive candidate outreach through one of three approaches, with varying degrees of success.</p>
        <p>
          <strong>LinkedIn outreach</strong> is the most common. A hiring manager or HR person sends a connection request or InMail to someone whose profile looks right. The response rate for cold LinkedIn outreach from an unknown company to a passive candidate is typically under 10 percent. For senior construction leaders who get these messages constantly, it is often lower. The message gets ignored not because the opportunity is bad, but because there is no relationship and no reason to trust the messenger.
        </p>
        <p>
          <strong>Employee referrals</strong> work better. Someone on your team knows someone who might be right. The warm introduction creates credibility that cold outreach never can. The problem is scale. Your referral network is limited to who your people know, and it is not always the right pool for senior or specialized roles.
        </p>
        <p>
          <strong>Retained search firms</strong> are the third approach, and the one that actually works for senior roles. A specialized recruiter has spent years building relationships with the people you are trying to reach. They know who is performing well, who might be open to a conversation, and how to have that conversation in a way that gets a response. They are not cold-calling. They are calling people who know them, trust them, and will at least take the meeting.
        </p>

        <h2>Why DIY Passive Outreach Usually Fails</h2>
        <p>The reason most companies fail at passive candidate outreach is not effort. It is credibility.</p>
        <p>
          When a recruiter from a firm that has placed 50 construction superintendents calls a superintendent and says "I have something worth hearing about," that superintendent has a reason to listen. They may have worked with that recruiter before. They may know someone who has. The call has context.
        </p>
        <p>
          When a hiring manager from a company the superintendent has never heard of sends a LinkedIn message, there is no context. There is no relationship. There is no reason to respond, especially when the superintendent is busy running a project and not thinking about making a move.
        </p>
        <p>
          This is not a knock on hiring managers. It is a structural reality. Building the kind of network that makes passive outreach effective takes years of consistent relationship-building in a specific industry. Most companies do not have that. They should not have to. That is what a specialized recruiter is for.
        </p>

        <h2>What a Retained Search Firm Actually Does Differently</h2>
        <p>A retained search engagement is not a job posting with a higher price tag. It is a fundamentally different process.</p>
        <p>
          It starts with market mapping — identifying every qualified person in the relevant market for the role, not just the ones who are available. That map might include 40 to 80 people for a senior project manager role. Most of them are employed. Most of them are not looking. That is the point.
        </p>
        <p>
          From that map, the recruiter identifies the 10 to 15 candidates who are the strongest fit on paper, then does the work of finding out which of them might be open to a conversation. Not a job offer. A conversation. The best passive candidates do not respond to job offers. They respond to genuine interest in their career, specific knowledge of their background, and a compelling reason to listen.
        </p>
        <p>
          The ones who are open to a conversation get a proper introduction to the opportunity — the company, the role, the comp, the growth path. The ones who are not get treated with respect and added to the relationship for the future. Because in construction, the person who is not right for this role might be exactly right for the next one.
        </p>

        <h2>The Competitive Talent Map — How Flowstate Approaches It</h2>
        <p>
          Every Flowstate engagement starts with a competitive talent map. Before we reach out to a single candidate, we build a full picture of the market for your role. Who is doing the work you need done, where they are doing it, who they are doing it for, and what it would take to get them to have a conversation.
        </p>
        <p>
          That map becomes the foundation of the search. It tells us who to prioritize, what the comp range needs to look like to be competitive, and where the realistic candidates are. Not just the available ones.
        </p>
        <p>
          It also tells you something valuable about your market, regardless of whether you hire through us. If you want to see what that looks like for your specific role, <Link href="/how-it-works" className="text-[#00a69c] hover:underline">here is how we work</Link>. And if you are ready to start a search, <Link href="/start-your-search" className="text-[#00a69c] hover:underline">this is where that begins</Link>.
        </p>

        <h2>What to Do Next</h2>
        <p>
          If you have been posting the same role for 60 days and getting resumes that are not right, the problem is not the role. The problem is the pool you are fishing in.
        </p>
        <p>
          The candidates you actually want are out there. They are just not looking at your job posting. Finding them requires a different approach — one built on relationships, market knowledge, and the kind of outreach that gets a response.
        </p>
        <p>
          That is what we do. If you want to talk about whether it is the right fit for what you are trying to build, <Link href="/start-your-search" className="text-[#00a69c] hover:underline">start here</Link>. No pitch. Just a straight conversation.
        </p>
      </article>

      {/* CTA Block */}
      <div className="bg-gray-950 text-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00a69c] text-xs font-mono uppercase tracking-widest mb-4">Ready to hire?</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stop fishing in the wrong pool.</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The candidates you want are not on job boards. We know where they are. Let us show you.
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
