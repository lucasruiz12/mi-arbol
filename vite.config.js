import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: "auto",
      manifest: {
        name: '+ Raíces, - Huella',
        short_name: '+ Raíces, - Huella',
        description: 'PWA de + Raíces, - Huella para mitigar huella de carbono mediante reforestación',
        theme_color: '#000000',
        icons: [
          {
            src: '/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/your-api\.com\/.*/, // Ajusta según tu API
            handler: "NetworkFirst",
          },
        ],
      },
      devOptions: {
        enabled: true, // Habilita PWA en modo dev
        type: "module", // Necesario para Vite en modo dev
      }
    }),
  ],
});
