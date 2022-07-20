<template>
  <div @click="handleClick()" class="container" :class="['el-' + size, sizeClass, { activeLink: link }]">
    {{ text }}---{{ numForLine }}
    <template>
      <slot name="top">top</slot>
    </template>
    <template>
      <slot name="bottom">bottom</slot>
    </template>
  </div>
</template>

<script>
export default {
  inject: ['customConfirm'],
  props: {
    text: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'defalut'
    },
    link: {
      type: Boolean,
      default: false
    },
    numForLine: {
      type: Number,
      default: 0
    },
    email: {
      type: String,
      validator: function (value) {
        console.log('validator', value)
        return value && value.includes('@')
      }
    },
    phone: {
      type: String,
      validator: function (value) {
        return value && value.length > 13
      }
    }
  },
  computed: {
    sizeClass() {
      return 'computed-' + this.size
    }
  },
  methods: {
    handleClick() {
      this.customConfirm()
      this.$emit('click', this.text)
    }
  },
  created() {
    console.log('button 实例', this)
  }

}
</script>

<style lang="less" scoped>
.container {
  background-color: #1890ff;
  color: #fff;
  width: 160px;
  cursor: pointer;
}

.el-default {
  font-size: 18px;
}

.el-small {
  font-size: 16px;
}

.activeLink {
  text-decoration: underline;

}
</style>>
