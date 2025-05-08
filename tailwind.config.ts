import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ajuste os caminhos conforme necessário
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        navy: "#000033",
        "purple-dark": "#2C165F",
        "purple-light": "#48268C",
        gray: "#454545",
        "gray-light": "#D9D9D9",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;