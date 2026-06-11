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
  // 기본 JSON-LD (WebSite 스키마)
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName || title,
    url: canonical,
    description: description,
  };

  const structuredData = jsonLd || defaultJsonLd;
  
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

