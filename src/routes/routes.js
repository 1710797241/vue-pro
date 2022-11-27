import HelloWorld from '../components/HelloWorld.vue';
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
        component: HelloWorld,
        meta: { title: 'hello', icon: 'el-icon-message', access: 'canAdmin' },
        children: [
            {
                path: '/hello/view',
                component: HelloWorld,
                meta: { title: 'view', access: 'canAdmin' },
                children: [
                    {
                        path: '/hello/view/ch',
                        component: HelloWorld,
                        meta: { title: 'view', access: 'canAdmin' }
                    },
                    {
                        path: '/hello/view/ch1',
                        component: HelloWorld,
                        meta: { title: 'view2' }
                    }
                ]
            },
            {
                path: '/hello/view2',
                component: HelloWorld,
                meta: { title: 'view2' },
                children: [
                    {
                        path: '/hello/view2/ch',
                        component: HelloWorld,
                        meta: { title: 'view', access: 'canAdmin' }
                    },
                    {
                        path: '/hello/view2/ch1',
                        component: HelloWorld,
                        meta: { title: 'view2' }
                    }
                ]
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
