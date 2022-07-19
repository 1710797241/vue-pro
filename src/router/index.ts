import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout.vue';
import BlankLayout from '../layouts/BlankLayout.vue';
import WelcomePage from '../views/Welcome.vue';

// only githubpages preview site used, if use template please remove this check
// and use `createWebHistory` is recommend
const hasGithubPages = import.meta.env.VITE_GHPAGES;

export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          meta: { title: '欢迎', icon: 'icon-icon-test' },
          component: WelcomePage,
        },
        {
          path: '/admins',
          name: 'admins',
          meta: { title: '管理页', icon: 'icon-tuijian', flat: true },
          component: BlankLayout,
          redirect: () => ({ name: 'page1' }),
          children: [
            {
              path: 'dynamic-match/:id(\\d+)',
              name: 'dynamic-match',
              // 路由 path 默认参数再 meta.params 里
              meta: { title: '动态参数页面', params: { id: 1 } },
              component: () => import('../views/admins/DynamicMatch.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "fail" */ '../views/404.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
});
