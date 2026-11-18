/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF4',
          100: '#FAF4E3',
          200: '#F4E6BD',
          300: '#EBD490',
          400: '#E2BF63',
          500: '#D4AF37', // Primary Luxury Gold
          600: '#C5A059', // Warm Muted Gold
          700: '#9E782B',
          800: '#75571E',
          900: '#4D3812',
        },
        dark: {
          950: '#070707',
          900: '#0B0B0B', // Rich black background
          850: '#111111',
          800: '#171717',
          750: '#1E1E1E',
          700: '#252525',
          600: '#333333',
          500: '#4A4A4A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDF4E3 0%, #D4AF37 50%, #AA8232 100%)',
        'gold-metallic': 'linear-gradient(135deg, #F8E7B9 0%, #D4AF37 35%, #C5A059 70%, #9E782B 100%)',
        'dark-gradient': 'linear-gradient(180deg, #121212 0%, #0B0B0B 100%)',
        'card-gradient': 'linear-gradient(145deg, #181818 0%, #0F0F0F 100%)',
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 10px 35px rgba(212, 175, 55, 0.35)',
        'inner-gold': 'inset 0 1px 1px 0 rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
