import { motion } from "framer-motion";
import ScrollFloat from "@/components/ui/ScrollFloat";

const PRODUCTS = [
  {
    tag: "Engineering",
    title: "Software Development",
    description:
      "Building robust, scalable, and secure software solutions tailored to your unique business requirements. Our expertise spans Web, Mobile, Cloud-native, and API development.",
    href: "#",
    image: "https://i.ibb.co/3mMKX5ds/Chat-GPT-Image-Apr-21-2026-06-48-43-PM.png",
  },
  {
    tag: "Quality",
    title: "Software Testing",
    description:
      "Ensuring the quality, reliability, and security of your software through rigorous testing methodologies including Automation, Performance, and Security testing.",
    href: "#",
    image: "https://i.ibb.co/ycQrk2Wr/Chat-GPT-Image-Apr-21-2026-06-49-53-PM.png",
  },
  {
    tag: "Efficiency",
    title: "DevOps Consulting",
    description:
      "Streamlining your development lifecycle with CI/CD, Infrastructure as Code (IaC), and Cloud Migration to optimize scalability and maximum performance.",
    href: "#",
    image: "https://i.ibb.co/fzRkvkNQ/Chat-GPT-Image-Apr-21-2026-07-04-26-PM.png",
  },
  {
    tag: "Resources",
    title: "IT Staffing",
    description:
      "Access top-tier IT talent exactly when you need it. We provide skilled professionals via Contract Staffing, Dedicated Teams, and Permanent Placement solutions.",
    href: "#",
    image: "https://i.ibb.co/8DF3470t/Chat-GPT-Image-Apr-21-2026-07-02-39-PM.png",
  },
];

type ProductsProps = {
  variant?: "minimal" | "full";
};

export function Products({ variant = "full" }: ProductsProps) {
  const isMinimal = variant === "minimal";

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Our Expertise</span>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
            containerClassName="mt-4"
            textClassName="font-display text-balance text-4xl font-bold leading-[1.05] md:text-6xl"
          >
            Your Advantage through Technology
          </ScrollFloat>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We deliver cutting-edge solutions across the entire software lifecycle, from initial
            concept to high-performance production environments.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Large Hero Bento Card - Software Development */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden brutalist-card lg:col-span-2"
          >
            <div className="flex flex-col h-full">
              {!isMinimal && (
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#050505]">
                  <img
                    src={PRODUCTS[0].image}
                    alt={PRODUCTS[0].title}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-md">
                    {PRODUCTS[0].tag}
                  </div>
                </div>
              )}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="font-display text-3xl font-bold md:text-5xl">{PRODUCTS[0].title}</h3>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  {PRODUCTS[0].description}
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex gap-4">
                    {["Web", "Mobile", "Cloud"].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={PRODUCTS[0].href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
                  >
                    View Enterprise Solutions
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
              </div>
            </div>
          </motion.article>

          {/* Small Bento Card - Software Testing */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group relative overflow-hidden brutalist-card lg:col-span-1"
          >
            <div className="flex flex-col h-full p-8 md:p-10">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">{PRODUCTS[1].title}</h3>
              <p className="mt-4 text-base text-muted-foreground">{PRODUCTS[1].description}</p>
              {!isMinimal && (
                <div className="mt-8 relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-[#050505]">
                  <img
                    src={PRODUCTS[1].image}
                    className="h-full w-full object-contain transition-all duration-700 group-hover:scale-105"
                    alt=""
                  />
                </div>
              )}
            </div>
          </motion.article>

          {/* Small Bento Card - DevOps Consulting */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative overflow-hidden brutalist-card lg:col-span-1"
          >
            <div className="p-8 md:p-10 h-full flex flex-col">
              <div className="mb-6 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold md:text-3xl">{PRODUCTS[2].title}</h3>
              <p className="mt-4 text-base text-muted-foreground">{PRODUCTS[2].description}</p>
              {!isMinimal && (
                <div className="mt-8 relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-[#050505]">
                  <img
                    src={PRODUCTS[2].image}
                    className="h-full w-full object-contain transition-all duration-700 group-hover:scale-105"
                    alt=""
                  />
                </div>
              )}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  High Efficiency
                </span>
                <a
                  href={PRODUCTS[2].href}
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>

          {/* Large Horizontal Bento Card - IT Staffing */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group relative overflow-hidden brutalist-card lg:col-span-2"
          >
            <div className="flex flex-col h-full">
              {!isMinimal && (
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#050505]">
                  <img
                    src={PRODUCTS[3].image}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    alt=""
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-md">
                    Resource Solutions
                  </div>
                </div>
              )}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="md:max-w-[60%]">
                    <h3 className="font-display text-3xl font-bold md:text-5xl">
                      {PRODUCTS[3].title}
                    </h3>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {PRODUCTS[3].description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["Contract Staffing", "Dedicated Teams"].map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm font-medium text-gray-300"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
