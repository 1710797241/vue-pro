// import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "List",
  component: Layout,
  redirect: "/list",
  meta: {
    icon: "informationLine",
    title: "事项管理",
    rank: 2
  },
  children: [
    {
      path: "/list",
      name: "List",
      component: () => import("@/views/list/index.vue"),
      meta: {
        title: "事项管理"
      }
    }
  ]
} as RouteConfigsTable;
