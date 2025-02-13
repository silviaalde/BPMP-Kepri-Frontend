import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#051A53',
        'blue-secondary': '#016BA3',
        'blue-light': '#7CD4FD',
        'red-primary': '#F80606',
      },
    },
  },
  plugins: [],
} satisfies Config;
