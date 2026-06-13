import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

const FAQ_SECTIONS = [
  {
    title: "USDTチャージ",
    items: [
      {
        q: "USDT（テザー）とは何ですか？",
        a: "USDTは1ドルに価値が連動したステーブルコインです。ビットコインやイーサリアムと違い価格変動がほとんどなく、決済や送金に適しています。コインジャン（コインチャージ所）でウォンからUSDTをチャージして決済に利用できます。",
      },
      {
        q: "コインジャン（コインチャージ所）とは何ですか？",
        a: "ウォンでUSDTなどの暗号資産をチャージしてくれるサービスを一般にコインジャンまたはコインチャージ所と呼びます。入金すると指定したウォレットアドレスへUSDTを送ってくれます。レートと手数料を透明に公開しているところを利用するのが安全です。",
      },
      {
        q: "チャージするときどのネットワークを選べばよいですか？",
        a: "一般的に手数料が安く処理が速いTRC20（トロン）ネットワークをおすすめします。受け取るウォレットが対応しているネットワークと送るネットワークは必ず一致させる必要があり、不一致の場合は資産を失うおそれがあります。",
      },
      {
        q: "チャージレートはどのように決まりますか？",
        a: "USDTのレートは基本的に為替レートにチャージ所のマージン（スプレッド）を上乗せした値です。業者ごとに異なるため、チャージ前にリアルタイムのレートと手数料を確認してください。",
      },
    ],
  },
  {
    title: "コイン決済",
    items: [
      {
        q: "コイン決済はどうやって行いますか？",
        a: "加盟店が案内したウォレットアドレスへ表示されたUSDTの数量を送金すれば決済が完了します。送金前にネットワークとアドレスを必ず確認し、送金後に生成されるTXID（トランザクションハッシュ）を保管してください。",
      },
      {
        q: "決済はどのくらい速く処理されますか？",
        a: "TRC20ネットワークなら通常は数十秒以内にブロックの承認が完了します。ネットワークの混雑状況によって多少遅延することがあります。",
      },
      {
        q: "コイン決済をキャンセルできますか？",
        a: "ブロックチェーンの送金は不可逆なため、一度送るとキャンセルや返金はできません。だからこそ送金前のアドレス・ネットワーク・数量の確認が最も重要です。初めて取引するアドレスなら少額のテスト送金をおすすめします。",
      },
      {
        q: "USDT以外のコインでも決済できますか？",
        a: "USDCなど他のステーブルコインに対応している加盟店もあります。ただしBTCやETHは価格変動と手数料のため決済用にはおすすめできません。加盟店が対応しているコインをまず確認してください。",
      },
    ],
  },
  {
    title: "決済の迂回",
    items: [
      {
        q: "なぜコインで迂回決済を行うのですか？",
        a: "国内のカードや口座では決済できない海外サービスが多くあります。コイン決済はカード会社や銀行を経由しないため、こうした地域・業種の制限を回避する代替手段になります。",
      },
      {
        q: "コイン決済は常に可能ですか？",
        a: "加盟店が暗号資産決済に対応している必要があります。対応していないところでは、海外バーチャルカードなど別の代替決済を検討する必要があります。",
      },
      {
        q: "迂回決済のとき最も気をつけるべきことは何ですか？",
        a: "ネットワーク不一致による資産の紛失と詐欺業者です。信頼できるチャージ所・加盟店だけを利用し、異常に有利な条件を掲げているところは避けてください。",
      },
    ],
  },
  {
    title: "セキュリティと法律",
    items: [
      {
        q: "暗号資産決済は合法ですか？",
        a: "暗号資産の保有・取引そのものは合法です。ただし取引規模によっては所得や資金出所の申告義務が生じる場合があります。具体的な事項は税務・法律の専門家に相談してください。",
      },
      {
        q: "ウォレットのシードフレーズはどう管理しますか？",
        a: "シードフレーズ（リカバリーフレーズ）は絶対に他人と共有しないでください。このフレーズが漏れるとウォレット内の資産すべてを奪われるおそれがあります。オフラインで安全に保管するのが原則です。",
      },
      {
        q: "間違ったアドレスに送金したら取り戻せますか？",
        a: "ブロックチェーンの送金は取り消せません。存在しないアドレスや別のネットワークのアドレスに送った場合、復旧は事実上不可能です。送金前にアドレスとネットワークを必ず二重確認してください。",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="よくある質問（FAQ） - CoinBypass"
        description="USDTチャージ、コイン決済、決済の迂回に関するよくある質問。コインジャンの使い方、ネットワークの選び方、安全対策のFAQ。"
        keywords="USDTチャージFAQ, コイン決済の質問, コインジャンの質問, 決済迂回の質問, テザーチャージFAQ"
        canonical={`${site.domain}/ja/faq`}
      />
      <CoinBypassLayout currentPath="/ja/faq">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                よくある<span className="text-coinbypass-primary">質問</span>
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                USDTチャージ、コイン決済、決済の迂回に関する疑問を解決します。
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
              さらにご不明な点がありますか？
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              USDTチャージ・コイン決済に関するその他のお問い合わせはテレグラムでお寄せください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/30 transition-colors"
              >
                テレグラムでお問い合わせ
              </a>
              <a
                href="/ja/usdt-charge-guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold hover:bg-coinbypass-border transition-colors"
              >
                USDTチャージガイド
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
                <strong className="text-yellow-400">免責事項：</strong> 本サイトの情報は参考用であり、金融・法律に関するアドバイスではありません。
                暗号資産の取引・決済を行う際は関連法規と税務上の義務を必ず確認し、必要に応じて専門家にご相談ください。
                コインの送金はキャンセル・返金ができないため、アドレスとネットワークを常に二重確認してください。
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
