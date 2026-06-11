import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

const FAQ_SECTIONS = [
  {
    title: "USDT 충전",
    items: [
      {
        q: "USDT(테더)가 무엇인가요?",
        a: "USDT는 1달러에 가치가 연동된 스테이블코인입니다. 비트코인·이더리움과 달리 시세 변동이 거의 없어 결제·송금에 적합합니다. 코인장(코인 충전소)에서 원화로 USDT를 충전해 결제에 사용할 수 있습니다.",
      },
      {
        q: "코인장(코인 충전소)이란 무엇인가요?",
        a: "원화로 USDT 등 가상자산을 충전해 주는 서비스를 흔히 코인장 또는 코인 충전소라고 부릅니다. 입금하면 지정한 지갑 주소로 USDT를 전송해 줍니다. 시세와 수수료를 투명하게 공개하는 곳을 이용하는 것이 안전합니다.",
      },
      {
        q: "충전할 때 어떤 네트워크를 선택해야 하나요?",
        a: "일반적으로 수수료가 저렴하고 빠른 TRC20(트론) 네트워크를 권장합니다. 받는 지갑이 지원하는 네트워크와 보내는 네트워크가 반드시 일치해야 하며, 불일치 시 자산을 잃을 수 있습니다.",
      },
      {
        q: "충전 시세는 어떻게 결정되나요?",
        a: "USDT 시세는 기본적으로 환율에 충전소의 마진(스프레드)이 더해진 값입니다. 업체마다 다르므로 충전 전 실시간 시세와 수수료를 확인하세요.",
      },
    ],
  },
  {
    title: "코인 결제",
    items: [
      {
        q: "코인 결제는 어떻게 하나요?",
        a: "가맹점이 안내한 지갑 주소로 표시된 USDT 수량을 송금하면 결제가 완료됩니다. 송금 전 네트워크와 주소를 반드시 확인하고, 송금 후 생성되는 TXID(트랜잭션 해시)를 보관하세요.",
      },
      {
        q: "결제가 얼마나 빨리 처리되나요?",
        a: "TRC20 네트워크 기준 보통 수십 초 내에 블록 확인이 완료됩니다. 네트워크 혼잡도에 따라 다소 지연될 수 있습니다.",
      },
      {
        q: "코인 결제를 취소할 수 있나요?",
        a: "블록체인 송금은 불가역적이라 한 번 전송하면 취소·환불이 불가능합니다. 그래서 송금 전 주소·네트워크·수량 확인이 가장 중요합니다. 처음 거래하는 주소라면 소액 테스트를 권장합니다.",
      },
      {
        q: "USDT 외에 다른 코인으로도 결제할 수 있나요?",
        a: "USDC 등 다른 스테이블코인을 지원하는 가맹점도 있습니다. 다만 BTC·ETH는 시세 변동과 수수료 때문에 결제용으로는 권장되지 않습니다. 가맹점이 지원하는 코인을 먼저 확인하세요.",
      },
    ],
  },
  {
    title: "결제 우회",
    items: [
      {
        q: "왜 코인으로 우회 결제를 하나요?",
        a: "국내 카드·계좌로는 결제가 막히는 해외 서비스가 많습니다. 코인 결제는 카드사·은행을 거치지 않으므로 이런 지역·업종 제한을 우회하는 대안이 됩니다.",
      },
      {
        q: "코인 결제가 항상 가능한가요?",
        a: "가맹점이 암호화폐 결제를 지원해야 가능합니다. 지원하지 않는 곳에서는 해외 가상카드 등 다른 대체 결제를 검토해야 합니다.",
      },
      {
        q: "우회 결제 시 무엇을 가장 조심해야 하나요?",
        a: "네트워크 불일치로 인한 자산 분실과 사기 업체입니다. 신뢰할 수 있는 충전소·가맹점만 이용하고, 비정상적으로 유리한 조건을 내세우는 곳은 피하세요.",
      },
    ],
  },
  {
    title: "보안 및 법률",
    items: [
      {
        q: "가상자산 결제가 합법인가요?",
        a: "가상자산 보유·거래 자체는 합법입니다. 다만 거래 규모에 따라 소득·자금출처 신고 의무가 있을 수 있습니다. 구체적인 사항은 세무·법률 전문가와 상담하세요.",
      },
      {
        q: "지갑 시드 문구는 어떻게 관리하나요?",
        a: "시드 문구(복구 구문)는 절대 타인에게 공유하지 마세요. 이 문구가 노출되면 지갑 자산 전체를 탈취당할 수 있습니다. 오프라인에 안전하게 보관하는 것이 원칙입니다.",
      },
      {
        q: "잘못된 주소로 송금하면 되돌릴 수 있나요?",
        a: "블록체인 송금은 되돌릴 수 없습니다. 존재하지 않는 주소나 다른 네트워크 주소로 보낸 경우 복구가 사실상 불가능합니다. 송금 전 주소와 네트워크를 반드시 이중 확인하세요.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="자주묻는질문 (FAQ) - 코인바이패스"
        description="USDT 충전, 코인 결제, 결제 우회 관련 자주묻는질문. 코인장 이용법, 네트워크 선택, 안전 수칙 FAQ."
        keywords="USDT충전FAQ, 코인결제질문, 코인장질문, 결제우회질문, 테더충전FAQ"
        canonical={`${site.domain}/faq`}
      />
      <CoinBypassLayout currentPath="/faq">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                자주 묻는 <span className="text-coinbypass-primary">질문</span>
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                USDT 충전, 코인 결제, 결제 우회에 관한 궁금증을 해결해 드립니다.
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
              더 궁금한 점이 있으신가요?
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              USDT 충전·코인 결제에 대한 추가 문의는 텔레그램으로 남겨 주세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/30 transition-colors"
              >
                텔레그램 문의
              </a>
              <a
                href="/usdt-charge-guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold hover:bg-coinbypass-border transition-colors"
              >
                USDT 충전 가이드
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
                <strong className="text-yellow-400">면책 조항:</strong> 본 사이트의 정보는 참고용이며, 금융/법률 조언이 아닙니다.
                가상자산 거래·결제 시 관련 법규와 세금 의무를 반드시 확인하시고, 필요 시 전문가와 상담하세요.
                코인 송금은 취소·환불이 불가능하므로 주소와 네트워크를 항상 이중 확인하세요.
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
