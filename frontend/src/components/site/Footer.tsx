import { Logo } from "./Logo";
import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

const COLS = [
  {
    title: "Quick Links",
    links: ["Home", "Services", "About Us", "Careers", "Contact"],
  },
  {
    title: "Our Services",
    links: ["Software Development", "Software Testing", "DevOps Consulting", "IT Staffing"],
  },
];

const LEGAL = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

export function Footer() {
  return (
    <footer className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Brand Cyan CTA Bar */}
        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-3xl md:rounded-full bg-[#0D7E92] p-6 md:p-4 md:pl-12 md:pr-4 md:flex-row text-center md:text-left">
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">
            Join the TrueVex Enterprise Network
          </h3>
          <a
            href="#contact"
            className="rounded-full bg-black px-10 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Send request
          </a>
        </div>

        {/* Top Grid */}
        <div className="grid gap-4 lg:grid-cols-[1fr_0.4fr]">
          {/* Main Links Box */}
          <div className="brutalist-card p-10 md:p-16">
            <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
              <div>
                <h4 className="font-display text-xl font-bold text-[#0D7E92]">Services</h4>
                <ul className="mt-8 space-y-4">
                  {[
                    "Software Development",
                    "Software Testing",
                    "DevOps & Cloud",
                    "IT Staffing",
                  ].map((l) => (
                    <li key={l}>
                      <Link
                        to="/services"
                        className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {l}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#0D7E92] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-[#0D7E92]">Company</h4>
                <ul className="mt-8 space-y-4">
                  {[
                    { label: "About Us", to: "#" },
                    { label: "Our Approach", to: "#" },
                    { label: "Success Stories", to: "#" },
                    { label: "Careers", to: "/", hash: "careers" },
                    { label: "Contact", to: "#contact" },
                  ].map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        hash={l.hash}
                        className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {l.label}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#0D7E92] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-[#0D7E92]">Resources</h4>
                <ul className="mt-8 space-y-4">
                  {[
                    "Technical Blog",
                    "Documentation",
                    "Case Studies",
                    "Support Center",
                    "Privacy Policy",
                  ].map((l) => (
                    <li key={l}>
                      <Link
                        to="#"
                        className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {l}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#0D7E92] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Boxes */}
          <div className="flex flex-col gap-4">
            {/* Contact Box */}
            <div className="flex flex-1 flex-col items-center justify-center brutalist-card p-10 text-center">
              <h4 className="font-display text-xl font-bold text-[#0D7E92]">Contact us</h4>
              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Get Started
              </a>
              <p className="mt-6 text-sm text-gray-400">Or email us at</p>
              <a
                href="mailto:info@truevextech.com"
                className="mt-1 text-sm font-medium hover:text-[#0D7E92] transition-colors"
              >
                info@truevextech.com
              </a>
            </div>
            {/* Logo/Partner Box */}
            <div className="flex h-32 items-center justify-center brutalist-card">
              <div className="opacity-80 transition-opacity hover:opacity-100">
                <Logo />
              </div>
            </div>
          </div>
        </div>

        {/* Massive Logo & Socials Row */}
        <div className="mt-20 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5">
            <img
              src={logo}
              alt="TrueVex Logo"
              className="h-16 w-auto md:h-24 lg:h-32 object-contain brightness-0 invert"
            />
            <h2 className="font-display font-bold leading-none tracking-tighter text-white flex flex-col md:flex-row items-center md:items-end text-center md:text-left">
              <span className="text-[12vw] md:text-[8vw] lg:text-[100px]">TrueVex</span>
              <span className="md:ml-2 text-[5vw] md:text-[3.5vw] lg:text-[40px] text-[#0D7E92]">
                Technologies
              </span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/truevex-technologies-pvt-ltd/",
                icon: (
                  <svg
                    width="16"
                    height="16"
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
                ),
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/truevextech/",
                icon: (
                  <svg
                    width="16"
                    height="16"
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
                ),
              },
              {
                label: "Twitter",
                href: "https://x.com/truevextech",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/people/Truevex-Technologies/61585918391755/",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-[#0A0A0A] px-4 py-4 md:px-8 md:py-5 transition-colors"
              >
                <span className="absolute inset-0 z-0 translate-y-full bg-[#0D7E92] transition-transform duration-150 ease-in-out group-hover:translate-y-0" />
                <span className="relative z-10 text-gray-400 transition-colors group-hover:text-black">
                  {s.icon}
                </span>
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors group-hover:text-black">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.15em] text-gray-500 md:flex-row md:tracking-[0.2em]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} TrueVex Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-8">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors whitespace-nowrap">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
