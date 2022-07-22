import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
const routes = [
    {
        path: '/',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/transition',
        component: () => import('../components/Transition.vue')
    },
    {
        path: '/composition',
        component: () => import('../components/Composition.vue')
    }
];
const route = createRouter({
    history: createWebHashHistory(),
    routes
});
export default route;
