import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/hello',
            component: HelloWorld
        }
    ]
});

export default router;
