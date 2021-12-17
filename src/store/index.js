import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters.js'
import appStore from './modules/app.js'
import testStore from './modules/test.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const logger = createLogger({
  collapsed: false,
  filter(mutation, stateBefore, stateAfter) {
    return true
  },
  actionFilter(action, state) {
    return true
  },
  transformer(state) {
    return state
  },
  mutationTransformer(mutation) {
    return mutation
  },
  actionTransformer(action) {
    return action
  },
  logActions: true,
  logMutations: true,
  logger: console
})

const store = new Vuex.Store({
  state: {
    versionCode: 'v1.0.0'
  },
  getters,
  modules: {
    appStore,
    testStore
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [logger] : []
})
export default store

