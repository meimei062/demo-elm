<template>
  <div class="main-nav-container">
    <div class="main-nav-list" style="overflow:hidden;">
      <div ref="navItems" class="nav-items" @scroll="scrollEvent">
        <div class="nav-items1">
          <div v-for="item in navList.list1" :key="item.name" class="nav-items-dv">
            <img src="../assets/pic.png" alt="logo">
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="nav-items2">
          <div v-for="item in navList.list2" :key="item.name" class="nav-items-dv">
            <img src="../assets/piying.png" alt="logo">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="slideShow" class="nav-line">
      <div class="nav-line-big">
        <div
          class="nav-line-small"
          :style="{'margin-left': left <= 0 ? 0 : left + 'px', 'width': showSmallLength <= 0? '100%': showSmallLength+'px'}"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainNav',

  data() {
    return {
      navList: {
        list1: [
          { name: '美食外卖', img: '' },
          { name: '超市便利', img: '' },
          { name: '美食团购', img: '' },
          { name: '丽人医美', img: '' },
          { name: '休闲玩乐', img: '' },
          { name: '晚餐', img: '' },
          { name: '水果', img: '' },
          { name: '红包膨胀', img: '' },
          { name: '买菜', img: '' },
          { name: '甜品饮料', img: '' }
        ],
        list2: [
          { name: '买药', img: '' },
          { name: '大型超市', img: '' },
          { name: '跑腿', img: '' },
          { name: '天天赚现金', img: '' },
          { name: '足疗按摩', img: '' },
          { name: '充电宝', img: '' },
          { name: '景点门票', img: '' },
          { name: '酒店', img: '' },
          { name: '洗衣家政', img: '' },
          { name: '电影票', img: '' }
        ]
      },
      left: -1,
      slideRatio: 0,
      slideShow: false,
      showSmallLength: -1
    }
  },

  mounted() {
    this.getRatio()
  },

  methods: {
    scrollEvent(e) {
      this.left = this.$refs.navItems.scrollLeft * this.slideRatio
    },
    getRatio() {
      if (!this.navList.list1 || this.navList.list1.length <= 5) {
        this.slideShow = false
      } else {
        const totalLength = this.navList.list1.length * 60
        const showLength = ((305 * 90) / totalLength).toFixed(3)
        const ratio = (90 - showLength) / (totalLength - 305)
        this.slideRatio = ratio.toFixed(3)
        this.showSmallLength = showLength
        this.slideShow = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/style/variables.scss';
$itemSize: 60px;
$navWidth: 100%;
$navPadding: 15px;
$lineHeight: 5px;
.main-nav-container {
  height: calc(#{$itemSize} * 2 + #{$lineHeight} + #{$navPadding} * 2);
  padding: $navPadding;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  .main-nav-list {
    width: 100%;
  }
  .nav-items::-webkit-scrollbar {
    display: none;
  }
  .nav-items {
    width: $navWidth;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    .nav-items1 {
      margin-bottom: 10px;
    }
    .nav-items1, .nav-items2 {
      width: $navWidth;
      display: -webkit-box;
      align-items: center;
      .nav-items-dv {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: $itemSize;
        height: $itemSize;
        img {
          width: calc(#{$itemSize}/2);
          height: calc(#{$itemSize}/2);
          border-radius: 50%;
        }
        span {
          margin-top: 5px;
          font-size: .7rem;
          color: $text_color_active;
        }
      }
    }
  }
  .nav-line {
    // width: 100%;
    display: flex;
    justify-content: center;
    .nav-line-big {
      width: 90px;
      height: $lineHeight;
      background-color: rgba(224,224,224,100);
      text-align: center;
      border: 3px solid white;
      overflow: hidden;
      .nav-line-small {
        top: 0;
        height: $lineHeight;
        background-color: $bg_header;
        border-radius: 15px;
        margin-left: 8px;
      }
    }
  }
}
</style>
