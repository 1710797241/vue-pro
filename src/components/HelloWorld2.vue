<template>
  <div style="height:1000px;">

    <router-view></router-view>
  </div>

</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {

  computed: {
    ...mapState('userStore', ['count']),
    ...mapGetters("userStore", ['newCount'])
  },
  methods: {
    ...mapMutations("userStore", ['add', 'minus']),
    ...mapActions("userStore", ['handleAdd'])
  },
  mounted() {
  }
}
</script>
