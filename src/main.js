import { createSSRApp } from 'vue';

import './style.css';
import App from './App.vue';
import Role from './plugins/role';
import store from './store';
import { createRouter } from './routes';
const createApp = () => {
    const app = createSSRApp(App);
    const router = createRouter();
    app.use(Role);
    app.use(store);
    app.use(router);
    // app.mount('#app');
    return { app, router };
};

export { createApp };
