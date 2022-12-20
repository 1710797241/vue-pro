export default [
    { path: '/', component: () => import('../pages/index/index.vue') },
    { path: '/user', component: () => import('../pages/user/index.vue') }
];
