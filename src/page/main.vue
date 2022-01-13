<template>
  <el-container class="main-container">
    <el-header class="main-header">
      <div class="fl">
        <i class="el-icon-location-outline icon icon-location" />
        {{ locationObj.name }}
      </div>
      <div class="fr">
        <i class="el-icon-shopping-cart-2 icon" />
        <i class="el-icon-chat-dot-square icon" />
      </div>
    </el-header>
    <el-main class="main-content">
      <el-input v-model="searchWord" placeholder="请输入内容" class="input-search">
        <el-button slot="append" icon="el-icon-search" />
      </el-input>
      <ul class="hot-words clearfix">
        <li v-for="hotWord in hotWordsList" :key="hotWord">{{ hotWord }}</li>
      </ul>
      <div class="main-nav">
        <main-nav />
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import MainNav from '@/components/MainNav'
export default {
  name: 'DemoElmMain',
  components: { MainNav },
  data() {
    return {
      url: '',
      searchWord: '',
      hotWordsList: ['奶茶', '烧烤', '布丁', '提拉米苏', '车厘子']
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
    padding: 0px 20px;
    background-color: $bg_header;
    color: white;

    .icon {
      margin: 0px 10px;
      line-height: 60px;
      font-size: 25px;
      color: white;
    }
    .icon-location {
      margin: 0px;
    }
  }

  .main-content {
    padding: 10px 20px;
    // .input-search {}
    .hot-words li {
      float: left;
      margin: 10px 5px;
      padding: 5px 10px;
      border-radius: 1rem;
      background-color: $bg_header;
      color: white;
      font-size: .5rem;
    }
    .main-nav {
      margin-top: 10px;
    }
  }
}
</style>
