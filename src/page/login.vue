<template>
  <div>
    <el-form id="loginForm" v-model="loginForm">
      <el-form-item>
        <el-input placeholder="请输入用户名" name="username" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder=" 请输入密码" />
      </el-form-item>
      <div>{{ $store.state.count }}</div>
    </el-form>
  </div>
</template>

<script>
import store from '@/utils/constObj.js'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    msg() {
      return store.msg
    }
  },
  mounted() {
    console.log(this.$store.state.count)
    setTimeout(() => {
      this.$store.commit('increment')
    }, 1000)
  }
}
</script>
