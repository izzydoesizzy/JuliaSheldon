import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const root = dirname(fileURLToPath(import.meta.url));

// Relative base so the build works under the GitHub Pages project subpath
// (https://izzydoesizzy.github.io/juliasheldon/V2/) without hardcoding it.
// Output is emitted directly into the repo-root /V2 directory that Pages serves.
// Multi-page: the landing page (index.html) + the full testimonials page.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../V2",
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        testimonials: resolve(root, "testimonials.html"),
      },
    },
  },
});
