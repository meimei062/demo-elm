<template>
  <!-- <transition name="fade" mode="out-in"> -->
  <div key="city" class="city-container">
    <div>
      <el-input v-model="city" placeholder="请输入城市名或拼音" prefix-icon="el-icon-search" />
      <span class="cancel-city" @click="$router.go(-1)">取消</span>
    </div>
    <description title="当前定位">
      <div class="location-info">
        <i class="el-icon-position icon-position" /> 定位服务未开启
        <div class="relocation">重新定位</div>
      </div>
    </description>
    <description title="历史访问城市">
      <el-row :gutter="20">
        <el-col v-for="item in hisCityList" :key="item.id" :span="8">
          <div class="city-item">{{ item.name }}</div>
        </el-col>
      </el-row>
    </description>
    <description title="热门城市">
      <el-row :gutter="20">
        <el-col v-for="item in hotCityList" :key="item.id" :span="8">
          <div class="city-item">{{ item.name }}</div>
        </el-col>
      </el-row>
    </description>
  </div>
  <!-- </transition> -->
</template>
<script>
import Description from '@/components/Description.vue'
import { getHistoryCities, getHotCities } from '@/api'

export default {
  name: 'City',
  components: { Description },
  data() {
    return {
      city: '',
      // hisCityList: [{ id: 5, name: '成都' }],
      // hotCityList: [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 4, name: '深圳' }, { id: 5, name: '成都' }]
      hisCityList: [],
      hotCityList: []
    }
  },

  mounted() {
    this.initData()
  },

  methods: {
    initData() {
      // 获取历史访问城市
      getHistoryCities({ id: 12 }).then(res => {
        this.hisCityList = res.data
      }).catch(err => {
        console.log(err)
      })
      // 获取热门城市
      getHotCities({}).then(res => {
        this.hotCityList = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
.city-container {
  padding: 20px;
  ::v-deep .el-input {
    width: 85%;
  }
  .cancel-city {
    margin-left: 10px;
    color: $text_color_active;
  }
  .location-info {
    margin-top: 10px;
    .icon-position {
      color: $text_color_active;
    }
    .relocation {
      float: right;
      color: $text_color_active;
    }
  }
  .city-item {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 5px;
    padding: 5px;
    text-align: center;
    background-color: #e1e1e1;
  }
}
.fade-enter-active, .fade-leave-active {
  // transition: opacity 2s;
  // transition: margin-top 2s;
  transition: all 2s ease;
}
.fade-enter, .fade-leave-to {
  // opacity: 0;
  // margin-top: 100px;
  transform: translateY(150px);
}
</style>
