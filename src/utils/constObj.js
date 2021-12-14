const obj = {
  state: {
    message: 'Hello'
  },
  msg: 'Hello',
  setMessageAction(newMsg) {
    this.state.message = newMsg
    this.msg = newMsg
  },
  clearMessageAction() {
    this.state.message = ''
  }
}
export default obj
