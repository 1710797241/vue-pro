import Vue from 'vue';

import App from './App.vue';
import router from './routes';
import store from './stores';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CAButton from './components/Button';
import './components/Button/index.less';
import './global.less';

Vue.use(ElementUI);
Vue.use(CAButton);

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store
}).$mount('#app');
