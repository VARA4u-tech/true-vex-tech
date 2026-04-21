import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const ITEMS = [
  {
    title: "Discovery & Analysis",
    body: "We thoroughly understand your business goals, challenges, and technical requirements to build a solid foundation.",
  },
  {
    title: "Design & Planning",
    body: "Crafting detailed architectural designs and a clear, actionable roadmap for flawless execution.",
  },
  {
    title: "Development & Testing",
    body: "Building robust, scalable solutions using agile methodologies and rigorous quality assurance at every step.",
  },
  {
    title: "Deployment & Support",
    body: "Seamless production deployment and continuous, reliable support to ensure your long-term digital success.",
  },
];

export function OmniChannel() {
  return (
    <section id="approach" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Our Methodology</span>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mt-4"
            textClassName="font-display text-balance text-5xl font-bold leading-[0.98] md:text-7xl"
          >
            Our Proven Approach
          </ScrollFloat>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We follow a structured, transparent process to turn your complex challenges into
            streamlined digital solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border-[1.5px] border-border bg-card p-8 md:p-10"
            >
              <div className="font-display text-sm font-bold text-primary">0{i + 1}</div>
              <h3 className="font-display mt-6 text-2xl font-bold md:text-3xl">{it.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
