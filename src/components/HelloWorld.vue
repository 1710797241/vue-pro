<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate(){
    console.log('beforeCreate');
  }, 
  created(){
    console.log('created');
  } , 
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  },
  beforeUnmount(){
   
    console.log('beforeUnmount');
    localStorage.beforeUnmount = '1'
  },
  unmounted(){
    console.log('unmounted');
    localStorage.unmounted = '2'
  },
  beforeUpdate(){

  },
  updated(){

  },
 
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
