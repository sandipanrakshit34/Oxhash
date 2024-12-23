/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'AeionMonoTest': ['Aeion Mono Test', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }