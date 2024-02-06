// vite.config.ts
import { defineConfig } from "file:///Users/chengshilu/code/other/react_projects/Eclipse/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.6_sass@1.69.5/node_modules/vite/dist/node/index.js";
import react from "file:///Users/chengshilu/code/other/react_projects/Eclipse/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.10/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///Users/chengshilu/code/other/react_projects/Eclipse/node_modules/.pnpm/unocss@0.58.0_postcss@8.4.32_vite@5.0.10/node_modules/unocss/dist/vite.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/chengshilu/code/other/react_projects/Eclipse";
var pathSrc = path.resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: {
      "@": pathSrc
    }
  },
  server: {
    host: "0.0.0.0",
    port: 6622,
    proxy: {
      "^/accounts/*": {
        target: "https://accounts.spotify.com",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/accounts/, "")
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
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2hlbmdzaGlsdS9jb2RlL290aGVyL3JlYWN0X3Byb2plY3RzL0VjbGlwc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jaGVuZ3NoaWx1L2NvZGUvb3RoZXIvcmVhY3RfcHJvamVjdHMvRWNsaXBzZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hlbmdzaGlsdS9jb2RlL290aGVyL3JlYWN0X3Byb2plY3RzL0VjbGlwc2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IFVub0NTUyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IHBhdGhTcmMgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBVbm9DU1MoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGhTcmMsXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgcG9ydDogNjYyMixcbiAgICBwcm94eToge1xuICAgICAgXCJeL2FjY291bnRzLypcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbVwiLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hY2NvdW50cy8sIFwiXCIpLFxuICAgICAgICAvLyBjb25maWd1cmU6IChwcm94eSwgX29wdGlvbnMpID0+IHtcbiAgICAgICAgLy8gICBwcm94eS5vbihcImVycm9yXCIsIChlcnIsIF9yZXEsIF9yZXMpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwicHJveHkgZXJyb3JcIiwgZXJyKTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gICBwcm94eS5vbihcInByb3h5UmVxXCIsIChwcm94eVJlcSwgcmVxLCBfcmVzKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgLy8gICAgICAgXCJTZW5kaW5nIFJlcXVlc3Q6XCIsXG4gICAgICAgIC8vICAgICAgIHJlcS5tZXRob2QsXG4gICAgICAgIC8vICAgICAgIHJlcS51cmwsXG4gICAgICAgIC8vICAgICAgIFwiID0+IFRPIFRIRSBUQVJHRVQgPT4gIFwiLFxuICAgICAgICAvLyAgICAgICBwcm94eVJlcS5tZXRob2QsXG4gICAgICAgIC8vICAgICAgIHByb3h5UmVxLnByb3RvY29sLFxuICAgICAgICAvLyAgICAgICBwcm94eVJlcS5ob3N0LFxuICAgICAgICAvLyAgICAgICBwcm94eVJlcS5wYXRoLFxuICAgICAgICAvLyAgICAgICBKU09OLnN0cmluZ2lmeShwcm94eVJlcS5nZXRIZWFkZXJzKCkpXG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyAgIHByb3h5Lm9uKFwicHJveHlSZXNcIiwgKHByb3h5UmVzLCByZXEsIF9yZXMpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAvLyAgICAgICBcIlJlY2VpdmVkIFJlc3BvbnNlIGZyb20gdGhlIFRhcmdldDpcIixcbiAgICAgICAgLy8gICAgICAgcHJveHlSZXMuc3RhdHVzQ29kZSxcbiAgICAgICAgLy8gICAgICAgcmVxLnVybFxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgICBcIi9hcGlcIjoge1xuICAgICAgICB0YXJnZXQ6IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb21cIixcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBb0I7QUFDeFcsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTSxVQUFVLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBRzdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxnQkFBZ0I7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLGVBQWUsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEwQm5EO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUM5QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
