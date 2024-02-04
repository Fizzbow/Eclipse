import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import path from "path";

const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  server: {
    host: "0.0.0.0",
    port: 6622,
    proxy: {
      "^/accounts/*": {
        target: "https://accounts.spotify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/accounts/, ""),
        // configure: (proxy, _options) => {
        //   proxy.on("error", (err, _req, _res) => {
        //     console.log("proxy error", err);
        //   });
        //   proxy.on("proxyReq", (proxyReq, req, _res) => {
        //     console.log(
        //       "Sending Request:",
        //       req.method,
        //       req.url,
        //       " => TO THE TARGET =>  ",
        //       proxyReq.method,
        //       proxyReq.protocol,
        //       proxyReq.host,
        //       proxyReq.path,
        //       JSON.stringify(proxyReq.getHeaders())
        //     );
        //   });
        //   proxy.on("proxyRes", (proxyRes, req, _res) => {
        //     console.log(
        //       "Received Response from the Target:",
        //       proxyRes.statusCode,
        //       req.url
        //     );
        //   });
        // },
      },
      "/api": {
        target: "https://api.spotify.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
