export default [
    {
        path: '/',
        component: 'index',
        name: 'index'
    },
    {
        path: '/docs/:id',
        component: 'docs',
        name: 'docs'
    }
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: '404'
    // }
];
