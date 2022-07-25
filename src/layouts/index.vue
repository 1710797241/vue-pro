<script lang="ts" setup>
import { useRouter } from 'umi'
const router = useRouter();
const handleDocs = () => {
  router.push({
    path: `/docs/${Math.random()}`,

  })
}

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
    <router-view></router-view>
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
