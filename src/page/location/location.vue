<template>
  <div key="location">
    <my-header title="Location">
      <template v-slot:right-bar>
        <div>新增地址</div>
      </template>
    </my-header>
    <div class="location-container">
      <div class="addr-input">
        <el-input v-model="address" placeholder="请输入你的收货地址">
          <template slot="prepend">
            <div @click="goCity">{{ location }}</div>
          </template>
        </el-input>
      </div>
      <description title="当前定位">
        <div class="location-info">
          <i class="el-icon-location-outline" /> 定位服务未开启
          <div class="relocation">重新定位</div>
        </div>
      </description>
      <!-- <div>当前定位</div>
      <div class="location-info">
        <i class="el-icon-location-outline" /> 定位服务未开启
        <div class="relocation">重新定位</div>
      </div> -->
    </div>
  </div>
</template>
<script>
import MyHeader from '@/layout/Header.vue'
import Description from '@/components/Description.vue'

export default {
  name: 'Location',
  components: { MyHeader, Description },
  data() {
    return {
      location: '定位中...',
      address: ''
    }
  },

  mounted() {

  },

  methods: {
    goCity() {
      this.$router.push('/city')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
.location-container {
  padding: 20px;
  .addr-input {
    margin-bottom: 10px;
    ::v-deep .el-input {
      border-radius: 5px;
    }
}
  .location-info {
    margin-top: 10px;
    .relocation {
      float: right;
      color: $text_color_active;
    }
  }
}
</style>
