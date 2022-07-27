<script setup>

import { onMounted, provide, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const location = ref({ lat: 0, lng: 0 });
const updateLocation = (value) => {
  location.value = value
}
const route = useRoute()
const router = useRouter()
const store = useStore()
onMounted(() => {
  console.log('store', store,);
})
const handleRouter = (path, params) => {
  router.push({
    path,
    query: params
  })
}
const handleAdd = (val) => {
  // store.commit('add', {
  //   count: val
  // })
  store.dispatch('add', { count: val })
}
const handleNameSpacedAdd = (val) => {
  // store.commit('add', {
  //   count: val
  // })
  store.dispatch('hello/add', { count: val })
}
provide('location', location)
provide('updateLocation', updateLocation)
</script>

<template>
  <h1>无命名空间</h1>
  <button @click="handleAdd(1)">{{ store.state.count }}</button>
  <button @click="handleAdd(1)">getters:{{ store.getters.newCount }}</button>
  <h1>有命名空间</h1>
  <button @click="handleNameSpacedAdd(2)">{{ store.state.hello.count }}</button>
  <button @click="handleNameSpacedAdd(2)">getters:{{ store.getters['hello/newCount'] }}</button>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-link to="/">hello</router-link><br />
  <router-link to="composition">composition</router-link><br />
  <router-link to="transition">transition</router-link>
  <button @click="handleRouter('/composition', { path: 'composition' })">router /composition</button>
  <button @click="handleRouter('/transition', { path: 'transition' })">router /transition</button>

  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
