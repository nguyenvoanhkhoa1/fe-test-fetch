/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*****/****/***/**/*.{js,jsx,ts,tsx}",
    "./src/****/***/**/*.{js,jsx,ts,tsx}",
    "./src/***/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    minWidth: {
      0: "0",
      "1/8": "12%",
      "1/5": "20%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      colors: {
        grey01: "#171725",
        grey04: "#92929D",
        grey05: "#B5B5BE",
        grey07: "#E2E2EA",
        grey08: "#F1F1F5",
        grey09: "#FAFAFB",
        blueDark: "#0062FF",
      },
      boxShadow: {
        shadowLow: "0px 12px 18px rgba(23, 23, 37, 0.04)",
      },
      backgroundImage: {
        "card-texture": "url('../assets/images/card-texture.png')",
      },
    },
  },
};
