import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "/blog/construction-vp-operations-salary",
    category: "Salary Data",
    title: "VP of Operations Construction Salary Guide 2026: What the Market Actually Pays",
    description: "Real comp data by company revenue size, bonus structures, and why most companies are losing this search before it even starts.",
    readTime: "9 min",
    date: "April 7, 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-pm-salary_71f36616.jpg",
  },
  {
    slug: "/blog/cost-of-bad-hire-construction",
    category: "Hiring Strategy",
    title: "The Real Cost of a Bad Construction Executive Hire in 2026",
    description: "A failed construction executive hire costs $500K to $1.2M and 12 to 18 months of your time. Here is exactly where the money goes and how to stop it from happening again.",
    readTime: "7 min",
    date: "March 4, 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-cost-bad-hire_d2f179a0.jpg",
  },
  {
    slug: "/blog/construction-project-manager-salary",
    category: "Salary Data",
    title: "Construction Project Manager Salary Guide 2026: What PMs Actually Earn",
    description: "National medians, salary by experience level, project type, and geography. Plus what drives above-market comp.",
    readTime: "9 min",
    date: "February 11, 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-pm-salary_71f36616.jpg",
  },
  {
    slug: "/blog/construction-superintendent-salary",
    category: "Salary Data",
    title: "Construction Superintendent Salary Guide 2026: What Supers Actually Earn",
    description: "Salary by experience level, project type, and market. Plus the superintendent shortage driving comp above median.",
    readTime: "7 min",
    date: "January 14, 2026",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-super-salary_92d0929a.jpg",
  },
  {
    slug: "/blog/retained-vs-contingency-construction-recruiting",
    category: "Recruiting Models",
    title: "Retained vs. Contingency Construction Recruiting: Which Model Is Right for You?",
    description: "What is the actual difference, when does each model make sense, and why Flowstate only does retained. A straight answer with no spin.",
    readTime: "5 min",
    date: "December 9, 2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-retained-vs-contingency_f0d5f3c3.jpg",
  },
  {
    slug: "/blog/construction-talent-shortage-2026",
    category: "Market Intelligence",
    title: "Construction Talent Shortage 2026: What Every Hiring Manager Needs to Know",
    description: "The shortage is worse than the headlines suggest. Here is what is actually driving it, which roles are hardest to fill, and what companies doing it right are doing differently.",
    readTime: "6 min",
    date: "November 11, 2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-talent-shortage_bc9cb61f.jpg",
  },
  {
    slug: "/blog/how-to-find-passive-construction-candidates",
    category: "Recruiting Strategy",
    title: "How to Find Passive Construction Candidates (Who Aren't on Job Boards)",
    description: "The best construction executives are not on job boards. Here is exactly how to find the people who are currently employed, performing well, and not looking but open to the right conversation.",
    readTime: "6 min",
    date: "October 14, 2025",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663232464487/5EpJBgcsc9XY35Zdhkd8SY/blog-passive-candidates_394d5afe.jpg",
  },
];

export default function Insights() {
  useEffect(() => {
    document.title = "Insights | Flowstate Search";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Recruiting strategy, salary data, and market intelligence for construction leaders. Written by someone who does this work every day.");
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-muted/10">
        <div className="container py-14 md:py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-4">From the Field</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 max-w-xl leading-tight">
            Insights
          </h1>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
            Recruiting strategy, salary data, and market intelligence for construction leaders. Written by someone who does this work every day.
          </p>
        </div>
      </div>

      <div className="container py-12 md:py-16">
        {/* Featured post */}
        <Link href={featured.slug}>
          <div className="group cursor-pointer mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-primary/20">
                  {featured.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{featured.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime} read</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Divider */}
        <div className="border-t border-border/40 mb-12" />

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <div className="group cursor-pointer flex flex-col h-full">
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="inline-block bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-primary/20 mb-3 self-start">
                  {post.category}
                </div>
                <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all mt-auto">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border/40 bg-muted/20">
        <div className="container py-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Ready to talk about your search?</p>
          <Link href="/start-search">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
              Start Your Search <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
