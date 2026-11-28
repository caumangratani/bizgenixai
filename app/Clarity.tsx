import Script from 'next/script';

// Microsoft Clarity (heatmaps and session replays), added 28 Nov 2026 on Umang's instruction.
// Project "Bizgenix AI website", owned by info@bizgenix.ai. Disclosed in /privacy-policy, section 7.
// Loads only on the production host, after the page is interactive, so local and staging runs send nothing.
// Clarity masks form fields by default; for visitors in the EEA, UK and Switzerland it sets no cookies
// without a consent signal (its own Consent Mode default).
const CLARITY_PROJECT_ID = 'zkqdrvfjms';

export default function Clarity() {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`if (location.hostname === 'bizgenix.ai') {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
}`}
    </Script>
  );
}
