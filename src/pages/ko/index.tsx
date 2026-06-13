import { Head } from "@/components/seo/Head";
import CoinBypassLayout from "@/components/coinbypass/Layout";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

export default function CoinBypassHome() {
  return (
    <>
      <Head
        siteId="coinbypass"
        title="코인장 코인바이패스 | 코인 결제·가상계좌 정산 — USDT 충전소 임대"
        description="사업자 본인 통장 없이 코인(USDT)으로 결제받아 가상계좌로 정산하세요. 코인장(코인바이패스) USDT 충전소를 임대받아 운영 — 인프라·결제·정산 제공. USDT 충전·코인 결제·결제 우회 가이드 포함."
        keywords="충전소 임대, 가상계좌 정산, 코인 결제, USDT 결제, 결제대행, 코인장, 코인바이패스, USDT 충전, TRC20, 스테이블코인, 가상자산 결제"
        canonical={`${site.domain}/ko`}
      />
      <CoinBypassLayout currentPath="/ko">
        {/* Hero — B2B first (charging-station rental / franchise) */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-coinbypass-primary/10 via-transparent to-coinbypass-secondary/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coinbypass-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coinbypass-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm mb-8">
                🏪 충전소 임대 · 창업
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-coinbypass-primary via-coinbypass-secondary to-coinbypass-primary bg-clip-text text-transparent">
                  코인 결제 + 가상계좌 정산
                </span>
                <br />
                <span className="text-white">나만의 USDT 충전소 운영</span>
              </h1>

              <p className="text-xl text-coinbypass-muted-foreground max-w-3xl mx-auto mb-10">
                사업자 본인 통장 없이 코인(USDT)으로 결제받아 가상계좌로 정산.
                <br className="hidden md:block" />
                인프라·결제·정산은 코인장(코인바이패스)이 제공합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary text-black font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  가맹 문의 →
                </a>
                <a
                  href="/ko/usdt-charge-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-coinbypass-muted border border-coinbypass-border text-white font-semibold text-lg hover:bg-coinbypass-border transition-colors"
                >
                  이용자 가이드
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* B2B feature cards */}
        <section className="py-20 bg-gradient-to-b from-coinbypass-background to-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                나만의 <span className="text-coinbypass-primary">충전소</span>를 운영하세요
              </h2>
              <p className="text-xl text-coinbypass-muted-foreground max-w-2xl mx-auto">
                사업자 본인 통장 없이 — 코인으로 결제받아 가상계좌로 정산하세요.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏦", title: "통장 없이 정산", desc: "USDT로 결제받아 가상계좌로 정산 — 별도 입금용 본인 통장이 필요 없습니다" },
                { icon: "⚡", title: "즉시 발급", desc: "신청 즉시 충전소 오픈 — 개발·서버 준비가 필요 없습니다" },
                { icon: "🌐", title: "전용 도메인", desc: "내 브랜드 도메인을 연결해 독립적으로 운영하세요" },
                { icon: "📊", title: "자동 정산", desc: "거래·수수료가 자동 집계되고 실시간으로 정산됩니다" },
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
                가맹 문의 →
              </a>
            </div>
          </div>
        </section>

        {/* ── 이용자 안내 (consumer) ── */}
        <section className="py-12 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coinbypass-muted border border-coinbypass-border">
              <span className="text-coinbypass-primary">{site.emoji}</span>
              <span className="text-sm text-coinbypass-muted-foreground">이용자용 — USDT 충전 · 코인 결제 · 결제 우회 가이드</span>
            </div>
          </div>
        </section>

        {/* Why Coin Payment */}
        <section className="py-20 bg-coinbypass-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                왜 <span className="text-coinbypass-primary">코인 결제</span>가 필요할까?
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg max-w-2xl mx-auto">
                국내 카드·계좌로는 결제가 막히는 서비스가 많습니다.
                USDT 코인 충전으로 이 제한을 우회할 수 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  🌐
                </div>
                <h3 className="text-xl font-bold mb-3">해외 서비스 결제</h3>
                <p className="text-coinbypass-muted-foreground">
                  국내 카드가 거부되는 해외 플랫폼·구독 서비스를 USDT로 결제할 수 있습니다.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3">빠른 송금</h3>
                <p className="text-coinbypass-muted-foreground">
                  TRC20 네트워크 기준 수십 초 내 입금 확인. 은행 영업시간과 무관하게 24시간 이용 가능합니다.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-coinbypass-background border border-coinbypass-border text-center">
                <div className="w-16 h-16 rounded-full bg-coinbypass-primary/20 flex items-center justify-center text-3xl mx-auto mb-6">
                  💵
                </div>
                <h3 className="text-xl font-bold mb-3">달러 가치 고정</h3>
                <p className="text-coinbypass-muted-foreground">
                  USDT(테더)는 1달러에 연동된 스테이블코인이라 시세 변동 걱정 없이 결제에 쓸 수 있습니다.
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
                코인별 <span className="text-coinbypass-primary">결제 적합성</span>
              </h2>
              <p className="text-coinbypass-muted-foreground text-lg">
                결제·충전 용도로 자주 쓰이는 코인 비교입니다.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-coinbypass-border">
                    <th className="px-6 py-4 text-left font-semibold">코인 / 네트워크</th>
                    <th className="px-6 py-4 text-center font-semibold">결제 적합도</th>
                    <th className="px-6 py-4 text-left font-semibold">비고</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "USDT (TRC20)", emoji: "✅", note: "수수료 저렴($1 내외), 송금 빠름 — 결제 표준" },
                    { name: "USDT (ERC20)", emoji: "⚠️", note: "이더리움 가스비 변동, 수수료 비쌀 수 있음" },
                    { name: "USDC", emoji: "✅", note: "테더 대체 스테이블코인, 일부 가맹점 지원" },
                    { name: "BTC", emoji: "⚠️", note: "시세 변동 큼, 확인 시간 김 — 결제엔 비추천" },
                    { name: "ETH", emoji: "⚠️", note: "가스비·시세 변동, 소액 결제 부적합" },
                    { name: "TRX", emoji: "💡", note: "TRC20 수수료 납부용으로 소량 보유 권장" },
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
                주제별 <span className="text-coinbypass-primary">가이드</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "💰",
                  title: "USDT 충전 가이드",
                  desc: "코인장에서 USDT를 충전하는 단계별 방법과 주의사항",
                  href: "/ko/usdt-charge-guide",
                  color: "from-amber-500 to-yellow-600",
                },
                {
                  icon: "🪙",
                  title: "코인 결제 방법",
                  desc: "지갑 주소 입력부터 결제 완료까지, 코인 결제 실전 절차",
                  href: "/ko/coin-payment",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  icon: "🔀",
                  title: "결제 우회 / 대체 결제",
                  desc: "카드·계좌가 막혔을 때 코인으로 우회하는 방법",
                  href: "/ko/bypass-payment",
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

        {/* Notice */}
        <section className="py-12 bg-yellow-500/10 border-y border-yellow-500/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div>
                <h3 className="font-bold text-yellow-400 mb-2">주의사항</h3>
                <p className="text-yellow-200/80 text-sm">
                  가상자산 충전·결제 시 네트워크(TRC20/ERC20) 선택과 지갑 주소를 반드시 확인하세요.
                  잘못된 네트워크로 송금하면 자산을 잃을 수 있습니다.
                  본 사이트는 정보 제공 목적이며, 법적·금융적 조언이 아닙니다.
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
