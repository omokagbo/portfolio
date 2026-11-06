import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "/portfolio/",
  root: "src",
  // favicon.svg and og-image.png live at the repo root, which is also the build output.
  publicDir: false,
  build: {
    outDir: "..",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./src/index.html", import.meta.url)),
        notFound: fileURLToPath(new URL("./src/404.html", import.meta.url)),
      },
    },
  },
});
