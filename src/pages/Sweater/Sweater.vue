<template>
<section class="banner">
  <!-- 头部开始 -->
    <!-- <div class="header">
      <span>
        <i class="iconfont icon-jiantou2"></i>
      </span>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索商品/店铺/种类/折扣/信息">
        <i class="iconfont icon-guanbi1"></i>
      </div>
      <div class="sousuo">
        搜索
      </div>
    </div> -->
    <AllPagesHeader/>
    <div class="tu">
      <a href=""><img src="http://img54.ddimg.cn/221820114003944_y.jpg" alt=""></a>
    </div>
    <div class="bar_qie">
      <div class="qwer"></div>
        <section class="tow">
          <ul>
            <li :class="{on:'/sweater/Lyh'===$route.path}" @click="$router.push('/sweater/Lyh')">新品</li>
             <li :class="{off:'/sweater/shop'===$route.path}"  @click="$router.push('/sweater/shop')">商铺</li>
          </ul>
        </section>
    </div>
    <router-view></router-view>
</section>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        status:0,
        liebiao:[
          {text:"店铺"},
          {text:"商品"},
        ]
      };

    },
    methods:{
       choice(index) {
      this.status = index;
    }
    }
  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus" scoped>

  .banner
    position relative
    overflow hidden
    .header //头部公共css
      display flex
      justify-content space-between
      position fixed                                                                                                                                                                                                                                         
      z-index 100
      left 0
      top 0
      width 100%
      height 53px
      padding 0 10px
      box-sizing border-box
      position relative 
      .search
        width 267px
        height 33px
        border-radius 20px
        margin-top 10px
        text-align center
        background #eeeeee
        .icon-search
          line-height 33px
          vertical-align middle
          font-size 23px
          color #747880
        .icon-guanbi
          font-size 23px
          color #747880
        input 
          width 215px
          height 33px
          text-align center
          background #eeeeee
          font-size 15px
      span 
        line-height 53px
      .icon-jiantou2
        font-size 30px
        
      .sousuo
        width 60px
        height 52px
        font-size 14px
        text-align center
        line-height 52px
    .tu
      width 100%
      display flex
      img 
        width 100%
    .bar_qie
      width 100%
      height 48px
      
      border-bottom: 1px solid #e4e4e4
      .qwer
        height 10px
      .tow
        width 100%
        height 30px
        line-height 48px
        ul
          display flex
          flex-wrap wrap
          width 186px
          height 30px
          border-radius 10px 
          border 1px solid red 
          margin-left 90px       
          li
            text-align center
            line-height 30px
            width 93px
            height 28px
            font-size 14px
            margin-top 1px
            &.on  
              background-color red
              color white
              border-radius 10px 0 0 10px
            &.off
              background-color red
              color white
              border-radius 0 10px 10px 0
          .bechoice 
            background: red
            border-radius 8px 0 0 8px 
            color #ffffff
    .classify
      width 100%
      height 289px
      background red
      .h1
        .title
          color #55a655
          font-size 14px
 
</style>
