import { type Config } from "tailwindcss";
import daisyuiPlugin from "daisyui";
import typography from "tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 45s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },

  plugins: [
    typography,
    daisyuiPlugin,
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
} satisfies Config;
