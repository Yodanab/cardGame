import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "http://10.218.102.46:8080", // Include the correct port number here
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
