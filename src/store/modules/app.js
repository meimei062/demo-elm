export default {
  state: {
    username: ''
  },
  mutations: {
    SET_USER_NAME(state, name) {
      state.username = name
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
