import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFB210',
          yellowDark: '#C88800',
          navy: '#140545',
          ink: '#0D0D0D',
          gray1: '#343434',
          gray2: '#4b4b4b',
          gray3: '#8A8A8A',
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
        'glow-sm': '0px 0px 16px #FFB210',
        'glow-md': '0px 7px 30px #FFB210',
        'glow-lg': '0px 0px 33px #FFB210',
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
