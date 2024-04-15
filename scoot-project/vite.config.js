import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
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
};


// export default defineConfig({
//   css: {
//     devSourcemap: true,
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         second: resolve(__dirname, 'about.html'),
//         third: resolve(__dirname, 'careers.html'),
//         fourth: resolve(__dirname, 'location.html'),
//       },
//     },
//   },
// });