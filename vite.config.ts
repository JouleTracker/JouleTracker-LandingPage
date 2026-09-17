import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

// Static site (HTML + CSS + JS). Vite is only used to bundle for deployment.
export default defineConfig({
  publicDir: "static",
  base: "./",
  plugins: [viteSingleFile()],
});
