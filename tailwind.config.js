/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "trap-light": ['"Trap Light"', "sans-serif"],
      "trap-regular": ['"Trap Regular"', "sans-serif"],
      "trap-medium": ['"Trap Medium"', "sans-serif"],
      "trap-semibold": ['"Trap SemiBold"', "sans-serif"],
      "trap-bold": ['"Trap Bold"', "sans-serif"],
      "trap-extrabold": ['"Trap ExtraBold"', "sans-serif"],
      "trap-black": ['"Trap Black"', "sans-serif"],
    },
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        "dark-green": "#173C30",
        "light-green": "#00A853",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            success: {
              //... 50 to 900
              50: "#052814",
              100: "#095028",
              200: "#0e793c",
              300: "#12a150",
              400: "#00A853",
              500: "#45d483",
              600: "#74dfa2",
              700: "#a2e9c1",
              800: "#d1f4e0",
              900: "#e8faf0",
              foreground: "#FFFFFF",
              background: "#00A853",
              DEFAULT: "#00A853",
            },
            // ... rest of the colors
          },
        },
      },
    }),
  ],
};
