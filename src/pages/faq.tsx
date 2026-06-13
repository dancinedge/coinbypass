import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

const FAQ_SECTIONS = [
  {
    title: "USDT Top-Up",
    items: [
      {
        q: "What is USDT (Tether)?",
        a: "USDT is a stablecoin pegged to the value of one US dollar. Unlike Bitcoin or Ethereum, its price barely fluctuates, making it well suited for payments and transfers. At a Coinjang (coin top-up service), you can top up USDT with Korean won and use it for payments.",
      },
      {
        q: "What is a Coinjang (coin top-up service)?",
        a: "A service that lets you top up crypto assets such as USDT using Korean won is commonly called a Coinjang or coin top-up service. Once you deposit, it sends USDT to the wallet address you specify. It is safest to use providers that transparently disclose their rates and fees.",
      },
      {
        q: "Which network should I choose when topping up?",
        a: "We generally recommend the TRC20 (Tron) network, which is fast and has low fees. The receiving wallet's supported network and the sending network must match exactly; a mismatch can result in lost assets.",
      },
      {
        q: "How is the top-up rate determined?",
        a: "The USDT rate is basically the exchange rate plus the top-up service's margin (spread). It varies by provider, so check the real-time rate and fees before topping up.",
      },
    ],
  },
  {
    title: "Coin Payments",
    items: [
      {
        q: "How do I pay with coins?",
        a: "Simply send the displayed amount of USDT to the wallet address provided by the merchant, and the payment is complete. Always verify the network and address before sending, and keep the TXID (transaction hash) generated after the transfer.",
      },
      {
        q: "How fast is a payment processed?",
        a: "On the TRC20 network, block confirmation usually completes within a few dozen seconds. It may be slightly delayed depending on network congestion.",
      },
      {
        q: "Can I cancel a coin payment?",
        a: "Blockchain transfers are irreversible, so once sent they cannot be canceled or refunded. That is why verifying the address, network, and amount before sending is the most important step. For an address you are transacting with for the first time, we recommend a small test transfer.",
      },
      {
        q: "Can I pay with coins other than USDT?",
        a: "Some merchants support other stablecoins such as USDC. However, BTC and ETH are not recommended for payments due to price volatility and fees. Check which coins the merchant supports first.",
      },
    ],
  },
  {
    title: "Payment Bypass",
    items: [
      {
        q: "Why use coins for bypass payments?",
        a: "Many overseas services are blocked for domestic cards and bank accounts. Because coin payments do not go through card companies or banks, they offer an alternative for bypassing such regional or industry restrictions.",
      },
      {
        q: "Are coin payments always possible?",
        a: "They are only possible if the merchant supports cryptocurrency payments. Where it is not supported, you should consider other alternative payment methods such as overseas virtual cards.",
      },
      {
        q: "What should I be most careful about with bypass payments?",
        a: "Asset loss due to network mismatch, and fraudulent providers. Use only trustworthy top-up services and merchants, and avoid places that advertise abnormally favorable terms.",
      },
    ],
  },
  {
    title: "Security & Legal",
    items: [
      {
        q: "Are crypto asset payments legal?",
        a: "Holding and trading crypto assets is itself legal. However, depending on the transaction size, you may have an obligation to report income or the source of funds. For specifics, consult a tax or legal professional.",
      },
      {
        q: "How do I manage my wallet seed phrase?",
        a: "Never share your seed phrase (recovery phrase) with anyone. If this phrase is exposed, all of your wallet assets can be stolen. As a rule, store it safely offline.",
      },
      {
        q: "If I send to the wrong address, can it be reversed?",
        a: "Blockchain transfers cannot be reversed. If you send to a nonexistent address or an address on a different network, recovery is practically impossible. Always double-check the address and network before sending.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="Frequently Asked Questions (FAQ) - CoinBypass"
        description="FAQs about USDT top-up, coin payments, and payment bypass. How to use a Coinjang, choosing a network, and safety guidelines."
        keywords="USDT top-up FAQ, coin payment questions, Coinjang questions, payment bypass questions, Tether top-up FAQ"
        canonical={`${site.domain}/faq`}
      />
      <CoinBypassLayout currentPath="/faq">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <span className="text-coinbypass-primary">Questions</span>
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                We answer your questions about USDT top-up, coin payments, and payment bypass.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {FAQ_SECTIONS.map((section, si) => (
                <div key={si}>
                  <h2 className="text-2xl font-bold mb-6 text-coinbypass-primary">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <details
                        key={i}
                        className="group p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border"
                      >
                        <summary className="flex items-start justify-between cursor-pointer list-none">
                          <span className="font-semibold pr-4">{item.q}</span>
                          <span className="flex-shrink-0 text-coinbypass-muted-foreground group-open:rotate-180 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-4 text-coinbypass-muted-foreground text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have more questions?
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              For additional inquiries about USDT top-up and coin payments, please reach out via Telegram.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/30 transition-colors"
              >
                Contact on Telegram
              </a>
              <a
                href="/usdt-charge-guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold hover:bg-coinbypass-border transition-colors"
              >
                USDT Top-Up Guide
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-yellow-500/10 border-y border-yellow-500/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <span className="text-xl flex-shrink-0">⚠️</span>
              <p className="text-yellow-200/80 text-sm">
                <strong className="text-yellow-400">Disclaimer:</strong> The information on this site is for reference only and is not financial or legal advice.
                When trading or paying with crypto assets, be sure to check the relevant laws and tax obligations, and consult a professional if needed.
                Coin transfers cannot be canceled or refunded, so always double-check the address and network.
              </p>
            </div>
          </div>
        </section>
      </CoinBypassLayout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: false,
  };
}
