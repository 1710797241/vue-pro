export default [
    {
        path: '/',
        component: 'index'
    },
    {
        path: '/docs/:id',
        component: 'docs'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: '404'
    }
];
