const modules = import.meta.glob('../pages/*.vue');
const Vue403 = '../pages/403.vue';
const Vue404 = '../pages/404.vue';
const HelloWorld = '../pages/HelloWorld.vue';
const HelloWorld2 = '../pages/HelloWorld2.vue';
import ChildrenLayout from '../layout/ChildrenLayout';
export default [
    {
        path: '/',
        component: modules[HelloWorld],

        meta: { title: '首页', icon: 'el-icon-s-home', access: 'canCommon' }
    },
    {
        path: '/hello',
        meta: { title: 'hello', icon: 'el-icon-message', access: 'canAdmin' },
        component: ChildrenLayout,
        children: [
            {
                path: '/hello/view',
                component: modules[HelloWorld],
                meta: { title: 'view', access: 'canAdmin' }
            },
            {
                path: '/hello/view2',
                component: modules[HelloWorld2],
                meta: { title: 'view2' }
            }
        ]
    },
    {
        path: '/403',
        component: modules[Vue403],
        meta: { title: '403', hideInMenu: true }
    },
    {
        path: '*',
        component: modules[Vue404],
        meta: { title: '404', hideInMenu: true }
    }
];
