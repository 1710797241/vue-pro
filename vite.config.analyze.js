import { defineConfig } from 'vite';
import CommonConfig from './vite.config.common';
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
    ...CommonConfig,
    plugins: [
        ...CommonConfig.plugins,
        visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: './dist_stats.html'
        })
    ]
});
