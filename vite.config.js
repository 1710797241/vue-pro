import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Inspector from 'vite-plugin-vue-inspector';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), Inspector()],
    resolve: {
        alias: { vue: 'vue/dist/vue.esm-bundler.js' }
    }
});
