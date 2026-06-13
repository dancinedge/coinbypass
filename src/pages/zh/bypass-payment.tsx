import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function BypassPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="CoinBypass支付绕过 / 替代支付指南 2025 - 用加密货币绕过支付 | CoinBypass"
        description="当银行卡·账户支付被拒时，如何在CoinBypass用加密货币（USDT）进行绕过支付。整理了需要绕过支付的场景、替代支付方式对比，以及CoinBypass使用安全须知。"
        keywords="CoinBypass, 支付绕过, 绕过支付, 替代支付, 加密货币绕过支付, USDT 绕过, 支付被拒, 海外支付绕过"
        canonical={`${site.domain}/zh/bypass-payment`}
      />
      <CoinBypassLayout currentPath="/zh/bypass-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🔀 支付绕过 / 替代支付
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">支付绕过</span> 指南
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                越来越多的服务拒绝使用本地银行卡·账户付款。加密货币（USDT）支付正是
                绕过这些限制的代表性替代支付方式。
              </p>
            </div>
          </div>
        </section>

        {/* 需要绕过的场景 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                何时需要 <span className="text-coinbypass-primary">支付绕过</span>？
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                在以下场景中，加密货币支付会成为实用的替代方案。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🚫", title: "银行卡被拒", desc: "本地发卡行屏蔽特定海外商户·行业支付的情况" },
                { icon: "🌏", title: "地区限制", desc: "用本地 IP·银行卡无法注册·支付的海外服务" },
                { icon: "🏦", title: "账户额度", desc: "因汇款额度·营业时间·跨境汇款限制导致支付延迟的情况" },
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

        {/* 绕过流程 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              加密货币 <span className="text-coinbypass-primary">绕过支付流程</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "充值 USDT",
                  desc: "在CoinBypass用人民币充值 USDT 并存入钱包。",
                  details: [
                    "推荐 TRC20 网络（便宜·快速）",
                    "充值金额按预计支付额 + 手续费余量准备",
                    "存放在交易所或个人钱包",
                  ],
                },
                {
                  step: "2",
                  title: "选择加密货币作为支付方式",
                  desc: "在商户·服务中选择加密货币支付选项。",
                  details: [
                    "确认支持的币种，如 USDT / USDC 等",
                    "确认指定网络",
                    "确认显示的支付数量·有效时间",
                  ],
                },
                {
                  step: "3",
                  title: "通过转账完成支付",
                  desc: "向指定地址转入准确数量后，支付即被处理。",
                  details: [
                    "最终核对地址·网络",
                    "保存 TXID",
                    "区块确认后支付完成",
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

        {/* 替代支付方式对比 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">替代支付方式对比</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">方式</th>
                    <th className="px-6 py-4 text-center font-semibold">绕过效果</th>
                    <th className="px-6 py-4 text-left font-semibold">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT 加密货币支付", emoji: "✅", note: "支付限制少且快速 — 最通用的替代方案" },
                    { name: "USDC 加密货币支付", emoji: "✅", note: "USDT 的替代稳定币，需确认是否支持" },
                    { name: "海外虚拟卡", emoji: "⚠️", note: "存在发卡条件·地区限制" },
                    { name: "预付·礼品卡支付", emoji: "⚠️", note: "需商户支持，且有数量限制" },
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

        {/* 安全须知 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">绕过支付安全须知</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 建议</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>只使用可信赖的充值站·商户</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>双重核对网络·地址</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>保存 TXID·交易记录</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>确认相关法规·税务义务</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 注意</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>加密货币转账无法取消·退款</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>访问来源不明的商家·链接</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>提供异常优厚条件的商家</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>向他人泄露钱包助记词·密码</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              请先充值 USDT
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              绕过支付的起点是充值 USDT。请逐步了解CoinBypass的使用方法。
            </p>
            <a
              href="/zh/usdt-charge-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              查看 USDT 充值指南 →
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
