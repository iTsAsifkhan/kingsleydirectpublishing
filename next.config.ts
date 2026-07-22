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
};

export default nextConfig;
