<template>
  <div class="description-container">
    <div class="description-title">{{ title }}</div>
    <div class="description-main">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Description',
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  },
  data() {
    return {

    }
  },

  mounted() {

  },

  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
.description-container {
  margin-top: 20px;
  .description-title {
    color: $text_color_subtitle;
  }
  .description-main {
    margin-top: 10px;
  }
}
</style>
