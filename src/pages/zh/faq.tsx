import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

const FAQ_SECTIONS = [
  {
    title: "USDT 充值",
    items: [
      {
        q: "USDT（泰达币）是什么？",
        a: "USDT 是一种与 1 美元价值挂钩的稳定币。与比特币、以太坊不同，它的价格几乎没有波动，非常适合用于支付和转账。在币场（数字货币充值站）可以用韩元充值 USDT，并用于支付。",
      },
      {
        q: "币场（数字货币充值站）是什么？",
        a: "用韩元为 USDT 等虚拟资产充值的服务，通常被称为币场或数字货币充值站。完成入金后，它会把 USDT 转入您指定的钱包地址。建议选择透明公开汇率和手续费的服务商，更为安全。",
      },
      {
        q: "充值时应该选择哪个网络？",
        a: "通常推荐手续费低、速度快的 TRC20（波场）网络。接收钱包支持的网络必须与转出网络完全一致，若不一致可能会导致资产丢失。",
      },
      {
        q: "充值汇率是如何确定的？",
        a: "USDT 汇率基本上是在汇率基础上加上充值站的利润（点差）。各家服务商不尽相同，因此充值前请确认实时汇率和手续费。",
      },
    ],
  },
  {
    title: "数字货币支付",
    items: [
      {
        q: "数字货币支付怎么操作？",
        a: "只需将显示的 USDT 数量转入商家提供的钱包地址，支付即告完成。转账前请务必确认网络和地址，并保存转账后生成的 TXID（交易哈希）。",
      },
      {
        q: "支付处理需要多久？",
        a: "以 TRC20 网络为例，通常在几十秒内即可完成区块确认。根据网络拥堵情况，可能会略有延迟。",
      },
      {
        q: "数字货币支付可以取消吗？",
        a: "区块链转账是不可逆的，一旦转出便无法取消或退款。因此转账前确认地址、网络和数量是最重要的一步。如果是首次交易的地址，建议先进行小额测试转账。",
      },
      {
        q: "除了 USDT，还能用其他数字货币支付吗？",
        a: "部分商家也支持 USDC 等其他稳定币。不过由于价格波动和手续费的原因，不推荐使用 BTC、ETH 进行支付。请先确认商家支持哪些数字货币。",
      },
    ],
  },
  {
    title: "绕开支付限制",
    items: [
      {
        q: "为什么要用数字货币绕开支付限制？",
        a: "很多海外服务无法使用国内银行卡或账户进行支付。数字货币支付不经过卡组织和银行，因此成为绕开这类地区或行业限制的一种替代方案。",
      },
      {
        q: "数字货币支付随时都可以用吗？",
        a: "只有在商家支持加密货币支付的情况下才能使用。在不支持的地方，则需要考虑海外虚拟卡等其他替代支付方式。",
      },
      {
        q: "绕开支付限制时最需要注意什么？",
        a: "需要注意因网络不匹配导致的资产丢失，以及诈骗商家。请只使用值得信赖的充值站和商家，并避开那些打出异常优惠条件的地方。",
      },
    ],
  },
  {
    title: "安全与法律",
    items: [
      {
        q: "虚拟资产支付合法吗？",
        a: "持有和交易虚拟资产本身是合法的。不过根据交易规模，您可能负有申报收入或资金来源的义务。具体事项请咨询税务或法律专业人士。",
      },
      {
        q: "钱包助记词该如何保管？",
        a: "切勿将助记词（恢复短语）分享给任何人。一旦该短语泄露，钱包中的全部资产都可能被盗取。原则上应将其安全地离线保管。",
      },
      {
        q: "如果转到错误的地址，能撤回吗？",
        a: "区块链转账无法撤回。如果转入了不存在的地址或其他网络的地址，几乎不可能找回。转账前请务必再次核对地址和网络。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="常见问题 (FAQ) - CoinBypass"
        description="关于 USDT 充值、数字货币支付、绕开支付限制的常见问题。币场使用方法、网络选择、安全须知 FAQ。"
        keywords="USDT充值FAQ, 数字货币支付问题, 币场问题, 绕开支付限制问题, 泰达币充值FAQ"
        canonical={`${site.domain}/zh/faq`}
      />
      <CoinBypassLayout currentPath="/zh/faq">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                常见 <span className="text-coinbypass-primary">问题</span>
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                为您解答有关 USDT 充值、数字货币支付和绕开支付限制的疑问。
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
              还有其他疑问吗？
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              如需就 USDT 充值、数字货币支付进行更多咨询，请通过 Telegram 联系我们。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/30 transition-colors"
              >
                Telegram 咨询
              </a>
              <a
                href="/usdt-charge-guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold hover:bg-coinbypass-border transition-colors"
              >
                USDT 充值指南
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
                <strong className="text-yellow-400">免责声明：</strong> 本网站的信息仅供参考，不构成金融或法律建议。
                在交易或使用虚拟资产支付时，请务必确认相关法规和纳税义务，必要时请咨询专业人士。
                数字货币转账无法取消或退款，因此请始终再次核对地址和网络。
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
