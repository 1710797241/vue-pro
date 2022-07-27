// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';
import express from 'express';

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

export async function createServer(
    root = process.cwd(),
    isProd = process.env.NODE_ENV === 'production',
    hmrPort
) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const resolve = p => path.resolve(__dirname, p);

    const indexProd = isProd ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8') : '';
    console.log('manifest before');
    // const manifest = isProd
    //     ? // @ts-ignore
    //       (await import('./dist/client/ssr-manifest.json')).default
    //     : {};
    //ssr-manifest.json 读取失败
    const manifest = {
        'vite/modulepreload-polyfill': ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+reactivity@3.2.37/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+runtime-core@3.2.37/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+runtime-dom@3.2.37/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js':
            ['/assets/vue.5532db34.svg'],
        'src/style.css': ['/assets/vue.5532db34.svg'],
        '../../vite.svg': ['/assets/vue.5532db34.svg'],
        'src/assets/vue.svg': ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/env.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/const.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/time.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/proxy.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/index.js':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/vue-router@4.1.2_vue@3.2.37/node_modules/vue-router/dist/vue-router.mjs':
            ['/assets/vue.5532db34.svg'],
        'node_modules/.pnpm/vuex@4.0.2_vue@3.2.37/node_modules/vuex/dist/vuex.esm-bundler.js': [
            '/assets/vue.5532db34.svg'
        ],
        'src/App.vue?vue&type=style&index=0&scoped=04ab98e0&lang.css': ['/assets/vue.5532db34.svg'],
        '\u0000plugin-vue:export-helper': ['/assets/vue.5532db34.svg'],
        'src/App.vue': ['/assets/vue.5532db34.svg'],
        'src/plugins/role.js': ['/assets/vue.5532db34.svg'],
        'src/store/root.js': ['/assets/vue.5532db34.svg'],
        'src/store/modules/hello.js': ['/assets/vue.5532db34.svg'],
        'src/store/index.js': ['/assets/vue.5532db34.svg'],
        '\u0000vite/preload-helper': ['/assets/vue.5532db34.svg'],
        'src/routes/index.js': ['/assets/vue.5532db34.svg'],
        'src/main.js': ['/assets/vue.5532db34.svg'],
        'src/entry-client.js': ['/assets/vue.5532db34.svg'],
        'index.html': ['/assets/vue.5532db34.svg'],
        'HelloWorld.3b1a07c7.js': [],
        'Transition.fdbe791a.js': ['\\assets\\Transition.bf74b3f3.css'],
        'Composition.ea610cdd.js': [],
        'src/components/HelloWorld.vue': ['/assets/HelloWorld.3b1a07c7.js'],
        'src/components/Transition.vue?vue&type=style&index=0&lang.css': [
            '/assets/Transition.fdbe791a.js',
            '/assets/Transition.bf74b3f3.css'
        ],
        'src/components/Transition.vue': [
            '/assets/Transition.fdbe791a.js',
            '/assets/Transition.bf74b3f3.css'
        ],
        'src/components/common/useCounter.js': ['/assets/Composition.ea610cdd.js'],
        'src/components/Composition.vue': ['/assets/Composition.ea610cdd.js']
    };
    console.log('manifest', manifest);
    const app = express();

    /**
     * @type {import('vite').ViteDevServer}
     */
    let vite;
    if (!isProd) {
        vite = await (
            await import('vite')
        ).createServer({
            base: '/',
            root,
            logLevel: isTest ? 'error' : 'info',
            server: {
                middlewareMode: true,
                watch: {
                    // During tests we edit the files too fast and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100
                },
                hmr: {
                    port: hmrPort
                }
            },
            appType: 'custom'
        });
        // use vite's connect instance as middleware
        app.use(vite.middlewares);
    } else {
        app.use((await import('compression')).default());
        app.use(
            '/',
            (await import('serve-static')).default(resolve('dist/client'), {
                index: false
            })
        );
    }

    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl.replace('/test/', '/');

            let template, render;
            if (!isProd) {
                // always read fresh template in dev
                template = fs.readFileSync(resolve('index.html'), 'utf-8');
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
            } else {
                template = indexProd;
                // @ts-ignore
                render = (await import('./dist/server/entry-server.js')).render;
            }

            const [appHtml, preloadLinks] = await render(url, manifest);

            const html = template
                .replace(`<!--preload-links-->`, preloadLinks)
                .replace(`<!--app-html-->`, appHtml);

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            vite && vite.ssrFixStacktrace(e);
            console.log(e.stack);
            res.status(500).end(e.stack);
        }
    });

    return { app, vite };
}

if (!isTest) {
    createServer().then(({ app }) =>
        app.listen(6173, () => {
            console.log('http://localhost:6173');
        })
    );
}
