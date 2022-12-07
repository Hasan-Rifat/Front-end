/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1678CB",
          secondary: "#3B8BEA",
          accent: "#68D6F5",
          neutral: "#242424",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
