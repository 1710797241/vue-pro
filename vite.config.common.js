import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue2-jsx';
import proxy from './config/proxy';
import Inspector from 'vite-plugin-vue-inspector';
import path from 'path';
const PATHSRC = path.resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': PATHSRC
        }
    },
    plugins: [
        createVuePlugin(),
        Inspector({
            vue: 2
        }),

        vueJsx(),
        splitVendorChunkPlugin(),

        legacy({
            targets: ['defaults', 'IE 11']
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
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('lodash')) {
                        return 'lodash';
                    }
                    if (id.includes('element-ui.common.js')) {
                        return 'element-ui.common.js';
                    }
                    if (id.includes('element-ui') && !id.includes('element-ui.common.js')) {
                        return 'element-ui';
                    }
                }
            }
        },
        chunkSizeWarningLimit: 520
    }
});
