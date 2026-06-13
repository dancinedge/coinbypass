import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function UsdtChargeGuidePage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="USDT 충전 가이드 2025 - 코인장에서 테더 충전하는 법 | 코인바이패스"
        description="USDT(테더) 충전 완벽 가이드. 코인장 이용법, TRC20 네트워크 선택, 지갑 주소 확인, 충전 수수료와 시세까지 단계별로 정리했습니다."
        keywords="USDT충전, 테더충전, 코인장, 코인충전소, USDT충전방법, TRC20충전, 코인 충전 가이드"
        canonical={`${site.domain}/ko/usdt-charge-guide`}
      />
      <CoinBypassLayout currentPath="/ko/usdt-charge-guide">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                💰 코인장 USDT 충전
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">USDT 충전</span> 가이드
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                테더(USDT)는 1달러에 연동된 스테이블코인입니다. 코인장(코인 충전소)에서 원화로
                USDT를 충전해 두면, 결제가 막힌 해외 서비스도 코인으로 우회 결제할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 기본 정보 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">USDT 기본 정보</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "코인 종류", value: "USDT (테더, 스테이블코인)" },
                { label: "기준 가치", value: "1 USDT ≈ 1 USD" },
                { label: "추천 네트워크", value: "TRC20 (트론)" },
                { label: "송금 수수료", value: "약 1 USDT (TRC20 기준)" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-coinbypass-card border border-coinbypass-border">
                  <p className="text-sm text-coinbypass-muted-foreground mb-1">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 충전 절차 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              USDT <span className="text-coinbypass-primary">충전 절차</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "지갑 준비",
                  desc: "USDT를 받을 지갑 주소를 먼저 확보합니다.",
                  details: [
                    "거래소 지갑(업비트·빗썸 등) 또는 개인 지갑(메타마스크·트러스트월렛)",
                    "TRC20 네트워크를 지원하는 지갑인지 확인",
                    "수신 주소(T로 시작하는 트론 주소) 복사",
                    "거래소 지갑은 본인인증(KYC) 완료 필요",
                  ],
                },
                {
                  step: "2",
                  title: "코인장(충전소) 선택",
                  desc: "원화로 USDT를 충전해 주는 코인 충전소를 정합니다.",
                  details: [
                    "텔레그램 채널·웹 기반 충전 업체 다수 존재",
                    "실시간 시세와 충전 수수료 공개 여부 확인",
                    "후기·운영 기간 등 신뢰도 점검",
                    "최소·최대 충전 한도 확인",
                  ],
                },
                {
                  step: "3",
                  title: "시세 확인 및 주문",
                  desc: "충전할 금액과 USDT 시세를 확인하고 주문합니다.",
                  details: [
                    "USDT 시세 = 환율 + 충전소 마진(스프레드)",
                    "충전 수량과 입금할 원화 금액 확인",
                    "받을 지갑 주소(TRC20) 정확히 입력",
                    "주소 첫·끝 글자 한 번 더 대조",
                  ],
                },
                {
                  step: "4",
                  title: "입금 및 수령",
                  desc: "안내받은 계좌로 원화를 입금하면 USDT가 지갑으로 전송됩니다.",
                  details: [
                    "입금 후 보통 수 분 내 전송",
                    "TRC20 기준 블록 확인은 수십 초",
                    "지갑에 USDT 입금 내역 확인",
                    "수령 후 결제·송금에 사용",
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

        {/* 네트워크 비교 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">네트워크별 수수료 비교</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">네트워크</th>
                    <th className="px-6 py-4 text-right font-semibold">송금 수수료</th>
                    <th className="px-6 py-4 text-left font-semibold">특징</th>
                  </tr>
                </thead>
                <tbody className="text-coinbypass-muted-foreground">
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">TRC20 (트론)</td>
                    <td className="px-6 py-4 text-right text-green-400">약 1 USDT</td>
                    <td className="px-6 py-4">가장 저렴하고 빠름 — 결제 표준</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">ERC20 (이더리움)</td>
                    <td className="px-6 py-4 text-right">가스비 변동 (수 달러+)</td>
                    <td className="px-6 py-4">혼잡 시 수수료 비쌈, 호환성 높음</td>
                  </tr>
                  <tr className="border-b border-coinbypass-border/50">
                    <td className="px-6 py-4 font-medium text-white">BEP20 (BNB체인)</td>
                    <td className="px-6 py-4 text-right text-green-400">저렴 (~0.x 달러)</td>
                    <td className="px-6 py-4">바이낸스 생태계, 지원 여부 확인 필요</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 주의사항 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">충전 시 주의사항</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 꼭 확인</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>보내는 네트워크와 받는 네트워크 일치 여부</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>지갑 주소 전체(특히 첫·끝 글자) 대조</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>충전소 실시간 시세와 수수료 공개 여부</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>소액 테스트 송금 후 본 충전</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 피해야 할 것</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>네트워크를 잘못 선택해 송금 (자산 분실 위험)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>시세·수수료를 공개하지 않는 업체 이용</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>비정상적으로 좋은 시세를 내세운 업체</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>출처가 불분명한 지갑 앱 설치</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              충전한 USDT로 결제하기
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              USDT를 충전했다면, 다음 단계는 코인 결제입니다. 지갑 주소 입력부터 결제 완료까지 확인하세요.
            </p>
            <a
              href="/ko/coin-payment"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              코인 결제 방법 보기 →
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
