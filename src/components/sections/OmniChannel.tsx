import ScrollFloat from "@/components/ui/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

const StepIcon1 = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0D7E92" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#0D7E92" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <circle cx="11" cy="11" r="8" stroke="url(#grad1)" strokeWidth="0.5" fill="url(#grad1)" />
    <path
      d="M21 21L16.65 16.65"
      stroke="#0D7E92"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="animate-pulse"
    />
    <circle cx="11" cy="11" r="4" stroke="#0D7E92" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const StepIcon2 = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      fill="#0D7E92"
      fillOpacity="0.1"
      stroke="#0D7E92"
      strokeWidth="1"
    />
    <path d="M2 17L12 22L22 17" stroke="#0D7E92" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M2 12L12 17L22 12" stroke="#0D7E92" strokeWidth="1.5" />
  </svg>
);

const StepIcon3 = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#0D7E92" strokeWidth="1.5" />
    <path d="M9 9H15V15H9V9Z" fill="#0D7E92" fillOpacity="0.3" stroke="#0D7E92" strokeWidth="1" />
    <path
      d="M2 8H4M2 12H4M2 16H4M20 8H22M20 12H22M20 16H22M8 2V4M12 2V4M16 2V4M8 20V22M12 20V22M16 20V22"
      stroke="#0D7E92"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

const StepIcon4 = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path d="M4.5 16.5L12 4.5L19.5 16.5" stroke="#0D7E92" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 4.5V22" stroke="#0D7E92" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M9 22L12 19L15 22" stroke="#0D7E92" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="11" r="2" fill="#0D7E92" fillOpacity="0.5" />
  </svg>
);

const ITEMS = [
  {
    title: "Discovery & Analysis",
    body: "We thoroughly understand your business goals, challenges, and technical requirements to build a solid foundation.",
    icon: StepIcon1,
  },
  {
    title: "Design & Planning",
    body: "Crafting detailed architectural designs and a clear, actionable roadmap for flawless execution.",
    icon: StepIcon2,
  },
  {
    title: "Development & Testing",
    body: "Building robust, scalable solutions using agile methodologies and rigorous quality assurance at every step.",
    icon: StepIcon3,
  },
  {
    title: "Deployment & Support",
    body: "Seamless production deployment and continuous, reliable support to ensure your long-term digital success.",
    icon: StepIcon4,
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

        <div className="mt-12 md:mt-24 w-full max-w-[90rem] mx-auto">
          <ScrollStack
            itemDistance={200}
            itemScale={0.03}
            itemStackDistance={20}
            stackPosition="12%"
            baseScale={0.96}
            useWindowScroll={true}
            className="pb-32 md:pb-48"
          >
            {ITEMS.map((it, i) => (
              <ScrollStackItem key={it.title}>
                <div className="relative flex flex-col h-full justify-center px-4 md:px-12 lg:px-20">
                  {/* Icon in top right - Specific tablet/desktop tuning to prevent overlap */}
                  <div className="scroll-stack-reveal-content reveal-stagger-1 absolute -right-2 -top-10 z-0 text-primary/5 md:text-primary/15 lg:text-primary/30 md:right-4 lg:right-0 md:top-0">
                    <div className="scale-[0.55] md:scale-75 lg:scale-110 origin-top-right transition-transform">
                      <it.icon />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="scroll-stack-reveal-content reveal-stagger-1 font-display text-sm md:text-base font-bold tracking-widest text-primary">
                      STEP 0{i + 1}
                    </div>
                    <h3 className="scroll-stack-reveal-content reveal-stagger-2 font-display mt-4 md:mt-8 text-3xl font-bold md:text-7xl tracking-tight leading-tight">
                      {it.title}
                    </h3>
                    <p className="scroll-stack-reveal-content reveal-stagger-3 mt-6 md:mt-8 max-w-4xl text-lg md:text-2xl text-muted-foreground leading-relaxed">
                      {it.body}
                    </p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
