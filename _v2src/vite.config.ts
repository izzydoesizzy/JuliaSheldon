import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works under the GitHub Pages project subpath
// (https://izzydoesizzy.github.io/juliasheldon/V2/) without hardcoding it.
// Output is emitted directly into the repo-root /V2 directory that Pages serves.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "../V2",
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
});
