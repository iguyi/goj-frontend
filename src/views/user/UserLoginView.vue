<template>
  <div class="userLoginView">
    <a-form :model="form" :style="{ width: '600px' }" @submit="handleSubmit">
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号..." />
      </a-form-item>
      <a-form-item field="userPassword" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码..."
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService, UserLoginRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

/**
 * 表单数据
 */
const form = reactive({
  userAccount: "",
  userPassword: "",
} as UserLoginRequest);

/**
 * 提交表单, 进行登录
 */
const handleSubmit = async () => {
  // alert(JSON.stringify(form));
  const res = await UserControllerService.userLoginUsingPost(form);
  if (res.code === 0) {
    // todo 重定向到之前的页面
    // alert(`登录成功: ${res.data}`);
    message.success("登录成功!");
  } else {
    message.error(`登录失败: ${res.message}`);
  }
};
</script>
