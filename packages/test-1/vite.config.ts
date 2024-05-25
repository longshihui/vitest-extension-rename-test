import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  mode: "production",
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    minify: true,
  },
  plugins: [vue()],
});
