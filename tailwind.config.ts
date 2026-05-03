import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fermah: {
          navy: '#001A2C',
          teal: '#1CCB9F',
          slate: '#1E293B',
          soft: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
};
export default config;
