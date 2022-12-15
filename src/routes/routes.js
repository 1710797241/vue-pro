const modulesVue = import.meta.glob('../pages/**/*.vue');
const modulesJsx = import.meta.glob('../pages/**/*.jsx');
const modules = Object.assign(modulesVue, modulesJsx);
console.log('modules', modules);
const Vue403 = '../pages/403.vue';
const Vue404 = '../pages/404.vue';
const Order = '../pages/order/index.jsx';
// const UserJsx = '../pages/user/index.jsx';
const User = '../pages/user/index.vue';

const Index = '../pages/index.jsx';
import ChildrenLayout from '../layout/ChildrenLayout';
export default [
    {
        path: '/',
        component: modules[Index],

        meta: { title: '首页', icon: 'el-icon-s-home', access: 'canCommon' }
    },
    {
        path: '/demo',
        meta: { title: 'demo', icon: 'el-icon-message', access: 'canAdmin' },
        component: ChildrenLayout,
        children: [
            {
                path: '/demo/order',
                component: modules[Order],
                meta: { title: 'order', access: 'canAdmin' }
            },
            {
                path: '/demo/user',
                component: modules[User],
                meta: { title: 'user' }
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
