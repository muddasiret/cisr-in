/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryblue: "#041e42",
        skyblue: "#19b5fe",
        lightyellow: "#f0f09a",
        brown:"#3e1b16",
        darkbrown:"#241d20",
        lightbrown:"#6e4d4d",
        lightdark:"#241d20",
        cream:"#c59a50",
        darkred:"#ae3321",
        orange:"#e45424"
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};
