<template>
  <div class="hello">
    <h1>HelloWorld2{{ msg }}</h1>
    <!-- global -->
    <div ref="name">name:{{ $store.state.name }}</div>
    <button v-on:click="handleChangeName">handleChangeName</button>
    <!-- helloStore  -->
    <div>num: {{ $store.state.helloStore.num }}</div>
    <div>num1: {{ num }}</div>
    <div>newNum:{{ newNum }}</div>
    <button v-on:click="handleClick">click</button>
    <button v-on:click="add({ num: 1000 })">click1</button>
    <button v-on:click="add({ num: 100 })">click2</button>
    <hr>
    <el-button type="primary" size="default">button</el-button>
    <qi-ye name="hello2"></qi-ye>
    <button @click="handlePush(1)">router </button>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'change' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapState('helloStore', ['num']),
    ...mapGetters('helloStore', ['newNum'])
  },
  mounted() {
    console.log('did', this.$route.params);

  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to, 'from',);
    // ...
    next()
  },
  methods: {
    onSubmit() {
      console.log(this.$refs, 'refs');
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form, 'formdata');
          console.log(' submit!!');

        } else {
          this.$message.error('请检查输入项');
          console.log('error submit!!');
          return false;
        }
      });
    },
    handlePush(val) {
      this.$router.push({
        path: '/',
        query: {
          val
        }
      })
    },
    handleClick() {
      this.$store.commit("helloStore/add", { num: 5 })//muatations
      this.$store.dispatch("helloStore/add", { num: 4 })
    },
    handleChangeName() {
      this.$store.commit("add", { name: 'qiye' })
      this.$store.dispatch("add", { name: 'qiyedao' })
    },
    ...mapMutations('helloStore', ['add']),

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
