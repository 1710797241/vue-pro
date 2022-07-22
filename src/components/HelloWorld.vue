
<script>
import { defineAsyncComponent } from "vue";
const HelloWorld = defineAsyncComponent(() =>
  new Promise((resolve, reject) => {
    resolve({
      template: `<div>
      <div v-for="(item, index) in data" :key="index" :ref="setItemRef" :data-status="item">{{ item }}</div>
      <input ref='inputRef' />
      </div>`,
      data() {
        return {
          data: [1, 2]
        }
      },
      mounted() {
        console.log(' this.$refs', this.$refs);
        this.$refs.inputRef.focus()
      },
      methods: {
        setItemRef(el) {
          console.log(el, this);
        }
      },


    })
  }))
export default HelloWorld
</script>

<style>
</style>