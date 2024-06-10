import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
<<<<<<< HEAD
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
=======
>>>>>>> d66837866683f443d09f0c1aa9926b9df5f77e69
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      darkMode: "class",
<<<<<<< HEAD
      plugins: [nextui(), 'flowbite/plugin'],
=======
      plugins: [nextui()],
>>>>>>> d66837866683f443d09f0c1aa9926b9df5f77e69
    },
  },
  plugins: [],
};
export default config;
