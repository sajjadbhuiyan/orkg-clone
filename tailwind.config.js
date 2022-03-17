module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '310px',
      },

      colors: {
        'nav-color': '#5f6474',
      },
      width: {
        '3/5': '70%',
      }
    },
  },
  plugins: [],
}
