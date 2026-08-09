import Script from 'next/script'

/**
 * Tawk.to live chat widget.
 *
 * Loaded with `strategy="lazyOnload"` so the (large) third-party embed is
 * deferred to browser idle after the page has finished loading — it never
 * blocks first paint, hydration, or the critical path (protects LCP / INP and
 * cuts initial-load JS on mobile). Trade-off: the chat bubble appears a moment
 * later. The property/widget IDs are the live Kimberley Direct Publishing
 * Tawk.to inbox.
 */
export default function TawkChat() {
  return (
    <Script id="tawk-to" strategy="lazyOnload">
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
