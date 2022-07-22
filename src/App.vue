<script setup>
import TransitionDemo from './components/Transition.vue';
import HelloWorld from './components/HelloWorld.vue'
import Composition from './components/Composition.vue';
import { provide, ref } from 'vue';
const location = ref({ lat: 0, lng: 0 });
const updateLocation = (value) => {
  location.value = value
}
provide('location', location)
provide('updateLocation', updateLocation)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld />
  <TransitionDemo />
  <Composition :user="{ name: 'qiye' }" data-status="active" />
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
