import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function UsdtChargeGuidePage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="USDT Charging Guide 2025 - How to Buy Tether on Coinjang | CoinBypass"
        description="The complete guide to charging USDT (Tether). Step by step: how to use Coinjang, choosing the TRC20 network, verifying your wallet address, charging fees, and exchange rates."
        keywords="USDT charging, buy Tether, Coinjang, coin charging service, how to buy USDT, TRC20 charging, coin charging guide"
        canonical={`${site.domain}/en/usdt-charge-guide`}
      />
      <CoinBypassLayout currentPath="/en/usdt-charge-guide">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                💰 Coinjang USDT Charging
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">USDT Charging</span> Guide
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                Tether (USDT) is a stablecoin pegged to the US dollar. By charging USDT with
                Korean won on Coinjang (a coin charging service), you can pay around payment
                blocks on overseas services using coins.
              </p>
            </div>
          </div>
        </section>

        {/* Basic info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">USDT Basics</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Coin type", value: "USDT (Tether, stablecoin)" },
                { label: "Reference value", value: "1 USDT ≈ 1 USD" },
                { label: "Recommended network", value: "TRC20 (Tron)" },
                { label: "Transfer fee", value: "About 1 USDT (on TRC20)" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border">
                  <p className="text-sm text-coinbypass-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Charging steps */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              USDT <span className="text-coinbypass-primary">Charging Steps</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Prepare a wallet",
                  desc: "First secure the wallet address that will receive your USDT.",
                  details: [
                    "An exchange wallet (Upbit, Bithumb, etc.) or a personal wallet (MetaMask, Trust Wallet)",
                    "Check that the wallet supports the TRC20 network",
                    "Copy the receiving address (a Tron address starting with T)",
                    "Exchange wallets require completed identity verification (KYC)",
                  ],
                },
                {
                  step: "2",
                  title: "Choose a Coinjang (charging service)",
                  desc: "Pick a coin charging service that lets you buy USDT with Korean won.",
                  details: [
                    "Many Telegram-channel and web-based charging providers exist",
                    "Check whether the real-time rate and charging fees are disclosed",
                    "Review trustworthiness via reviews, time in operation, etc.",
                    "Check the minimum and maximum charging limits",
                  ],
                },
                {
                  step: "3",
                  title: "Check the rate and place an order",
                  desc: "Confirm the amount to charge and the USDT rate, then place your order.",
                  details: [
                    "USDT rate = exchange rate + the service's margin (spread)",
                    "Confirm the amount of coins and the won amount to deposit",
                    "Enter the receiving wallet address (TRC20) accurately",
                    "Double-check the first and last characters of the address",
                  ],
                },
                {
                  step: "4",
                  title: "Deposit and receive",
                  desc: "Once you deposit Korean won to the account provided, USDT is sent to your wallet.",
                  details: [
                    "Usually transferred within a few minutes of deposit",
                    "On TRC20, block confirmation takes tens of seconds",
                    "Check the USDT deposit record in your wallet",
                    "Use it for payments or transfers after receiving",
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

        {/* Network comparison */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Fee Comparison by Network</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">Network</th>
                    <th className="px-6 py-4 text-right font-semibold">Transfer fee</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">TRC20 (Tron)</td>
                    <td className="px-6 py-4 text-right text-green-400">About 1 USDT</td>
                    <td className="px-6 py-4">Cheapest and fastest — the payment standard</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">ERC20 (Ethereum)</td>
                    <td className="px-6 py-4 text-right">Variable gas (several dollars+)</td>
                    <td className="px-6 py-4">Expensive fees when congested, high compatibility</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">BEP20 (BNB Chain)</td>
                    <td className="px-6 py-4 text-right text-green-400">Cheap (~$0.x)</td>
                    <td className="px-6 py-4">Binance ecosystem, check whether it is supported</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cautions */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Things to Watch When Charging</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ Must check</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Whether the sending and receiving networks match</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>The full wallet address (especially the first and last characters)</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Whether the service discloses real-time rates and fees</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>Do a small test transfer before the full charge</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ Things to avoid</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Sending on the wrong network (risk of losing your assets)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Using providers that do not disclose rates and fees</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Providers advertising abnormally good rates</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>Installing wallet apps from unknown sources</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pay With Your Charged USDT
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              Once you have charged USDT, the next step is coin payment. Walk through everything from entering the wallet address to completing the payment.
            </p>
            <a
              href="/coin-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              See how to pay with coins →
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
