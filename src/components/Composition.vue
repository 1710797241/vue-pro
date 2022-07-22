<template >
  <div>
    <div>who:{{ user.name }}</div>
    <div>length:{{ computedVal }}</div>
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    <button @click="handleSetUp"> add</button>
    <div>counter:{{ counter }}</div>
    <button @click="handleCounter(Math.random())">handleCounter</button>
    <div>attrs:{{ status }}</div>
    <button @click="handleThis">handle methods this</button>
    <div>location:{{ location }}</div>
    <button @click="updateLocation({ lat: 45, lng: 120 })">handle location</button>
  </div>
</template>
<script>
import { computed, inject, onMounted, reactive, ref, toRef, toRefs, watch } from 'vue'
import useCounter from './common/useCounter'
export default {
  props: {
    user: Object,
  },
  setup(props, context) {
    const { attrs, slots, emit, expose } = context
    console.log('props', props);//响应式的props
    const { user } = toRefs(props)//解构props
    // const user = toRef(props,'user')//user 可选时解构props
    let list = ref([1, 2, 3, 4, 5, 6])
    const mon = reactive({ value: 123 })//只支持引用类型
    const handleSetUp = () => {
      console.log(list);
      list.value = list.value.concat(['watch'])
    }
    const computedVal = computed(() => list.value.length)
    const { counter, handleCounter } = useCounter(-1)
    onMounted(() => {
      list.value.push('mounted')
      console.log('props', props, 'context', context);
    })
    watch(list, (newVal, oldVal) => {
      console.log('watch', newVal);

    })

    const location = inject("location");
    const updateLocation = inject('updateLocation')
    return {
      list,
      handleSetUp,
      computedVal,
      counter,
      handleCounter,
      user,
      status: context.attrs['data-status'],
      location,
      updateLocation
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
