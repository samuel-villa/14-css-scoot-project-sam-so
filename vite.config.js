import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';


export default defineConfig ({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
  base: "/scoot-project_frontend_pixel_perfect/",
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, './html/about.html'),
        third: resolve(__dirname, './html/careers.html'),
        fourth: resolve(__dirname, './html/locations.html'),
      },
    },
  },
});
