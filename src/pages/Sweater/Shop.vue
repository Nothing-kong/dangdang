<template>
  <div>
    <div class="zuihou"  v-for="(dian,index) in shopList.shopinfos" :key="index">
    <div class="zhishi">
      <div class="heng">
        <span><img class="" :src="dian.shop_logo"></span>
        <p class="dianname">{{shopList.shopinfos[index].shop_name}} </p>

        <p class="in">进入店铺</p>
      </div>
    </div>
    <div class="lliuliang">
      <div>
        <ul>
          <li>
             <img class="" :src="dian.products[0].image_url">
             <span class="zhezhao">￥229.3</span>
          </li>
        </ul>
      </div>   
      <div>
        <ul>
          <li>
             <img class="" :src="dian.products[0].image_url">
             <span class="zhezhao">￥229.3</span>
          </li>
        </ul>
      </div>   
      <div>
        <ul>
          <li>
             <img class="" src="http://img3m8.ddimg.cn/36/22/1418968818-1_h_2.jpg">
             <span class="zhezhao">￥229.3</span>
          </li>
        </ul>
      </div>   
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {reqShop} from '../../api'
  export default {
    data(){
      return{
        shopList:{},
      }
    },
    async mounted(){
      const result = await reqShop()
      if (result.errorCode === 0) {
          this.shopList = result
      }
    }

  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus">
  .zuihou
    border-bottom 5px solid #F2F2F2
    .zhishi
      width 100%
      
      // background-color red
      .heng
        width 100%
        height 80px
        // background-color blue
        position relative
        img 
          width 46px
          height 46px
          margin 15px 
        .dianname
          font-size 16px
          width 180px
          height 25px
          margin-top -60px
          margin-left 80px
        .in
          font-size 15px
          width 70px
          height 23px 
          border 1px #666666 solid 
          line-height 23px
          margin-top -23px
          margin-left 280px
          text-align center
          border-radius 10px
    .lliuliang
      display flex
      ul
        width 100%
        height 121px
        li
          position relative
          margin-left 3px
          img 
            width 121px
            height 121px
            
          .zhezhao 
            position absolute
            width 121px
            height 20px
            background-color rgba(0,0,0, .6)
            bottom 0
            left 0
            color #ffffff
            font-size 15px
            line-height 20px   
</style>
