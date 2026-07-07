/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1120',
          light: '#0F1729',
        },
        surface: {
          DEFAULT: '#131C2E',
          raised: '#1A2438',
          border: '#26324A',
        },
        amber: {
          DEFAULT: '#F5A623',
          soft: '#FFD394',
        },
        mint: {
          DEFAULT: '#2DD4BF',
          soft: '#99F0E5',
        },
        rose: {
          DEFAULT: '#F5738C',
        },
        ink2: '#8B96A8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245,166,35,0.15), 0 8px 30px rgba(245,166,35,0.08)',
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
