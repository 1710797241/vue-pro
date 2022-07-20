<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- global -->
    <div>name:{{ $store.state.name }}</div>
    <button v-on:click="handleChangeName">handleChangeName</button>
    <!-- helloStore  -->
    <div>num: {{ $store.state.helloStore.num }}</div>
    <div>num1: {{ num }}</div>
    <div>newNum:{{ newNum }}</div>
    <button v-on:click="handleClick">click</button>
    <button v-on:click="add({ num: 1000 })">click1</button>
    <button v-on:click="add({ num: 100 })">click2</button>
    <div>遍历数组</div>
    <div v-for="(item, index) in list" v-bind:key="'list' + index">{{ index + 1 }}:{{ item }}</div>
    <div>遍历object</div>
    <div v-for="(item, name, index) in hobby" :key="'hobby' + index">
      index:{{ index }}--name:{{ name }}--value:{{ item }}
    </div>
    <button @click="handlePushItem">push item to list</button>
    <div v-if="show">show</div>
    <div v-else>hidden</div>
    <button @click="handleChangeStatus(!show)">{{ show ? 'hidden' : 'show' }}</button>
    <div>
      <qi-ye name="liqiye"></qi-ye>
    </div>
    <div>
      <input type="text" placeholder="keywords" @input="handleKeyword" />
      <h1>待传输： {{ keyword }}</h1>
      <template>
        <h1>antd</h1>
        <button :style="{ color: 'orange' }">style</button>
      </template>
      <a-date-picker v-bind:value="value1" @change="onChange" />
      <custom-button @click="handleCustomButton" :link="isLink" size="small" :numForLine="12" email="171079@">
        <span slot="top" slot-scope="num">custom-top {{ num }}</span>
        <span slot="bottom">custom-bottom</span>
      </custom-button>
      <a-table :columns="columns" :data-source="data">
        <a slot="name" slot-scope="text">{{ text }} 数据</a>
        <span slot="customTitle">
          <a-icon type="smile-o" />
          Name 自定义表头
        </span>

        <span slot="tags" slot-scope="tags">
          <a-tag v-for="tag in tags" :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>

        <span slot="action" slot-scope="text, record">
          <a @click="handleModal(true, record)">编辑</a>
          <a-divider type="vertical" />

          <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No" @confirm="confirm"
            @cancel="cancel">
            <a href="#">Delete</a>
          </a-popconfirm>
        </span>
      </a-table>
      <a-modal title="Title" :visible="visible" @ok="handleOK" @cancel="handleCancel">
        <a-spin size="large" />
        <p>modal</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

import moment from 'moment';
import Vue from 'vue';
import CustomButton from './CustomButton.vue';
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];

Vue.component('qi-ye', {
  props: ['name'],
  template: `<div>{{name}}</div>`
});
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    CustomButton
  },
  computed: {
    ...mapState('helloStore', ['num']),
    ...mapGetters('helloStore', ['newNum'])
  },
  data() {
    return {
      value1: moment(),
      data,
      columns,
      visible: false,
      keyword: '',
      list: [1, 2, 3, 4, 5, 6],
      show: true,
      isLink: true,
      hobby: {
        name: 'football',
        age: 18
      }
    };
  },
  mounted() {
    console.log('did', this);
  },
  methods: {
    handleCustomButton(val) {
      console.log(val, 'handleCustomButton');
    },
    handlePushItem() {
      this.list.push(new Date().getTime());
    },
    handleChangeStatus(status) {
      this.show = status;
    },
    handleKeyword(e) {
      console.log(e.target.value, 'keyword');
      this.keyword = e.target.value;
    },
    confirm() {
      this.$notification.success({
        message: 'ok',
        description: 'xxxxxxx........'
      });
    },
    cancel() {
      this.$notification.error({
        message: 'error',
        description: 'xxxxxxx........'
      });
    },
    handleOK() {
      this.$message.success('success');
    },
    handleModal(status, record) {
      this.visible = status;
      console.log('record', record);
    },
    handleCancel() {
      this.visible = false;
    },
    onChange(date, dateString) {
      console.log('date', date, 'dateString', dateString);
      this.value1 = date;
    },
    handleClick() {
      this.$store.commit('helloStore/add', { num: 5 }); //muatations
      this.$store.dispatch('helloStore/add', { num: 4 });
    },
    handleChangeName() {
      this.$store.commit('add', { name: 'qiye' });
      this.$store.dispatch('add', { name: 'qiyedao' });
    },
    ...mapMutations('helloStore', ['add'])
  },
  watch: {
    keyword: function (newVal) {
      console.log('newVal', newVal);
    }
  }
};
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
