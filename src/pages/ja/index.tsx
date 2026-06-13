import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinBypassHome() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="CoinBypass CoinBypass | USDTチャージ・コイン決済・決済回避ガイド"
        description="CoinBypass（コインチャージ所）CoinBypass — USDTチャージとコイン決済で決済制限を回避するガイド。CoinBypassの使い方、USDT（テザー）チャージ、暗号資産決済、安全な送金方法をまとめました。"
        keywords="CoinBypass, USDTチャージ, コインチャージ, コインチャージ所, CoinBypass, コイン決済, 決済回避, 暗号資産決済, テザーチャージ, USDT決済, 回避決済"
        canonical={`${site.domain}/ja`}
      />
      <CoinBypassLayout currentPath="/ja">
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
                <span className="text-sm text-coinbypass-muted-foreground">USDTチャージ · コイン決済 · 決済回避ガイド</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-coinbypass-primary via-coinbypass-secondary to-coinbypass-primary bg-clip-text text-transparent">
                  CoinBypass — 決済制限のない
                </span>
                <br />
                <span className="text-white">USDTコイン決済</span>
              </h1>

              <p className="text-xl text-coinbypass-muted-foreground max-w-3xl mx-auto mb-10">
                カード決済がブロックされたサービス？
                <br className="hidden md:block" />
                CoinBypassでUSDTをチャージし、コインで回避決済しましょう。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/ja/usdt-charge-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary text-black font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  USDTチャージガイド
                </a>
                <a
                  href="/ja/bypass-payment"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold text-lg hover:bg-coinbypass-border transition-colors"
                >
                  決済回避が必要な理由
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
                なぜ<span className="text-coinbypass-primary">コイン決済</span>が必要なのか？
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                国内のカード・口座では決済がブロックされるサービスが数多くあります。
                USDTコインチャージでこの制限を回避できます。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-3">海外サービスの決済</h3>
                <p className="text-coinbypass-muted-foreground">
                  国内カードが拒否される海外プラットフォーム・サブスクサービスをUSDTで決済できます。
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3">高速送金</h3>
                <p className="text-coinbypass-muted-foreground">
                  TRC20ネットワーク基準で数十秒以内に入金確認。銀行の営業時間に関係なく24時間利用できます。
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  💵
                </div>
                <h3 className="text-xl font-bold mb-3">ドル価値に固定</h3>
                <p className="text-coinbypass-muted-foreground">
                  USDT（テザー）は1ドルに連動したステーブルコインなので、相場変動を気にせず決済に使えます。
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
                コイン別の<span className="text-coinbypass-primary">決済適合性</span>
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg">
                決済・チャージ用途でよく使われるコインの比較です。
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">コイン / ネットワーク</th>
                    <th className="px-6 py-4 text-center font-semibold">決済適合度</th>
                    <th className="px-6 py-4 text-left font-semibold">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT (TRC20)", emoji: "✅", note: "手数料が安く（$1前後）、送金が速い — 決済の標準" },
                    { name: "USDT (ERC20)", emoji: "⚠️", note: "イーサリアムのガス代が変動し、手数料が高くなる場合あり" },
                    { name: "USDC", emoji: "✅", note: "テザーの代替ステーブルコイン、一部の加盟店で対応" },
                    { name: "BTC", emoji: "⚠️", note: "相場変動が大きく、確認時間が長い — 決済には非推奨" },
                    { name: "ETH", emoji: "⚠️", note: "ガス代・相場変動があり、少額決済には不向き" },
                    { name: "TRX", emoji: "💡", note: "TRC20の手数料支払い用に少量の保有を推奨" },
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
                テーマ別<span className="text-coinbypass-primary">ガイド</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "USDTチャージガイド",
                  desc: "CoinBypassでUSDTをチャージする手順別の方法と注意点",
                  href: "/usdt-charge-guide",
                  color: "from-amber-500 to-yellow-600",
                },
                {
                  icon: "🪙",
                  title: "コイン決済の方法",
                  desc: "ウォレットアドレスの入力から決済完了まで、コイン決済の実践手順",
                  href: "/coin-payment",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  icon: "🔀",
                  title: "決済回避 / 代替決済",
                  desc: "カード・口座がブロックされたときにコインで回避する方法",
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
                🏪 CoinBypassパートナー — チャージ所の開業
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-coinbypass-primary">CoinBypass</span>チャージ所を自分で運営しましょう
              </h2>
              <p className="text-xl text-coinbypass-muted-foreground max-w-2xl mx-auto">
                自分だけのUSDTチャージ所をCoinBypassからレンタルして始めましょう。インフラ・決済・精算はCoinBypassが提供します。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "⚡", title: "即時発行", desc: "申請後すぐにチャージ所をオープン — 開発・サーバー準備不要" },
                { icon: "🌐", title: "専用ドメイン", desc: "自分のブランドドメインを接続して独立運営" },
                { icon: "📊", title: "自動精算", desc: "取引・手数料を自動集計 + リアルタイム精算" },
                { icon: "💬", title: "テレグラム連携", desc: "相談・チャージ通知ボットを自動接続" },
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
                CoinBypass加盟のお問い合わせ →
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
                <h3 className="font-bold text-yellow-400 mb-2">注意事項</h3>
                <p className="text-yellow-200/80 text-sm">
                  暗号資産のチャージ・決済時には、ネットワーク（TRC20/ERC20）の選択とウォレットアドレスを必ず確認してください。
                  誤ったネットワークで送金すると資産を失う可能性があります。
                  本サイトは情報提供を目的としており、法的・金融的なアドバイスではありません。
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
