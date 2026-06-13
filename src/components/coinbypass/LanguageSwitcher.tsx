import Link from "next/link";
import { useRouter } from "next/router";

/**
 * 한국어(/) ↔ 영어(/en) 토글. 정적 export 사이트라 언어별 페이지가 실제 URL 로 존재하며,
 * 현재 경로를 보고 상대 언어 경로를 만든다. (next.config trailingSlash:true 고려)
 */
export function LanguageSwitcher() {
  const { asPath } = useRouter();
  const clean = (asPath.split("?")[0]?.split("#")[0] || "/").replace(/\/$/, "") || "/";
  const isEn = clean === "/en" || clean.startsWith("/en/");
  const koHref = isEn ? clean.replace(/^\/en/, "") || "/" : clean;
  const enHref = isEn ? clean : clean === "/" ? "/en" : `/en${clean}`;

  const base = "px-2 py-1 rounded transition-colors";
  const on = "text-coinbypass-primary font-semibold";
  const off = "text-coinbypass-muted-foreground hover:text-white";

  return (
    <div className="flex items-center gap-1 text-sm" aria-label="Language">
      <Link href={koHref} className={`${base} ${!isEn ? on : off}`} aria-current={!isEn ? "true" : undefined}>
        KO
      </Link>
      <span className="text-coinbypass-border">|</span>
      <Link href={enHref} className={`${base} ${isEn ? on : off}`} aria-current={isEn ? "true" : undefined}>
        EN
      </Link>
    </div>
  );
}
