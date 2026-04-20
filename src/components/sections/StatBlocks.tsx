import { motion } from "framer-motion";

const STATS = [
  {
    big: "9s",
    title: "Transactions every 9 seconds",
    body: "Our customers collectively have over R7.8 billion in spend-facility available. Using our platform for buy now, pay later and retail credit payments puts you on their radar.",
  },
  {
    big: "11k+",
    title: "11,270 daily transactions",
    body: "Think of the PayJustNow community as your potential customers. As our database grows, so does your reach and income opportunities.",
  },
  {
    big: "10k+",
    title: "10,000+ points of presence",
    body: "When customers PayJustNow, they gain access to items and services without pinching their pockets. Start offering this responsible alternative to credit now.",
  },
];

export function StatBlocks() {
  return (
    <section className="relative bg-card py-28 md:py-36">
      <div className="mx-auto max-w-7xl space-y-px overflow-hidden rounded-3xl border border-border bg-border md:px-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className="grid items-center gap-10 bg-card px-6 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:px-12 md:py-24"
          >
            <div>
              <div className="font-display text-7xl font-bold leading-none tracking-tight text-gradient md:text-[140px]">
                {s.big}
              </div>
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                {s.title}
              </h3>
              <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                {s.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
