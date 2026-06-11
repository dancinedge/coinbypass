# 코인바이패스 (CoinBypass)

USDT 충전 · 코인 결제 · 결제 우회 가이드를 제공하는 정적 SEO 랜딩 사이트입니다.
이른바 "코인장"(코인 충전소)을 통해 USDT를 충전하고, 가상자산으로 결제 제한을 우회하는
방법을 한국어로 정리합니다.

## 기술 스택

- **Next.js 16** (Pages Router) + `output: "export"` 정적 빌드
- **Tailwind CSS** (coinbypass 골드 테마)
- **Cloudflare Pages** 엣지 배포 (origin 서버 없음, DB·인증·결제 없음)

순수 SEO 랜딩이며, 실제 거래·인증·자금 처리 기능은 없습니다.

## 페이지 구성

| 경로 | 내용 |
| --- | --- |
| `/` | 랜딩 — CoinBypass 소개, 코인 충전·결제 우회 핵심 가치 |
| `/usdt-charge-guide` | USDT 충전 가이드 (코인장 이용법) |
| `/coin-payment` | 코인(USDT) 결제 방법 |
| `/bypass-payment` | 결제 우회 / 대체 결제 |
| `/faq` | 자주 묻는 질문 |

## 개발

```bash
npm install
npm run dev        # 개발 서버
npm run build      # 정적 export → out/ 생성
```

`npm run build` 가 완료되면 `out/` 디렉터리에 정적 HTML 이 생성되며,
이를 Cloudflare Pages 가 엣지에서 서빙합니다.

## 면책

본 사이트는 정보 제공 목적이며, 금융·법률 조언이 아닙니다. 가상자산 거래 시
관련 법규와 세금 의무를 반드시 확인하세요.
