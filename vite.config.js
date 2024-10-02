import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/RA_components/", // деплой на GitHub Pages
  server: {
    open: true, // открытие вкладки браузера
    // port: 8080, // изменение порта
  },
});
