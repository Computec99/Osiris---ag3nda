import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Osiris - Agenda Inteligente",
        short_name: "Osiris",
        theme_color: "#06080f",
        background_color: "#06080f",
        display: "standalone",
        icons: [
          { src: "icon.png", sizes: "192x192", type: "image/png" },
          { src: "icon.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ]
});
