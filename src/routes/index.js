import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
Vue.use(VueRouter);
export const routes = [
    {
        path: '/',
        component: HelloWorld,
        meta: { title: '首页', icon: 'el-icon-s-home' }
    },
    {
        path: '/hello',
        component: HelloWorld,
        meta: { title: 'hello', icon: 'el-icon-message' },
        children: [
            {
                path: '/hello/view',
                component: HelloWorld,
                meta: { title: 'view' }
            }
        ]
    }
];
const router = new VueRouter({
    routes
});

export default router;
