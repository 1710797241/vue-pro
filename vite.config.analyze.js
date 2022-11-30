import { defineConfig } from 'vite';

import { visualizer } from 'rollup-plugin-visualizer';
import viteConfigCommon from './vite.config.common';
// https://vitejs.dev/config/
export default defineConfig({
    ...viteConfigCommon,
    plugins: [
        ...viteConfigCommon.plugins,
        visualizer({
            open: true,
            filename: './dist_stats.html'
        })
    ]
});
