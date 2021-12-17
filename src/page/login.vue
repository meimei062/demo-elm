<template>
  <div>
    <my-header :title="title">
      <template v-slot:right-bar>
        <div class="login-way" @click="changeLoginWay">{{ loginWayText }}</div>
      </template>
    </my-header>
    <el-form id="loginForm" v-model="loginForm">
      <el-form-item>
        <el-input placeholder="手机号" name="username" />
        <el-button id="btnCode" type="primary" @click="getVerifyCode">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="验证码" name="password" />
      </el-form-item>
      <el-form-item class="login-tips">温馨提示：未注册账号的手机号，登录时将自动注册，并代表您已同意
        <a href="#">用户服务协议</a></el-form-item>
      <el-form-item>
        <el-button id="btnLogin" type="primary">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import MyHeader from '@/layout/Header.vue'
export default {
  name: 'Login',
  components: { MyHeader },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      isCodeLogin: true
    }
  },
  computed: {
    title() {
      return this.$route.meta ? this.$route.meta.title : ''
    },
    loginWayText() {
      return this.isCodeLogin ? '密码登录' : '验证码登录'
    }
  },
  mounted() {
  },
  methods: {
    changeLoginWay() {
      this.isCodeLogin = !this.isCodeLogin
    },
    getVerifyCode() {}
  }
}
</script>
<style lang="scss" scoped>
.login-way {
  font-size: 20px;
}
#loginForm {
  margin-top: 15px;
  ::v-deep .el-form-item {
    margin-bottom: 0px;
    .el-input .el-input__inner {
      // width: 100%;
    height: 60px;
    line-height: 60px;
    margin-bottom: 1px;
    padding-left: 20px;
    border: none;
    border-radius: 0px;
    }
  }
  ::v-deep .el-form-item:first-child {
    position: relative;
  }
  #btnCode {
    position: absolute;
    right: 10px;
    top: 8px;
    bottom: 0;
  }
  .login-tips {
    padding: 20px;
    text-align: left;
    color: gray;
    ::v-deep .el-form-item__content {
      line-height: initial;
    }
  }
  #btnLogin {
    margin: 0px 20px;
    width: calc(100% - 40px);
  }
}
</style>
