import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import App from './App.vue'
import '@/style/index.scss'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
