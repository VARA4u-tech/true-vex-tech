import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  {
    role: "Managing Director, Adidas",
    name: "Paddy Muldoon",
    quote:
      "Introducing an alternative payment option to customers has enabled our Adidas retail business to extend its reach. Access to the team, the integration into our payment portal, and the end-user experience have been nothing short of seamless. This has led to increased conversions, sales and repeat business.",
  },
  {
    role: "Business Owner, GoMaxx",
    name: "James Taylor",
    quote:
      "Signing up opened a whole new market segment for our business. We now provide customers with interest- and fee-free payment terms, while PayJustNow promotes our brand to new pre-approved customers within the ecosystem.",
  },
  {
    role: "Retail Operations, Puma",
    name: "Nathier Schroeder",
    quote:
      "As a leading sports brand, Puma has always been committed to providing exceptional experiences for our customers. When we partnered with PayJustNow, we were impressed by their innovative payment solution.",
  },
  {
    role: "Marketing Team, Cape Union Mart",
    name: "Cape Union Mart",
    quote:
      "PayJustNow gives Cape Union Mart a big advantage by offering customers a simple and adaptable payment option — meaning more sales potential, fewer financial obstacles, and bigger purchases.",
  },
  {
    role: "Head of Financial Services, Retailability",
    name: "Tim Maxwell",
    quote:
      "The partnership with PayJustNow has proven to be a win-win, increasing sales and customer loyalty across all of Retailability's retail brands and providing customers with a fee-free, interest-free way to pay.",
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
              Testimonials
            </span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.02] md:text-6xl">
              Why businesses love <br />
              <span className="text-gradient">PayJustNow</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 min-h-[320px] rounded-3xl border border-border bg-background p-10 md:p-16">
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
                  <div className="font-display text-base font-bold">
                    {q.name}
                  </div>
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
