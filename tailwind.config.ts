import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: 'var(--brand-yellow)',
          yellowDark: 'var(--brand-yellow-dark)',
          navy: 'var(--brand-navy)',
          ink: 'var(--brand-ink)',
          gray1: 'var(--brand-gray-1)',
          gray2: 'var(--brand-gray-2)',
          gray3: 'var(--brand-gray-3)',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-noto)', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 13px 37px rgb(0 0 0 / 6%)',
        'card-hover': '0px 11px 13px #0000002c',
        'btn-hover': '0px 15px 25px #0000005e',
        'glow-sm': '0px 0px 16px var(--brand-yellow)',
        'glow-md': '0px 7px 30px var(--brand-yellow)',
        'glow-lg': '0px 0px 33px var(--brand-yellow)',
        'glow-xl': '0px 0px 42px hsl(41deg 100% 53% / 65%)',
      },
      transitionTimingFunction: {
        'fill-bezier': 'cubic-bezier(0.615, 0, 0.07, 1)',
      },
      borderRadius: {
        pill: '50px',
        card: '20px',
      },
    },
  },
}
export default config
