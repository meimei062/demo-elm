import router from '@/router'
import store from '@/store'

router.beforeEach((to, from, next) => {
  if (!store.state.appStore.location) {
    if (to.name === 'City' || to.name === 'Location') {
      next()
    } else {
      next({ name: 'Location' })
    }
  } else if (!store.state.appStore.token) {
    if (to.name === 'City' || to.name === 'Location' || to.name === 'Login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})
