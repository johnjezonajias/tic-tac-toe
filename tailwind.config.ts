import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'small': ['0.875rem', {
        lineHeight: '1.5',
        fontWeight: '400',
      }],
      'base': ['1rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      '2xl': ['1.25rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      '4xl': ['1.5rem', {
        lineHeight: '1.2',
        fontWeight: '400',
      }],
      '5xl': ['2.5rem', {
        lineHeight: '1.1',
        fontWeight: '700',
      }],
      '6xl': ['3rem', {
        lineHeight: '1',
        fontWeight: '700',
      }],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
