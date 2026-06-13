import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="コインジャン コイン決済方法 2025 - USDTで決済する方法 | CoinBypass"
        description="コインジャン（コインチャージステーション）USDTコイン決済の完全ガイド。コインジャンでチャージしたUSDTでウォレットアドレス・QRの入力からネットワーク選択、決済確認まで安全に決済する実践的な方法をまとめました。"
        keywords="コインジャン, コイン決済, USDT決済, コイン決済方法, コインチャージステーション, 暗号資産決済, テザー決済, コインで決済する方法"
        canonical={`${site.domain}/ja/coin-payment`}
      />
      <CoinBypassLayout currentPath="/ja/coin-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🪙 USDTコイン決済
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">コイン決済</span>の方法
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                コインジャンでチャージしたUSDTで決済するのは、思ったより簡単です。加盟店が案内した
                ウォレットアドレスに指定された数量を送れば決済が完了します。重要なのはネットワークとアドレスの確認です。
              </p>
            </div>
          </div>
        </section>

        {/* 決済手順 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              コイン<span className="text-coinbypass-primary">決済の手順</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "決済金額・アドレスの確認",
                  desc: "加盟店が表示した決済数量（USDT）と受取ウォレットアドレスを確認します。",
                  details: [
                    "決済金額がUSDT数量で表記される",
                    "受取アドレス（QRまたは文字列）の確認",
                    "指定ネットワーク（TRC20など）の確認",
                    "決済有効時間（レート固定時間）の確認",
                  ],
                },
                {
                  step: "2",
                  title: "ウォレットで送金の準備",
                  desc: "USDTが入っているウォレットを開き、送金画面に移動します。",
                  details: [
                    "送るコイン: USDTを選択",
                    "ネットワーク: 加盟店が指定したものと同じに",
                    "アドレス入力: コピー＆ペーストまたはQRスキャン",
                    "数量入力: 表示された決済数量をそのまま",
                  ],
                },
                {
                  step: "3",
                  title: "アドレス・ネットワークの最終チェック",
                  desc: "送金直前の、最も重要な確認ステップです。",
                  details: [
                    "アドレスの先頭・末尾の文字をもう一度照合",
                    "ネットワークの不一致時は資産を失う可能性",
                    "手数料を考慮して残高が十分か確認",
                    "高額決済の前は少額テストを推奨",
                  ],
                },
                {
                  step: "4",
                  title: "送金および決済の確認",
                  desc: "送金を実行すると、ブロック承認後に決済が処理されます。",
                  details: [
                    "TRC20基準で数十秒以内に承認",
                    "トランザクションハッシュ（TXID）を保管",
                    "加盟店の決済完了表示を確認",
                    "問題がある場合はTXIDで問い合わせ",
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

        {/* 決済手段の比較 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">コイン決済 vs 一般決済</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">項目</th>
                    <th className="px-6 py-4 text-center font-semibold">USDTコイン決済</th>
                    <th className="px-6 py-4 text-center font-semibold">カード/口座決済</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">決済制限</td>
                    <td className="px-6 py-4 text-center text-green-400">制限が少ない</td>
                    <td className="px-6 py-4 text-center">国・加盟店によるブロックが頻繁</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">処理速度</td>
                    <td className="px-6 py-4 text-center text-green-400">数十秒～数分</td>
                    <td className="px-6 py-4 text-center">即時～数日</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">利用時間</td>
                    <td className="px-6 py-4 text-center text-green-400">24時間</td>
                    <td className="px-6 py-4 text-center">銀行の営業時間の影響を受ける</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">キャンセル・返金</td>
                    <td className="px-6 py-4 text-center text-red-400">不可（不可逆的）</td>
                    <td className="px-6 py-4 text-center">可能</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 実用的なヒント */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">安全な決済のヒント</h2>

            <div className="space-y-4">
              {[
                { icon: "💡", title: "ネットワークを最初に確認", desc: "USDTにはTRC20・ERC20など複数のネットワークがあります。送る側と受け取る側が異なると資産を失う可能性があります。" },
                { icon: "💡", title: "TXID（トランザクションハッシュ）を保管", desc: "送金後に生成されるTXIDは決済の証憑です。問題が発生した際にはこの値で追跡・問い合わせができます。" },
                { icon: "💡", title: "手数料の余裕分を残しておく", desc: "送金手数料のために残高が不足すると決済が失敗します。TRC20では手数料用のTRXを少量保有しておくとよいでしょう。" },
                { icon: "💡", title: "高額決済の前に少額テスト", desc: "初めて取引するアドレスなら、まず少額を送って正常に受信されるか確認してから本決済を進めてください。" },
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
              決済がブロックされたらコインで迂回しましょう
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              カード・口座決済が拒否される状況で、コイン決済がどのように代替手段になるかをご確認ください。
            </p>
            <a
              href="/bypass-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              決済の迂回ガイドを見る →
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
