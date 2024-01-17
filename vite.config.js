import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.PUBLIC_URL": JSON.stringify(env.PUBLIC_URL),
    },
    plugins: [react(), viteCompression()],
    assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg", "**/*.gif", "**/*.glb"],
    base: "./",
  };
});
