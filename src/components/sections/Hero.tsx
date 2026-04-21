import { motion } from "framer-motion";
import { useRef } from "react";
import { LampContainer } from "@/components/ui/lamp";
import LightRays from "@/components/ui/LightRays";
import VariableProximity from "@/components/ui/VariableProximity";

const STATS = [
  { value: "60%", label: "Data efficiency gain" },
  { value: "40%", label: "User engagement boost" },
  { value: "30%", label: "Cost reduction" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <LampContainer className="pt-8 md:pt-12">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={1.2}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <div ref={containerRef} className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 w-full">
        <div className="mx-auto max-w-7xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-[2px] border-white/30 bg-foreground/5 px-6 py-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Software Consultancy
          </motion.span>

          <h1 className="font-display mt-8 text-balance text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-[110px]">
            <VariableProximity
              label="Innovate. Develop. Accelerate. Your future."
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="px-4"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-10 max-w-3xl text-balance text-xl text-muted-foreground md:text-2xl md:leading-relaxed"
          >
            Leading software consultancy committed to delivering cutting-edge solutions that drive
            business growth and operational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-glow transition-transform hover:-translate-y-1 hover:bg-primary-glow"
            >
              Get a Quote
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border-[2.5px] border-white/30 bg-white/5 px-10 py-5 text-lg font-bold backdrop-blur-md transition-all hover:bg-white/10"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 overflow-hidden brutalist-card md:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-card px-8 py-12 text-center transition-colors hover:bg-white/[0.03] ${
                i < STATS.length - 1 ? "md:border-r border-white/10" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-white/10" : ""}`}
            >
              <div className="font-display text-5xl font-bold tracking-tight text-gradient md:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </LampContainer>
  );
}
