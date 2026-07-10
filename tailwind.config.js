/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#18181B',
          card: '#F5F5F4',
          text: '#111111',
          primary: '#FFC300',
          secondary: '#FF6B35',
          border: '#000000',
          hover: '#FFD60A',
        }
      },
      borderWidth: {
        '4': '4px',
        '8': '8px',
      },
      boxShadow: {
        'brutal': '3px 4px 0px 0px #000000',
        'brutal-lg': '6px 8px 0px 0px #000000',
        'brutal-xl': '8px 12px 0px 0px #000000',
        'brutal-primary': '5px 6px 0px 0px #FFC300',
        'brutal-secondary': '4px 5px 0px 0px #FF6B35',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'brutal': '16px',
        'brutal-lg': '20px',
      }
    },
  },
  plugins: [],
}
