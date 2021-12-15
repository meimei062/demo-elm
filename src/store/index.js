import Vuex from 'vuex'
import Vue from 'vue'
import appStore from './modules/app.js'
import testStore from './modules/test.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    appStore,
    testStore
  }
})
export default store
