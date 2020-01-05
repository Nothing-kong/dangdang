<template>
  <footer class="footer_guide">
    <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goto('/msite')">
      <span>
        <i class="iconfont icon-xuanzhongshangcheng"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on: '/category'===$route.path}" @click="goto('/category')">
      <span>
        <i class="iconfont icon-mulu"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on: '/deserveBuying'===$route.path}" @click="goto('/deserveBuying')">
      <span>
        <i class="iconfont icon-bao"></i>
      </span>
      <span>值得买</span>
    </span>
    <span class="guide_item" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goto('/profile')" :class="{on: '/profile'===$route.path}">
      <span class="item_icon">
        <i class="iconfont icon-person"></i>
      </span>
      <span>我的当当</span>
    </span>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterGuide',
    methods: {
      goto (path) {
 /*        console.log('goto()', this.$router) */
        if (this.$route.path!==path) {
          this.$router.replace(path)
        } else { // 如果请求的时当前的, 直接强制刷新
          window.location.reload()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    border-top 1px solid #eee
    z-index 100
    display flex
    position fixed
    left 0
    bottom 0
    width 100%
    height 46px
    padding 4px 0
    box-sizing border-box
    background-color #fff
    .guide_item
      display flex
      flex-direction column
      text-align center
      width 20%
      &.on
        color red
      span
        margin-top 4px
        font-size 8px
        .iconfont
          font-size 18px
</style>
