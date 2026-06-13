import NextHead from "next/head";

interface HeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogImage?: string;
  siteName?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
  siteId?: "solutionz" | "missav" | "primevendor" | "sportsbook" | "mango" | "vpnguide" | "marketinghub" | "tetherp2p" | "coinbypass" | "betagent365" | "fanguide";
}

export function Head({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  siteName,
  noindex = false,
  jsonLd,
  siteId = "solutionz",
}: HeadProps) {
  // coinbypass 다국어 — 페이지 언어를 canonical 경로 prefix 로 판별(영어=루트, ko/ja/zh=prefix).
  const pageLocale: "en" | "ko" | "ja" | "zh" = (() => {
    try {
      const p = new URL(canonical).pathname.replace(/\/$/, "") || "/";
      if (p === "/ko" || p.startsWith("/ko/")) return "ko";
      if (p === "/ja" || p.startsWith("/ja/")) return "ja";
      if (p === "/zh" || p.startsWith("/zh/")) return "zh";
      return "en";
    } catch {
      return "en";
    }
  })();

  // 기본 JSON-LD. "코인장" 별칭(alternateName)은 **한국어 페이지에만** 노출한다
  // ("코인장" 은 한국어 키워드 — 한국어 페이지에서만 브랜드와 연결, 그 외 언어는 일반 WebSite).
  const defaultJsonLd =
    siteId === "coinbypass" && pageLocale === "ko"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: siteName || title,
              alternateName: ["코인장", "코인 충전소"],
              url: canonical,
              description: description,
            },
            {
              "@type": "Organization",
              name: siteName || "코인바이패스",
              alternateName: "코인장",
              url: canonical,
            },
          ],
        }
      : {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName || title,
          url: canonical,
          description: description,
        };

  const structuredData = jsonLd || defaultJsonLd;

  // hreflang ko↔en alternate (coinbypass 다국어). canonical(full URL) 기반 상대 언어 URL 생성.
  let hreflangs: { lang: string; href: string }[] = [];
  if (siteId === "coinbypass") {
    try {
      const u = new URL(canonical);
      const p = u.pathname.replace(/\/$/, "") || "/";
      // 현재 경로에서 locale prefix 제거 → base path (영어=루트 기준 경로)
      let base = p;
      for (const pre of ["/ko", "/ja", "/zh"]) {
        if (p === pre || p.startsWith(`${pre}/`)) {
          base = p.slice(pre.length) || "/";
          break;
        }
      }
      const langUrl = (pre: string) =>
        `${u.origin}${!pre ? (base === "/" ? "/" : base) : base === "/" ? pre : `${pre}${base}`}`;
      hreflangs = [
        { lang: "en", href: langUrl("") },
        { lang: "ko", href: langUrl("/ko") },
        { lang: "ja", href: langUrl("/ja") },
        { lang: "zh", href: langUrl("/zh") },
        { lang: "x-default", href: langUrl("") },
      ];
    } catch {
      hreflangs = [];
    }
  }

  // 사이트별 파비콘 및 OG 이미지 경로
  const faviconPath = `/${siteId}/favicon.svg`;
  const defaultOgImage = `/${siteId}/og-image.png`;
  const finalOgImage = ogImage || defaultOgImage;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonical} />
      {hreflangs.map((h) => (
        // 소문자 `hreflang` 속성으로 출력(표준 표기). React 의 카멜 prop(hrefLang)은
        // next/head 정적 export 시 대문자 그대로 직렬화되므로, 소문자 커스텀 속성으로 spread 한다.
        <link key={h.lang} rel="alternate" href={h.href} {...({ hreflang: h.lang } as Record<string, string>)} />
      ))}

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={{ en: "en_US", ko: "ko_KR", ja: "ja_JP", zh: "zh_CN" }[pageLocale]} />
      {siteName && <meta property="og:site_name" content={siteName} />}
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalOgImage} />

      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Favicon - SVG with PNG fallback */}
      <link rel="icon" type="image/svg+xml" href={faviconPath} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/${siteId}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/${siteId}/favicon-16x16.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/${siteId}/apple-touch-icon.png`} />
      <meta name="theme-color" content={
        siteId === "solutionz" ? "#00FFB3" :
        siteId === "missav" ? "#fe628e" :
        siteId === "sportsbook" ? "#22C55E" :
        siteId === "mango" ? "#FF9500" :
        siteId === "vpnguide" ? "#8B5CF6" :
        siteId === "marketinghub" ? "#3B82F6" :
        siteId === "tetherp2p" ? "#26A17B" :
        siteId === "coinbypass" ? "#F59E0B" :
        siteId === "betagent365" ? "#10B981" :
        siteId === "fanguide" ? "#E91E63" :
        "#FFD700"
      } />
    </NextHead>
  );
}

