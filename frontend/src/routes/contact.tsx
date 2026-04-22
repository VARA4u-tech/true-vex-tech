import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-primary font-bold"
            >
              Innovating solutions for a connected world
            </motion.span>
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              stagger={0.04}
              containerClassName="mt-6 px-4 max-w-[90vw] mx-auto"
              textClassName="font-display text-2xl sm:text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              Get in Touch with Truevex Technologies
            </ScrollFloat>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We’re eager to hear about your next big idea. Reach out to us, and let’s explore how
              our expertise can drive your success.
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Contact Info - 5 Columns */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="brutalist-card p-6 sm:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare size={120} className="rotate-12" />
                </div>

                <h3 className="font-display text-3xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group/item">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                        Email us
                      </p>
                      <a
                        href="mailto:info@truevextech.com"
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        info@truevextech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                        Call us
                      </p>
                      <a
                        href="tel:+918332917737"
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        +91 8332917737
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group/item">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white/40 bg-white/5 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">
                        Visit us
                      </p>
                      <p className="text-xl font-bold">
                        Plot No. 132, Opp Prasanthi Bhavan,
                        <br />
                        Karmel Nagar, Gunadala, Vijayawada,
                        <br />
                        Andhra Pradesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t-2 border-white/20">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                    Follow our journey
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        label: "Facebook",
                        href: "https://www.facebook.com/profile.php?id=61585918391755",
                      },
                      { label: "Twitter", href: "https://x.com/truevextech" },
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/truevex-technologies-pvt-ltd/",
                      },
                      { label: "Instagram", href: "https://www.instagram.com/truevextech/" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl border-2 border-white/40 bg-white/5 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - 7 Columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="brutalist-card p-6 sm:p-10 md:p-12"
              >
                <h3 className="font-display text-3xl font-bold mb-8">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl sm:rounded-2xl border-2 border-white/40 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-primary focus:bg-white/10"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl sm:rounded-2xl border-2 border-white/40 bg-white/5 px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-primary focus:bg-white/10"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground ml-1">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full rounded-2xl border-2 border-white/40 bg-white/5 px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all focus:border-primary focus:bg-white/10 resize-none"
                      placeholder="Tell us about your project..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-primary py-5 text-lg font-bold text-white transition-all hover:bg-primary-glow active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Send Message
                      <Send
                        size={20}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
    </div>
  );
}
