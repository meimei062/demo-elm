export default {
  namespaced: true,
  state: {
    count: 0,
    msg: 'Hello vuex',
    todolist: [
      { id: 1, text: 'todo 1', done: true },
      { id: 2, text: 'todo 2', done: false }
    ]
  },
  mutations: {
    increment(state, step) {
      state.count += step
    },
    addTodo(state, todo) {
      state.todolist.push(todo)
    }
  },
  getters: {
    doneTodos: state => {
      return state.todolist.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoId: state => (id) => {
      return state.todolist.filter(todo => todo.id === id)
    }
  },
  actions: {
    incrementBy({ commit }, step) {
      setTimeout(() => {
        commit('increment', step)
      }, 1000)
    }
  }
}
