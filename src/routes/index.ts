const Index = '../pages/index/index.vue';
const User = '../pages/user/index.vue';

export default [
    { path: '/', component: import(Index) },
    { path: '/user', component: import(User) }
];
