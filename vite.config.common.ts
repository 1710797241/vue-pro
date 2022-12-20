import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspector from 'vite-plugin-vue-inspector';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        hmr: true
    },
    plugins: [
        vue(),
        vueJsx(),
        Inspector(),
        AutoImport({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon'
                })
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                IconsResolver({
                    prefix: 'i',
                    enabledCollections: ['ep']
                })
            ]
        }),
        Icons({
            autoInstall: true
        }),
        splitVendorChunkPlugin()
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id?.includes('lodash')) {
                        return 'lodash';
                    }

                    if (id?.includes('element-plus')) {
                        return 'element-plus';
                    }
                }
            }
        },
        chunkSizeWarningLimit: 520
    }
});
