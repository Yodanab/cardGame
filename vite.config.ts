/** @format */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "http://10.218.102.46:8080", // Include the correct port number here
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
