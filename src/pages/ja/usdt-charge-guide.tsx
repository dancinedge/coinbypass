import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function UsdtChargeGuidePage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="USDTチャージガイド2025 - コインジャンでテザーをチャージする方法 | CoinBypass"
        description="USDT(テザー)チャージ完全ガイド。コインジャンの使い方、TRC20ネットワークの選択、ウォレットアドレスの確認、チャージ手数料やレートまで段階的に解説します。"
        keywords="USDTチャージ, テザーチャージ, コインジャン, コインチャージ所, USDTチャージ方法, TRC20チャージ, コインチャージガイド"
        canonical={`${site.domain}/ja/usdt-charge-guide`}
      />
      <CoinBypassLayout currentPath="/ja/usdt-charge-guide">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                💰 コインジャン USDTチャージ
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">USDTチャージ</span> ガイド
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                テザー(USDT)は1ドルに連動したステーブルコインです。コインジャン(コインチャージ所)で日本円から
                USDTをチャージしておけば、決済がブロックされた海外サービスもコインで迂回決済できます。
              </p>
            </div>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">USDTの基本情報</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "コインの種類", value: "USDT (テザー、ステーブルコイン)" },
                { label: "基準価値", value: "1 USDT ≈ 1 USD" },
                { label: "おすすめネットワーク", value: "TRC20 (トロン)" },
                { label: "送金手数料", value: "約1 USDT (TRC20基準)" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border">
                  <p className="text-sm text-coinbypass-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* チャージ手順 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              USDT <span className="text-coinbypass-primary">チャージ手順</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "ウォレットの準備",
                  desc: "USDTを受け取るウォレットアドレスをまず確保します。",
                  details: [
                    "取引所ウォレット(Upbit・Bithumbなど)または個人ウォレット(MetaMask・Trust Wallet)",
                    "TRC20ネットワークに対応したウォレットか確認",
                    "受取アドレス(Tで始まるトロンアドレス)をコピー",
                    "取引所ウォレットは本人確認(KYC)の完了が必要",
                  ],
                },
                {
                  step: "2",
                  title: "コインジャン(チャージ所)の選択",
                  desc: "日本円からUSDTをチャージしてくれるコインチャージ所を決めます。",
                  details: [
                    "テレグラムチャンネル・Webベースのチャージ業者が多数存在",
                    "リアルタイムのレートとチャージ手数料の公開有無を確認",
                    "口コミ・運営期間など信頼度をチェック",
                    "最小・最大チャージ限度額を確認",
                  ],
                },
                {
                  step: "3",
                  title: "レート確認と注文",
                  desc: "チャージする金額とUSDTのレートを確認して注文します。",
                  details: [
                    "USDTレート = 為替レート + チャージ所のマージン(スプレッド)",
                    "チャージ数量と入金する日本円の金額を確認",
                    "受け取るウォレットアドレス(TRC20)を正確に入力",
                    "アドレスの最初・最後の文字をもう一度照合",
                  ],
                },
                {
                  step: "4",
                  title: "入金と受け取り",
                  desc: "案内された口座に日本円を入金すると、USDTがウォレットへ送られます。",
                  details: [
                    "入金後、通常は数分以内に送金",
                    "TRC20基準のブロック確認は数十秒",
                    "ウォレットでUSDTの入金履歴を確認",
                    "受け取り後、決済・送金に使用",
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

        {/* ネットワーク比較 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">ネットワーク別の手数料比較</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">ネットワーク</th>
                    <th className="px-6 py-4 text-right font-semibold">送金手数料</th>
                    <th className="px-6 py-4 text-left font-semibold">特徴</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">TRC20 (トロン)</td>
                    <td className="px-6 py-4 text-right text-green-400">約1 USDT</td>
                    <td className="px-6 py-4">最も安く速い — 決済の標準</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">ERC20 (イーサリアム)</td>
                    <td className="px-6 py-4 text-right">ガス代変動 (数ドル+)</td>
                    <td className="px-6 py-4">混雑時は手数料が高い、互換性が高い</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">BEP20 (BNBチェーン)</td>
                    <td className="px-6 py-4 text-right text-green-400">安い (~0.xドル)</td>
                    <td className="px-6 py-4">バイナンスのエコシステム、対応有無の確認が必要</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">チャージ時の注意事項</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 必ず確認</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>送るネットワークと受け取るネットワークの一致</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>ウォレットアドレス全体(特に最初・最後の文字)の照合</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>チャージ所のリアルタイムレートと手数料の公開有無</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>少額のテスト送金後に本チャージ</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 避けるべきこと</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>ネットワークを誤って選択して送金 (資産紛失のリスク)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>レート・手数料を公開しない業者の利用</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>異常に良いレートを掲げる業者</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>出所が不明なウォレットアプリのインストール</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              チャージしたUSDTで決済する
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              USDTをチャージしたら、次のステップはコイン決済です。ウォレットアドレスの入力から決済完了まで確認しましょう。
            </p>
            <a
              href="/ja/coin-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              コイン決済方法を見る →
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
