<template>
  <div class="hello">
    <router-link to="/hello"> HelloWorld2</router-link>
    <router-link to="/hello/125"> HelloWorld2传参数</router-link>
    <custom-ui-button></custom-ui-button>

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
    <h1>自定义组件</h1>
    <custom-button @click="handleCustomButton" :link="isLink" size="small" :numForLine="12" email="171079@"
      :phone="phone">
      <span slot="top" slot-scope="num">custom-top {{ num }}</span>
      <span slot="bottom">custom-bottom</span>
    </custom-button>
    <h1>自定义model</h1>
    <custom-input v-model="customModel"></custom-input>
    <h1>插槽</h1>
    <custom-card>
      <template v-slot:header="user">
        <h1>header{{ user.firstName }}</h1>
      </template>
      <span slot="content" slot-scope="user">{{ user.lastName }}content通过插槽获取子组件数据</span>
      <template v-slot:footer="{ user }">
        <h1>footer{{ user.lastName }}通过插槽获取子组件数据</h1>
      </template>
      <template #simple>
        <h1>simple缩写</h1>
      </template>
    </custom-card>
    <h1>过渡动画</h1>
    <custom-transition></custom-transition>
    <h1>自定义过滤器</h1>
    <div>{{ filter | upper }}</div>
    <div v-if="show">show</div>
    <div v-else>hidden</div>
    <button @click="handleChangeStatus(!show)">{{ show ? 'hidden' : 'show' }}</button>
    <div>
      <qi-ye name="liqiye"></qi-ye>
    </div>
    <div>
      <input type="text" placeholder="keywords" @input="handleKeyword" />
      <h1>待传输： {{ keyword }}</h1>
      <h1>指令</h1>
      <input placeholder="指令" type="text" v-action:demo.admin="{ name: 'table', data }" v-hello>
      <template>
        <h1>antd</h1>
        <button :style="{ color: 'orange' }">style</button>
      </template>
      <a-date-picker v-bind:value="value1" @change="onChange" />

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

      <template>
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item v-bind="formItemLayout" label="E-mail">
            <a-input v-decorator="[
              'email',
              {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              },
            ]" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Password" has-feedback>
            <a-input v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              },
            ]" type="password" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Confirm Password" has-feedback>
            <a-input v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              },
            ]" type="password" @blur="handleConfirmBlur" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              Nickname&nbsp;
              <a-tooltip title="What do you want others to call you?">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input v-decorator="[
              'nickname',
              {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              },
            ]" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Habitual Residence">
            <a-cascader v-decorator="[
              'residence',
              {
                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [
                  { type: 'array', required: true, message: 'Please select your habitual residence!' },
                ],
              },
            ]" :options="residences" />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Phone Number">
            <a-input v-decorator="[
              'phone',
              {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              },
            ]" style="width: 100%">
              <a-select slot="addonBefore" v-decorator="['prefix', { initialValue: '86' }]" style="width: 70px">
                <a-select-option value="86">
                  +86
                </a-select-option>
                <a-select-option value="87">
                  +87
                </a-select-option>
              </a-select>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Website">
            <a-auto-complete
              v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
              placeholder="website" @change="handleWebsiteChange">
              <template slot="dataSource">
                <a-select-option v-for="website in autoCompleteResult" :key="website">
                  {{ website }}
                </a-select-option>
              </template>
              <a-input />
            </a-auto-complete>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Captcha" extra="We must make sure that your are a human.">
            <a-row :gutter="8">
              <a-col :span="12">
                <a-input v-decorator="[
                  'captcha',
                  { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
                ]" />
              </a-col>
              <a-col :span="12">
                <a-button>Get captcha</a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
              I have read the
              <a href="">
                agreement
              </a>
            </a-checkbox>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-button type="primary" html-type="submit">
              Register
            </a-button>
          </a-form-item>
        </a-form>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';

import moment from 'moment';
import Vue from 'vue';
import CustomButton from './CustomButton.vue';
import CustomInput from './CustomInput.vue';
import CustomTransition from './CustomTransition.vue';
import permission from './../mixins/permission'
// import CustomCard from './CustomCard.vue';

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
// 全局组件
Vue.component('qi-ye', {
  props: ['name'],
  template: `<div>{{name}}</div>`
});

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mixins: [permission],
  directives: {
    hello: {
      bind: function (el) {
        console.log('directive-hello:bind', el);
      },
      inserted: function (el) {
        console.log('directive-hello:inserted', el);
      },
      update: function (el) {
        console.log('directive-hello:update', el);
      }
    }
  },
  provide: function () {
    return {
      customConfirm: this.confirm
    }
  },
  components: {
    CustomButton,
    CustomInput,
    CustomCard: () => import('./CustomCard.vue'),
    CustomTransition

  },
  computed: {
    ...mapState('helloStore', ['num']),
    ...mapGetters('helloStore', ['newNum'])
  },
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
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
      },
      phone: 122355,
      customModel: 'custom-model',
      filter: 'abcfilter'
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  mounted() {
    this.$bus.$on("addMoney", (val) => {
      console.log('MessageCenter', val);
    })
    console.log(' this.$bus', this.$bus);
    console.log('did', this, 'root', this.$root, 'parent', this.$parent);
    console.log('data mixins', this.mixins);

  },
  methods: {

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        console.log('Received values of form: ', values);

      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },

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
