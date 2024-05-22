import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: react(),
    assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif"],
    base: "./",
  };
});
