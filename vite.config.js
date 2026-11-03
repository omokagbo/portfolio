import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  base: "/portfolio/",
  root: "src",
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
