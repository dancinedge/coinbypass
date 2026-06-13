import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="币场加密货币支付方法 2025 - 用 USDT 付款指南 | CoinBypass"
        description="币场（加密货币充值站）USDT 支付完整指南。整理了用在币场充值的 USDT，从输入钱包地址·二维码到选择网络、确认支付的安全实战付款方法。"
        keywords="币场, 加密货币支付, USDT支付, 加密货币支付方法, 加密货币充值站, 虚拟资产支付, 泰达币支付, 怎么用加密货币付款"
        canonical={`${site.domain}/zh/coin-payment`}
      />
      <CoinBypassLayout currentPath="/zh/coin-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🪙 USDT 加密货币支付
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">加密货币支付</span> 方法
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                用在币场充值的 USDT 付款比想象中简单。只要将指定数量发送到商户提供的钱包地址，
                支付即告完成。关键在于核对网络和地址。
              </p>
            </div>
          </div>
        </section>

        {/* 支付流程 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              加密货币 <span className="text-coinbypass-primary">支付流程</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "确认支付金额·地址",
                  desc: "确认商户显示的支付数量（USDT）和收款钱包地址。",
                  details: [
                    "支付金额以 USDT 数量标示",
                    "确认收款地址（二维码或字符串）",
                    "确认指定网络（TRC20 等）",
                    "确认支付有效时间（汇率锁定时间）",
                  ],
                },
                {
                  step: "2",
                  title: "在钱包中准备转账",
                  desc: "打开存有 USDT 的钱包，进入转账界面。",
                  details: [
                    "要发送的币种：选择 USDT",
                    "网络：与商户指定的保持一致",
                    "输入地址：复制·粘贴或扫描二维码",
                    "输入数量：照所示支付数量原样填写",
                  ],
                },
                {
                  step: "3",
                  title: "最终核对地址·网络",
                  desc: "转账之前，这是最重要的确认环节。",
                  details: [
                    "再次比对地址的首尾字符",
                    "网络不一致可能导致资产丢失",
                    "考虑手续费，确认余额是否充足",
                    "大额支付前建议先做小额测试",
                  ],
                },
                {
                  step: "4",
                  title: "转账及确认支付",
                  desc: "执行转账后，经区块确认即完成支付处理。",
                  details: [
                    "以 TRC20 为准，数十秒内确认",
                    "保管交易哈希（TXID）",
                    "确认商户的支付完成提示",
                    "出现问题时凭 TXID 咨询",
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

        {/* 支付方式对比 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">加密货币支付 vs 普通支付</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">项目</th>
                    <th className="px-6 py-4 text-center font-semibold">USDT 加密货币支付</th>
                    <th className="px-6 py-4 text-center font-semibold">银行卡/账户支付</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">支付限制</td>
                    <td className="px-6 py-4 text-center text-green-400">限制较少</td>
                    <td className="px-6 py-4 text-center">国家·商户屏蔽频繁</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">处理速度</td>
                    <td className="px-6 py-4 text-center text-green-400">数十秒~数分钟</td>
                    <td className="px-6 py-4 text-center">即时~数日</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">使用时间</td>
                    <td className="px-6 py-4 text-center text-green-400">24小时</td>
                    <td className="px-6 py-4 text-center">受银行营业时间影响</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">取消·退款</td>
                    <td className="px-6 py-4 text-center text-red-400">不可（不可逆）</td>
                    <td className="px-6 py-4 text-center">可以</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 实用技巧 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">安全支付技巧</h2>

            <div className="space-y-4">
              {[
                { icon: "💡", title: "首先确认网络", desc: "USDT 有 TRC20·ERC20 等多种网络。如果发送方与接收方不一致，可能会丢失资产。" },
                { icon: "💡", title: "保管 TXID（交易哈希）", desc: "转账后生成的 TXID 是支付凭证。出现问题时可凭此值进行追踪·咨询。" },
                { icon: "💡", title: "留出手续费的余量", desc: "若因转账手续费导致余额不足，支付会失败。TRC20 建议持有少量用于手续费的 TRX。" },
                { icon: "💡", title: "大额支付前先小额测试", desc: "若是首次交易的地址，请先发送小额确认正常到账后，再进行正式支付。" },
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
              支付受阻时请用加密货币绕过
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              了解在银行卡·账户支付被拒的情况下，加密货币支付如何成为替代方案。
            </p>
            <a
              href="/bypass-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              查看支付绕过指南 →
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
