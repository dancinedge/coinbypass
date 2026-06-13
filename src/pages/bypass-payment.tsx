import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function BypassPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="Coinjang Payment Bypass / Alternative Payment Guide 2025 - Pay with Crypto | CoinBypass"
        description="How to bypass with crypto (USDT) on Coinjang when card or bank payments are blocked. We cover situations where a payment bypass is needed, a comparison of alternative payment methods, and safety tips for using Coinjang."
        keywords="Coinjang, payment bypass, bypass payment, alternative payment, crypto bypass payment, USDT bypass, payment blocked, overseas payment bypass"
        canonical={`${site.domain}/bypass-payment`}
      />
      <CoinBypassLayout currentPath="/bypass-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🔀 Payment Bypass / Alternative Payment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">Payment Bypass</span> Guide
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                A growing number of services decline payments made with domestic cards or bank
                accounts. Crypto (USDT) payments are a leading alternative for bypassing these limits.
              </p>
            </div>
          </div>
        </section>

        {/* When you need a bypass */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                When do you need a <span className="text-coinbypass-primary">payment bypass</span>?
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                Crypto payments make a useful alternative in situations like the ones below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🚫", title: "Card Declined", desc: "When a domestic card issuer blocks payments to certain overseas merchants or industries" },
                { icon: "🌏", title: "Regional Restrictions", desc: "Overseas services where you can't sign up or pay with a Korean IP or card" },
                { icon: "🏦", title: "Account Limits", desc: "When payments are delayed by transfer limits, banking hours, or overseas remittance restrictions" },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-coinbypass-card border border-coinbypass-border text-center">
                  <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-coinbypass-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bypass procedure */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              Crypto <span className="text-coinbypass-primary">Bypass Payment Flow</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Top Up USDT",
                  desc: "Buy USDT with Korean won on Coinjang and keep it in your wallet.",
                  details: [
                    "TRC20 network recommended (cheap and fast)",
                    "Top up the payment amount plus a buffer for fees",
                    "Store on an exchange or in a personal wallet",
                  ],
                },
                {
                  step: "2",
                  title: "Choose Crypto as Payment Method",
                  desc: "Select the cryptocurrency payment option at the merchant or service.",
                  details: [
                    "Check which coins are supported, such as USDT / USDC",
                    "Confirm the designated network",
                    "Verify the displayed payment amount and validity window",
                  ],
                },
                {
                  step: "3",
                  title: "Complete Payment by Transfer",
                  desc: "Send the exact amount to the provided address and your payment is processed.",
                  details: [
                    "Do a final check of the address and network",
                    "Keep the TXID",
                    "Payment completes after block confirmation",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-coinbypass-background border border-coinbypass-border">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center font-bold text-lg text-black">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-coinbypass-muted-foreground mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-coinbypass-muted-foreground">
                          <span className="text-amber-500">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternative payment comparison */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Alternative Payment Methods Compared</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">Method</th>
                    <th className="px-6 py-4 text-center font-semibold">Bypass Effectiveness</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT Crypto Payment", emoji: "✅", note: "Few payment restrictions and fast — the most versatile alternative" },
                    { name: "USDC Crypto Payment", emoji: "✅", note: "A stablecoin alternative to USDT; check whether it's supported" },
                    { name: "Overseas Virtual Card", emoji: "⚠️", note: "Issuance conditions and regional restrictions apply" },
                    { name: "Prepaid / Gift Payment", emoji: "⚠️", note: "Requires merchant support and has amount limits" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-coinbypass-border/50 hover:bg-coinbypass-muted/30">
                      <td className="px-6 py-4 font-medium">{row.name}</td>
                      <td className="px-6 py-4 text-center text-2xl">{row.emoji}</td>
                      <td className="px-6 py-4 text-coinbypass-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Safety tips */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Bypass Payment Safety Tips</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ Recommended</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Use only trusted top-up shops and merchants</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Double-check the network and address</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Keep the TXID and transaction records</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Confirm relevant laws and tax obligations</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ Caution</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Crypto transfers cannot be canceled or refunded</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Accessing vendors or links of unknown origin</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Vendors offering abnormally favorable terms</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Sharing your wallet seed phrase or password with others</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Top Up USDT First
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              The starting point for a bypass payment is topping up USDT. Check the step-by-step guide to using Coinjang.
            </p>
            <a
              href="/usdt-charge-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              View USDT Top-Up Guide →
            </a>
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
