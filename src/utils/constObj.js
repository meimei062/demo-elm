const store = {
  state: {
    message: 'Hello'
  },
  msg: 'Hello',
  setMessageAction(newMsg) {
    console.log('setMessageAction  ', newMsg)
    this.state.message = newMsg
    this.msg = newMsg
  },
  clearMessageAction() {
    this.state.message = ''
  }
}
export default store
