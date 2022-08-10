<template>
  <h1>defineComponent</h1>
  <h2>{name}</h2>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: String,

  },
  mounted() {

  },
  unmounted() {

  },
  computed: {

  },
  data() {
    return {
      name: '123456'
    }
  }
})
</script>

<style>
</style>