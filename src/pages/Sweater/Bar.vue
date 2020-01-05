<template>
<div class="all">  
  <div class="ease">
     <ul class="fuck">
       <li  class="item2">默认</li>
       <li class="item2">销量</li>
       <li class="item2">价格</li>
       <li class="item2">好评</li>
       <li class="item2">最新</li>
     </ul>
  </div>
  <div class="last">
    <ul class="fuck2">
          <li class="item1">种类<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></li>
          <li class="item1">季节<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></li>
          <li class="item1">风格<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></li>
          <li class="item1">版型<i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></li>
    </ul>
  </div>
</div>

</template>

<script type="text/ecmascript-6">

  export default {
   
  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus">
.all
  width 100%
  height 90px

  .ease
    width 100%
    height 45px
    border-bottom 1px solid #F3F3F3
    border-top 1px solid #F3F3F3
    .fuck
      width 100%
      height 44px
      .item2
        float left
        width 75px
        height 43px
        text-align center
        line-height 43px
        font-size 15px
        color #777f86
  .last
    width 100%
    height 45px
    border-bottom  1px solid #F3F3F3
    .fuck2
      width 100%
      height 43px
      text-align center
      line-height 43px
      font-size 15px
      color #777f86
      padding 3px
      
      .item1  
        float left
        border 1px solid #F3F3F3
        width 82px
        height 29px
        text-align center
        line-height 29px
        font-size 12px
        color #777f86
        border-radius 7px
        margin 4px
        .icon-zelvxuanzefeiyongdaosanjiaoxingfandui
          font-size 2px
          padding 5px
          color #a0a0a0
</style>
