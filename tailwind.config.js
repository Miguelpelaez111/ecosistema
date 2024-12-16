/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./LOGIN/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#119100',
        secondary: '#0e7774',
        gray: {
          800: '#23371f',
          700: '#374151', 
          600: '#54634b',
          100: '#F3F4F6'
        }
      },
      borderRadius: {
        DEFAULT: '0.75rem'
      }
    },
  },
  plugins: [],
}