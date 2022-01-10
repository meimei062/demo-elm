<template>
  <div>
    <my-header :title="title">
      <template v-slot:right-bar>
        <div class="login-way" @click="changeLoginWay">{{ loginWayText }}</div>
      </template>
    </my-header>
    <el-form v-if="isCodeLogin" id="loginForm" ref="loginForm" :model="loginForm" :rules="loginRules">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" :placeholder="$t('login.username_empty')" />
        <el-button id="btnCode" type="primary" :disabled="btnCodeDisabled" @click="getVerifyCode">{{ verifyText }}</el-button>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" :placeholder="$t('login.psw_empty')" />
      </el-form-item>
      <el-form-item class="login-tips">{{ $t('login.login_tips') }}
        <a href="#">{{ $t('login.user_agreement') }}</a>
      </el-form-item>
      <el-form-item>
        <el-button class="btnLogin" type="primary" :disabled="btnLoginDisabled" @click="login">{{ $t('login.login') }}</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import MyHeader from '@/layout/Header.vue'
import { getVerifyCode, login } from '@/api'
import { isEmptyStr } from '@/utils'
import bus from '@/utils/bus'
export default {
  name: 'Login',
  components: { MyHeader },
  data() {
    return {
      loginForm: {
        username: '15208260885',
        password: '1244567'
      },
      isCodeLogin: true,
      verifyText: this.$t('login.get_verify_code'),
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
      return this.isCodeLogin ? this.$t('login.login_psw') : this.$t('login.login_code')
    },
    btnLoginDisabled() {
      return isEmptyStr(this.loginForm.username) || isEmptyStr(this.loginForm.password)
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
        if (isEmptyStr(value)) {
          return callback(new Error(this.$t('login.username_empty')))
        }
        return callback()
      }
      const validatePsw = (rule, value, callback) => {
        if (isEmptyStr(value)) {
          return callback(new Error(this.$t('login.psw_empty')))
        }
        return callback()
      }
      this.loginRules = {
        username: [{ validator: validateName, trigger: ['blur', 'change'] }],
        password: [{ validator: validatePsw, trigger: ['blur', 'change'] }]
      }
    },
    getVerifyCode() {
      if (isEmptyStr(this.loginForm.username)) {
        bus.alert(this.$t('login.username_empty'))
        return
      }
      getVerifyCode({ phone: this.loginForm.username }).then(res => {
        this.verifyText = '已发送(' + this.timeLeft + 's)'
        const timer = setInterval(() => {
          if (this.timeLeft > 0) {
            this.btnCodeDisabled = true
            this.timeLeft--
            this.verifyText = '已发送(' + this.timeLeft + 's)'
          } else {
            this.btnCodeDisabled = false
            this.timeLeft = 30
            this.verifyText = this.$t('login.get_verify_code')
            clearInterval(timer)
          }
        }, 1000)
      }).catch(() => {
        bus.alert(this.$t('login.send_code_fail'))
      })
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          login({ username: this.loginForm.username, password: this.loginForm.password }).then(res => {
            this.$store.commit('SET_TOKEN', res.token)
            this.$router.replace('/main')
          }).catch(() => {
            bus.alert(this.$t('login.login_fail'))
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
