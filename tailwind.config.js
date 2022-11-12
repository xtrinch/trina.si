/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkbrown: "#422F21",
      brown: "#753A1C",
      lightbrown: "#9B6D18",
      yellow: "#AE951F",
      green: "#4C6402",
      darkgreen: "#1F3D09",
      white: "#fff",
      lightblack: "#222",
      darkblack: "#111",
      black: "#000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
