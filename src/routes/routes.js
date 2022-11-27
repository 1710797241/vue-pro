import HelloWorld from '../components/HelloWorld.vue';
import Vue403 from '../pages/403.vue';
import Vue404 from '../pages/404.vue';
export default [
    {
        path: '/',
        component: HelloWorld,
        meta: { title: '首页', icon: 'el-icon-s-home', access: 'canAdmin' }
    },
    {
        path: '/hello',
        component: HelloWorld,
        meta: { title: 'hello', icon: 'el-icon-message', access: 'canAdmin' },
        children: [
            {
                path: '/hello/view',
                component: HelloWorld,
                meta: { title: 'view', access: 'canAdmin' }
            }
        ]
    },
    {
        path: '/403',
        component: Vue403,
        meta: { title: '403', hideInMenu: true }
    },
    {
        path: '*',
        component: Vue404,
        meta: { title: '404', hideInMenu: true }
    }
];
