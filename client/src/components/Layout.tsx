import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/why-flowstate", label: "Why Flowstate" },
    { href: "/start-search", label: "Start Your Search" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

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
            <Link href="/portal">
              <Button variant="outline" size="sm" className="font-semibold hover-brand-yellow">
                Login
              </Button>
            </Link>
            <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="font-semibold hover-brand-yellow">
                Request Portal Demo
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
              <nav className="flex flex-col gap-4 mt-8">
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
                <Link href="/portal">
                  <Button variant="outline" className="w-full mt-4 hover-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Button>
                </Link>
                <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-2 hover-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>
                    Request Portal Demo
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
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <Link href="/">
                <img src="/LogoDark_R1.png" alt="Flowstate Search" className="h-12 w-auto mb-4 cursor-pointer" />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pivotal Talent. Lasting Impact.
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
                  <a href="https://schedule.flowstatesearch.com/portal-demo" target="_blank" rel="noopener noreferrer">
                    <div className="hover:text-primary transition-colors cursor-pointer">Request Portal Demo</div>
                  </a>
                </li>
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
                  <a href="https://schedule.flowstatesearch.com/15-min-call" target="_blank" rel="noopener noreferrer">
                    <div className="hover:text-primary transition-colors cursor-pointer">Schedule a Call</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2025 Flowstate Search. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
