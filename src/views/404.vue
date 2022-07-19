<template>
  <a-result status="404" >
    <template #extra>
      <a-button key="console" type="primary" @click="handleBack">back home</a-button>
   
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router = useRouter()
 const handleBack=()=>{
  router.push('/')
  console.log('back');
};
</script>

<style scoped>

</style>
