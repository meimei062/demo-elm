<template>
  <div key="city" class="city-container">
    <div class="search-box">
      <el-input v-model="city" placeholder="请输入城市名或拼音" prefix-icon="el-icon-search" />
      <span class="cancel-city" @click="$router.go(-1)">取消</span>
    </div>
    <div class="main-box" @scroll="setScrollY">
      <div id="upBox" ref="upBox">
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
      <ul class="all-cities">
        <li v-for="letter in cityKeys" :key="letter">
          <div :id="letter" class="city-title">{{ letter }}</div>
          <ul>
            <li v-for="c in allCities[letter]" :key="c.id">{{ c.name }}</li>
          </ul>
        </li>
      </ul>
      <ul class="letter-index">
        <li v-for="(letter, index) in cityKeys" :key="letter" @click="goLetter(letter, index)">{{ letter }}</li>
      </ul>
      <div v-show="showFixedTitle" class="letter-cur">{{ selectedLetter }}</div>
    </div>
  </div>
</template>
<script>
import Description from '@/components/Description.vue'
import { getHistoryCities, getHotCities, getAllCities } from '@/api'

export default {
  name: 'City',
  components: { Description },
  data() {
    return {
      city: '',
      // hisCityList: [{ id: 5, name: '成都' }],
      // hotCityList: [{ id: 1, name: '北京' }, { id: 2, name: '上海' }, { id: 4, name: '深圳' }, { id: 5, name: '成都' }]
      hisCityList: [],
      hotCityList: [],
      cityKeys: [],
      allCities: [],
      curIndex: 0,
      scrollY: -1,
      upperHeight: 0,
      cityListHeighes: []
    }
  },
  computed: {
    selectedLetter() {
      return this.cityKeys[this.curIndex] ? this.cityKeys[this.curIndex] : 'A'
    },
    showFixedTitle() {
      return this.scrollY >= this.upperHeight
    }
  },
  watch: {
    scrollY(newY) {
      if (newY <= this.upperHeight) {
        this.curIndex = 0
        return
      }
      for (let i = 0; i < this.cityListHeighes.length; i++) {
        const height = this.cityListHeighes[i]
        const height1 = this.cityListHeighes[i + 1]
        if (newY >= height && newY < height1) {
          this.curIndex = i
          return
        }
      }
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
      getHotCities().then(res => {
        this.hotCityList = res.data
        setTimeout(this.getUpperHeight, 200)
      }).catch(err => {
        console.log(err)
      })

      getAllCities().then(res => {
        this.allCities = res.data
        this.cityKeys = Object.keys(this.allCities).sort()
        setTimeout(this.getListHeights, 500)
      }).catch(err => {
        console.log(err)
      })
    },
    goLetter(letter, index) {
      this.curIndex = index
      window.location.hash = letter
    },
    setScrollY(dom) {
      this.scrollY = dom.target.scrollTop
    },
    getUpperHeight() {
      if (this.$refs.upBox) {
        this.upperHeight = document.getElementById('upBox').offsetHeight +
        document.getElementsByClassName('search-box')[0].offsetHeight - 80
        // const s = window.getComputedStyle(this.$refs.upBox).height
      }
    },
    getListHeights() {
      const lis = document.querySelectorAll('.all-cities>li')
      let liY = this.upperHeight
      this.cityListHeighes.push(liY)
      lis.forEach(li => {
        liY += li.offsetHeight
        this.cityListHeighes.push(liY)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
.city-container {
  padding: 80px 20px 20px 20px;
  .search-box {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: $bg_main;
    ::v-deep .el-input {
      width: 85%;
    }
    .cancel-city {
      margin-left: 10px;
      color: $text_color_active;
    }
  }
  .main-box {
    position: fixed;
    z-index: 1;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 20px 20px 20px;
    overflow: scroll;
  }
  .description-container:first-child {
    margin-top: 0px;
  }
  .location-info {
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
  .all-cities {
    >li{
      .city-title {
        line-height: 30px;
        color: $text_color_subtitle;
      }
      ul>li {
        padding-left: 15px;
        border-bottom: 1px solid $divider_color;
        line-height: 45px;
      }
    }
  }
  .letter-index {
    position: fixed;
    top: 185px;
    right: 0px;
    >li {
      line-height: 20px;
    }
  }
  .letter-cur {
    position: fixed;
    top: 80px;
    left: 20px;
    right: 20px;
    z-index: 1;
    line-height: 30px;
    background-color: $bg_main;
    color: $text_color_subtitle;
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
