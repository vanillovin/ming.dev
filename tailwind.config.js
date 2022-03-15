module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          'from': { opacity: '1' },
          'to': { opacity: '0.5' },
        },
      },
      animation: {
        // animation: name|duration|timing-function|delay|iteration-count|direction
        'fade-in': 'fade-in 1s alternate infinite linear',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: 'class',
};