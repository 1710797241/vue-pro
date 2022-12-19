import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { zhCN, enUS } from './locales';
import './style.css';
import App from './App.vue';
const pinia = createPinia();
import { useAppStore } from './stores/app';
import routes from './routes';
const app = createApp(App);

app.use(pinia);
const appStore = useAppStore();

const i18n = createI18n({
    locale: appStore.lang,
    legacy: false,
    messages: {
        en: enUS,
        zh: zhCN
    }
});
const router = createRouter({
    history: createWebHistory(),
    routes
});
app.use(i18n);
app.use(router);
app.mount('#app');
