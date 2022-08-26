import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), splitVendorChunkPlugin()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                h5: resolve(__dirname, 'h5/index.html')
            }
        }
    }
});
