import Script from 'next/script'

/**
 * Tawk.to live chat widget.
 *
 * Loaded with `strategy="afterInteractive"` so the third-party embed never
 * blocks first paint or hydration (protects LCP / INP). The property/widget
 * IDs are the live Kimberley Direct Publishing Tawk.to inbox.
 */
export default function TawkChat() {
  return (
    <Script id="tawk-to" strategy="afterInteractive">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6a65923ebc55a11d4d70fb1c/1juec6hmu';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  )
}
