import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HelloWorld2 from '@/components/HelloWorld2';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/hello',
        component: HelloWorld2
    }
];
export default new VueRouter({
    routes
});
