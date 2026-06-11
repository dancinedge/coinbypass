import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function BypassPaymentPage() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="결제 우회 / 대체 결제 가이드 2025 - 코인으로 우회 결제 | 코인바이패스"
        description="카드·계좌 결제가 막혔을 때 코인(USDT)으로 우회하는 방법. 결제 우회가 필요한 상황, 대체 결제 수단 비교, 안전 수칙을 정리했습니다."
        keywords="결제우회, 우회결제, 대체결제, 코인 우회결제, USDT 우회, 결제 막힘, 해외결제 우회, 가상자산 결제"
        canonical={`${site.domain}/bypass-payment`}
      />
      <CoinBypassLayout currentPath="/bypass-payment">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-coinbypass-card to-coinbypass-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-6">
                🔀 결제 우회 / 대체 결제
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-coinbypass-primary">결제 우회</span> 가이드
              </h1>
              <p className="text-xl text-coinbypass-muted-foreground">
                국내 카드·계좌로 결제가 거부되는 서비스가 늘고 있습니다. 코인(USDT) 결제는
                이런 제한을 우회하는 대표적인 대체 결제 수단입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 우회가 필요한 상황 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                언제 <span className="text-coinbypass-primary">결제 우회</span>가 필요할까?
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                아래와 같은 상황에서 코인 결제가 유용한 대안이 됩니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🚫", title: "카드 거부", desc: "국내 카드사가 특정 해외 가맹점·업종 결제를 차단하는 경우" },
                { icon: "🌏", title: "지역 제한", desc: "한국 IP·카드로는 가입·결제가 안 되는 해외 서비스" },
                { icon: "🏦", title: "계좌 한도", desc: "송금 한도·영업시간·해외 송금 제약으로 결제가 지연되는 경우" },
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

        {/* 우회 절차 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              코인 <span className="text-coinbypass-primary">우회 결제 흐름</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "USDT 충전",
                  desc: "코인장에서 원화로 USDT를 충전해 지갑에 보관합니다.",
                  details: [
                    "TRC20 네트워크 권장 (저렴·빠름)",
                    "결제 예정 금액 + 수수료 여유분 충전",
                    "거래소 또는 개인 지갑에 보관",
                  ],
                },
                {
                  step: "2",
                  title: "결제 수단으로 코인 선택",
                  desc: "가맹점·서비스에서 암호화폐 결제 옵션을 선택합니다.",
                  details: [
                    "USDT / USDC 등 지원 코인 확인",
                    "지정 네트워크 확인",
                    "표시된 결제 수량·유효시간 확인",
                  ],
                },
                {
                  step: "3",
                  title: "송금으로 결제 완료",
                  desc: "안내된 주소로 정확한 수량을 송금하면 결제가 처리됩니다.",
                  details: [
                    "주소·네트워크 최종 점검",
                    "TXID 보관",
                    "블록 확인 후 결제 완료",
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

        {/* 대체 결제 수단 비교 */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">대체 결제 수단 비교</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">수단</th>
                    <th className="px-6 py-4 text-center font-semibold">우회 효과</th>
                    <th className="px-6 py-4 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT 코인 결제", emoji: "✅", note: "결제 제한 적고 빠름 — 가장 범용적인 대안" },
                    { name: "USDC 코인 결제", emoji: "✅", note: "USDT 대체 스테이블코인, 지원처 확인 필요" },
                    { name: "해외 가상카드", emoji: "⚠️", note: "발급 조건·지역 제한 존재" },
                    { name: "선불·기프트 결제", emoji: "⚠️", note: "가맹점이 지원해야 하며 수량 제한 있음" },
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

        {/* 안전 수칙 */}
        <section className="py-16 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">우회 결제 안전 수칙</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-coinbypass-background border border-green-500/30">
                <h3 className="font-bold text-lg mb-4 text-green-400">✅ 권장</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>신뢰할 수 있는 충전소·가맹점만 이용</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>네트워크·주소 이중 확인</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>TXID·거래 내역 보관</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-400">•</span><span>관련 법규·세금 의무 확인</span></li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-coinbypass-background border border-red-500/30">
                <h3 className="font-bold text-lg mb-4 text-red-400">❌ 주의</h3>
                <ul className="space-y-3 text-coinbypass-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>코인 송금은 취소·환불이 불가능</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>출처 불분명한 업체·링크 접속</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>비정상적으로 유리한 조건 제시 업체</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-400">•</span><span>지갑 시드 문구·비밀번호 타인 공유</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-500/20 to-yellow-600/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              먼저 USDT를 충전하세요
            </h2>
            <p className="text-coinbypass-muted-foreground mb-8 max-w-2xl mx-auto">
              우회 결제의 출발점은 USDT 충전입니다. 코인장 이용법을 단계별로 확인하세요.
            </p>
            <a
              href="/usdt-charge-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              USDT 충전 가이드 보기 →
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
