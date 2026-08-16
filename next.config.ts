import type { NextConfig } from "next";

// Conservative security headers (SEC1). CSP is intentionally omitted here — a
// strict policy needs to be validated against Swiper/GSAP inline styles, next/image,
// and the third-party FX/geo calls on a deployed URL before it can ship safely.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats when the browser supports them (P5).
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 96],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Canonicalise the host: permanently redirect the www subdomain to the
  // non-www apex (the canonical origin used in metadata + sitemap). Without
  // this, www serves a duplicate copy of the site and can surface its own
  // crawl errors in Search Console.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kimberleydirectpublishing.com",
          },
        ],
        destination: "https://kimberleydirectpublishing.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
