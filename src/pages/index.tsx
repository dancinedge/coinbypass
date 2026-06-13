import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinBypassHome() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="CoinBypass — USDT Coin Payment Without Limits | CoinBypass Charging Guide"
        description="Card payment blocked? Charge USDT at CoinBypass (coin charging station) and bypass payment limits with crypto. Step-by-step USDT charging and coin payment guides."
        keywords="CoinBypass, USDT charge, coin payment, bypass payment, USDT, TRC20, stablecoin, crypto payment, alternative payment"
        canonical={site.domain}
      />
      <CoinBypassLayout currentPath="/">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-coinbypass-primary/10 via-transparent to-coinbypass-secondary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coinbypass-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coinbypass-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coinbypass-muted border border-coinbypass-border mb-8">
                <span className="text-coinbypass-primary">{site.emoji}</span>
                <span className="text-sm text-coinbypass-muted-foreground">USDT Charging · Coin Payment · Bypass Payment Guide</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-coinbypass-primary via-coinbypass-secondary to-coinbypass-primary bg-clip-text text-transparent">
                  CoinBypass — Payment Without Limits
                </span>
                <br />
                <span className="text-white">USDT Coin Payment</span>
              </h1>

              <p className="text-xl text-coinbypass-muted-foreground max-w-3xl mx-auto mb-10">
                A service that won't accept your card?
                <br className="hidden md:block" />
                Charge USDT at CoinBypass and bypass the limits by paying with crypto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/usdt-charge-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary text-black font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  USDT Charging Guide
                </a>
                <a
                  href="/bypass-payment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold text-lg hover:bg-coinbypass-border transition-colors"
                >
                  Why You Need to Bypass Payment
                </a>
              </div>
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

        {/* Partners — CoinBypass charging station franchise/rental (B2B dual landing) */}
        <section className="py-20 bg-gradient-to-b from-coinbypass-background to-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🏪 CoinBypass Partners — Launch a Charging Station
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Run your own <span className="text-coinbypass-primary">CoinBypass</span> charging station
              </h2>
              <p className="text-xl text-coinbypass-muted-foreground max-w-2xl mx-auto">
                Start your own USDT charging station by leasing it from CoinBypass. CoinBypass provides the infrastructure, payments, and settlement.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "Instant Setup", desc: "Your charging station opens the moment you apply — no development or server setup needed" },
                { icon: "🌐", title: "Custom Domain", desc: "Connect your own brand domain and operate independently" },
                { icon: "📊", title: "Automatic Settlement", desc: "Transactions and fees are tallied automatically with real-time settlement" },
                { icon: "💬", title: "Telegram Integration", desc: "Support and charging notification bots are connected automatically" },
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
                CoinBypass Franchise Inquiry →
              </a>
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
