<template>
  <div>
    <p>This is umi docs.</p>
    <button @click="add">count:{{ store.state.doc.count }}</button><br />
    <button @click="minus">count:{{ store.state.doc.count }}</button><br />
    <button class="yiyi-color">newCount:{{ newCount }}</button>
    <button @click="handleTimes">times:{{ times[0].name }}</button>
    <button @click="handleTimes">obj:{{ obj.name }}</button>


    <div>pinia: {{ docStore.name }}</div>
    <div @click="docStore.counter++">pinia-counter: {{ docStore.counter }}</div>
    <div @click="docStore.add()">pinia-counter-actions:add(): {{ docStore.counter }}</div>
    <div>umiHello:{{ umiHello }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'umi'
import { onMounted, computed, watch, ref, reactive, onUpdated, inject, toRef } from 'vue'
import { useStore } from 'vuex'
import { useDocStore, useAddressStore } from '../../stores/pinia/doc'
const route = useRoute()
const store = useStore();
const newCount = computed(() => store.state.doc.count + 520)
const docStore = useDocStore();
const times = ref([
  {
    name: 'ref'
  }
])
const obj = reactive({ name: 'reactive' })
const handleTimes = () => {
  times.value[0].name = Math.random()
  obj.name = 'new-reactive' + Math.random()
  umiHello.value = 'umi-------' + Math.random()

}
watch(times.value, (newVal, oldVal) => {
  console.log('watch: newVal', newVal, 'oldVal', oldVal);
})
const addressStore = useAddressStore()
const add = () => {
  store.commit('doc/add', { count: 2 })
}
const minus = () => {
  store.commit("doc/minus", { count: 2 })
}
watch([() => store.state.doc.count, times.value], (newVal) => {
  console.log('newVal', newVal);
})
watch(() => route.params.id, async (newId) => {
  console.log('newId', newId);
})

const umiHello = toRef(inject('umi-hello'), 'w')
const tempObj = { name: 'qiye', age: 18 }
const proxyObj = new Proxy(tempObj, {
  get: function (target, attr, receiver) {
    console.log('target', target, 'attr', attr, 'receiver', receiver);
    return Reflect.get(target, attr, receiver);

  },
  set: function (target, attr, receiver) {
    console.log('target', target, 'attr', attr, 'receiver', receiver);
    return Reflect.set(target, attr, receiver);


  },
  has: function (target, prop) {
    var res = Reflect.has(target, prop);
    console.log('Proxy.has', target, 'target', '===props', prop, target === obj);
    return res;
  },
})
window.proxyObj = proxyObj
onMounted(() => {
  console.log('route', route, route.params, 'store', store, 'docStore', docStore, 'addressStore', addressStore);
})




</script>
<style lang="less">
.yiyi-color {
  color: var(--yiyi-color)
}
</style>
