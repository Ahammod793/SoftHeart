/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'man-smiling': "url('./assets/man-smiling-people-crowd.webp')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

