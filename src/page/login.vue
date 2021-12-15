<template>
  <div>
    <el-form id="loginForm" v-model="loginForm">
      <el-form-item>
        <el-input placeholder="请输入用户名" name="username" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" placeholder=" 请输入密码" />
      </el-form-item>
      <div>{{ count }}</div>
      <div>{{ msg }}</div>
      <div>{{ doneTodosCount }}</div>
      <div>{{ getTodoId(1) }}</div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
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
    ...mapState('testStore', ['count', 'msg']),
    ...mapGetters('testStore', ['doneTodosCount', 'getTodoId'])
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('testStore/increment', 2)
      this.addTodo({ id: 3, text: 'todo 3', done: true })
      this.$store.dispatch('testStore/incrementBy', 20)
      // this.incrementBy(30)
    }, 1000)
  },
  methods: {
    ...mapMutations('testStore', ['increment', 'addTodo']),
    ...mapActions('testStore', ['incrementBy'])
  }
}
</script>
