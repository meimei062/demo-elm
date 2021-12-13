<template>
  <div>
    <my-header :title="title" />
    <div class="main-container">
      <app-main />
    </div>
    <my-footer />
  </div>
</template>
<script>
import MyHeader from '@/layout/Header.vue'
import AppMain from '@/layout/AppMain.vue'
import MyFooter from '@/layout/Footer.vue'
export default {
  name: 'Layout',
  components: { MyHeader, AppMain, MyFooter },
  data() {
    return {

    }
  },
  computed: {
    title() {
      return this.$route.meta ? this.$route.meta.title : ''
    }
  },
  mounted() {
    console.log(this.$route.meta)
  },

  methods: {

  }
}
</script>
