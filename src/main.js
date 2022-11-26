import Vue from 'vue';

import App from './App.vue';
import router from './routes';
import store from './stores';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AButton from './components/Button';
import './components/Button/index.less';
import './global.less';
Vue.use(ElementUI);
Vue.use(AButton);
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
