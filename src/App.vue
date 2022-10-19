

<template>
  <div>
    <div>
      <router-link to="/hello">to hello</router-link>
    </div>
    <h2>无命名空间</h2>
    <h1>计数</h1>
    <div>origin: {{ this.$store.state.helloStore.count }}</div>
    <div>newCount: {{ newCount }}</div>
    <div>age: {{ age }}</div>
    <button @click="Add">add</button>
    <button @click="Minus">minus</button>
    <button @click="handleAdd">async add</button>
    <el-button type='primary'>element-ui</el-button>
    <a-button></a-button>

    <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapActions, mapGetters } from 'vuex'
import { commonUpload } from "./services/upload";

export default {
  components: {
    HelloWorld
  },
  mounted() {
    console.log('this', this.$store.state);
    let formdata = new FormData()
    formdata.append("file", 'file123')
    commonUpload(formdata).then(res => {

    })
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['newCount']),
    ...mapState({
      age: state => {

        console.log(state, 'satet');
        return state.helloStore.age
      }
    })
  },
  methods: {
    ...mapActions(['handleAdd']),
    Add() {
      this.$store.commit('add', {
        count: 1
      })
    },
    Minus() {
      this.$store.commit("minus", {
        count: 1
      })
    }
  }
}
</script>