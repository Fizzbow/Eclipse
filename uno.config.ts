import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  rules: [["font-DIN", { "font-family": '"DIN"' }]],
  shortcuts: [
    ["full", "w-full h-full"],
    ["flex-center", "flex items-center justify-center"],
    ["w-limited-1", "w-full max-w-1284px px8 mx-auto"],
    ["font-lighter", "text-greyer font-light"],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({}),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    breakpoints: {
      xs: "320px",
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      greyer: "#76797D",
    },
  },
});
