

<template>
  <div>
    <div>
      <router-link to="/hello">to hello</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  methods: {
    handleInfo() {
      this.$message.info("info")
    }
  }
}
</script>