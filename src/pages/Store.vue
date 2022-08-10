<template>
  <h1>{{ foo }}</h1>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted } from 'vue'
export default {
  async setup() {

    const allStore = useStore()
    onMounted(() => {
      console.log('allStore', allStore);
    })
    return allStore.state
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
