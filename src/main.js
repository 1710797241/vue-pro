import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import Element from 'element-ui';
import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(Antd);
new Vue({
    data: {
        root: true
    },
    store,
    router,
    render: h => h(App)
}).$mount('#app');
