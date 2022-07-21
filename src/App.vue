

<template>
  <div>
    app
    <a-button type="primary">click</a-button>

    <hello-world />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  }
}
</script>