<template>
  <div class="main-container">
    <div class="main-header">
      <div class="fl">
        <i class="el-icon-location-outline" />
        {{ locationObj.name }}
      </div>
      <div class="fr">
        <i class="el-icon-location-outline" />
        <i class="el-icon-location-outline" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DemoElmMain',

  data() {
    return {
      url: ''
    }
  },
  computed: {
    ...mapGetters(['locationObj', 'versionCode'])
  },
  mounted() {
    // console.log(this.$store.state.versionCode, this.$store.getters.versionCode)
    // console.log(this.$store.state.appStore.location, this.$store.getters.locationObj)
    console.log('mouted')
  },

  methods: {
    init() {}
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/variables.scss';
.main-container {
  .main-header {
    height: 60px;
    line-height: 60px;
    background-color: $bg_header;
  }
}
</style>
