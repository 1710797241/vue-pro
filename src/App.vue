

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
    <el-upload action="/admin-api/infra/file/upload" ref="upload" :http-request="customRequest" :auto-upload="true"
      multiple :file-list="filelist" :limit="5" list-type="picture">
      <el-button slot="trigger" size="small" type="primary">select file</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="">upload to server</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    <el-button type="primary" size="default" @click="handleDownload">download</el-button>
    <el-button type="primary" size="default" @click="handleTestJson">testJson</el-button>

    <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapState, mapActions, mapGetters } from 'vuex'
import { commonUpload, commonDownload } from "./services/upload";
import { handleDownloadFile } from "./utils/download";
import { testJson } from './services/test'
export default {
  components: {
    HelloWorld
  },
  mounted() {
    console.log('this', this.$store.state);

  },
  data() {
    return {
      filelist: []
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
    customRequest({ file }) {
      console.log(file)
      let formData = new FormData()
      formData.append("file", file)
      commonUpload(formData).then(res => {
        console.log('res', res);
        let currentFile = { name: 'demo', url: res.data }
        this.filelist = [...this.filelist, currentFile]
      })
    },
    handleDownload() {
      commonDownload("http://192.168.3.204:9000/rocket.ts.ts.pdf/files/2022-09-01/7fcb97f0-b447-4904-b709-d054c9cc0650_%E5%81%9A%E6%96%B0%E6%97%B6%E4%BB%A3%E7%9A%84%E8%BF%BD%E6%A2%A6%E4%BA%BA.pdfpdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20221020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221020T053835Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ae9c9f08bb1253b0eb7fc76bcf93badba39bb00964303fb3d614baade28c1955",).then(res => {

      })
    },
    handleTestJson() {
      testJson("/api/v1/rocket/thesaurus/add", { name: '12346' })
    }
  }
}
</script>