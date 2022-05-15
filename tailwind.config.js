module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      "josefin-sans": ["Josefin Sans", "sans-serif"],
    },
    extend: {
      colors: {
        text: "#151875",
        accent: "#FB2E86",
        primary: "#F6F5FF",
        "text-dark": "#0D0E43",
        "text-sub-light": "#F1F0FF",
        "text-sub-dark": "#8A8FB9",
        "text-transparent": "rgba(21, 24, 117, 0.1)",
        "primary-dark": {
          900: "#7E33E0",
          500: "#E7E4F8",
        },
        "input-border": "#E7E6EF",
      },
    },
  },
  plugins: [],
};
