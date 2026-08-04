"use client";

/**
 * Hero — "kinetic editorial" hero, adapted for Kimberley Direct Publishing.
 * Concept: the type is the art. An oversized serif headline sits over a
 * cursor-reactive flow-field canvas; one italic word swaps on a timer.
 *
 * Locked reference implementation — layout, motion and the canvas flow-field
 * are preserved verbatim. Only palette (mapped to the repo's brand tokens),
 * fonts and copy are project-specific.
 */

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";

export type HeroTitle = { no: string; title: string; meta: string };

export interface HeroProps {
  eyebrowLeft?: string;
  eyebrowRight?: string;
  /** Static opening lines of the headline. */
  headlineLines?: string[];
  /** Words cycled in italic accent at the end of the headline. */
  words?: string[];
  /** Milliseconds each cycled word is held. */
  wordInterval?: number;
  subline?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  listLabel?: string;
  titles?: HeroTitle[];
  listHref?: string;
  statusLabel?: string;
  scrollLabel?: string;
  /** Accent colour (CSS colour string). */
  accent?: string;
  /** Flow-field particle multiplier, 0.3–2. */
  density?: number;
  className?: string;
}

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>\")";

// Palette mapped to the repo's brand tokens (:root in globals.css):
//   BG  = --brand-ink   (deep neutral base)
//   INK = --brand-white (headline / emphasised copy)
//   DIM = --brand-gray-3 (secondary copy)
// The confident accent (default prop below) is --brand-yellow (#0EA5A0 teal).
const BG = "#0D0D0D";
const INK = "#FFFFFF";
const DIM = "#8A8A8A";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.9 },
  },
};

/* ---------------------------------------------------------------- canvas */

function FlowField({ accent, density = 1 }: { accent: string; density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0,
      h = 0,
      raf = 0,
      resizeTimer: number | undefined;

    type P = { x: number; y: number; px: number; py: number; life: number; speed: number; hot: boolean };
    let parts: P[] = [];

    const seed = () => {
      const n = Math.round(Math.min(1200, Math.max(240, (w * h) / 5400)) * density);
      parts = Array.from({ length: n }, () => {
        const x = Math.random() * w;
        const y = Math.random() * h;
        return { x, y, px: x, py: y, life: Math.random() * 300, speed: 0.45 + Math.random() * 1.05, hot: Math.random() < 0.13 };
      });
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);
      seed();
    };

    // Summed sines: smooth, curl-like field with no noise library.
    const angleAt = (x: number, y: number, t: number) =>
      (Math.sin(x * 0.0024 + t * 0.3) * Math.cos(y * 0.002 - t * 0.22) * 1.8 +
        Math.sin((x + y) * 0.0012 + t * 0.16) * 1.2) *
      Math.PI;

    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onLeave = () => {
      mouse.current.active = false;
    };
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    resize();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    if (reduced) {
      // Calm fallback: one static pass of the same field, no loop.
      ctx.lineWidth = 1;
      for (const p of parts) {
        let x = p.x,
          y = p.y;
        ctx.strokeStyle = p.hot ? "rgba(14,165,160,0.22)" : "rgba(255,255,255,0.09)";
        ctx.beginPath();
        ctx.moveTo(x, y);
        for (let s = 0; s < 22; s++) {
          const a = angleAt(x, y, 0);
          x += Math.cos(a) * 2.2;
          y += Math.sin(a) * 2.2;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    } else {
      let t = 0,
        tick = 0,
        box = canvas.getBoundingClientRect();

      const frame = () => {
        t += 0.011;
        if (++tick % 45 === 0) box = canvas.getBoundingClientRect();
        ctx.fillStyle = "rgba(13,13,13,0.075)";
        ctx.fillRect(0, 0, w, h);

        const mx = mouse.current.active ? mouse.current.x - box.left : -99999;
        const my = mouse.current.active ? mouse.current.y - box.top : -99999;
        const R = Math.min(320, Math.max(150, w * 0.17));
        ctx.lineWidth = 1;

        for (const p of parts) {
          let ang = angleAt(p.x, p.y, t);
          let boost = 0;
          if (mx > -9999) {
            const dx = p.x - mx,
              dy = p.y - my,
              d2 = dx * dx + dy * dy;
            if (d2 < R * R) {
              const d = Math.sqrt(d2) || 1;
              const f = 1 - d / R;
              ang = Math.atan2(dy, dx) + Math.PI * 0.5 + ang * (1 - f) * 0.6; // swirl the cursor
              boost = f * 2.4;
            }
          }
          const sp = p.speed + boost;
          p.px = p.x;
          p.py = p.y;
          p.x += Math.cos(ang) * sp;
          p.y += Math.sin(ang) * sp;
          if (--p.life < 0 || p.x < -25 || p.x > w + 25 || p.y < -25 || p.y > h + 25) {
            p.x = Math.random() * w;
            p.y = Math.random() * h;
            p.px = p.x;
            p.py = p.y;
            p.life = 140 + Math.random() * 280;
          }
          ctx.strokeStyle = p.hot
            ? `rgba(14,165,160,${(0.3 + boost * 0.14).toFixed(3)})`
            : `rgba(255,255,255,${(0.11 + boost * 0.07).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(p.px, p.py);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [accent, density, reduced]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 z-0 block h-full w-full"
      style={{
        maskImage: "radial-gradient(125% 105% at 68% 40%, #000 26%, transparent 86%)",
        WebkitMaskImage: "radial-gradient(125% 105% at 68% 40%, #000 26%, transparent 86%)",
      }}
    />
  );
}

/* ------------------------------------------------------------ magnetic CTA */

function MagneticCta({
  href,
  label,
  accent,
}: {
  href: string;
  label: string;
  accent: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(hover: hover)").matches) return;
    let queued = false;
    let last = { x: 0, y: 0 };
    const apply = () => {
      queued = false;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = last.x - cx;
      const dy = last.y - cy;
      const near = Math.hypot(dx, dy) < 150 + Math.max(r.width, r.height) / 2;
      mx.set(near ? dx * 0.34 : 0);
      my.set(near ? dy * 0.34 : 0);
    };
    const onMove = (e: PointerEvent) => {
      last = { x: e.clientX, y: e.clientY };
      if (!queued) {
        queued = true;
        requestAnimationFrame(apply); // throttle to one read per frame
      }
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [mx, my, reduced]);

  return (
    <motion.a
      ref={ref}
      href={href}
      variants={rise}
      style={{ x, y, background: accent, color: "#0D0D0D", willChange: "transform" }}
      whileHover={{ boxShadow: `0 20px 54px -18px ${accent}bf` }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="inline-flex items-center gap-3 rounded-full px-7 py-[17px] text-[clamp(14px,1.05vw,16px)] font-medium tracking-[-0.01em] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-current"
    >
      {label}
      <span aria-hidden className="font-mono text-[15px]">
        ↗
      </span>
    </motion.a>
  );
}

/* --------------------------------------------------------- kinetic word */

function KineticWord({ words, interval, accent }: { words: string[]; interval: number; accent: string }) {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [interval, reduced, words.length]);

  const word = words[i] ?? "";

  return (
    <span className="inline-flex italic" style={{ color: accent }}>
      {word.split("").map((ch, n) => (
        <motion.span
          key={`${i}-${n}`}
          initial={reduced ? false : { opacity: 0, y: "0.5em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: n * 0.035 }}
          className="inline-block whitespace-pre"
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ hero */

export default function Hero({
  eyebrowLeft = "Kimberley Direct Publishing",
  eyebrowRight = "UK · Worldwide",
  headlineLines = ["We publish", "books the world"],
  words = ["remembers.", "keeps.", "rereads.", "talks about."],
  wordInterval = 3200,
  subline = (
    <>
      From first draft to worldwide shelves — editing, cover design, publishing
      and marketing under one roof.{" "}
      <span style={{ color: INK }}>You keep the rights and the royalties.</span>
    </>
  ),
  primaryCta = { label: "Start your book", href: "/contact" },
  secondaryCta = { label: "See our services", href: "/services" },
  listLabel = "What we do",
  titles = [
    { no: "01", title: "Editing", meta: "Dev · Line · Proof" },
    { no: "02", title: "Cover Design", meta: "Print · eBook" },
    { no: "03", title: "Publishing", meta: "Amazon · Global" },
    { no: "04", title: "Marketing", meta: "Launch · Growth" },
  ],
  listHref = "/services",
  statusLabel = "Accepting new authors",
  scrollLabel = "Our services",
  accent = "#0EA5A0",
  density = 1,
  className = "",
}: HeroProps) {
  const vars = {
    "--hero-ink": INK,
    "--hero-bg": BG,
    "--hero-dim": DIM,
    "--hero-accent": accent,
    "--hero-line": "rgba(255,255,255,0.14)",
  } as CSSProperties;

  const serif = { fontFamily: "var(--font-fraunces), Georgia, serif" };

  return (
    <section
      aria-label="Introduction"
      style={{ ...vars, background: BG, color: INK, fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      className={`relative isolate min-h-screen w-full overflow-hidden ${className}`}
    >
      <FlowField accent={accent} density={density} />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-[22vh] -right-[14vw] z-[1] h-[82vh] w-[78vw] blur-[34px]"
        style={{ background: `radial-gradient(closest-side, ${accent}29, transparent 72%)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4] opacity-40 mix-blend-soft-light"
        style={{ backgroundImage: NOISE }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[3] grid min-h-screen grid-rows-[1fr_auto] gap-9 p-[clamp(22px,3.4vw,54px)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-[clamp(36px,5vw,96px)] pt-[clamp(104px,14vh,150px)]">
          <div className="grid max-w-[1100px] flex-[1_1_560px] content-center">
            <motion.p
              variants={rise}
              className="m-0 mb-[clamp(20px,2.6vw,34px)] flex items-center gap-3 font-mono text-[clamp(10px,0.95vw,12px)] uppercase tracking-[0.24em]"
              style={{ color: DIM }}
            >
              <span>{eyebrowLeft}</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="h-px w-[clamp(30px,5vw,70px)] origin-left"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <span>{eyebrowRight}</span>
            </motion.p>

            <h1
              className="m-0 max-w-[17ch] text-[clamp(50px,10.4vw,190px)] font-normal leading-[0.88] tracking-[-0.035em]"
              style={{ ...serif, textWrap: "balance" } as CSSProperties}
            >
              {headlineLines.map((line) => (
                <motion.span key={line} variants={rise} className="block">
                  {line}
                </motion.span>
              ))}
              <motion.span variants={rise} className="block whitespace-nowrap">
                <KineticWord words={words} interval={wordInterval} accent={accent} />
              </motion.span>
            </h1>

            <motion.p
              variants={rise}
              className="m-0 mt-[clamp(24px,3.2vw,44px)] max-w-[44ch] text-[clamp(15px,1.35vw,21px)] leading-[1.55]"
              style={{ color: DIM, textWrap: "pretty" } as CSSProperties}
            >
              {subline}
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-[clamp(32px,4.2vw,56px)] flex flex-wrap items-center gap-[clamp(12px,1.6vw,24px)]"
            >
              <MagneticCta {...primaryCta} accent={accent} />
              <a
                href={secondaryCta.href}
                className="group relative inline-flex items-center px-1 py-[17px] text-[clamp(14px,1.05vw,16px)] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-current"
                style={{ color: INK }}
              >
                {secondaryCta.label}
                <span
                  aria-hidden
                  className="absolute right-1 bottom-[13px] left-1 h-px origin-right scale-x-0 bg-current transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100"
                />
              </a>
            </motion.div>
          </div>

          <motion.aside
            variants={rise}
            aria-label={listLabel}
            className="grid min-w-[240px] flex-[0_1_320px] pl-[clamp(20px,2.6vw,38px)]"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.14)" }}
          >
            <p className="m-0 mb-5 font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: DIM }}>
              {listLabel}
            </p>
            {titles.map((t) => (
              <a
                key={t.no}
                href={listHref}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-3.5 py-[15px] transition-[padding] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:pl-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.09)" }}
              >
                <span aria-hidden className="font-mono text-[10px] tracking-[0.1em]" style={{ color: DIM }}>
                  {t.no}
                </span>
                <span className="grid gap-1">
                  <span
                    className="text-[clamp(17px,1.5vw,22px)] leading-[1.15] tracking-[-0.01em]"
                    style={serif}
                  >
                    {t.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: DIM }}>
                    {t.meta}
                  </span>
                </span>
              </a>
            ))}
          </motion.aside>
        </div>

        <motion.div
          variants={rise}
          className="flex items-end justify-between gap-5 font-mono text-[11px] uppercase tracking-[0.13em]"
          style={{ color: DIM }}
        >
          <div className="flex items-center gap-2.5">
            <motion.span
              aria-hidden
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
            <span>{scrollLabel}</span>
          </div>
          <div
            className="flex items-center gap-2.5 whitespace-nowrap rounded-full py-[7px] pr-[13px] pl-[11px] backdrop-blur-md"
            style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.03)" }}
          >
            <motion.span
              aria-hidden
              animate={{ opacity: [1, 0.4, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
            />
            <span>{statusLabel}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
