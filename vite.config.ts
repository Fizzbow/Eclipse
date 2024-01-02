import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  server: {
    host: "0.0.0.0",
    port: 6622,
    proxy: {
      "/accounts": {
        target: "https://accounts.spotify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/accounts/, ""),
      },
      "/api": {
        target: "https://api.spotify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
