/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-1': '#bc14f4',
        'brand-2': '#d671ff',
      }

    },
  },
  plugins: [],
}

