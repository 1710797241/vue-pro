import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld2 from '@/components/HelloWorld2';
import BasicLayout from '@/layouts/BasicLayout';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: BasicLayout,
        meta: {
            role: 'all'
        },
        beforeEnter(to, from, next) {
            console.log('导航');
            // ...
            next();
        },
        children: [
            {
                path: '/',
                name: 'index',
                component: HelloWorld
            },
            {
                path: '/hello/:id',
                name: 'hello',
                component: HelloWorld2
            },
            {
                path: '*',
                redirect: '/'
            }
        ]
    }
];
export default new VueRouter({
    mode: 'history',
    routes
});
