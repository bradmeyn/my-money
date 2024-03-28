import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  host: "0.0.0.0",
  strictPort: true,
  port: 5173,
});
