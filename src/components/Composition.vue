<template >
  <div>
    <div>who:{{ user?.name }}</div>
    <div>length:{{ computedVal }}</div>
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    <button @click="handleSetUp"> add</button>
    <div>counter:{{ counter }}</div>
    <button @click="handleCounter(Math.random())">handleCounter</button>
    <div>attrs:{{ status }}</div>
    <button @click="handleThis">handle methods this</button>
    <div>location:{{ location }}</div>
    <button @click="updateLocation({ lat: 45, lng: 120 })">handle location</button>

    <div ref="root">root</div>
  </div>
</template>
<script>
import { computed, inject, onMounted, reactive, ref, toRef, toRefs, watch, watchEffect, } from 'vue'
import useCounter from './common/useCounter'
import { useLink, useRoute } from 'vue-router'
export default {
  props: {
    user: Object,
  },
  setup(props, context) {

    const { attrs, slots, emit, expose } = context
    console.log('props', props);//响应式的props
    // const { user } = toRefs(props)//解构props
    const user = toRef(props, { name: 123 })//user 可选时解构props
    let list = ref([1, 2, 3, 4, 5, 6])
    const mon = reactive({ value: 123 })//只支持引用类型
    const handleSetUp = () => {
      console.log(list);
      list.value = list.value.concat(['watch'])
    }
    const computedVal = computed(() => list.value.length)
    const { counter, handleCounter } = useCounter(-1)
    const location = inject("location");
    const updateLocation = inject('updateLocation')
    const route = useRoute()
    const { query } = toRefs(route)
    onMounted(() => {
      list.value.push('mounted')
      console.log('props', props, 'context', context, 'route', query.value,);
    })
    watch(list, (newVal, oldVal) => {
      console.log('watch', newVal);

    })
    watch([counter, location], (newVal, oldVal) => {
      // newVal 为数组
    })


    const root = ref(null)
    watchEffect(() => {
      console.log('ref root', root.value)
    }, {
      flush: 'post'
    })
    return {
      list,
      handleSetUp,
      computedVal,
      counter,
      handleCounter,
      user,
      status: context.attrs['data-status'],
      location,
      updateLocation,
      root
    }



  },

  methods: {
    handleThis() {
      console.log(this.counter, 'counter');
      this.counter += 9999
    }
  }
}
</script>
