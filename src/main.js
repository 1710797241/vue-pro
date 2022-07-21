import Vue from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './stores';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
