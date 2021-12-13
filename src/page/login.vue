<template>
  <div>
    <el-form id="loginForm" v-model="loginForm">
      <el-form-item>
        <el-input placeholder="请输入用户名" name="username" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder=" 请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
