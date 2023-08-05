import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "./src/pages"),
      containers: path.resolve(__dirname, "./src/containers"),
      components: path.resolve(__dirname, "./src/components"),
      common: path.resolve(__dirname, "./src/common"),
      images: path.resolve(__dirname, "./src/assets/images"),
    },
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true,
  },
});
