// import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "User",
  component: Layout,
  redirect: "/user",
  meta: {
    icon: "UserFilled",
    title: "用户管理",
    rank: 1
  },
  children: [
    {
      path: "/user",
      name: "User",
      component: () => import("@/views/user/index.vue"),
      meta: {
        title: "用户管理"
      }
    }
  ]
} as RouteConfigsTable;
