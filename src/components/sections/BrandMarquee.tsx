import CurvedLoop from "@/components/ui/CurvedLoop";

const SERVICES = ["Software Development", "Software Testing", "DevOps", "IT Staffing"];

const marqueeString = SERVICES.join(" ✦ ") + " ✦ ";

export function BrandMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-8 text-muted-foreground/30 hover:text-foreground transition-colors duration-500">
      <CurvedLoop
        marqueeText={marqueeString}
        speed={1.5}
        curveAmount={150}
        direction="left"
        interactive={true}
      />
    </section>
  );
}
