import { createWebHistory, createMemoryHistory } from 'vue-router';
import { createRouter as _createRouter } from 'vue-router';
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

export function createRouter() {
    return _createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes
    });
}
