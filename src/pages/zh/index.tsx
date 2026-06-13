import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinBypassHome() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title={`CoinBypass CoinBypass | USDT 充值·加密货币支付·支付绕过指南 ${new Date().getFullYear()}`}
        description="卡支付被拒？在CoinBypass充值 USDT，用加密货币绕过支付限制。USDT 充值、加密货币支付与支付绕过完整指南。"
        keywords="USDT充值,加密货币支付,支付绕过,CoinBypass,CoinBypass,TRC20,泰达币,稳定币支付,海外服务支付"
        canonical={`${site.domain}/zh`}
      />
      <CoinBypassLayout currentPath="/zh">
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
                <span className="text-sm text-coinbypass-muted-foreground">USDT 充值 · 加密货币支付 · 支付绕过指南</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-coinbypass-primary via-coinbypass-secondary to-coinbypass-primary bg-clip-text text-transparent">
                  CoinBypass — 不受支付限制的
                </span>
                <br />
                <span className="text-white">USDT 加密货币支付</span>
              </h1>

              <p className="text-xl text-coinbypass-muted-foreground max-w-3xl mx-auto mb-10">
                卡支付被封锁的服务？
                <br className="hidden md:block" />
                在CoinBypass充值 USDT，用加密货币绕过支付限制。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/zh/usdt-charge-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary text-black font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  USDT 充值指南
                </a>
                <a
                  href="/zh/bypass-payment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold text-lg hover:bg-coinbypass-border transition-colors"
                >
                  为何需要支付绕过
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
                为什么需要<span className="text-coinbypass-primary">加密货币支付</span>？
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                很多服务无法用国内的银行卡·账户支付。
                通过 USDT 加密货币充值即可绕过这些限制。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-3">海外服务支付</h3>
                <p className="text-coinbypass-muted-foreground">
                  对于拒绝国内银行卡的海外平台·订阅服务，可以用 USDT 完成支付。
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3">快速转账</h3>
                <p className="text-coinbypass-muted-foreground">
                  以 TRC20 网络为准，数十秒内即可确认到账。不受银行营业时间限制，全天 24 小时可用。
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  💵
                </div>
                <h3 className="text-xl font-bold mb-3">锚定美元价值</h3>
                <p className="text-coinbypass-muted-foreground">
                  USDT（泰达币）是锚定 1 美元的稳定币，无需担心行情波动即可用于支付。
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
                各类加密货币的<span className="text-coinbypass-primary">支付适配性</span>
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg">
                这是常用于支付·充值用途的加密货币对比。
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">加密货币 / 网络</th>
                    <th className="px-6 py-4 text-center font-semibold">支付适配度</th>
                    <th className="px-6 py-4 text-left font-semibold">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT (TRC20)", emoji: "✅", note: "手续费低廉（1 美元左右），转账快速 — 支付标准" },
                    { name: "USDT (ERC20)", emoji: "⚠️", note: "以太坊 gas 费波动，手续费可能较贵" },
                    { name: "USDC", emoji: "✅", note: "泰达币的替代稳定币，部分商户支持" },
                    { name: "BTC", emoji: "⚠️", note: "行情波动大，确认时间长 — 不推荐用于支付" },
                    { name: "ETH", emoji: "⚠️", note: "gas 费·行情波动，不适合小额支付" },
                    { name: "TRX", emoji: "💡", note: "建议少量持有，用于支付 TRC20 手续费" },
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
                按主题分类的<span className="text-coinbypass-primary">指南</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "USDT 充值指南",
                  desc: "在CoinBypass充值 USDT 的分步方法与注意事项",
                  href: "/usdt-charge-guide",
                  color: "from-amber-500 to-yellow-600",
                },
                {
                  icon: "🪙",
                  title: "加密货币支付方法",
                  desc: "从输入钱包地址到完成支付，加密货币支付实战流程",
                  href: "/coin-payment",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  icon: "🔀",
                  title: "支付绕过 / 替代支付",
                  desc: "当银行卡·账户被封锁时，用加密货币绕过的方法",
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

        {/* 업체(파트너) — 코인장 충전소 창업/임대 (B2B 듀얼 랜딩) */}
        <section className="py-20 bg-gradient-to-b from-coinbypass-background to-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🏪 CoinBypass合作伙伴 — 充值站创业
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                亲自运营<span className="text-coinbypass-primary">CoinBypass</span>充值站
              </h2>
              <p className="text-xl text-coinbypass-muted-foreground max-w-2xl mx-auto">
                从CoinBypass租赁，开启属于自己的 USDT 充值站。基础设施·支付·结算均由CoinBypass提供。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "即时开通", desc: "申请后立即开通充值站 — 无需开发·搭建服务器" },
                { icon: "🌐", title: "专属域名", desc: "绑定自有品牌域名，独立运营" },
                { icon: "📊", title: "自动结算", desc: "交易·手续费自动统计 + 实时结算" },
                { icon: "💬", title: "Telegram 集成", desc: "自动连接咨询·充值通知机器人" },
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
                CoinBypass加盟咨询 →
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
                <h3 className="font-bold text-yellow-400 mb-2">注意事项</h3>
                <p className="text-yellow-200/80 text-sm">
                  充值·支付虚拟资产时，请务必确认网络（TRC20/ERC20）的选择与钱包地址。
                  若转入错误的网络可能会导致资产丢失。
                  本网站仅以提供信息为目的，不构成法律·金融建议。
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
