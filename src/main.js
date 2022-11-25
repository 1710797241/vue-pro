import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import './style.css';
import App from './App.vue';
import Role from './plugins/role';
import store from './store';
import route from './routes';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.directive('focus', {
    mounted(el, binding) {
        console.log('el', el, 'binding', binding);
        el.focus();
    }
});
app.use(Role);
app.use(store);
app.use(route);
app.use(ElementPlus);
app.mount('#app');
