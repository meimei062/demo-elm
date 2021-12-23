<template>
  <div>
    <my-header :title="title">
      <template v-slot:right-bar>
        <div class="login-way" @click="changeLoginWay">{{ loginWayText }}</div>
      </template>
    </my-header>
    <el-form v-if="isCodeLogin" id="loginForm" ref="loginForm" :model="loginForm" :rules="loginRules">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="手机号" />
        <el-button id="btnCode" type="primary" :disabled="btnCodeDisabled" @click="getVerifyCode">{{ verifyText }}</el-button>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="验证码" />
      </el-form-item>
      <el-form-item class="login-tips">温馨提示：未注册账号的手机号，登录时将自动注册，并代表您已同意
        <a href="#">用户服务协议</a></el-form-item>
      <el-form-item>
        <el-button class="btnLogin" type="primary" :disabled="btnLoginDisabled" @click="login">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import MyHeader from '@/layout/Header.vue'
import { getVerifyCode, login } from '@/api'
import { isEmptyStr } from '@/utils'
export default {
  name: 'Login',
  components: { MyHeader },
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      isCodeLogin: true,
      verifyText: '获取验证码',
      timeLeft: 30,
      btnCodeDisabled: false,
      loginRules: {}
    }
  },
  computed: {
    title() {
      return this.$route.meta ? this.$route.meta.title : ''
    },
    loginWayText() {
      return this.isCodeLogin ? '密码登录' : '验证码登录'
    },
    btnLoginDisabled() {
      return !this.isCodeLogin
    }
  },
  mounted() {
    this.initRules()
  },
  methods: {
    changeLoginWay() {
      this.isCodeLogin = !this.isCodeLogin
    },
    initRules() {
      const validateName = (rule, value, callback) => {
        console.log(value)
        if (isEmptyStr(value)) {
          return callback(new Error('请输入用户名'))
        }
        return callback()
      }
      const validatePsw = (rule, value, callback) => {
        if (isEmptyStr(value)) {
          return callback(new Error('请输入验证码'))
        }
        return callback()
      }
      this.loginRules = {
        username: [{ validator: validateName, trigger: ['blur', 'change'] }],
        password: [{ validator: validatePsw, trigger: ['blur', 'change'] }]
      }
    },
    getVerifyCode() {
      getVerifyCode('/verify', { phone: '15208260885' }).then(res => {
        this.verifyText = '已发送(' + this.timeLeft + 's)'
        const timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.btnCodeDisabled = true
            this.timeLeft--
            this.verifyText = '已发送(' + this.timeLeft + 's)'
          } else {
            this.btnCodeDisabled = false
            this.timeLeft = 30
            this.verifyText = '获取验证码'
            clearInterval(timer)
          }
        }, 1000)
      }).catch(err => {
        console.log(err)
      })
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          login('/login', { username: '15208260885', password: '123456' }).then(res => {
            console.log(res)
            this.$router.push('/main')
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
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
    // margin-bottom: 0px;
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
  ::v-deep .el-form-item__error {
    left: 20px;
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
  .btnLogin {
    margin: 0px 20px;
    width: calc(100% - 40px);
  }
}
</style>
