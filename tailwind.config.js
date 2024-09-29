/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#252525',
        'midnight-black': '#1B1C1E',
        'grey-black': '#545454',
        'artic-blue': '#F0F8FF',
        'dark-ab': '#C7E4FC',
        'eazy-main': {
          25: '#00c1ff80',
          50: '#00c1ff80',
          75: '#00c1ffbf',
          90: '#00c1ffe6',
          100: '#0099FF',
        },
        'saphire': '#2B50AA',
        'plum': '#8740b2'
      },
      fontFamily: {
        'headings': ['Rubik', 'sans-serif'],
        'dText': ['Montserrat', 'sans-serif'],
        'numbers': ['Inter', 'sans-serif'],
        'main': ['League Spartan', 'sans-serif'],
        'jSans': ['Noto Sans', 'sans-serif'],
        'cursive': ['Courgette', 'cursive']
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))'
      },
      animation: {
        'fade-cycle': 'fadeCycle 15s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.7s ease-in-out'
      },
      keyframes: {
        fadeCycle: {
          '0%, 8.33%': { opacity: 1 }, // First image fully visible for 4s
          '25%, 43.33%': { opacity: 0 }, // Second image fades in and out for 4s
          '50%, 58.33%': { opacity: 1 }, // Third image fully visible for 4s
          '75%, 91.66%': { opacity: 0 }, // Third image fades out and first fades in
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
    }
  },
  plugins: [],
})
