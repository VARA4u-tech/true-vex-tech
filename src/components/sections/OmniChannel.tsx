import ScrollFloat from "@/components/ui/ScrollFloat";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

const ITEMS = [
  {
    title: "Discovery & Analysis",
    body: "We thoroughly understand your business goals, challenges, and technical requirements to build a solid foundation.",
  },
  {
    title: "Design & Planning",
    body: "Crafting detailed architectural designs and a clear, actionable roadmap for flawless execution.",
  },
  {
    title: "Development & Testing",
    body: "Building robust, scalable solutions using agile methodologies and rigorous quality assurance at every step.",
  },
  {
    title: "Deployment & Support",
    body: "Seamless production deployment and continuous, reliable support to ensure your long-term digital success.",
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

        <div className="mt-20 w-full">
          <ScrollStack
            itemDistance={200}
            itemScale={0.03}
            itemStackDistance={25}
            stackPosition="10%"
            baseScale={0.92}
            useWindowScroll={true}
            className="pb-48"
          >
            {ITEMS.map((it, i) => (
              <ScrollStackItem key={it.title}>
                <div className="flex flex-col h-full justify-center">
                  <div className="font-display text-base font-bold tracking-widest text-primary">
                    STEP 0{i + 1}
                  </div>
                  <h3 className="font-display mt-8 text-4xl font-bold md:text-6xl">{it.title}</h3>
                  <p className="mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
