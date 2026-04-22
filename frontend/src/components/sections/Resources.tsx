import { motion } from "framer-motion";

const RESOURCES = [
  {
    tag: "Merchant portal",
    title: "Merchant portal",
    body: "See the latest business updates, marketing opportunities, onboarding information and more.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h4" />
      </svg>
    ),
  },
  {
    tag: "Payup app",
    title: "Payup app",
    body: "Want a loadshedding-proof transaction process? Complete offline payments from anywhere using the PayUp app.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    tag: "Integrations",
    title: "Integrations",
    body: "Add us as a payment method on your website using our pre-built plugins or custom APIs.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-7 w-7"
      >
        <path d="M9 3v6M15 3v6M9 21v-6M15 21v-6M3 9h6M3 15h6M21 9h-6M21 15h-6" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
      </svg>
    ),
  },
];

export function Resources() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Resources</span>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-5xl">
              Get started with these resources
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <motion.a
              key={r.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="brutalist-card group relative flex flex-col p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                {r.icon}
              </div>
              <h3 className="font-display mt-8 text-2xl font-bold md:text-3xl">{r.title}</h3>
              <p className="mt-4 flex-1 text-sm text-muted-foreground md:text-base">{r.body}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
