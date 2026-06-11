import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="코인 결제 방법 2025 - USDT로 결제하는 법 | 코인바이패스"
        description="USDT 코인 결제 완벽 가이드. 지갑 주소·QR 입력부터 네트워크 선택, 결제 확인까지. 코인으로 안전하게 결제하는 실전 방법을 정리했습니다."
        keywords="코인결제, USDT결제, 코인 결제 방법, 가상자산 결제, 테더 결제, 코인 결제하는법, 지갑 주소 결제"
        canonical={`${site.domain}/coin-payment`}
      />
      <CoinBypassLayout currentPath="/coin-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🪙 USDT 코인 결제
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">코인 결제</span> 방법
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                충전한 USDT로 결제하는 것은 생각보다 간단합니다. 가맹점이 안내한 지갑 주소로
                정해진 수량을 보내면 결제가 완료됩니다. 핵심은 네트워크와 주소 확인입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 결제 절차 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              코인 <span className="text-coinbypass-primary">결제 절차</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "결제 금액·주소 확인",
                  desc: "가맹점이 표시한 결제 수량(USDT)과 받는 지갑 주소를 확인합니다.",
                  details: [
                    "결제 금액이 USDT 수량으로 표기됨",
                    "받는 주소(QR 또는 문자열) 확인",
                    "지정 네트워크(TRC20 등) 확인",
                    "결제 유효시간(시세 고정 시간) 확인",
                  ],
                },
                {
                  step: "2",
                  title: "지갑에서 송금 준비",
                  desc: "USDT가 들어 있는 지갑을 열고 송금 화면으로 이동합니다.",
                  details: [
                    "보낼 코인: USDT 선택",
                    "네트워크: 가맹점이 지정한 것과 동일하게",
                    "주소 입력: 복사·붙여넣기 또는 QR 스캔",
                    "수량 입력: 표시된 결제 수량 그대로",
                  ],
                },
                {
                  step: "3",
                  title: "주소·네트워크 최종 점검",
                  desc: "송금 직전, 가장 중요한 확인 단계입니다.",
                  details: [
                    "주소 첫·끝 글자 한 번 더 대조",
                    "네트워크 불일치 시 자산 분실 가능",
                    "수수료를 감안해 잔액 충분한지 확인",
                    "고액 결제 전 소액 테스트 권장",
                  ],
                },
                {
                  step: "4",
                  title: "송금 및 결제 확인",
                  desc: "송금을 실행하면 블록 확인 후 결제가 처리됩니다.",
                  details: [
                    "TRC20 기준 수십 초 내 확인",
                    "트랜잭션 해시(TXID) 보관",
                    "가맹점 결제 완료 표시 확인",
                    "문제 시 TXID로 문의",
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

        {/* 결제 수단 비교 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">코인 결제 vs 일반 결제</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">항목</th>
                    <th className="px-6 py-4 text-center font-semibold">USDT 코인 결제</th>
                    <th className="px-6 py-4 text-center font-semibold">카드/계좌 결제</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">결제 제한</td>
                    <td className="px-6 py-4 text-center text-green-400">제한 적음</td>
                    <td className="px-6 py-4 text-center">국가·가맹점 차단 빈번</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">처리 속도</td>
                    <td className="px-6 py-4 text-center text-green-400">수십 초~수 분</td>
                    <td className="px-6 py-4 text-center">즉시~수일</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">이용 시간</td>
                    <td className="px-6 py-4 text-center text-green-400">24시간</td>
                    <td className="px-6 py-4 text-center">은행 영업시간 영향</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 text-white">취소·환불</td>
                    <td className="px-6 py-4 text-center text-red-400">불가(불가역적)</td>
                    <td className="px-6 py-4 text-center">가능</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 실사용 팁 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">안전 결제 팁</h2>

            <div className="space-y-4">
              {[
                { icon: "💡", title: "네트워크를 가장 먼저 확인", desc: "USDT는 TRC20·ERC20 등 여러 네트워크가 있습니다. 보내는 쪽과 받는 쪽이 다르면 자산을 잃을 수 있습니다." },
                { icon: "💡", title: "TXID(트랜잭션 해시)를 보관", desc: "송금 후 생성되는 TXID는 결제 증빙입니다. 문제 발생 시 이 값으로 추적·문의할 수 있습니다." },
                { icon: "💡", title: "수수료 여유분을 남겨두기", desc: "송금 수수료 때문에 잔액이 부족하면 결제가 실패합니다. TRC20는 수수료용 TRX를 소량 보유하면 좋습니다." },
                { icon: "💡", title: "고액 결제 전 소액 테스트", desc: "처음 거래하는 주소라면 소액을 먼저 보내 정상 수신을 확인한 뒤 본 결제를 진행하세요." },
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
              결제가 막혔다면 코인으로 우회하세요
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              카드·계좌 결제가 거부되는 상황에서 코인 결제가 어떻게 대안이 되는지 확인하세요.
            </p>
            <a
              href="/bypass-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              결제 우회 가이드 보기 →
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
