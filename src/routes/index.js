import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import access from '../access';
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.access) {
        const canAccess = access({ user: 'user' })[to.meta.access];
        if (typeof canAccess == 'boolean') {
            if (canAccess) {
                next();
            } else {
                next('/403');
            }
        } else if (typeof canAccess == 'function') {
            if (canAccess(to)) {
                next();
            } else {
                next('/403');
            }
        } else {
            next();
        }
    } else {
        next();
    }
    window.scroll(0, 0);

    // if (to.path !== '/403') {
    //     next({ path: '/403' });
    // } else {
    //     next();
    // }
});
export default router;
