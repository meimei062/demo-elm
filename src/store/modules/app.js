export default {
  state: {
    username: '',
    rememberPsw: false
  },
  mutations: {
    SET_USER_NAME(state, name) {
      state.username = name
    },
    SET_REMEMBER_PSW(state, rememberPsw) {
      state.rememberPsw = rememberPsw
    }
  },
  getters: {},
  actions: {
    getUserInfo({ commit }, id) {
      setTimeout(() => {
        commit('SET_USER_NAME', 'zhangsan')
      }, 1000)
    }
  }
}
