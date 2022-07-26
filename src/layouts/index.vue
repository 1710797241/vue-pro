<script lang="ts" setup>
import { useRouter, } from 'umi'
import { getMenuData, clearMenuItem } from '@ant-design-vue/pro-layout';
import { reactive, onMounted } from 'vue'
const locale = (i18n: string) => i18n;
const router = useRouter();

const data = getMenuData(clearMenuItem(router.getRoutes()));
const { menuData } = data
console.log('menuData', menuData, 'clear', clearMenuItem(router.getRoutes()), 'data', data)
const state = reactive({
  collapsed: false, // default value
  openKeys: ['/'],
  selectedKeys: ['/'],
})
const layoutConf = reactive({
  menuData,
  splitMenus: false,
  title: 'ProLayout',
  // logo: 'https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg',
  navTheme: 'realDark',
  layout: 'mix',
  fixSiderbar: true,
  fixedHeader: true,
});
const handleDocs = () => {
  router.push({
    path: `/docs/${Math.random()}`,

  })
}
onMounted(() => {
  console.log('routes', router.getRoutes());

})


</script>
<template>
  <div class="navs">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/docs/12">Docs</router-link>
      </li>

      <button @click="handleDocs">传参到docs</button>

    </ul>
    <pro-layout style="min-height: 100vh" :locale="locale" v-bind="layoutConf" v-model:openKeys="state.openKeys"
      v-model:collapsed="state.collapsed" navTheme="dark" v-model:selectedKeys="state.selectedKeys">
      <router-view />
    </pro-layout>

  </div>
</template>
<style lang="less">
.navs {
  ul {
    padding: 0;
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 1em;
  }
}
</style>
