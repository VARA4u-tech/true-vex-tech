import { motion } from "framer-motion";
import pay12 from "@/assets/pay-in-12.jpg";
import pay3 from "@/assets/pay-in-3.jpg";

const PRODUCTS = [
  {
    tag: "Retail Credit",
    title: "Pay in 12",
    description:
      "For some shoppers, even paying in 3 places your product out of reach. That's why we've introduced an extra-flexible retail credit option, Pay in 12. It makes bigger-ticket items more attainable with smaller payments spread over 12 months.",
    href: "#",
    image: pay12,
  },
  {
    tag: "BNPL",
    title: "Pay in 3",
    description:
      "Convert more browsers into buyers by making your products affordable. Shoppers who PayJustNow split their purchase into 3 interest-free payments and ease the pressure on their budget. Think bigger basket sizes and fewer abandoned carts.",
    href: "#",
    image: pay3,
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            Payment products
          </span>
          <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
            More ways to get paid
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Expect more orders as shoppers pay later while you get paid upfront.
            We created these straight and split payment services to help South
            Africans boost buying power.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-md">
                  {p.tag}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-display text-3xl font-bold md:text-4xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground">
                  {p.description}
                </p>
                <a
                  href={p.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
                >
                  Learn more
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
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
