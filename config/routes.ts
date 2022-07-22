export default [
    {
        path: '/',
        component: 'index'
    },
    {
        path: '/docs/:id',
        component: 'docs/index'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: '404'
    }
];
