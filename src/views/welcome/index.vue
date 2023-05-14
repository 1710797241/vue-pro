<script setup lang="ts">
import Upload from "@/components/Upload/index.vue";
import type { UploadUserFile } from "element-plus";
import { ref } from "vue";

defineOptions({
  name: "Welcome"
});
const list = ref<UploadUserFile[]>([
  {
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    name: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    status: "success",
    uid: 1684062773573
  },
  {
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    name: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    status: "success",
    uid: 1684062773573
  }
]);
const handleChangeFile = list => {
  console.log("list", list.value);
};
</script>

<template>
  <h1>Welcome</h1>
  <Upload v-model:list="list" @update:list="handleChangeFile" />
</template>
