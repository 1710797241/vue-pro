<template>
  <div>
    <h2>Yay! Welcome to umi ❤️ vue!</h2>
    <p>
      <img src="../assets/yay.jpg" width="388" />
    </p>
    <p>To get started, edit <code>pages/index.vue</code> and save to reload.</p>
    <router-link to="/docs/12">doc</router-link>

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default {
  methods: {
    handleCLick() {
      console.log('click');

    }
  }
}
</script>