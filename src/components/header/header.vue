<template>
    <ul >
        <li @click="$router.push('/msite')"><i class='iconfont icon-back'></i></li>
        <li><router-link to='/goods'>商品</router-link></li>
        <li><router-link to='/detail'>详情</router-link></li>
        <li><router-link to='/comment'>评论</router-link></li>
        <li><router-link to='/recommend'>推荐</router-link></li>
        <li><i class='iconfont icon-more'></i></li>
    </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    ul
      position fixed
      z-index 100
      background-color  white
      height 40px
      display flex
      justify-content space-around
      padding 10px 10px 0 10px
      border-bottom 1px solid  #eee
      width 100%
      li
        width 50px
        height 44px
        font-size 14px
        color color #8E9A9B
        padding 10px 10px 0 10px
        i
          font-size 17px
          color #3c3c3c
        .router-link-active
          padding 14px 0
          border-bottom 1px solid  #02a774
          color #02a774

</style>
