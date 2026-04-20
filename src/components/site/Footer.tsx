import { Logo } from "./Logo";

const COLS = [
  {
    title: "Shopper",
    links: [
      "How it works",
      "Pay in 3",
      "Pay in 12",
      "Where to shop",
      "Help centre",
    ],
  },
  {
    title: "Business",
    links: [
      "Why PayJustNow",
      "Marketing solutions",
      "Integrations",
      "Merchant portal",
      "Apply now",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Press", "Careers", "About us", "FAQ"],
  },
];

const LEGAL = ["Terms and Conditions", "Privacy Policy", "PCI DSS Policy"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,_1fr)_1.1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Buy now, pay later. Split your purchases into interest-free
              instalments and shop bigger without the burden.
            </p>
            <div className="mt-8 flex gap-3">
              {["X", "IG", "FB", "in"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`PayJustNow on ${s}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-foreground/90 transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Contact us
            </h4>
            <p className="mt-5 text-sm text-muted-foreground">Or email us at</p>
            <a
              href="mailto:merchantsupport@payjustnow.com"
              className="font-display mt-2 inline-block break-all text-base font-bold text-foreground transition-colors hover:text-primary"
            >
              merchantsupport@payjustnow.com
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} PayJustNow. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {LEGAL.map((l) => (
              <a key={l} href="#" className="hover:text-foreground">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
