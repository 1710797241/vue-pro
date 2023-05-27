<template>
  <div>
    <el-dialog v-model="dialogVisible" :title="title" :width="width">
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">{{ cancelText }}</el-button>
          <el-button type="primary" @click="ok"> {{ okText }} </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    modelValue: {
      type: Boolean,
      default: () => false
    },
    title: {
      type: String,
      default: () => "弹窗"
    },
    width: String,
    cancelText: {
      type: String,
      default: () => "取消"
    },
    okText: {
      type: String,
      default: () => "确定"
    }
  },
  emits: ["ok", "cancel"],
  setup(props, { emit }) {
    const { modelValue, title, cancelText, okText, width } = props;
    const dialogVisible = ref(modelValue);

    const ok = () => {
      emit("ok");
    };
    const cancel = () => {
      emit("cancel");
    };
    watch(
      () => props.modelValue,
      val => {
        if (val) {
          dialogVisible.value = true;
        } else {
          dialogVisible.value = false;
        }
      }
    );
    return {
      dialogVisible,
      ok,
      cancel,
      title,
      cancelText,
      okText,
      width: width || "30%"
    };
  }
});
</script>

<style scoped></style>
