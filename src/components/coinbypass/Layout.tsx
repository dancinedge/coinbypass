import { useState } from "react";
import { useRouter } from "next/router";
import { TelegramInquiry } from "@/components/common/TelegramInquiry";
import { LanguageSwitcher } from "@/components/coinbypass/LanguageSwitcher";
import { getSiteConfig } from "@/lib/sites";

const site = getSiteConfig("coinbypass");

const NAV_ITEMS = [
  { label: "USDT 충전 가이드", href: "/usdt-charge-guide" },
  { label: "코인 결제", href: "/coin-payment" },
  { label: "결제 우회", href: "/bypass-payment" },
  { label: "FAQ", href: "/faq" },
];

const NAV_ITEMS_EN = [
  { label: "USDT Guide", href: "/en/usdt-charge-guide" },
  { label: "Coin Payment", href: "/en/coin-payment" },
  { label: "Bypass", href: "/en/bypass-payment" },
  { label: "FAQ", href: "/en/faq" },
];

const NAV_ITEMS_JA = [
  { label: "USDT充電ガイド", href: "/ja/usdt-charge-guide" },
  { label: "コイン決済", href: "/ja/coin-payment" },
  { label: "決済迂回", href: "/ja/bypass-payment" },
  { label: "FAQ", href: "/ja/faq" },
];

const NAV_ITEMS_ZH = [
  { label: "USDT充值指南", href: "/zh/usdt-charge-guide" },
  { label: "币支付", href: "/zh/coin-payment" },
  { label: "支付绕过", href: "/zh/bypass-payment" },
  { label: "FAQ", href: "/zh/faq" },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function CoinBypassLayout({ children, currentPath }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { asPath } = useRouter();
  // 경로의 locale prefix(/en·/ja·/zh)로 언어별 네비 + 홈을 고른다. (정적 export — 언어별 실제 URL)
  const cleanPath = (asPath.split("?")[0].replace(/\/$/, "") || "/");
  const locale =
    cleanPath === "/en" || cleanPath.startsWith("/en/") ? "en"
    : cleanPath === "/ja" || cleanPath.startsWith("/ja/") ? "ja"
    : cleanPath === "/zh" || cleanPath.startsWith("/zh/") ? "zh"
    : "ko";
  const navItems =
    locale === "en" ? NAV_ITEMS_EN : locale === "ja" ? NAV_ITEMS_JA : locale === "zh" ? NAV_ITEMS_ZH : NAV_ITEMS;
  const homeHref = locale === "ko" ? "/" : `/${locale}`;
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    currentPath === item.href
                      ? "text-coinbypass-primary bg-coinbypass-muted"
                      : "text-coinbypass-muted-foreground hover:text-white hover:bg-coinbypass-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    currentPath === item.href
                      ? "text-coinbypass-primary bg-coinbypass-muted"
                      : "text-coinbypass-muted-foreground hover:text-white hover:bg-coinbypass-muted"
                  }`}
                >
                  {item.label}
                </a>
              ))}
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
                USDT 충전 & 코인 결제<br />
                결제 우회 가이드 플랫폼
              </p>
            </div>

            {/* 코인 충전 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">코인 충전</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href="/usdt-charge-guide" className="hover:text-white transition-colors">USDT 충전 가이드</a></li>
                <li><a href="/coin-payment" className="hover:text-white transition-colors">코인 결제 방법</a></li>
              </ul>
            </div>

            {/* 결제 우회 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">결제 우회</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href="/bypass-payment" className="hover:text-white transition-colors">결제 우회 / 대체 결제</a></li>
              </ul>
            </div>

            {/* 고객지원 */}
            <div>
              <h4 className="font-semibold mb-4 text-coinbypass-primary">고객지원</h4>
              <ul className="space-y-2 text-sm text-coinbypass-muted-foreground">
                <li><a href="/faq" className="hover:text-white transition-colors">자주묻는질문</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-coinbypass-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-coinbypass-muted-foreground">
              © {currentYear} {site.name}. All rights reserved.
            </p>
            <p className="text-xs text-coinbypass-muted-foreground">
              본 사이트는 정보 제공 목적이며, 금융 조언이 아닙니다.
            </p>
          </div>
        </div>
      </footer>

      <TelegramInquiry siteId="coinbypass" />
    </div>
  );
}
