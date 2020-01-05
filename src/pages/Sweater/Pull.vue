<template>
  <div>
    <div class="tiao">
      <span class="woman">女士服装</span>
      <span class="open" @click="isDown = !isDown">展开<i class="iconfont icon-jiantou" ></i></span>   
    </div>
    <div class="up">
      <ul class="wei"  :class="{isDown:isDown}">
        <li>全部</li>
        <li>针织衫/毛衣</li>
        <li>连衣裙</li>
        <li>外套</li></li>
        <li>裤装</li>
        <li>卫衣</li>
        <li>T恤</li>
        <li>衬衫</li>
        <li>中老年服饰</li>
        <li>大码女装</li>
        <li>羽绒服</li>
        <li>羊绒</li>
        <li>真丝</li>
        <li>婚纱礼服</li>
        <li>少女装</li>
        <li>少淑装</li>
        <li>成熟女装</li>
        <li>套装</li>
        <li>亲子装</li>
        <li>半身裙</li>
        <li>牛仔裤</li>
        <li>休闲裤</li>
        <li>短裤</li>
        <li>风衣</li>
        <li>毛呢外套</li>
        <li>西装</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
       return{
         isDown:false,
       }
    }
  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus">
    .tiao
      width 100%
      height 53px
      line-height 53px
      color #555a65
      font-size 15px
      .woman
        float left 
        color #555a65
        margin-left 20px 
      .open
        float right
        margin-right 20px
    .up
      width 100%
      display flex
      margin  10px 3px
      text-align center
      ul
        width 100%
        height 53px
        display flex
        flex-wrap wrap
        overflow hidden 
        li
          float left
          margin-left 20px
          font-weight bold
          margin-top 10px
          padding 0 7px
          font-size 15px
          color #555a65
      .isDown
        height 235px
</style>
