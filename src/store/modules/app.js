import Cookies from 'js-cookie'
export default {
  // namespaced: true,
  state: {
    username: '',
    rememberPsw: false,
    token: Cookies.get('token') || '',
    location: Cookies.get('location') || ''
  },
  mutations: {
    SET_USER_NAME(state, name) {
      state.username = name
    },
    SET_REMEMBER_PSW(state, rememberPsw) {
      state.rememberPsw = rememberPsw
    },
    SET_TOKEN(state, token) {
      state.token = token
      Cookies.set('token', token)
    },
    setCity(state, city) {
      state.location = JSON.stringify(city)
      Cookies.set('location', state.location)
    }
  },
  getters: {
    locationObj: state => {
      console.log('getter', state.location, typeof state.location)
      if (state.location) {
        return JSON.parse(state.location)
      }
      return {}
    }
  },
  actions: {
    getUserInfo({ commit }, id) {
      setTimeout(() => {
        commit('SET_USER_NAME', 'zhangsan')
      }, 1000)
    }
  }
}
