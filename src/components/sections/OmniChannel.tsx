import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "eCommerce",
    body: "Pre-built plugins compatible with Shopify, Magento, WooCommerce, Salesforce, Shopstar, PrestaShop and Storefront. Plus, tailor the integration to suit your business.",
  },
  {
    title: "POS Integration",
    body: "Seamless POS integrations through ACS, Cow Hills, BCX, Posworx and Yoyo. We are constantly expanding our list of partners to keep checkout smooth.",
  },
  {
    title: "Soft Touch Integration",
    body: "Use our PayUp merchant app or static QR codes to get up and running in minutes. Cashless payments speed up checkout and reduce queues.",
  },
];

export function OmniChannel() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary">
            Omni-channel solutions
          </span>
          <h2 className="font-display mt-4 text-balance text-5xl font-bold leading-[0.98] md:text-7xl">
            Seamless <span className="text-gradient">checkout</span> wherever
            they shop
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Offer shoppers the convenience of fast checkouts online and in-store
            with the PayJustNow app.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10"
            >
              <div className="font-display text-sm font-bold text-primary">
                0{i + 1}
              </div>
              <h3 className="font-display mt-6 text-2xl font-bold md:text-3xl">
                {it.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                {it.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
