/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060709',
          900: '#0b0c10',
          850: '#111317',
          800: '#181b22',
          750: '#20242e',
          700: '#2a303d',
        },
        gold: {
          50: '#fdfbf4',
          100: '#fbf5e2',
          200: '#f5e7bf',
          300: '#eccf88',
          400: '#e2ba52',
          500: '#d4af37', // signature metallic gold
          600: '#b89025',
          700: '#926e1c',
          800: '#77561b',
          900: '#64471b',
        },
        cream: {
          DEFAULT: '#f7f4ea',
          muted: '#ded9ca',
          soft: '#ece8db',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f7e6a7 50%, #b89025 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #d4af37 0%, #fff1ba 50%, #d4af37 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0b0c10 0%, #111317 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
      }
    },
  },
  plugins: [],
}
