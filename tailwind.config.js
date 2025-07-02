/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          25: '#1a1714',
          50: '#2d2520',
          100: '#3f332b',
          200: '#514135',
          300: '#6b5344',
          400: '#8b6f5c',
          500: '#a68870',
          600: '#c4a484',
          700: '#d4b896',
          800: '#e5d4b1',
          900: '#f0e6d2',
        },
        cream: {
          25: '#0f0e0d',
          50: '#1c1a17',
          100: '#2a2722',
          200: '#38342e',
          300: '#4a453e',
          400: '#5e574f',
          500: '#726b62',
          600: '#8a8179',
          700: '#a39892',
          800: '#beb5ae',
          900: '#ddd6d0',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
} 