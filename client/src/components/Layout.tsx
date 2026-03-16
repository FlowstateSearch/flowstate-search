import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import BackToTop from "@/components/BackToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/how-it-works", label: "How We Work" },
    { href: "/why-flowstate", label: "Why Flowstate" },
    { href: "/community", label: "Community" },
    { href: "/start-search", label: "Start Your Search" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  // Scroll to top on route change with smooth animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/LogoDark_R1.png" alt="Flowstate Search" className="h-12 w-auto" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="font-semibold hover-brand-yellow">
                Book a 15-Min Call
              </Button>
            </a>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8 px-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <div
                      className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                        isActive(link.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </div>
                  </Link>
                ))}
                <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-2 hover-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>
                    Book a 15-Min Call
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/">
                <img src="/LogoDark_R1.png" alt="Flowstate Search" className="h-12 w-auto mb-4 cursor-pointer" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building More Than Buildings.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <div className="hover:text-primary transition-colors cursor-pointer">{link.label}</div>
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
                    <div className="hover:text-primary transition-colors cursor-pointer">Book a 15-Min Call</div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Insights */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">Insights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/insights"><div className="hover:text-primary transition-colors cursor-pointer">All Posts</div></Link></li>
                <li><Link href="/blog/cost-of-bad-hire-construction"><div className="hover:text-primary transition-colors cursor-pointer">Cost of a Bad Hire</div></Link></li>
                <li><Link href="/blog/construction-project-manager-salary"><div className="hover:text-primary transition-colors cursor-pointer">PM Salary Guide 2026</div></Link></li>
                <li><Link href="/blog/construction-superintendent-salary"><div className="hover:text-primary transition-colors cursor-pointer">Superintendent Salary 2026</div></Link></li>
              </ul>
            </div>

            {/* Roles We Recruit */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">Roles We Recruit</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Project Managers</li>
                <li>Superintendents</li>
                <li>Directors (Ops, Sales, Construction)</li>
                <li>VPs & Regional Managers</li>
                <li>Business Development</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:hello@flowstatesearch.com" className="hover:text-primary transition-colors">
                    hello@flowstatesearch.com
                  </a>
                </li>
                <li>
                  <a href="https://schedule.flowstatesearch.com/discovery-call" target="_blank" rel="noopener noreferrer">
                    <div className="hover:text-primary transition-colors cursor-pointer">Schedule a Call</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2025 Flowstate Search. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy">
                <div className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</div>
              </Link>
              <Link href="/terms">
                <div className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</div>
              </Link>
              <Link href="/llm-resources">
                <div className="hover:text-foreground transition-colors cursor-pointer">LLM Resources</div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
