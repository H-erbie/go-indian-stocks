/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        "br": "0px -1px 0px #ccc, 0px 0px 0px transparent, 5px 5px 5px rgba(0, 0, 0, 0.2), 5px 5px 5px rgba(0, 0, 0, 0.2)",
        "lr":" 1px 0 0px rgba(0, 0, 0, 0.2), -1px 0px 0px rgba(0, 0, 0, 0.2);"
      }
    },
  },
  plugins: [],
};
