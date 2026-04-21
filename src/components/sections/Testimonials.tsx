import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const QUOTES = [
  {
    role: "Financial Services Firm",
    name: "Enterprise AI Integration",
    quote:
      "Implemented a custom AI solution that transformed our data workflow, improving processing speeds by 60% and enabling real-time analytics for our global team.",
  },
  {
    role: "Retail Sector Client",
    name: "Mobile App Development",
    quote:
      "The cross-platform application developed by TrueVex boosted our user engagement by 40% within the first quarter, significantly increasing our mobile revenue share.",
  },
  {
    role: "Logistics Company",
    name: "Cloud Infrastructure Migration",
    quote:
      "Migrating our legacy systems to a scalable cloud environment reduced our operational costs by 30% and eliminated downtime during peak season.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];
  const next = () => setI((p) => (p + 1) % QUOTES.length);
  const prev = () => setI((p) => (p - 1 + QUOTES.length) % QUOTES.length);

  return (
    <section className="relative bg-card py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">
              Success Stories
            </span>
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="center bottom+=50%"
              scrollEnd="bottom bottom-=40%"
              stagger={0.03}
              containerClassName="mt-4"
              textClassName="font-display text-balance text-4xl font-bold leading-[1.02] md:text-6xl"
            >
              Proven results for global enterprises
            </ScrollFloat>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 min-h-[320px] brutalist-card p-10 md:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="text-primary"
                fill="currentColor"
              >
                <path d="M9.5 6h-3a3 3 0 00-3 3v3a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V9a3 3 0 00-3-3zm11 0h-3a3 3 0 00-3 3v3a3 3 0 003 3h3v3a3 3 0 01-3 3v3a6 6 0 006-6V9a3 3 0 00-3-3z" />
              </svg>
              <p className="font-display mt-6 max-w-4xl text-balance text-2xl font-medium leading-snug md:text-4xl">
                {q.quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-base font-bold">{q.name}</div>
                  <div className="text-sm text-muted-foreground">{q.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
