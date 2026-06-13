import Link from "next/link";
import { useRouter } from "next/router";

/**
 * 4개 언어 토글 (ko / en / ja / zh). 정적 export 사이트라 언어별 페이지가 실제 URL 로
 * 존재하며(/, /en, /ja, /zh), 현재 경로의 locale prefix 를 떼어 다른 언어 경로를 만든다.
 */
const LOCALES = [
  { code: "ko", label: "KO", prefix: "" },
  { code: "en", label: "EN", prefix: "/en" },
  { code: "ja", label: "日本語", prefix: "/ja" },
  { code: "zh", label: "中文", prefix: "/zh" },
] as const;

export function LanguageSwitcher() {
  const { asPath } = useRouter();
  const clean = (asPath.split("?")[0]?.split("#")[0] || "/").replace(/\/$/, "") || "/";

  let current = "ko";
  let base = clean;
  for (const l of LOCALES) {
    if (l.prefix && (clean === l.prefix || clean.startsWith(`${l.prefix}/`))) {
      current = l.code;
      base = clean.slice(l.prefix.length) || "/";
      break;
    }
  }
  const hrefFor = (prefix: string) => (!prefix ? base : base === "/" ? prefix : `${prefix}${base}`);

  return (
    <div className="flex items-center gap-1 text-sm flex-wrap" aria-label="Language">
      {LOCALES.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="text-coinbypass-border mx-1">·</span>}
          <Link
            href={hrefFor(l.prefix)}
            className={`px-1.5 py-1 rounded transition-colors ${
              current === l.code
                ? "text-coinbypass-primary font-semibold"
                : "text-coinbypass-muted-foreground hover:text-white"
            }`}
            aria-current={current === l.code ? "true" : undefined}
          >
            {l.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
