import Vue from 'vue';
import './style.css';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
Vue.use(Antd);
new Vue({
    render: h => h(App)
}).$mount('#app');
