<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- global -->
    <div>name:{{$store.state.name}}</div>
     <button v-on:click="handleChangeName">handleChangeName</button>
    <!-- helloStore  -->
    <div>num: {{$store.state.helloStore.num}}</div>
     <div>num1: {{num}}</div>
     <div>newNum:{{newNum}}</div>
    <button v-on:click="handleClick">click</button>
     <button v-on:click="add({num:1000})">click1</button>
     <button v-on:click="add({num:100})">click2</button>
      <div>
    <h1>antd</h1>
     <a-date-picker v-bind:value="value1" @change="onChange"/>
      <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
   
   <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
  </div>
  </div>
 
</template>

<script>
import { mapState,mapMutations,mapGetters } from 'vuex';
import moment from 'moment';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    ...mapState('helloStore',['num']),
    ...mapGetters('helloStore',['newNum'])
  },
  data(){
  return {
      value1:moment(),
      data,
      columns
  }
  },  
  mounted(){
    console.log('did',this);
  },
  methods:{
    onChange(date, dateString){
      console.log('date',date,'dateString',dateString);
      this.value1 = date;
    },  
    handleClick(){
      this.$store.commit("helloStore/add",{num:5})//muatations
      this.$store.dispatch("helloStore/add",{num:4})
    },
    handleChangeName(){
      this.$store.commit("add",{name:'qiye'})
      this.$store.dispatch("add",{name:'qiyedao'})
    },  
    ...mapMutations('helloStore',['add']),
    
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
