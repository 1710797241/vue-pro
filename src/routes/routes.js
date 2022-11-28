import ChildrenLayout from '../layout/ChildrenLayout';
import HelloWorld from '../components/HelloWorld.vue';
import HelloWorld2 from '../components/HelloWorld2.vue';

import Vue403 from '../pages/403.vue';
import Vue404 from '../pages/404.vue';
export default [
    {
        path: '/',
        component: HelloWorld,

        meta: { title: '首页', icon: 'el-icon-s-home', access: 'canCommon' }
    },
    {
        path: '/hello',
        meta: { title: 'hello', icon: 'el-icon-message', access: 'canAdmin' },
        component: ChildrenLayout,
        children: [
            {
                path: '/hello/view',
                component: HelloWorld,
                meta: { title: 'view', access: 'canAdmin' }
            },
            {
                path: '/hello/view2',
                component: HelloWorld2,
                meta: { title: 'view2' }
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
