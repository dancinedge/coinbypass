import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="How to Pay with Coins 2025 - Paying with USDT | CoinBypass"
        description="A complete guide to USDT coin payments on Coinjang (coin top-up station). We cover the practical steps for paying safely with the USDT you topped up on Coinjang, from entering the wallet address and QR code to selecting the network and confirming the payment."
        keywords="Coinjang, coin payment, USDT payment, how to pay with coins, coin top-up station, crypto asset payment, Tether payment, how to make a coin payment"
        canonical={`${site.domain}/en/coin-payment`}
      />
      <CoinBypassLayout currentPath="/en/coin-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🪙 USDT Coin Payment
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How to <span className="text-coinbypass-primary">Pay with Coins</span>
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                Paying with the USDT you topped up on Coinjang is simpler than you might think. Just send the
                specified amount to the wallet address provided by the merchant, and your payment is complete.
                The key is verifying the network and the address.
              </p>
            </div>
          </div>
        </section>

        {/* 결제 절차 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              Coin <span className="text-coinbypass-primary">Payment Steps</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Check the Amount and Address",
                  desc: "Verify the payment amount (USDT) shown by the merchant and the receiving wallet address.",
                  details: [
                    "Payment amount is shown as a USDT quantity",
                    "Verify the receiving address (QR code or text string)",
                    "Verify the designated network (TRC20, etc.)",
                    "Check the payment validity window (rate lock period)",
                  ],
                },
                {
                  step: "2",
                  title: "Prepare the Transfer in Your Wallet",
                  desc: "Open the wallet holding your USDT and go to the send screen.",
                  details: [
                    "Coin to send: select USDT",
                    "Network: match exactly what the merchant designated",
                    "Enter address: copy & paste or scan the QR code",
                    "Enter amount: use the exact payment amount shown",
                  ],
                },
                {
                  step: "3",
                  title: "Final Check of Address and Network",
                  desc: "This is the most important verification step right before sending.",
                  details: [
                    "Double-check the first and last characters of the address",
                    "A network mismatch can result in lost assets",
                    "Make sure your balance is enough to cover fees",
                    "A small test payment is recommended before large amounts",
                  ],
                },
                {
                  step: "4",
                  title: "Send and Confirm the Payment",
                  desc: "Once you send, the payment is processed after block confirmation.",
                  details: [
                    "Confirmed within tens of seconds on TRC20",
                    "Keep the transaction hash (TXID)",
                    "Verify the merchant's payment completion status",
                    "If there's an issue, use the TXID to inquire",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-xl bg-coinbypass-card border border-coinbypass-border">
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

        {/* 결제 수단 비교 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Coin Payment vs. Regular Payment</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-center font-semibold">USDT Coin Payment</th>
                    <th className="px-6 py-4 text-center font-semibold">Card / Bank Payment</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">Payment Restrictions</td>
                    <td className="px-6 py-4 text-center text-green-400">Few restrictions</td>
                    <td className="px-6 py-4 text-center">Frequent country/merchant blocks</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">Processing Speed</td>
                    <td className="px-6 py-4 text-center text-green-400">Tens of seconds to a few minutes</td>
                    <td className="px-6 py-4 text-center">Instant to several days</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">Availability</td>
                    <td className="px-6 py-4 text-center text-green-400">24 hours</td>
                    <td className="px-6 py-4 text-center">Affected by bank hours</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">Cancellation / Refund</td>
                    <td className="px-6 py-4 text-center text-red-400">Not possible (irreversible)</td>
                    <td className="px-6 py-4 text-center">Possible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 실사용 팁 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Safe Payment Tips</h2>

            <div className="space-y-4">
              {[
                { icon: "💡", title: "Check the Network First", desc: "USDT exists on multiple networks such as TRC20 and ERC20. If the sending and receiving sides differ, you can lose your assets." },
                { icon: "💡", title: "Keep the TXID (Transaction Hash)", desc: "The TXID generated after a transfer is your proof of payment. If a problem arises, you can use this value to track and inquire." },
                { icon: "💡", title: "Leave a Buffer for Fees", desc: "If your balance is too low because of transfer fees, the payment fails. For TRC20, it helps to hold a small amount of TRX for fees." },
                { icon: "💡", title: "Test with a Small Amount Before Large Payments", desc: "If it's an address you're transacting with for the first time, send a small amount first to confirm it's received correctly, then proceed with the full payment." },
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1">{tip.title}</h3>
                    <p className="text-sm text-coinbypass-muted-foreground">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              If Your Payment Is Blocked, Route Around It with Coins
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              See how coin payments serve as an alternative when card and bank payments are rejected.
            </p>
            <a
              href="/bypass-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              View the Payment Bypass Guide →
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
