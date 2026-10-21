import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'node:fs';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'copy-aurelle-image-assets',
        closeBundle() {
          const source = path.resolve(
            __dirname,
            'src/assets/images'
          );

          const target = path.resolve(
            __dirname,
            'dist/src/assets/images'
          );

          if (fs.existsSync(source)) {
            fs.mkdirSync(target, { recursive: true });
            fs.cpSync(source, target, { recursive: true });

            console.log('AURELLE images copied successfully.');
          }
        },
      },
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
