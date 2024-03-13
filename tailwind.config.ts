import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        "fira-sans": ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
