<template>
  <div>
    <transition name="custom">
      <div v-if="show" class="custom-block"></div>

    </transition>
    <button @click="handleChange">transition</button>

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
    handleChange() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="less" scoped>
.custom-block {
  width: 100px;
  height: 100px;
  background-color: #1890ff;
}

.custom-enter-active {
  opacity: 1;
  transform: translate(0, 0em);
  transition: all 1.5s;
  animation: zoomOut 1.5s;
}

.custom-leave-active {
  opacity: 0;
  transition: all 1.5s;
  transform: translate(0em, 0em);
  animation: zoomOut 1.5s reverse;
}

.custom-enter

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translate(0em, 2em);
}


.custom-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translate(0em, -2em);
}

@keyframes zoomOut {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}
</style>