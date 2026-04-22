import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

const SECTIONS = [
  { id: "section1", title: "1. Introduction and Scope" },
  { id: "section2", title: "2. Information Collected" },
  { id: "section3", title: "3. How Data is Used" },
  { id: "section4", title: "4. Lawful Bases" },
  { id: "section5", title: "5. Data Sharing" },
  { id: "section6", title: "6. Storage & Retention" },
  { id: "section7", title: "7. Security Measures" },
  { id: "section8", title: "8. User Rights" },
  { id: "section9", title: "9. Cookie Policy" },
  { id: "section10", title: "10. International Transfers" },
  { id: "section11", title: "11. Children's Privacy" },
  { id: "section12", title: "12. Policy Changes" },
  { id: "section13", title: "13. Contact Details" },
];

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          return { id: s.id, offset: el.getBoundingClientRect().top };
        }
        return { id: s.id, offset: 10000 };
      });

      const closest = offsets.reduce((prev, curr) => {
        return Math.abs(curr.offset - 100) < Math.abs(prev.offset - 100) ? curr : prev;
      });

      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Hero Section */}
          <div className="mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl font-bold tracking-tight md:text-7xl"
            >
              Privacy <span className="text-primary shadow-glow-accent">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              At TrueVex Technologies, we are committed to protecting your privacy and handling your
              data transparently. Effective Date: January 1, 2026.
            </motion.p>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-2 brutalist-card p-6 bg-slate-950/20 backdrop-blur-md">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  Contents
                </h3>
                {SECTIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                      activeSection === s.id
                        ? "bg-primary/10 text-primary border-l-2 border-primary translate-x-1"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* Content Area */}
            <div className="lg:col-span-8 space-y-20">
              <section id="section1" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">1. Introduction and Scope</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Welcome to TrueVex Technologies, a service provided by our software consultancy.
                    This Privacy Policy outlines how we collect, use, disclose, and protect your
                    information when you visit our website, use our services, or interact with us.
                  </p>
                  <p>
                    This policy applies to all visitors, users, and others who access the TrueVex
                    platform. By using our services, you agree to the collection and use of
                    information in accordance with this policy.
                  </p>
                </div>
              </section>

              <section id="section2" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">2. Information Collected</h2>
                <div className="space-y-8">
                  <div className="brutalist-card p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      2.1. Personal Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This includes information you provide directly to us, such as your name, email
                      address, company name, and contact details when you sign up for an account,
                      subscribe to our newsletter, or contact us for support.
                    </p>
                  </div>
                  <div className="brutalist-card p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">2.2. Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect information on how the service is accessed and used.
                      This Usage Data may include information such as your computer's IP address,
                      browser type, browser version, the pages of our service that you visit, the
                      time and date of your visit, and other diagnostic data.
                    </p>
                  </div>
                  <div className="brutalist-card p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">2.3. Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies and similar tracking technologies to track activity on our
                      service and hold certain information. For more details, please refer to our
                      dedicated Cookie Policy section.
                    </p>
                  </div>
                </div>
              </section>

              <section id="section3" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">3. How Data is Used</h2>
                <ul className="grid gap-4 md:grid-cols-2">
                  {[
                    "To provide and maintain our service",
                    "To notify you about changes",
                    "To allow interactive feature participation",
                    "To provide customer support",
                    "To gather analysis for improvement",
                    "To monitor usage and performance",
                    "To detect and address technical issues",
                    "To provide news and special offers",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#0D7E92]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="section4" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">4. Lawful Bases for Processing</h2>
                <div className="grid gap-6">
                  {[
                    {
                      t: "Consent",
                      d: "Clear consent given for specific processing purposes.",
                    },
                    {
                      t: "Contract",
                      d: "Necessary for a contract or pre-contractual steps.",
                    },
                    {
                      t: "Legal Obligation",
                      d: "Necessary for compliance with relevant laws.",
                    },
                    {
                      t: "Legitimate Interests",
                      d: "Necessary for our or a third party's legitimate interests.",
                    },
                  ].map((base) => (
                    <div key={base.t} className="flex gap-6 items-start">
                      <div className="text-primary font-bold min-w-[120px] pt-1">{base.t}</div>
                      <div className="text-muted-foreground border-l border-white/10 pl-6 py-1">
                        {base.d}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="section5" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">5. Data Sharing and Third Parties</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>
                    We may share your information with third parties in the following situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mt-4">
                    <li>
                      <strong>Service Providers:</strong> To facilitate our service and perform
                      service-related tasks.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with any merger, sale, or
                      acquisition.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When necessary to comply with legal
                      obligations or protect safety.
                    </li>
                  </ul>
                </div>
              </section>

              <section id="section6" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">6. Data Storage and Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TrueVex Technologies will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Privacy Policy. We will retain and use
                  your data to the extent necessary to comply with our legal obligations, resolve
                  disputes, and enforce our legal agreements and policies.
                </p>
              </section>

              <section id="section7" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">7. Security Measures</h2>
                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We implement various security measures including encryption, firewalls, and
                    secure socket layer technology (SSL) to protect your information.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["Encryption", "Firewalls", "SSL/TLS", "Secure Audits"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-slate-950 text-xs font-bold tracking-widest uppercase border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section id="section8" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">8. User Rights</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Right to access",
                    "Right to rectification",
                    "Right to erasure",
                    "Right to restrict processing",
                    "Right to object to processing",
                    "Right to data portability",
                  ].map((right) => (
                    <div
                      key={right}
                      className="p-6 brutalist-card hover:border-primary/50 transition-colors"
                    >
                      <div className="font-bold text-lg mb-2">{right}</div>
                      <p className="text-xs text-muted-foreground">
                        Exercise this right by contacting our Data Protection Officer.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="section9" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">9. Cookie Policy and Management</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    TrueVex Technologies uses cookies to enhance your experience, analyze site
                    usage, and for marketing purposes.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold text-white mb-3">Types Used:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Essential Cookies</li>
                        <li>• Analytical/Performance Cookies</li>
                        <li>• Functionality Cookies</li>
                        <li>• Targeting Cookies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-3">Management:</h4>
                      <p className="text-sm">
                        You can manage your preferences through browser settings or our cookie
                        consent widget.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="section10" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">10. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be maintained on computers located outside of your
                  jurisdiction. If you are located outside India and choose to provide information,
                  note that we transfer data to our secure servers for processing.
                </p>
              </section>

              <section id="section11" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">11. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Service does not address anyone under the age of 18. We do not knowingly
                  collect data from children. If we become aware of such data collection without
                  consent, we take immediate steps to remove it.
                </p>
              </section>

              <section id="section12" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy periodically. We will notify you of changes by
                  posting the new policy on this page and updating the effective date.
                </p>
              </section>

              <section id="section13" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">13. Contact Details</h2>
                <div className="p-10 brutalist-card bg-primary/5 border-primary/30">
                  <p className="mb-8 font-medium">
                    Questions about this policy or your data rights?
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@truevextech.com"
                      className="flex items-center gap-4 text-xl font-bold text-primary hover:text-white transition-colors"
                    >
                      <div className="h-10 w-10 grid place-items-center rounded-xl bg-primary/20 text-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      info@truevextech.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
