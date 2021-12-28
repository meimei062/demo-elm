<template>
  <div class="header-div">
    <div class="header-back"><i class="el-icon-arrow-left" /></div>
    <div>{{ title }}</div>
    <div class="header-right">
      <slot name="right-bar" />
    </div>
  </div>
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
  text-align: center;
  .header-back {
    position: absolute;
    width: 60px;
  }
  .header-right{
    position: absolute;
    top: 0;
    right: 10px;
  }
}
</style>
