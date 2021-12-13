<template>
  <section class="app-main">
    <transition>
      <router-view :key="key" />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  mounted() {
    console.log(this.$route.path)
    window.document.documentElement.setAttribute('data-theme', 'dark')
  }
}
</script>
