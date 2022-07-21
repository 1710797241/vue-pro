<template>
  <input :value="checked" @input="handleChange" type="text">
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: String,
    }
  },
  methods: {
    handleChange(e) {
      console.log(e.target.value);
      this.$emit("change", e.target.value)
      this.$bus.$emit("addMoney", { status: e.target.value })
    }
  }
}
</script>

<style>
</style>