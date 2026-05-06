# Book Publishing Partner — Design System Extraction

Pixel-perfect reference extracted from the SingleFile capture of bookpublishingpartner.com (saved 2026-05-06).

---

## 1. Tech Stack (what they're actually using)

| Layer | Library | Version | Purpose |
|---|---|---|---|
| CSS framework | Bootstrap | 5.2.3 | Grid, utilities, base components |
| Icons | Font Awesome | 6.5.1 (Free) | All icons throughout |
| Carousel (book covers, reviews) | Slick Carousel | — | The two scrolling marquees + testimonial slider |
| Carousel (alt) | Swiper.js | — | Some sliders use Swiper |
| Scroll animations | WOW.js + Animate.css | — | Fade-in / slide-in on scroll |
| Lazy loading | Lozad.js | — | Defer offscreen images |
| Modal / lightbox | Fancybox | — | Popups (Live Chat, Get A Quote) |
| jQuery | (implicit via Slick) | — | Required by Slick + Fancybox |

**Fonts:**
- `Montserrat` — all headings (`h1`–`h6`)
- `Noto Sans` — body text, default
- `Inter` — loaded but not heavily used in custom CSS (likely fallback or for specific elements)

---

## 2. Color Palette

| Token | Hex | Usage |
|---|---|---|
| **Primary yellow** | `#FFB210` | Buttons, accents, hover glows, scrollbar thumb, headings highlight |
| Primary yellow (dark) | `#C88800` | Bottom of yellow gradient on button arrows |
| **Deep navy/purple** | `#140545` | Dark sections, headings, button backgrounds, scrollbar track |
| Body text | `#0D0D0D` | Default text color |
| Near-black | `#0c0c0c` | Some dark UI (close button bg) |
| Mid grey 1 | `#343434` | Border for `.span-tag-border` |
| Mid grey 2 | `#4b4b4b` | `.p-head` paragraph color |
| Light grey | `#8A8A8A` | Used as `.clr-3` utility |
| Accent blue | `#005cff` | Sparingly used (focus states?) |
| White | `#ffffff` | Card backgrounds, button text on dark |

**Gradients used:**
- Yellow → dark gold: `linear-gradient(180deg, rgba(255,178,16,1) 0%, rgba(228,154,0,1) 100%)` (the big yellow circle CTA)
- Dark teal → near-black: `linear-gradient(180deg, rgba(21,50,67,1) 0%, rgba(4,10,13,1) 100%)` (button arrow circle)
- Yellow → gold for arrow circles: `linear-gradient(180deg, #FFB210 0%, #C88800 100%)`

---

## 3. Typography Scale

| Element | Size | Family | Weight | Color |
|---|---|---|---|---|
| `h1` (hero) | `44px` | Montserrat | (default) | `#140545` |
| `h2` (section heading) | `45px` | Montserrat | — | `#140545` |
| `.counter-wrap h5` (stats) | `45px` | Montserrat | — | — |
| Service card `h5` | `22px` | Montserrat | — | — |
| `.services-item-cta` | `20px` | — | — | — |
| `.counter-wrap p` | `18px` | Noto Sans | `600` | — |
| `.p-head` (paragraphs) | `16px` | Noto Sans | `400` | `#4b4b4b` |
| Body default | inherit | Noto Sans | `400` | `#0D0D0D` |
| `index-wrap-4 h2` (purple section) | `35px` | Montserrat | — | — |

**Weight utility classes:** `.fw-400`, `.fw-500`, `.fw-600`, `.fw-700` (used with body classes).

**Color utility classes:** `.clr-1` (yellow `#FFB210`), `.clr-3` (grey `#8A8A8A`).

---

## 4. Buttons (THE CRITICAL ONES)

### Base button
```css
.btn, button {
  padding: 6px 6px 6px 25px;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: 0.3s linear;
}
.btn:hover, button:hover {
  transform: scale(1.1);                    /* THE signature hover */
  box-shadow: 0px 15px 25px #0000005e;
}
```

### Slide-fill ::before (the bg slides in on hover)
```css
.btn::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 0%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.615, 0, 0.07, 1);
}
.btn.btn-yellow::before { background: #140545; }   /* yellow btn fills with navy */
.btn.btn-blue::before   { background: #FFB210; }   /* navy btn fills with yellow */
.btn:hover::before { width: 100%; }
```

### Yellow button (primary CTA — "Get A Quote")
```css
.btn.btn-yellow { background: #FFB210; }
.btn.btn-yellow .span-1 { color: #000000; }              /* dark text */
.btn.btn-yellow:hover .span-1 { color: #ffffff; }        /* turns white */
```

### Navy/blue button (secondary — "Live Chat")
```css
.btn.btn-blue { background: #140545; }
.btn.btn-blue .span-1 { color: #ffffff; }
.btn.btn-blue:hover .span-1 { color: #000000; }
```

### Arrow circle inside button (`.span-2`)
```css
.btn .span-2 {
  display: inline-flex;
  justify-content: center; align-items: center;
  width: 40px; height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}
.btn.btn-yellow .span-2 {
  background: linear-gradient(180deg, rgba(21,50,67,1) 0%, rgba(4,10,13,1) 100%);
  color: white;
}
.btn.btn-yellow:hover .span-2 {
  background: linear-gradient(180deg, #FFB210 0%, #C88800 100%);
}
.btn.btn-blue .span-2 {
  background: linear-gradient(180deg, #FFB210 0%, #C88800 100%);
}
```

**Markup pattern:**
```html
<a href="#" class="btn btn-yellow">
  <span class="span-1">Get A Quote</span>
  <span class="span-2"><i class="fa fa-arrow-right"></i></span>
</a>
```

---

## 5. Box Shadows (every shadow used)

| Pattern | Value | Use case |
|---|---|---|
| Subtle card lift | `0px 13px 37px rgb(0 0 0 / 6%)` | Service cards, idle |
| Card hover | `0px 11px 13px #0000002c` (2c = ~17% alpha) | Hover lift |
| Bigger hover | `0px 11px 13px #00000036` (~21% alpha) | Stronger lift |
| Button hover | `0px 15px 25px #0000005e` (~37% alpha) | Button rise |
| Image card | `0px 4px 44px #00000042` | Portfolio thumbnails |
| Heavy shadow | `0px 4px 37px #000000` | Dark contrast areas |
| **Yellow glow (small)** | `0px 0px 16px #ffb210` | Active tab, hover state |
| **Yellow glow (medium)** | `0px 7px 30px #FFB210` | Service icon on card hover |
| **Yellow glow (large)** | `0px 0px 33px #FFB210` | Featured elements |
| **Yellow glow (XL HSL)** | `0px 0px 42px hsl(41deg 100% 53% / 65%)` | Strongest accent glow |
| Dark inner | `0px 0px 20px #00000087` | Photo inset shadow |

---

## 6. Border Radius

| Value | Use case |
|---|---|
| `50px` | Buttons (pill shape), tag chips (`.span-tag-border`) |
| `40px` | Larger pill containers |
| `50%` | Circles (service icons, button arrows) |
| `30px 30px 0 0` | Top-rounded card images |
| `20px` | Service cards |
| `15px` | `.counter-wrap` stat cards |
| `0 400px 400px 0` | **Decorative half-pill shapes** in section 4 |
| `0 0 0.25rem 0.25rem` | Small Bootstrap-style rounding |

---

## 7. Transitions & Animations

| Element | Value |
|---|---|
| Default (most things) | `0.3s linear` |
| Slide-fill button bg | `0.5s cubic-bezier(0.615, 0, 0.07, 1)` |
| Big circle CTA scale | `0.6s cubic-bezier(0.615, 0, 0.07, 1)` |
| Anchor links | `transition-duration: 0.8s` |
| Body margin (drawer open) | `0.3s ease-in-out` |
| Nav bar | `0.4s linear` |
| Other slow transitions | `0.6s linear` / `0.35s ease` |

### Keyframe animations
```css
/* The rotating star decorations */
.rotation { animation: 5s linear 0s infinite normal none running rotation; }
@keyframes rotation {
  from { transform: rotate(0deg); }
  to   { transform: rotate(359deg); }
}

/* The book cover marquee */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
```

---

## 8. Hover State Catalog

| Element | What changes |
|---|---|
| Any `.btn` | `transform: scale(1.1)` + shadow + bg slides in via `::before` + text color flips |
| `.services-item` | `transform: scale(1.1)` |
| `.services-item:hover .services-item-icon` | bg goes from `#140545` → `#FFB210` + glow shadow `0 7px 30px #FFB210` |
| `.services-item:hover .services-item-cta` | color → `#FFB210` |
| `.tabs li:hover, .tabs li.current` | `box-shadow: 0 0 16px #ffb210` (yellow glow ring) |
| `a:hover` | color → `#FFB210` |
| `.hamburger-icon:hover` | color → `#140545` |
| `.btn-blue:hover .span-2` | gradient flips from yellow→gold to teal→black |

---

## 9. Layout & Sections

The page is built as nine `<section>` elements named `index-wrap-1` through `index-wrap-9`, plus `<header>` and `<footer>`.

| Section | Padding | Special |
|---|---|---|
| `.index-wrap-1` (hero) | `13rem 0 0 0` | Full-bleed cream/yellow `::before` background; book cover marquees below text |
| `.index-wrap-2` (Why Choose Us) | `90px 0 190px` | Cream bg, "About" tag pill, 4-stat counter strip dropping in via `margin: -5% 0% -4%` |
| `.index-wrap-3` (Services) | `10rem 0 5rem` | White bg, four service cards |
| `.index-wrap-4` (CTA banner) | `40px 0 40px` | **Deep purple `#140545`** with rounded right edge `border-radius: 0 400px 400px 0`, books illustration on right |
| `.index-wrap-5` (Process) | — | Light bg, six process cards in slider |
| `.index-wrap-6` (Portfolio) | — | **Deep purple bg**, tabbed gallery |
| `.index-wrap-7` (Testimonials) | — | Cream bg, large slider |
| `.index-wrap-8` (FAQ) | — | Cream bg, accordion |
| `.index-wrap-9` (Contact form) | — | Yellow band |

Stat counter card (`.counter-wrap`):
```css
border-radius: 15px;
background: #140545;
padding: 40px 50px 40px;
```

---

## 10. Service Card (the canonical card pattern)

```css
.services-item {
  box-shadow: 0px 13px 37px rgb(0 0 0 / 6%);
  border-radius: 20px;
  padding: 40px 28px 35px 35px;
  margin-bottom: 25px;
  transition: 0.3s linear;
  background: white;
}
.services-item:hover { transform: scale(1.1); }

.services-item .services-item-icon {
  width: 95px; height: 95px;
  border-radius: 50%;
  background: #140545;                      /* navy by default */
  display: inline-flex;
  justify-content: center; align-items: center;
  transition: 0.3s linear;
}
.services-item:hover .services-item-icon {
  background: #FFB210;                      /* turns yellow */
  box-shadow: 0px 7px 30px #FFB210;         /* yellow glow */
}

.services-item .services-item-content {
  margin: 25px 0px 18px;
  height: 115px;                            /* fixed height */
  overflow-y: scroll;                       /* scroll if overflow */
}
```

---

## 11. Custom Scrollbar
```css
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track {
  background-color: #140545;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #FFB210;
}
```

---

## 12. Decorative Elements (the "polish" details)

- Rotating stars: `.index-wrap-3-star-2`, `.index-wrap-3-star-3` use `animation: 5s linear infinite rotation`
- Half-pill shapes: positioned absolutely, often using `border-radius: 0 400px 400px 0`
- Background "shade" graphics: positioned absolutely with `top:`, `right:`, `bottom:`, `left:` percentages
- The big yellow circle "Want to Discuss?" CTA: `270×270px` circle with `linear-gradient(180deg, #FFB210, #E49A00)`

---

## 13. Responsive Breakpoints (from style_07)

The site uses these breakpoints in custom media queries (in addition to Bootstrap's defaults):
- `max-width: 1601px` — Wide laptop adjustments (footer star, section 4 width)
- `max-width: 1537px` — Standard laptop (review item shrinks)
- `max-width: 1441px` — Smaller laptops
- `max-width: 1367px` — 13" laptops
- `max-width: 1281px` — Small laptops
- Plus standard Bootstrap breakpoints (1199.98, 991.98, 767.98, 575.98)

This is unusually granular — they're tuning for specific laptop screen sizes.
