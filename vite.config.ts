import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // topLevelAwait(),
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '/src')
        }
    }
});
