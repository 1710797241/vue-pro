<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string, title: string }>()
const emit = defineEmits(['clickCustom', 'changeCustom'])
const count = ref(0)
const handleClick = () => {
  count.value++
  emit("clickCustom", { click: 123 })

}

const handleChange = () => {
  count.value++
  emit("changeCustom", { change: 123 })
}
defineExpose({
  handleChange
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ title }}</h2>
  <div class="card">
    <button type="button" @click="handleClick">对外暴露自定义事件clickCustom:count is {{ count }}</button>
    <button type="button" @click="handleChange">对外暴露自定义事件changeCustom: count is {{ count }}</button>

    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
