const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      "josefin-sans": ["Josefin Sans", "sans-serif"],
    },
    screens: {
      tn: "450px",
      tn1: "540px",
      xl3: "1708px",
      xl4: "1920px",
      ...defaultTheme.screens,
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        text: "#151875",
        accent: "#FB2E86",
        primary: "#F6F5FF",
        "text-dark": "#0D0E43",
        "text-sub-light": "#F1F0FF",
        "text-sub-dark": {
          500: "#9DA0AE",
          700: "#8A8FB9",
        },
        "text-transparent": "rgba(21, 24, 117, 0.1)",
        "primary-dark": {
          900: "#7E33E0",
          300: "#EEEFFB",
          500: "#E7E4F8",
        },
        "input-border": "#E7E6EF",
        "color-circles": {
          turquoise: "rgba(55, 218, 243, 1)",
          pink: "rgba(255, 39, 183, 1)",
          violet: "rgba(86, 37, 223, 1)",
          orange: "rgba(255, 178, 101, 1)",
          green: "rgba(27, 233, 130, 1)",
        },
      },
      dropShadow: {
        top: "0 -2px 8px rgb(0 0 0 / 15%)",
      },
      boxShadow: {
        top: "0 -2px 8px rgb(0 0 0 / 15%)",
      },
      width: {
        sm: "8.4rem",
      },
      maxWidth: {
        "8xl": "79.8rem",
      },
    },
  },
  plugins: [],
};
