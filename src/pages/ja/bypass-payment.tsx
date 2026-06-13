import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function BypassPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="コインジャン決済バイパス / 代替決済ガイド 2025 - コインで迂回決済 | CoinBypass"
        description="カード・口座決済がブロックされたとき、コインジャンでコイン（USDT）を使って迂回する方法。決済バイパスが必要な状況、代替決済手段の比較、コインジャン利用の安全心得をまとめました。"
        keywords="コインジャン, 決済バイパス, 迂回決済, 代替決済, コイン迂回決済, USDT迂回, 決済ブロック, 海外決済バイパス"
        canonical={`${site.domain}/ja/bypass-payment`}
      />
      <CoinBypassLayout currentPath="/ja/bypass-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🔀 決済バイパス / 代替決済
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">決済バイパス</span> ガイド
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                国内のカード・口座では決済を拒否されるサービスが増えています。コイン（USDT）決済は、
                こうした制限を回避する代表的な代替決済手段です。
              </p>
            </div>
          </div>
        </section>

        {/* バイパスが必要な状況 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-coinbypass-primary">決済バイパス</span>が必要になるのはいつ？
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                以下のような状況で、コイン決済が有用な代替手段になります。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🚫", title: "カード拒否", desc: "国内のカード会社が特定の海外加盟店・業種の決済をブロックする場合" },
                { icon: "🌏", title: "地域制限", desc: "韓国のIP・カードでは登録・決済ができない海外サービス" },
                { icon: "🏦", title: "口座限度", desc: "送金限度・営業時間・海外送金の制約で決済が遅延する場合" },
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

        {/* バイパス手順 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              コインの <span className="text-coinbypass-primary">迂回決済フロー</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "USDTチャージ",
                  desc: "コインジャンでウォン建てでUSDTをチャージし、ウォレットに保管します。",
                  details: [
                    "TRC20ネットワーク推奨（安価・高速）",
                    "決済予定金額＋手数料の余裕分をチャージ",
                    "取引所または個人ウォレットに保管",
                  ],
                },
                {
                  step: "2",
                  title: "決済手段としてコインを選択",
                  desc: "加盟店・サービスで暗号資産決済オプションを選択します。",
                  details: [
                    "USDT / USDC など対応コインを確認",
                    "指定ネットワークを確認",
                    "表示された決済数量・有効時間を確認",
                  ],
                },
                {
                  step: "3",
                  title: "送金で決済完了",
                  desc: "案内されたアドレスへ正確な数量を送金すると、決済が処理されます。",
                  details: [
                    "アドレス・ネットワークを最終確認",
                    "TXIDを保管",
                    "ブロック承認後に決済完了",
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

        {/* 代替決済手段の比較 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">代替決済手段の比較</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">手段</th>
                    <th className="px-6 py-4 text-center font-semibold">バイパス効果</th>
                    <th className="px-6 py-4 text-left font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDTコイン決済", emoji: "✅", note: "決済制限が少なく高速 — 最も汎用的な代替手段" },
                    { name: "USDCコイン決済", emoji: "✅", note: "USDT代替のステーブルコイン、対応先の確認が必要" },
                    { name: "海外バーチャルカード", emoji: "⚠️", note: "発行条件・地域制限あり" },
                    { name: "プリペイド・ギフト決済", emoji: "⚠️", note: "加盟店が対応している必要があり、数量制限あり" },
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

        {/* 安全心得 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">迂回決済の安全心得</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 推奨</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>信頼できるチャージ所・加盟店のみを利用</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>ネットワーク・アドレスの二重確認</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>TXID・取引履歴の保管</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>関連法規・税金義務の確認</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 注意</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>コイン送金はキャンセル・返金が不可能</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>出所が不明な業者・リンクへのアクセス</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>異常に有利な条件を提示する業者</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>ウォレットのシードフレーズ・パスワードの他人への共有</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              まずはUSDTをチャージしましょう
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              迂回決済の出発点はUSDTチャージです。コインジャンの利用方法をステップごとに確認しましょう。
            </p>
            <a
              href="/ja/usdt-charge-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              USDTチャージガイドを見る →
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
