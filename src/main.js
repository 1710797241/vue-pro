import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import Element from 'element-ui';
import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import './directives/action';
import './filters/upperCase';
import CustomUi from './InstallUI/index';
import './InstallUI/Button.less';
Vue.use(CustomUi);
Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(Antd);
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from);

    next();
});
router.afterEach(() => {
    console.log('afterEach');
});
new Vue({
    data: {
        root: true
    },
    beforeCreate() {
        Vue.prototype.$bus = this;
        console.log('root vm', this);
    },

    store,
    router,
    render: h => h(App)
}).$mount('#app');
