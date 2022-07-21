import Vue from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './stores';
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
