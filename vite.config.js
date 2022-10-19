import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import proxy from './config/proxy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        createVuePlugin(),
        vueJsx(),

        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    server: {
        proxy: proxy.dev
    }
});
