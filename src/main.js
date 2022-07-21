import Vue from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './stores';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import AButton from './components/Button';
import './components/Button/index.less';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
Vue.use(Antd);
Vue.use(ElementUI);
Vue.use(AButton);
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
