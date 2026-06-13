import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinBypassHome() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="CoinBypass — Coin Payment + Virtual-Account Settlement | Launch a USDT Charging Station"
        description="Accept crypto (USDT) payments without your own deposit bank account and settle via a virtual account. Rent a USDT charging station — infrastructure, payments, and settlement provided. Plus USDT charging and coin payment guides."
        keywords="charging station rental, virtual account settlement, coin payment, USDT payment, payment gateway, CoinBypass, USDT charge, TRC20, stablecoin, crypto payment"
        canonical={site.domain}
      />
      <CoinBypassLayout currentPath="/">
        {/* Hero — B2B first (charging-station rental / franchise) */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-coinbypass-primary/10 via-transparent to-coinbypass-secondary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coinbypass-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coinbypass-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-8">
                🏪 Charging Station Rental · Franchise
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-coinbypass-primary via-coinbypass-secondary to-coinbypass-primary bg-clip-text text-transparent">
                  Coin Payment + Virtual-Account Settlement
                </span>
                <br />
                <span className="text-white">Launch your own USDT charging station</span>
              </h1>

              <p className="text-xl text-coinbypass-muted-foreground max-w-3xl mx-auto mb-10">
                Accept payments in crypto (USDT) without your own deposit bank account,
                <br className="hidden md:block" />
                and settle through a virtual account. CoinBypass provides the infrastructure, payments, and settlement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary text-black font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Franchise Inquiry →
                </a>
                <a
                  href="/usdt-charge-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold text-lg hover:bg-coinbypass-border transition-colors"
                >
                  User Guides
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* B2B feature cards */}
        <section className="py-20 bg-gradient-to-b from-coinbypass-background to-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Run your own <span className="text-coinbypass-primary">charging station</span>
              </h2>
              <p className="text-xl text-coinbypass-muted-foreground max-w-2xl mx-auto">
                No deposit bank account of your own — accept coin payments and settle via virtual account.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏦", title: "Settle Without a Bank Account", desc: "Accept payments in USDT and settle via a virtual account — no separate deposit bank account required" },
                { icon: "⚡", title: "Instant Setup", desc: "Your charging station opens the moment you apply — no development or server setup needed" },
                { icon: "🌐", title: "Custom Domain", desc: "Connect your own brand domain and operate independently" },
                { icon: "📊", title: "Automatic Settlement", desc: "Transactions and fees are tallied automatically with real-time settlement" },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-coinbypass-border bg-coinbypass-card p-6">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-coinbypass-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-coinbypass-primary text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Franchise Inquiry →
              </a>
            </div>
          </div>
        </section>

        {/* ── For users (consumer) ── */}
        <section className="py-12 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coinbypass-muted border border-coinbypass-border">
              <span className="text-coinbypass-primary">{site.emoji}</span>
              <span className="text-sm text-coinbypass-muted-foreground">For Users — USDT Charging · Coin Payment · Bypass Guide</span>
            </div>
          </div>
        </section>

        {/* Why Coin Payment */}
        <section className="py-20 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why do you need <span className="text-coinbypass-primary">coin payment</span>?
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                Many services block payments made with local cards or bank accounts.
                Charging USDT lets you bypass these limits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-3">Pay for Overseas Services</h3>
                <p className="text-coinbypass-muted-foreground">
                  Pay with USDT for overseas platforms and subscription services that reject local cards.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Transfers</h3>
                <p className="text-coinbypass-muted-foreground">
                  Deposits confirm within tens of seconds on the TRC20 network. Available 24/7, regardless of bank business hours.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  💵
                </div>
                <h3 className="text-xl font-bold mb-3">Pegged to the Dollar</h3>
                <p className="text-coinbypass-muted-foreground">
                  USDT (Tether) is a stablecoin pegged to 1 USD, so you can use it for payments without worrying about price swings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coin Comparison */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-coinbypass-primary">Payment Suitability</span> by Coin
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg">
                A comparison of coins commonly used for payment and charging.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">Coin / Network</th>
                    <th className="px-6 py-4 text-center font-semibold">Payment Suitability</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT (TRC20)", emoji: "✅", note: "Low fees (around $1), fast transfers — the payment standard" },
                    { name: "USDT (ERC20)", emoji: "⚠️", note: "Ethereum gas fees fluctuate and can be expensive" },
                    { name: "USDC", emoji: "✅", note: "An alternative stablecoin to Tether, supported by some merchants" },
                    { name: "BTC", emoji: "⚠️", note: "Volatile price, long confirmation time — not recommended for payment" },
                    { name: "ETH", emoji: "⚠️", note: "Gas fees and price swings make it unsuitable for small payments" },
                    { name: "TRX", emoji: "💡", note: "Recommended to hold a small amount to pay TRC20 fees" },
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

        {/* Quick Links */}
        <section className="py-20 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-coinbypass-primary">Guides</span> by Topic
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "USDT Charging Guide",
                  desc: "Step-by-step instructions and precautions for charging USDT at CoinBypass",
                  href: "/usdt-charge-guide",
                  color: "from-amber-500 to-yellow-600",
                },
                {
                  icon: "🪙",
                  title: "How to Pay with Coins",
                  desc: "The full coin payment process, from entering the wallet address to completing payment",
                  href: "/coin-payment",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  icon: "🔀",
                  title: "Bypass / Alternative Payment",
                  desc: "How to bypass with crypto when cards and bank accounts are blocked",
                  href: "/bypass-payment",
                  color: "from-yellow-500 to-orange-600",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group p-6 rounded-xl bg-coinbypass-background border border-coinbypass-border hover:border-coinbypass-primary/50 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-coinbypass-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-coinbypass-muted-foreground">{item.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Notice */}
        <section className="py-12 bg-yellow-500/10 border-y border-yellow-500/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">Important Notes</h3>
                <p className="text-yellow-200/80 text-sm">
                  When charging or paying with crypto, always verify your network (TRC20/ERC20) selection and wallet address.
                  Sending to the wrong network can result in lost assets.
                  This site is for informational purposes only and does not constitute legal or financial advice.
                </p>
              </div>
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
