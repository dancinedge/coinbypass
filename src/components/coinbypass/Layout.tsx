import { useState } from "react";
import { useRouter } from "next/router";
import { TelegramInquiry } from "@/components/common/TelegramInquiry";
import { LanguageSwitcher } from "@/components/coinbypass/LanguageSwitcher";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

type Loc = "en" | "ko" | "ja" | "zh";

// 내부 경로(언어 prefix 미포함). 렌더 시 locale prefix 를 앞에 붙인다.
const PATHS = {
  usdt: "/usdt-charge-guide",
  coin: "/coin-payment",
  bypass: "/bypass-payment",
  faq: "/faq",
} as const;

// 언어별 네비/푸터 문구. 영어가 기본(루트), 코인장 키워드는 한국어에만.
const T: Record<Loc, {
  nav: { label: string; key: keyof typeof PATHS }[];
  tagline: [string, string];
  secCharge: string; linkUsdt: string; linkCoin: string;
  secBypass: string; linkBypass: string;
  secSupport: string; linkFaq: string;
  disclaimer: string;
}> = {
  en: {
    nav: [
      { label: "USDT Guide", key: "usdt" },
      { label: "Coin Payment", key: "coin" },
      { label: "Bypass", key: "bypass" },
      { label: "FAQ", key: "faq" },
    ],
    tagline: ["USDT charging & coin payment", "Bypass payment guide platform"],
    secCharge: "Coin Charging", linkUsdt: "USDT Charging Guide", linkCoin: "Coin Payment Guide",
    secBypass: "Bypass Payment", linkBypass: "Bypass / Alternative Payment",
    secSupport: "Support", linkFaq: "FAQ",
    disclaimer: "This site is for informational purposes only and is not financial advice.",
  },
  ko: {
    nav: [
      { label: "USDT 충전 가이드", key: "usdt" },
      { label: "코인 결제", key: "coin" },
      { label: "결제 우회", key: "bypass" },
      { label: "FAQ", key: "faq" },
    ],
    tagline: ["USDT 충전 & 코인 결제", "코인장 결제 우회 가이드 플랫폼"],
    secCharge: "코인 충전", linkUsdt: "USDT 충전 가이드", linkCoin: "코인 결제 방법",
    secBypass: "결제 우회", linkBypass: "결제 우회 / 대체 결제",
    secSupport: "고객지원", linkFaq: "자주묻는질문",
    disclaimer: "본 사이트는 정보 제공 목적이며, 금융 조언이 아닙니다.",
  },
  ja: {
    nav: [
      { label: "USDT充電ガイド", key: "usdt" },
      { label: "コイン決済", key: "coin" },
      { label: "決済迂回", key: "bypass" },
      { label: "FAQ", key: "faq" },
    ],
    tagline: ["USDT充電 & コイン決済", "決済迂回ガイドプラットフォーム"],
    secCharge: "コイン充電", linkUsdt: "USDT充電ガイド", linkCoin: "コイン決済方法",
    secBypass: "決済迂回", linkBypass: "決済迂回 / 代替決済",
    secSupport: "サポート", linkFaq: "よくある質問",
    disclaimer: "本サイトは情報提供を目的としており、金融アドバイスではありません。",
  },
  zh: {
    nav: [
      { label: "USDT充值指南", key: "usdt" },
      { label: "币支付", key: "coin" },
      { label: "支付绕过", key: "bypass" },
      { label: "FAQ", key: "faq" },
    ],
    tagline: ["USDT充值 & 币支付", "支付绕过指南平台"],
    secCharge: "币充值", linkUsdt: "USDT充值指南", linkCoin: "币支付方法",
    secBypass: "支付绕过", linkBypass: "支付绕过 / 替代支付",
    secSupport: "客户支持", linkFaq: "常见问题",
    disclaimer: "本网站仅供信息参考，不构成财务建议。",
  },
};

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function CoinBypassLayout({ children, currentPath }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { asPath } = useRouter();
  // 경로의 locale prefix(/ko·/ja·/zh)로 언어를 고른다. prefix 없으면 영어(기본/루트).
  const cleanPath = asPath.split("?")[0].replace(/\/$/, "") || "/";
  const locale: Loc =
    cleanPath === "/ko" || cleanPath.startsWith("/ko/") ? "ko"
    : cleanPath === "/ja" || cleanPath.startsWith("/ja/") ? "ja"
    : cleanPath === "/zh" || cleanPath.startsWith("/zh/") ? "zh"
    : "en";
  const t = T[locale];
  const prefix = locale === "en" ? "" : `/${locale}`;
  const homeHref = prefix || "/";
  const href = (key: keyof typeof PATHS) => `${prefix}${PATHS[key]}`;
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-coinbypass-background text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-coinbypass-border bg-coinbypass-background/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href={homeHref} className="flex items-center gap-2">
              <span className="text-2xl">{site.emoji}</span>
              <span className="text-xl font-bold bg-gradient-to-r from-coinbypass-primary to-coinbypass-secondary bg-clip-text text-transparent">
                {site.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {t.nav.map((item) => {
                const h = href(item.key);
                return (
                  <a
                    key={item.key}
                    href={h}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                      currentPath === h
                        ? "text-coinbypass-primary bg-coinbypass-muted"
                        : "text-coinbypass-muted-foreground hover:text-white hover:bg-coinbypass-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="ml-2 pl-2 border-l border-coinbypass-border">
                <LanguageSwitcher />
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-coinbypass-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-coinbypass-border bg-coinbypass-background">
            <div className="px-4 py-4 space-y-2">
              {t.nav.map((item) => {
                const h = href(item.key);
                return (
                  <a
                    key={item.key}
                    href={h}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      currentPath === h
                        ? "text-coinbypass-primary bg-coinbypass-muted"
                        : "text-coinbypass-muted-foreground hover:text-white hover:bg-coinbypass-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="px-4 pt-3 mt-2 border-t border-coinbypass-border">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-coinbypass-border bg-coinbypass-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{site.emoji}</span>
                <span className="text-xl font-bold">{site.name}</span>
              </div>
              <p className="text-sm text-coinbypass-muted-foreground">
                {t.tagline[0]}<br />
                {t.tagline[1]}
              </p>
            </div>

            {/* 코인 충전 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">{t.secCharge}</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href={href("usdt")} className="hover:text-white transition-colors">{t.linkUsdt}</a></li>
                <li><a href={href("coin")} className="hover:text-white transition-colors">{t.linkCoin}</a></li>
              </ul>
            </div>

            {/* 결제 우회 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">{t.secBypass}</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href={href("bypass")} className="hover:text-white transition-colors">{t.linkBypass}</a></li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">{t.secSupport}</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href={href("faq")} className="hover:text-white transition-colors">{t.linkFaq}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-coinbypass-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-coinbypass-muted-foreground">
              © {currentYear} {site.name}. All rights reserved.
            </p>
            <p className="text-xs text-coinbypass-muted-foreground">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </footer>

      <TelegramInquiry siteId="coinbypass" />
    </div>
  );
}
