import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // casinosolutionz.com
        solutionz: {
          primary: "#00FFB3",
          secondary: "#ff5454",
          background: "#141517",
          surface: "#1e1f23",
        },
        // 미스av.com
        missav: {
          primary: "#fe628e",
          background: "#0b0a14",
          surface: "#161422",
        },
        // primevendor.io
        primevendor: {
          primary: "#FFD700",
          secondary: "#FF6B35",
          accent: "#00D4FF",
          background: "#0A0A0F",
          surface: "#14141F",
          muted: "#1E1E2E",
        },
        // sportsbookapi.com
        sportsbook: {
          primary: "#22C55E",
          secondary: "#3B82F6",
          accent: "#F97316",
          background: "#0A0F0D",
          surface: "#141F1A",
          muted: "#1E2E26",
          field: "#15803D",
        },
        // 망고카지노솔루션.com
        mango: {
          primary: "#FF9500",
          secondary: "#FFD60A",
          accent: "#FF6B00",
          background: "#0F0A05",
          surface: "#1A1408",
          muted: "#2A2010",
        },
        // VPN가이드.com (shadcn/ui inspired dark theme)
        vpnguide: {
          primary: "#8B5CF6",
          secondary: "#A855F7",
          accent: "#C084FC",
          background: "#030712",      // 거의 순수 검정
          foreground: "#F9FAFB",
          card: "#0A0A0F",
          "card-foreground": "#F9FAFB",
          muted: "#111827",
          "muted-foreground": "#9CA3AF",
          border: "#1F2937",
          ring: "#8B5CF6",
        },
        // 마케팅허브.com
        marketinghub: {
          primary: "#3B82F6",
          secondary: "#60A5FA",
          accent: "#06B6D4",
          background: "#030712",
          foreground: "#F9FAFB",
          card: "#0F172A",
          "card-foreground": "#F9FAFB",
          muted: "#1E293B",
          "muted-foreground": "#94A3B8",
          border: "#334155",
          ring: "#3B82F6",
        },
        // tetherp2p.com
        tetherp2p: {
          primary: "#26A17B",      // 테더 공식 초록
          secondary: "#50AF95",
          accent: "#1A7F5A",
          background: "#030D09",
          foreground: "#F9FAFB",
          card: "#0A1F15",
          "card-foreground": "#F9FAFB",
          muted: "#122A1F",
          "muted-foreground": "#94A3B8",
          border: "#1E3A2C",
          ring: "#26A17B",
        },
        // coinbypass.com
        coinbypass: {
          primary: "#F59E0B",      // 골드/앰버
          secondary: "#FBBF24",
          accent: "#B45309",
          background: "#0F0B05",
          foreground: "#F9FAFB",
          card: "#1A1408",
          "card-foreground": "#F9FAFB",
          muted: "#2A2010",
          "muted-foreground": "#CBB58C",
          border: "#3A2D14",
          ring: "#F59E0B",
        },
        // betagent365.com
        betagent365: {
          primary: "#10B981",      // 에메랄드 그린
          secondary: "#34D399",
          accent: "#059669",
          background: "#030F0A",
          foreground: "#F9FAFB",
          card: "#0A1F15",
          "card-foreground": "#F9FAFB",
          muted: "#122A1F",
          "muted-foreground": "#94A3B8",
          border: "#1E3A2C",
          ring: "#10B981",
        },
        // fanguidekorea.com
        fanguide: {
          primary: "#E91E63",      // 핑크 (포인트 색상)
          secondary: "#F06292",
          accent: "#C2185B",
          background: "#030712",   // 순수 검정 (vpnguide와 동일)
          foreground: "#F9FAFB",
          card: "#0F0F18",         // 어두운 검정 카드
          "card-foreground": "#F9FAFB",
          muted: "#1A1A28",        // 회색 muted
          "muted-foreground": "#9CA3AF",  // 회색 글자
          border: "#2A2A3A",       // 회색 테두리
          ring: "#E91E63",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

