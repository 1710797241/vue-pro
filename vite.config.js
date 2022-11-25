import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import proxy from './config/proxy';
import Inspector from 'vite-plugin-vue-inspector';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        createVuePlugin(),
        Inspector({
            vue: 2
        }),
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
