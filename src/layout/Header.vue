<template>
  <div class="header-div">{{ title }}</div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
.header-div {
  height: 60px;
  line-height: 60px;
  background-color: $bg_header;
  font-size: 24px;
  color: $color_header;
}
</style>
