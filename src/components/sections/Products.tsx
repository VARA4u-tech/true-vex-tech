import { motion } from "framer-motion";

const PRODUCTS = [
  {
    tag: "Engineering",
    title: "Software Development",
    description:
      "Building robust, scalable, and secure software solutions tailored to your unique business requirements. Our expertise spans Web, Mobile, Cloud-native, and API development.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    tag: "Quality",
    title: "Software Testing",
    description:
      "Ensuring the quality, reliability, and security of your software through rigorous testing methodologies including Automation, Performance, and Security testing.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
  },
  {
    tag: "Efficiency",
    title: "DevOps Consulting",
    description:
      "Streamlining your development lifecycle with CI/CD, Infrastructure as Code (IaC), and Cloud Migration to optimize scalability and maximum performance.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1667372333374-0d449ac7bc0b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    tag: "Resources",
    title: "IT Staffing",
    description:
      "Access top-tier IT talent exactly when you need it. We provide skilled professionals via Contract Staffing, Dedicated Teams, and Permanent Placement solutions.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1521737706234-2803fcaf542a?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Products() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Our Expertise</span>
          <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-[1.05] md:text-6xl">
            Your Advantage through Technology
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We deliver cutting-edge solutions across the entire software lifecycle, from initial
            concept to high-performance production environments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
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
                <h3 className="font-display text-3xl font-bold md:text-4xl">{p.title}</h3>
                <p className="mt-4 text-base text-muted-foreground">{p.description}</p>
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
