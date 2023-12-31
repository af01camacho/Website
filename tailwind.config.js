/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color-dm": "var(--primary-color-dm)",
        "btn-color": "var(--btn-color)",
        "span-color": "var(--span-color)",
        "bg-sombra": "var(--bg-sombra)",
        "bg-primary": "var(--bg-primary)",
      },
      fontFamily: {
        "primary-font": "var(--primary-font)",
        "second-font": "var(--second-font)",
  
      },
    },
  },

  plugins: [],
};
