import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const PRODUCTS = [
  {
    tag: "Development",
    title: "Software Development",
    description:
      "Building robust, scalable, and secure software solutions tailored to your unique business requirements. Our expertise spans across various domains and technologies, ensuring your vision becomes a reality.",
    href: "#",
    image: "https://i.ibb.co/3mMKX5ds/Chat-GPT-Image-Apr-21-2026-06-48-43-PM.png",
    features: ["Web Applications", "Mobile Apps", "Cloud-native Architecture"],
  },
  {
    tag: "Quality",
    title: "Software Testing",
    description:
      "Ensuring the quality, reliability, and security of your software through rigorous testing methodologies and advanced tools. We deliver confidence in every release.",
    href: "#",
    image: "https://i.ibb.co/ycQrk2Wr/Chat-GPT-Image-Apr-21-2026-06-49-53-PM.png",
    features: ["Automation Testing", "Performance Analysis", "Security Audits"],
  },
  {
    tag: "Cloud",
    title: "DevOps Consulting",
    description:
      "Streamlining your development lifecycle with CI/CD, Infrastructure as Code (IaC), and Cloud Migration to optimize scalability and maximum performance.",
    href: "#",
    image: "https://i.ibb.co/fzRkvkNQ/Chat-GPT-Image-Apr-21-2026-07-04-26-PM.png",
    features: ["CI/CD Pipelines", "Kubernetes", "Cloud Migration"],
  },
  {
    tag: "Resources",
    title: "IT Staffing",
    description:
      "Access top-tier IT talent exactly when you need it. We provide skilled professionals via Contract Staffing, Dedicated Teams, and Permanent Placement solutions.",
    href: "#",
    image: "https://i.ibb.co/8DF3470t/Chat-GPT-Image-Apr-21-2026-07-02-39-PM.png",
    features: ["Expert Recruitment", "Staff Augmentation", "Dedicated Teams"],
  },
];

type ProductsProps = {
  variant?: "minimal" | "full";
};

export function Products({ variant = "full" }: ProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMinimal = variant === "minimal";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // We have 4 sections, so we divide the 0-1 range by 4
    const sectionIndex = Math.min(Math.floor(latest * PRODUCTS.length), PRODUCTS.length - 1);
    if (sectionIndex !== activeIndex) {
      setActiveIndex(sectionIndex);
    }
  });

  if (isMinimal) {
    return (
      <section id="services" className="relative py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.25em] text-primary"
              >
                Our Expertise
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 font-display text-4xl font-bold md:text-6xl"
              >
                Engineering Excellence.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-muted-foreground"
            >
              We combine deep technical expertise with strategic vision to build software that
              solves complex business problems.
            </motion.p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product, index) => (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-primary/50"
              >
                <div className="mb-6 h-1 w-10 bg-primary/30 transition-all group-hover:w-full group-hover:bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                  {product.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">{product.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f) => (
                      <span key={f} className="text-[9px] font-medium uppercase text-white/40">
                        • {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="services" className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center pt-24 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-20">
            {/* Left Side: Content Detail */}
            <div className="lg:col-span-6 flex flex-col justify-center py-20">
              <div className="mb-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-primary"
                >
                  Expertise / 0{activeIndex + 1}
                </motion.span>
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 font-display text-5xl font-bold md:text-7xl"
                  >
                    {PRODUCTS[activeIndex].title}
                  </motion.h2>
                </AnimatePresence>
              </div>

              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
                      {PRODUCTS[activeIndex].description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {PRODUCTS[activeIndex].features.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="pt-12 flex gap-3">
                  {PRODUCTS.map((_, i) => (
                    <div
                      key={i}
                      className="relative h-1 w-12 overflow-hidden rounded-full bg-white/10"
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary"
                        initial={{ scaleX: 0 }}
                        animate={{
                          scaleX: i === activeIndex ? 1 : i < activeIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ originX: 0 }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Immersive Image Gallery */}
            <div className="hidden lg:flex lg:col-span-6 items-center justify-center">
              <div className="relative h-[600px] w-full max-w-[600px]">
                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={PRODUCTS[activeIndex].image}
                        alt={PRODUCTS[activeIndex].title}
                        className="h-full w-full object-contain p-12"
                      />

                      {/* Cyber Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Decorative Tech Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-dashed border-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
