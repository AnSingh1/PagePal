/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}", "./*.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        brand: "#027DFF",
        text: {
          light: "#5F6366",
          dark: "#404040",
        },
        "gray-border": "#212422",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        display: ["Georgia", "serif"],
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
