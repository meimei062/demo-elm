import Vue from 'vue'

const bus = new Vue({})

bus.alert = function(msg, title, callback) {
  if (!title) {
    title = '提示'
  }
  return this.$alert(msg, title, {
    confirmButtonText: '确定',
    callback: action => {
      if (callback) {
        callback()
      }
    }
  })
}

export default bus
