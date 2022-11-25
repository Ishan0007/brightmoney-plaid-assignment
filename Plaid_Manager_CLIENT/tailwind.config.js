module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#1a202c",
        "secondary" : "#09BC8A",
        "tertiary" : "#edf6f9",
      },
      fontFamily: {
        defaultfont: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}