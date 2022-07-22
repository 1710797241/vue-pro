
<template >
  <div>
    <button @click="handleShow">transition</button>
    <transition name="fade-color">
      <div class="block" v-show="show" style="width: 100px; height: 100px;"></div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleShow() {
      console.log('show');
      this.show = !this.show
    }
  }
};
</script>
<style >
.fade-color-enter-active,
.fade-color-leave-active {

  transition: 1s background-color;
}

.block {
  background-color: blue;
}

.fade-color-enter-from {
  background-color: red;
}

.fade-color-leave-to {
  background-color: red;
}
</style>