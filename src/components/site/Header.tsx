import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
];

const MORE = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 md:top-4 md:px-5`}>
      <div
        className={`mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 transition-all duration-500 md:rounded-full border-[1.5px] border-white/30 shadow-lg shadow-black/5 ${
          scrolled ? "bg-background/70 backdrop-blur-xl" : "bg-background/40 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeProps={{ className: "text-primary font-semibold" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-primary" }}
                className="px-4 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary outline-none">
                Company
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="transition-transform group-data-[state=open]:rotate-180"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 rounded-2xl border-white/20 bg-background/90 backdrop-blur-xl p-2"
              >
                {MORE.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <a
                      href={item.href}
                      className="flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground outline-none"
                    >
                      {item.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-primary-glow"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-px w-5 bg-foreground" />
              <span className="block h-px w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-muted text-foreground" }}
                inactiveProps={{ className: "text-foreground hover:bg-muted" }}
                className="rounded-lg px-3 py-3 text-base font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
