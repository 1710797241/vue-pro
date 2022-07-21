<template>
  <div>
    <h1>vuex 命名空间</h1>
    <h2> 计数</h2>
    <div>{{ count }}</div>
    <div>newCount:{{ newCount }}</div>
    <button @click="add({ count: 1 })">add</button>
    <button @click="minus({ count: 1 })">minus</button>
    <button @click="handleAdd">add async</button>
  </div>

</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {

  computed: {
    ...mapState('userStore', ['count']),
    ...mapGetters("userStore", ['newCount'])
  },
  methods: {
    ...mapMutations("userStore", ['add', 'minus']),
    ...mapActions("userStore", ['handleAdd'])
  },
  mounted() {
    console.log('命名', this);
  }
}
</script>
