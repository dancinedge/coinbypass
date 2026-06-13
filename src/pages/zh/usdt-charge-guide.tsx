import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function UsdtChargeGuidePage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="USDT充值指南 2025 - 在币场充值泰达币的方法 | CoinBypass"
        description="USDT（泰达币）充值完整指南。整理了币场使用方法、TRC20网络选择、钱包地址确认、充值手续费与汇率等分步说明。"
        keywords="USDT充值, 泰达币充值, 币场, 代币充值站, USDT充值方法, TRC20充值, 代币充值指南"
        canonical={`${site.domain}/zh/usdt-charge-guide`}
      />
      <CoinBypassLayout currentPath="/zh/usdt-charge-guide">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                💰 币场 USDT 充值
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">USDT 充值</span>指南
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                泰达币（USDT）是与1美元挂钩的稳定币。在币场（代币充值站）用法币充值好
                USDT 后，即使是支付受限的海外服务，也可以用代币进行绕道支付。
              </p>
            </div>
          </div>
        </section>

        {/* 基本信息 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">USDT 基本信息</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "代币种类", value: "USDT（泰达币，稳定币）" },
                { label: "基准价值", value: "1 USDT ≈ 1 USD" },
                { label: "推荐网络", value: "TRC20（波场）" },
                { label: "转账手续费", value: "约 1 USDT（TRC20 标准）" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border">
                  <p className="text-sm text-coinbypass-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 充值流程 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              USDT <span className="text-coinbypass-primary">充值流程</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "准备钱包",
                  desc: "先准备好用于接收 USDT 的钱包地址。",
                  details: [
                    "交易所钱包（Upbit、Bithumb 等）或个人钱包（MetaMask、Trust Wallet）",
                    "确认钱包是否支持 TRC20 网络",
                    "复制收款地址（以 T 开头的波场地址）",
                    "交易所钱包需要完成实名认证（KYC）",
                  ],
                },
                {
                  step: "2",
                  title: "选择币场（充值站）",
                  desc: "确定一家用法币为你充值 USDT 的代币充值站。",
                  details: [
                    "Telegram 频道、网页版充值商家众多",
                    "确认是否公开实时汇率与充值手续费",
                    "通过评价、运营时长等核查可信度",
                    "确认最低、最高充值限额",
                  ],
                },
                {
                  step: "3",
                  title: "确认汇率并下单",
                  desc: "确认充值金额与 USDT 汇率后下单。",
                  details: [
                    "USDT 汇率 = 汇率 + 充值站利润（点差）",
                    "确认充值数量与需打款的法币金额",
                    "准确填写收款钱包地址（TRC20）",
                    "再次核对地址首尾字符",
                  ],
                },
                {
                  step: "4",
                  title: "打款与收款",
                  desc: "向指定账户打入法币后，USDT 会被转入你的钱包。",
                  details: [
                    "打款后通常数分钟内到账",
                    "TRC20 标准下区块确认仅需数十秒",
                    "在钱包中确认 USDT 入账记录",
                    "收款后即可用于支付、转账",
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

        {/* 网络比较 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">各网络手续费比较</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">网络</th>
                    <th className="px-6 py-4 text-right font-semibold">转账手续费</th>
                    <th className="px-6 py-4 text-left font-semibold">特点</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">TRC20（波场）</td>
                    <td className="px-6 py-4 text-right text-green-400">约 1 USDT</td>
                    <td className="px-6 py-4">最便宜且最快 — 支付标准</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">ERC20（以太坊）</td>
                    <td className="px-6 py-4 text-right">Gas 费浮动（数美元起）</td>
                    <td className="px-6 py-4">拥堵时手续费昂贵，兼容性高</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">BEP20（BNB 链）</td>
                    <td className="px-6 py-4 text-right text-green-400">便宜（约 0.x 美元）</td>
                    <td className="px-6 py-4">币安生态，需确认是否支持</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 注意事项 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">充值时的注意事项</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 务必确认</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>发送网络与接收网络是否一致</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>核对完整钱包地址（尤其首尾字符）</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>充值站是否公开实时汇率与手续费</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>先小额测试转账，再正式充值</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 应避免的事</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>选错网络进行转账（有资产丢失风险）</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>使用不公开汇率、手续费的商家</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>打出异常优惠汇率作为噱头的商家</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>安装来源不明的钱包应用</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              用充值好的 USDT 进行支付
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              充值好 USDT 之后，下一步就是代币支付。从填写钱包地址到完成支付，一起来确认吧。
            </p>
            <a
              href="/zh/coin-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              查看代币支付方法 →
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
