<template>
  <div>
    <slot name="header" v-bind="user"></slot>
    <slot name="content" v-bind="user">
      {{ user.firstName }}
    </slot>
    <slot name="footer" v-bind="{ user }"></slot>
    <slot name="simple">缩写</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'A_',
        lastName: '_B'
      }
    }
  }
}
</script>

<style>
</style>