import { createSSRApp } from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from 'vuex';
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
const store = createStore({
    state: {
        foo: 'bar'
    }
});
export function createApp() {
    const app = createSSRApp(App);
    const router = createRouter();
    app.use(router);
    app.use(store);
    return { app, router };
}
