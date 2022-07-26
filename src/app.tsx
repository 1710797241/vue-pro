// @ts-ignore

import { RouterConfig } from 'umi';
import store from './stores/index';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import 'element-plus/dist/index.css';
export function onAppCreated({ app }: any) {
    console.log('onAppCreated', app);
    const pinia = createPinia();
    app.use(ProLayout);
    app.use(PageContainer);
    app.use(pinia);
    app.use(store);
    app.use(ElementPlus);
    // app.use(IconsVue);
}

export function onRouterCreated({ router }: any) {
    console.log('onRouterCreated', router);
}

export function onMounted({ app, router }: any) {
    console.log('onMounted', app, router);
    app.provide('umi-hello', {
        h: 'umi:hello',
        w: 'umi:word'
    });
}

export const router: RouterConfig = {
    // @ts-ignore
    scrollBehavior(to, from) {
        console.log('scrollBehavior', to, from);
    }
};
export function rootContainer(container: any) {
    console.log('container', container);

    return container;
}
