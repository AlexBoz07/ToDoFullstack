/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      Principal: '64px',
    },
    colors: {
      'primaryBlue': '#0353A4',
      'secondaryBlue': '#33415C',
      'primaryRed': '#BC4749',
      'primaryGreen': '#A7C957',
      'white': '#ffffff',
      'cyan': '#DCF3F8'
    },
    extend: {},
  },
  plugins: [],
}

