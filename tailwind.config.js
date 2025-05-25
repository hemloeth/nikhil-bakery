/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F7',
          100: '#FFE3F1',
          200: '#FFB8DC',
          300: '#FF8CC7',
          400: '#FF60B2',
          500: '#FF339D',
          600: '#FF0088',
          700: '#CC006D',
          800: '#990052',
          900: '#660037',
        },
        secondary: {
          50: '#F7F8FC',
          100: '#EFF1F9',
          200: '#D6DCF0',
          300: '#BDC7E7',
          400: '#8B9DD5',
          500: '#5873C3',
          600: '#4F68B0',
          700: '#3B4E84',
          800: '#273358',
          900: '#1A2239',
        },
      },
      fontFamily: {
        'display': ['var(--font-playfair-display)'],
        'body': ['var(--font-cormorant)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 