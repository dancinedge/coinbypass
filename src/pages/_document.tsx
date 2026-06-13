import { Html, Head, Main, NextScript } from "next/document";

// 정적 export 라 서버 Accept-Language 분기가 불가 → 클라이언트 인라인 스크립트로 처리.
// (1) 경로 prefix 로 <html lang> 을 정확한 언어로 교정한다(루트=영어).
// (2) 루트("/") 최초 방문 시에만 브라우저 언어(navigator.language)에 맞춰 /ko·/ja·/zh 로
//     자동 이동한다(세션당 1회, 언어토글로 영어 복귀 시 재이동 안 함). 봇/JS-off 는 영향 없음.
const LANG_REDIRECT = `(function(){try{
var p=location.pathname,l='en';
if(p==='/ko'||p.indexOf('/ko/')===0)l='ko';
else if(p==='/ja'||p.indexOf('/ja/')===0)l='ja';
else if(p==='/zh'||p.indexOf('/zh/')===0)l='zh';
document.documentElement.lang=l;
if(p==='/'&&!sessionStorage.getItem('cb_lang_redir')){
sessionStorage.setItem('cb_lang_redir','1');
var n=(navigator.language||navigator.userLanguage||'').toLowerCase();
var t=n.indexOf('ko')===0?'/ko':n.indexOf('ja')===0?'/ja':(n.indexOf('zh')===0?'/zh':'');
if(t)location.replace(t+location.search+location.hash);
}
}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: LANG_REDIRECT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
