<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ msg }}</div>
    <div>{{ doneTodosCount }}</div>
    <div>{{ getTodoId(1) }}</div>
    <div>{{ getVersionCode }}</div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'DemoElmTest',

  data() {
    return {

    }
  },

  computed: {
    ...mapGetters(['getVersionCode']),
    ...mapState('testStore', ['count', 'msg']),
    ...mapGetters('testStore', ['doneTodosCount', 'getTodoId'])
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('testStore/increment', 2)
      this.addTodo({ id: 3, text: 'todo 3', done: true })
      this.$store.dispatch('testStore/incrementBy', 20)
      // this.incrementBy(30)
    }, 1000)
  },
  methods: {
    ...mapMutations('testStore', ['increment', 'addTodo']),
    ...mapActions('testStore', ['incrementBy'])
  }
}
</script>
