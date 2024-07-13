/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5F8EE1",
        primaryBg: "#fef8ea",
        circleBg: "#185EDB80",
        second: "#185EDB",
        secondBg: "#eaf5ff",
        contactUsBg: "#AFC8E0",
        "main-red": "#942023",
        "hover-text": "#8B0000",
        "text-white": "#FCF8EB",
        "btn-bg": "#8B0000",
        "sec-btn-bg": "#D0665F",
        "bgc-white": "#FBF8EB",
      },
      screens: {
        miniMobile: { max: "320px" },
        mobile: { max: "600px" },
        miniPad: { max: "768px" },
        laptop: { min: "601px", max: "1919px" },
        desktop: { min: "1920px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
