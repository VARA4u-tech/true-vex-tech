import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  { label: "Careers", to: "/career" },
];

const MORE = [
  { label: "About Us", to: "#" },
  { label: "Contact", to: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-3 z-50 transition-all duration-500 px-4 md:top-4 md:px-5`}
    >
      <div
        className={`mx-auto flex h-14 md:h-20 max-w-7xl items-center justify-between px-4 transition-all duration-500 rounded-full border-[2px] md:border-[2.5px] border-white/30 shadow-lg shadow-black/5 ${
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

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`group flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors outline-none ${
                  dropdownOpen ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Company
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="w-48 overflow-hidden rounded-2xl border border-white/20 bg-background/90 p-2 shadow-2xl backdrop-blur-xl">
                      {MORE.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          onClick={() => setDropdownOpen(false)}
                          className="flex cursor-pointer items-center rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary outline-none"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-primary-glow md:px-5 md:py-2.5 md:text-sm"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 lg:hidden md:h-10 md:w-10"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            {/* Mobile Header Top Bar */}
            <div className="flex h-20 items-center justify-between px-8">
              <Logo />
              <button
                onClick={() => {
                  setOpen(false);
                  setCompanyOpen(false);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-1 flex-col justify-between px-8 py-12">
              <nav className="flex flex-col gap-6">
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-4xl font-bold tracking-tight text-white transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Company Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex w-full items-center justify-between text-4xl font-bold tracking-tight text-white transition-colors hover:text-primary"
                  >
                    Company
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: companyOpen ? 45 : 0 }}
                      className="text-primary"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {companyOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 py-6 pl-4 border-l-2 border-primary/20 mt-2">
                          {[
                            { label: "Services", to: "/services" },
                            { label: "Careers", to: "/career" },
                            { label: "About Us", to: "#" },
                            { label: "Contact", to: "#contact" },
                          ].map((item, i) => (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                to={item.to}
                                onClick={() => {
                                  setOpen(false);
                                  setCompanyOpen(false);
                                }}
                                className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>

              <div className="flex flex-col gap-8">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-16 w-full items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-glow"
                >
                  Get Started
                </a>

                {/* Social Icons Row */}
                <div className="flex justify-between gap-4">
                  {[
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/company/truevex-technologies-pvt-ltd/",
                    },
                    { label: "Instagram", href: "https://www.instagram.com/truevextech/" },
                    { label: "Twitter", href: "https://x.com/truevextech" },
                    {
                      label: "Facebook",
                      href: "https://www.facebook.com/people/Truevex-Technologies/61585918391755/",
                    },
                  ].map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-primary/20 hover:text-white"
                    >
                      <span className="sr-only">{s.label}</span>
                      {s.label === "LinkedIn" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {s.label === "Instagram" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      )}
                      {s.label === "Twitter" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                      )}
                      {s.label === "Facebook" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
