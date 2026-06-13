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
  // 기본 JSON-LD. coinbypass 는 "코인장" 별칭(alternateName) + Organization 을 함께 노출해
  // "코인장" 검색 시 브랜드(코인바이패스)와 연결되도록 한다(SEO).
  const defaultJsonLd =
    siteId === "coinbypass"
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
      const p = u.pathname.replace(/\/$/, "");
      const isEnC = p === "/en" || p.startsWith("/en/");
      const koPath = isEnC ? p.replace(/^\/en/, "") || "/" : p || "/";
      const enPath = isEnC ? p : koPath === "/" ? "/en" : `/en${koPath}`;
      const koUrl = `${u.origin}${koPath}`;
      const enUrl = `${u.origin}${enPath}`;
      hreflangs = [
        { lang: "ko", href: koUrl },
        { lang: "en", href: enUrl },
        { lang: "x-default", href: koUrl },
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
        <link key={h.lang} rel="alternate" hrefLang={h.lang} href={h.href} />
      ))}

      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="ko_KR" />
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

