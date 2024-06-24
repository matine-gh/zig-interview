import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          'light': '#02B5FF',
          DEFAULT: '#00A3E6',
          'dark': '#255FFF'
        },
        secondary: {
          'light': '#d4d4d8',
          DEFAULT: '#ADADAD',
          'dark': '#000000'
        },
        success: {
          DEFAULT: '#00C400',
        },
      }
    },
  },
  plugins: [],
};
export default config;
