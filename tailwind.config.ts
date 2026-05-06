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
        bw: {
          black:      "#080808",
          white:      "#f2efe9",
          offwhite:   "#e8e4dd",
          gray:       "#131313",
          "gray-mid": "#252525",
          dim:        "#3a3a3a",
          muted:      "#6b6760",
          subtle:     "#c8c4bc",
          cream:      "#e8e4dd",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        serif:   ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        "ultra": "0.45em",
        "wide+": "0.22em",
      },
      lineHeight: {
        "none+": "0.95",
      },
      transitionDuration: {
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};
export default config;
