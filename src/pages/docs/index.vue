<template>
  <div>
    <p>This is umi docs.</p>
    <button @click="add">count:{{ store.state.doc.count }}</button>
    <button @click="minus">count:{{ store.state.doc.count }}</button>
    <div>pinia: {{ docStore.name }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'umi'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { useDocStore } from '../../stores/pinia/doc'
const route = useRoute()
const store = useStore();

const docStore = useDocStore();
const add = () => {
  store.commit('doc/add', { count: 2 })
}
const minus = () => {
  store.commit("doc/minus", { count: 2 })
}
onMounted(() => {
  console.log('route', route, 'store', store, 'docStore', docStore, docStore.name);
})


</script>
