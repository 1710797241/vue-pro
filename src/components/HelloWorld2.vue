<template>
  <div class="hello">
    <h1>HelloWorld2{{ msg }}</h1>
    <!-- global -->
    <div>name:{{ $store.state.name }}</div>
    <button @click="handleChangeName">handleChangeName</button>
    <!-- helloStore  -->
    <div>num: {{ $store.state.helloStore.num }}</div>
    <div>num1: {{ num }}</div>
    <div>newNum:{{ newNum }}</div>
    <button @click="handleClick">click</button>
    <button @click="add({ num: 1000 })">click1</button>
    <button @click="add({ num: 100 })">click2</button>
    <hr>
    <el-button type="primary" size="default">button</el-button>
    <qi-ye name="hello2"></qi-ye>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld2',
  props: {
    msg: {
      type: String,
      defalut: 'HelloWorld2'
    }
  },
  computed: {
    ...mapState('helloStore', ['num']),
    ...mapGetters('helloStore', ['newNum'])
  },
  mounted() {
    console.log('did', this)
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to, 'from')
    // ...
    next()
  },
  methods: {
    handleClick() {
      this.$store.commit('helloStore/add', { num: 5 })// muatations
      this.$store.dispatch('helloStore/add', { num: 4 })
    },
    handleChangeName() {
      this.$store.commit('add', { name: 'qiye' })
      this.$store.dispatch('add', { name: 'qiyedao' })
    },
    ...mapMutations('helloStore', ['add'])

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
