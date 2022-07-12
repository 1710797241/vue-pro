<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>num: {{$store.state.num}}</div>
     <div>num1: {{num}}</div>
     <div>newNum:{{newNum}}</div>
    <button v-on:click="handleClick">click</button>
     <button v-on:click="add({num:1000})">click1</button>
     <button v-on:click="add({num:100})">click2</button>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapState(['num']),
    ...mapGetters(['newNum'])
  },
  mounted(){
    console.log('did',this);
  },
  methods:{
    handleClick(){
      this.$store.commit("add",{num:5})//muatations
      this.$store.dispatch("add",{num:4})
    },
    ...mapMutations(['add']),
    
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
