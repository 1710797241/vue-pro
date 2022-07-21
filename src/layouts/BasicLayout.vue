<template>

  <transition class="basuc">
    <div class="container">
      <router-view></router-view>
    </div>
  </transition>

</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background-color: antiquewhite;
  width: 100%;
  height: 100%;
}

.basuc-enter-active {
  opacity: 1;
  transform: translate(0, 0em);
  transition: all 1.5s;
  animation: zoomOut 1.5s;
}

.basuc-leave-active {
  opacity: 0;
  transition: all 1.5s;
  transform: translate(0em, 0em);
  animation: zoomOut 1.5s reverse;
}

.basuc-enter

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: translate(0em, 2em);
}


.basuc-leave-to

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