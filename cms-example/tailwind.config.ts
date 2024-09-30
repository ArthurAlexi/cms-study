import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B17457",
        secondary: "#4A4947",
        background: "#FAF7F0",
        foreground: "#D8D2C2",
        textColor: "#000"
      },
    },
  },
  plugins: [],
};
export default config;
