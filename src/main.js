import Vue from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
