const ChildrenLayout = '../layout/ChildrenLayout';
const HelloWorld = '../components/HelloWorld.vue';
const HelloWorld2 = '../components/HelloWorld2.vue';

const Vue403 = '../pages/403.vue';
const Vue404 = '../pages/404.vue';
export default [
    {
        path: '/',
        component: () => import(HelloWorld),

        meta: { title: '首页', icon: 'el-icon-s-home', access: 'canCommon' }
    },
    {
        path: '/hello',
        meta: { title: 'hello', icon: 'el-icon-message', access: 'canAdmin' },
        component: () => import(ChildrenLayout),
        children: [
            {
                path: '/hello/view',
                component: () => import(HelloWorld),
                meta: { title: 'view', access: 'canAdmin' }
            },
            {
                path: '/hello/view2',
                component: () => import(HelloWorld2),
                meta: { title: 'view2' }
            }
        ]
    },
    {
        path: '/403',
        component: () => import(Vue403),
        meta: { title: '403', hideInMenu: true }
    },
    {
        path: '*',
        component: () => import(Vue404),
        meta: { title: '404', hideInMenu: true }
    }
];
