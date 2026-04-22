import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsAndConditions,
});

const SECTIONS = [
  { id: "sec1", title: "1. Introduction and Scope" },
  { id: "sec2", title: "2. Definitions" },
  { id: "sec3", title: "3. User Obligations" },
  { id: "sec4", title: "4. Account Terms" },
  { id: "sec5", title: "5. Usage Rules" },
  { id: "sec6", title: "6. Payment and Billing" },
  { id: "sec7", title: "7. Intellectual Property" },
  { id: "sec8", title: "8. Warranties" },
  { id: "sec9", title: "9. Limitation of Liability" },
  { id: "sec10", title: "10. Indemnification" },
  { id: "sec11", title: "11. Termination" },
  { id: "sec12", title: "12. Governing Law" },
  { id: "sec13", title: "13. Changes to Terms" },
  { id: "sec14", title: "14. Contact Information" },
];

function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("sec1");

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
              Terms & <span className="text-primary shadow-glow-accent">Conditions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              Please read these terms carefully before using our services. Last updated: January 1,
              2026.
            </motion.p>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-32 space-y-2 brutalist-card p-6 bg-slate-950/20 backdrop-blur-md">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                  Sections
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
              <section id="sec1" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6 underline decoration-primary/30 decoration-4 underline-offset-8">
                  1. Introduction and Scope
                </h2>
                <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Welcome to TrueVex Technologies. These Terms & Conditions ("Terms") govern your
                    access to and use of our website, products, and services (collectively,
                    "Services"). By accessing or using our Services, you agree to be bound by these
                    Terms and our Privacy Policy.
                  </p>
                  <p>
                    Our software consultancy provides high-end technology solutions and legal
                    document generation services. These Terms apply to all visitors, users, and
                    others who access or use the Service.
                  </p>
                </div>
              </section>

              <section id="sec2" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">2. Definitions</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { t: "Service", d: "Refers to the website, applications, and tools provided." },
                    { t: "User", d: "Any individual or entity accessing the Service." },
                    {
                      t: "Content",
                      d: "Any text, data, or graphics displayed through the Service.",
                    },
                    { t: "Consultancy", d: "Refers to TrueVex Technologies, the provider." },
                  ].map((item) => (
                    <div key={item.t} className="brutalist-card p-6 bg-white/5">
                      <div className="text-primary font-bold mb-1">{item.t}</div>
                      <p className="text-sm text-muted-foreground">{item.d}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="sec3" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">3. User Obligations</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>By using our Services, you agree to:</p>
                  <ul className="grid gap-3 list-none pl-0">
                    {[
                      "Provide accurate and complete information",
                      "Maintain account security and notify of unauthorized use",
                      "Comply with all local and international laws",
                      "Not use the services for unlawful purposes",
                      "Not disrupt the integrity or performance of the Service",
                    ].map((li, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-primary mt-1 font-bold">0{i + 1}.</span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="sec4" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">4. Account Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may need to register for an account to access certain features. You are
                  responsible for all activities under your account. We reserve the right to suspend
                  accounts with inaccurate or false information.
                </p>
              </section>

              <section id="sec5" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">5. Service Usage Rules</h2>
                <div className="space-y-8">
                  <div className="brutalist-card p-8 border-red-500/20 hover:border-red-500/40">
                    <h3 className="text-xl font-bold mb-4 text-red-400">5.1 Prohibited Conduct</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Distributing malware or harmful code</li>
                      <li>• Attempting unauthorized access to networks</li>
                      <li>• Harvesting personally identifiable information</li>
                      <li>• Commercial solicitation without consent</li>
                    </ul>
                  </div>
                  <div className="brutalist-card p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">5.2 Content Ownership</h3>
                    <p className="text-sm text-muted-foreground">
                      Content generated is for internal use. You retain ownership of your original
                      content and grant us a license to use it as necessary to provide the Service.
                    </p>
                  </div>
                </div>
              </section>

              <section id="sec6" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">6. Payment and Billing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For paid Services, you agree to pay all applicable fees and taxes. All payments
                  are non-refundable unless otherwise specified. We reserve the right to change
                  pricing with notice.
                </p>
              </section>

              <section id="sec7" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">7. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All intellectual property in the Service (excluding user content) remains the
                  exclusive property of TrueVex Technologies. Trademarks may not be used without
                  prior written consent.
                </p>
              </section>

              <section id="sec8" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">8. Warranties and Disclaimers</h2>
                <div className="p-8 brutalist-card bg-slate-900/40 italic">
                  "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis. Legal Docs makes
                  no representations or warranties of any kind, express or implied."
                </div>
              </section>

              <section id="sec9" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TrueVex Technologies shall not be liable for any indirect, incidental, or
                  consequential damages resulting from your use or inability to use the Service.
                </p>
              </section>

              <section id="sec10" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend and hold harmless TrueVex Technologies from any claims or
                  damages resulting from your use of the Service or breach of these Terms.
                </p>
              </section>

              <section id="sec11" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate access immediately for any breach of these Terms. All provisions
                  which should survive termination (ownership, liability) shall remain in effect.
                </p>
              </section>

              <section id="sec12" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">12. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by the laws of India. Any disputes will be resolved
                  through binding arbitration in accordance with local regulations.
                </p>
              </section>

              <section id="sec13" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">13. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material revisions will be
                  notified 30 days prior. Continued use constitutes acceptance of revised terms.
                </p>
              </section>

              <section id="sec14" className="scroll-mt-32">
                <h2 className="text-3xl font-bold mb-6">14. Contact Information</h2>
                <div className="brutalist-card p-10 bg-primary/5">
                  <h4 className="text-xl font-bold mb-6">Need clarification on our terms?</h4>
                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:info@truevextech.com"
                      className="text-primary font-bold hover:underline"
                    >
                      info@truevextech.com
                    </a>
                    <p className="text-sm text-muted-foreground">
                      Innovating solutions for a connected world.
                    </p>
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

export default TermsAndConditions;
