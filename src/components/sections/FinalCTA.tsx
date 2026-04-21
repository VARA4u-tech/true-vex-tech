import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const MODELS = [
  {
    title: "Project-Based",
    subtitle: "Fixed Price",
    features: ["Defined scope", "Predictable costs", "Milestone delivery"],
  },
  {
    title: "Time & Material",
    subtitle: "Hourly Rate",
    features: ["Flexible scope", "Evolving requirements", "Pay for actual work"],
  },
  {
    title: "Dedicated Team",
    subtitle: "Monthly Fee",
    features: ["Full-time specialists", "Seamless integration", "Complete resource control"],
  },
];

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mt-0"
            textClassName="font-display text-balance text-5xl font-bold leading-[0.98] md:text-7xl"
          >
            Flexible Engagement Models
          </ScrollFloat>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            We offer multiple ways to collaborate, ensuring the perfect fit for your project's
            scope, budget, and timeline.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {MODELS.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl border-[1.5px] border-border bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/50"
            >
              <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                {m.title}
              </h3>
              <div className="mt-4 text-3xl font-bold">{m.subtitle}</div>
              <ul className="mt-8 flex-1 space-y-4">
                {m.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-muted-foreground">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-primary"
                    >
                      <path d="M20 6L9 17L4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 py-4 text-sm font-semibold transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
