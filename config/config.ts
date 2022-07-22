import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
    title: 'umi-vue',

    deadCode: {},
    npmClient: 'pnpm',

    presets: [require.resolve('@umijs/preset-vue')],
    routes
});
