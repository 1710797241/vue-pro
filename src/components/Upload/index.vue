<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import Apis from "@/api/Apis";
import {
  ElMessage,
  UploadFile,
  UploadFiles,
  UploadRawFile,
  UploadUserFile
} from "element-plus";

export default defineComponent({
  name: "Upload",
  components: {
    Delete,
    Download,
    Plus,
    ZoomIn
  },
  emits: ["update:list"],
  props: {
    list: {
      type: [Array],
      default: () => []
    }
  },
  setup: (props: { list: any }, { emit }: any) => {
    const UploadUrl = Apis.Upload;
    const fileList = ref<UploadUserFile[]>(props.list || []);
    const dialogImageUrl = ref("");
    const dialogVisible = ref(false);
    const disabled = ref(false);

    const handleRemove = (file: UploadFile) => {
      console.log(file);
    };

    const handlePictureCardPreview = (file: UploadFile) => {
      dialogImageUrl.value = file.url!;
      dialogVisible.value = true;
    };

    const handleDownload = (file: UploadFile) => {
      console.log(file);
    };
    const handleError = (
      error: Error,
      uploadFile: UploadFile,
      uploadFiles: UploadFiles
    ) => {
      console.log("success", error, uploadFile, uploadFiles);
    };
    const handleSuccess = (
      response: any,
      uploadFile: UploadFile,
      uploadFiles: UploadFiles
    ) => {
      ElMessage({
        type: "success",
        message: "上传成功"
      });
      const tempFile: UploadUserFile = {
        url: response.url,
        name: response.url,
        status: "success"
      };

      fileList.value = [...fileList.value, tempFile];
      console.log("success", response, uploadFile, uploadFiles);
      emit("update:list", fileList);
    };

    const handleProgress = (
      response: any,
      uploadFile: UploadFile,
      uploadFiles: UploadFiles
    ) => {
      console.log("progress", response, uploadFile, uploadFiles);
    };
    const beforeUpload = (rawFile: UploadRawFile) => {
      console.log("beforeUpload", rawFile);
      return true;
    };

    return {
      UploadUrl,
      fileList,
      disabled,
      dialogImageUrl,
      dialogVisible,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
      handleSuccess,
      handleError,
      handleProgress,
      beforeUpload
    };
  }
});
</script>

<template>
  <div>
    <el-upload
      :file-list="fileList"
      name="avatar"
      :action="UploadUrl"
      list-type="picture-card"
      :auto-upload="true"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :before-upload="beforeUpload"
    >
      <el-icon><Plus /></el-icon>

      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)"
            >
              <el-icon><zoom-in /></el-icon>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <el-icon><Download /></el-icon>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)"
            >
              <el-icon><Delete /></el-icon>
            </span>
          </span>
        </div>
      </template>
    </el-upload>

    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="预览图片" />
    </el-dialog>
  </div>
</template>
