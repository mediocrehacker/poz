import { type Config } from "tailwindcss";
import daisyuiPlugin from "daisyui";
import typography from "tailwindcss/typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    typography,
    daisyuiPlugin,
  ],

  daisyui: {
    themes: ["night"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
} satisfies Config;
