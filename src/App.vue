

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
    <el-upload
     action="/admin-api/infra/file/upload"
      ref="upload"
     :http-request="customRequest"
      :auto-upload="true"
      multiple
      :file-list="filelist"
      :limit="5"
       list-type="picture"
    >
      <el-button slot="trigger" size="small" type="primary">select file</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="">upload to server</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    
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
   
  },
  data() {
    return {
filelist:[]
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
    },
    customRequest({file}){
    console.log(file)
    let formData = new FormData()
    formData.append("file",file)
    commonUpload(formData).then(res=>{
      console.log('res',res);
      let currentFile ={name:'demo',url:res.data}
      this.filelist = [...this.filelist,currentFile]
    })
    }
  }
}
</script>