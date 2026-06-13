// 현재 연도 (빌드 시 갱신됨)
const CURRENT_YEAR = new Date().getFullYear();

// 사이트 설정 타입
export interface SiteConfig {
  id: string;
  name: string;
  domain: string;
  title: string;
  description: string;
  keywords?: string;
  telegram: string;
  emoji: string; // 페이지 내 아이콘 (이모지)
  themeColor: string;
  pages: string[];
  officialUrl?: string; // 공식 도메인
  bypassUrl?: string; // 우회 도메인 (예비주소)
}

// 사이트별 설정 (standalone: coinbypass 단일 테넌트)
export const SITES: Record<string, SiteConfig> = {
  coinbypass: {
    id: "coinbypass",
    name: "코인바이패스",
    domain: "https://coinbypass.com",
    title: `코인장 코인바이패스 | USDT 충전·코인 결제·결제 우회 가이드 ${CURRENT_YEAR}`,
    description:
      "코인장(코인 충전소) 코인바이패스 — USDT 충전과 코인 결제로 결제 제한을 우회하는 가이드. 코인장 이용법, USDT(테더) 충전, 가상자산 결제, 안전한 송금 방법을 정리했습니다.",
    keywords:
      "코인장, USDT충전, 코인충전, 코인 충전소, 코인바이패스, 코인 결제, 결제우회, 가상자산 결제, 테더 충전, USDT 결제, 우회결제",
    telegram: "https://t.me/brose770",
    emoji: "💰",
    themeColor: "#F59E0B",
    pages: [
      "/",
      "/usdt-charge-guide",
      "/coin-payment",
      "/bypass-payment",
      "/faq",
    ],
  },
};

// 사이트 설정 가져오기
export function getSiteConfig(siteId: string): SiteConfig {
  return SITES[siteId] || SITES.coinbypass;
}
