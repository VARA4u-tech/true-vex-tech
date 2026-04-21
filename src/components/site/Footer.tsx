import { Logo } from "./Logo";

const COLS = [
  {
    title: "Quick Links",
    links: ["Home", "Services", "About Us", "Careers", "Contact"],
  },
  {
    title: "Our Services",
    links: [
      "Software Development",
      "Software Testing",
      "DevOps Consulting",
      "IT Staffing",
    ],
  },
];

const LEGAL = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

export function Footer() {
  return (
    <footer className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Top Grid */}
        <div className="grid gap-4 lg:grid-cols-[1fr_0.4fr]">
          {/* Main Links Box */}
          <div className="rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-10 md:p-16">
            <div className="grid gap-12 sm:grid-cols-3">
              <div>
                <h4 className="font-display text-xl font-bold text-[#DFFF4F]">Services</h4>
                <ul className="mt-8 space-y-4">
                  {["Software Development", "Software Testing", "DevOps & Cloud", "IT Staffing"].map((l) => (
                    <li key={l}>
                      <a href="#" className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white">
                        {l}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#DFFF4F] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-[#DFFF4F]">Company</h4>
                <ul className="mt-8 space-y-4">
                  {["About Us", "Our Approach", "Success Stories", "Careers", "Contact"].map((l) => (
                    <li key={l}>
                      <a href="#" className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white">
                        {l}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#DFFF4F] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-[#DFFF4F]">Resources</h4>
                <ul className="mt-8 space-y-4">
                  {["Technical Blog", "Documentation", "Case Studies", "Support Center", "Privacy Policy"].map((l) => (
                    <li key={l}>
                      <a href="#" className="group relative inline-block text-sm text-gray-400 transition-colors hover:text-white">
                        {l}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-[#DFFF4F] transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column Boxes */}
          <div className="flex flex-col gap-4">
            {/* Contact Box */}
            <div className="flex flex-1 flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-10 text-center">
              <h4 className="font-display text-xl font-bold text-[#DFFF4F]">Contact us</h4>
              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
              >
                Get Started
              </a>
              <p className="mt-6 text-sm text-gray-400">Or email us at</p>
              <a href="mailto:info@truevextech.com" className="mt-1 text-sm font-medium hover:text-[#DFFF4F] transition-colors">
                info@truevextech.com
              </a>
            </div>
            {/* Logo/Partner Box */}
            <div className="flex h-32 items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#0A0A0A]">
              <div className="h-8 w-auto opacity-50 grayscale invert transition-opacity hover:opacity-100">
                <Logo />
              </div>
            </div>
          </div>
        </div>

        {/* Massive Logo & Socials Row */}
        <div className="mt-20 flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="relative">
            <h2 className="font-display text-[12vw] font-bold leading-none tracking-tighter text-white lg:text-[140px]">
              TrueVex<span className="text-[#DFFF4F]">.</span>
            </h2>
          </div>
          
          <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">
            {[
              { label: "LinkedIn", icon: "in" },
              { label: "Instagram", icon: "ig" },
              { label: "Twitter", icon: "x" },
              { label: "Facebook", icon: "fb" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-[#0A0A0A] px-8 py-5 transition-colors"
              >
                {/* Slide Background */}
                <span className="absolute inset-0 z-0 translate-y-full bg-[#DFFF4F] transition-transform duration-150 ease-in-out group-hover:translate-y-0" />
                
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-gray-400 transition-colors group-hover:text-black">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-[10px] uppercase tracking-[0.2em] text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} TrueVex Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
