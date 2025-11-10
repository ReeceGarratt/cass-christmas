/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FBA416',
        secondary: '#D48A00',
        'b-1': '#FEFAF0',
        'b-2': '#FFF7E4',
        'gray-t': '#2E2E2E',
        accent: '#FBA416',
        accent2: '#FFA600',
        accent3: '#D48A00',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}