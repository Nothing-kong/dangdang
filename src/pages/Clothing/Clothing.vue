<template>
  <div id="clothingContainer" v-if="clothingObj">
    <!-- 大头部 -->
    <div class="headerContainer">

      <!-- 引入header组件 -->
      <AllPagesHeader title="服装馆"/>

      <!-- 服装馆轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.shuffling.value' :key='index'>
            <img :src="item.img_url" >
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!-- 10个图标分类 -->
      <div class="categoryContainer">
        <div class="categoryItem" v-for='(item,index) in clothingObj.categoryImg.value' :key='index'>
          <img :src="item.img_url" alt="">
        </div>
      </div> 
    </div>

    <div class="blank"></div>

     <!-- 大nav图片 -->
    <img class="bigNav" src="../../../public/images/bigNav.jpg" alt="">

    <div class="blank_10px"></div>

    <!-- 购时尚购优惠 -->
    <div class="buyFashion">
      <img class="titleImg" :src="clothingObj.buyFashion.title_img">
      <div class="faContainer">
        <img class="buySmlImg" :src="item.img_url" v-for='(item,index) in clothingObj.entrance.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 今日大牌 -->
    <div class="bigBrand">
      <img class="titleImg" :src="clothingObj.brand.title_img">
      <img class="navBigImg" :src="clothingObj.brand.img_url" >
      <div class="smlBrandCntainer">
        <img class="smlBrand" :src="item.img_url" v-for='(item,index) in clothingObj.brand.value1' :key='index'>
      </div>
      <div class="blank_1px"></div>
      <div class="smlBrandCntainer">
        <img class="smlBrand" :src="item.img_url" v-for='(item,index) in clothingObj.brand.value2' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 店铺上新 -->
    <div class="shopUpdata">
      <img class="titleImg" :src="clothingObj.shopUpdate.title_img">
      <ul>
        <li class="shopContainer" v-for='(item,index) in clothingObj.shopUpdate.value' :key='index'>
          <img class="shopBing" :src="item.img_url" alt="">
          <img class="shopSml" :src="item.shop_logo" alt="">
          <p>{{item.shop_name}}</p>
        </li>
      </ul>
    </div>

    <div class="blank_10px"></div>

    <!-- 女装 -->
    <div class="femailAndManClothing">
      <img class="titleImg" :src="clothingObj.wClothing.title_img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.wClothing.shuffling' :key='index'>
            <img :src="item.img_url">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.wClothing.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 男装 -->
    <div class="femailAndManClothing">
      <img class="titleImg" :src="clothingObj.mClothing.title_img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.mClothing.shuffling' :key='index'>
            <img :src="item.img_url" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.mClothing.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 童装 -->
    <div class="childClothing">
      <img class="titleImg" :src="clothingObj.cClothing.title_img">
      <img class="Img_h157" :src="clothingObj.cClothing.shuffling[0].img_url">
      <img class="bottomImg" :src="clothingObj.cClothing.downImg[0].img_url">
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.cClothing.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 户外运动 -->
    <div class="sport">
      <img class="titleImg" :src="clothingObj.sport.title_img">
      <img class="Img_h157" :src="clothingObj.sport.shuffling[0].img_url">
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.sport.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 男女鞋 -->
    <div class="shoes">
      <img class="titleImg" :src="clothingObj.shoes.title_img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.shoes.shuffling' :key='index'>
            <img :src="item.img_url" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.shoes.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 内衣袜子 -->
    <div class="underwearAndSocks">
      <img class="titleImg" :src="clothingObj.scoks.title_img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.scoks.shuffling' :key='index'>
            <img :src="item.img_url" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.scoks.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 箱包 -->
    <div class="bag">
      <img class="titleImg" :src="clothingObj.bags.title_img">
      <img class="Img_h157" :src="clothingObj.bags.shuffling[0].img_url">
      <img class="bottomImg" :src="clothingObj.bags.downImg[0].img_url">
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.bags.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 珠宝配饰 -->
    <div class="jewelry">
      <img class="titleImg" :src="clothingObj.jewelry.title_img">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item,index) in clothingObj.jewelry.shuffling' :key='index'>
            <img :src="item.img_url" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="iconContainer">
        <img :src="item.img_url" v-for='(item,index) in clothingObj.jewelry.value' :key='index'>
      </div>
    </div>

    <div class="blank_10px"></div>

    <!-- 猜你喜欢 -->
    <div class="shopList">
      <img class="titleImg" :src="clothingObj.like.title_img">
      <div class="wrapper">
        <ul class="content">
          <li @click="handleClick(index)" :class="{active: index === currentIndex}" v-for='(item,index) in this.ulList' :key='index'>{{item}}</li>
        </ul>
      </div>
      <div class="detailContainer">
        <div class="detail" v-for='(item,index) in clothingObj.like.value' :key='index'>
          <img :src="item.image_url">
          <p>{{item.product_name}}</p>
          <span class="price">￥ {{item.price}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import BScroll from 'better-scroll'
  import {reqClothing} from '../../api'

  export default {
    data () {
      return {
        clothingObj:"",
        isActive:false,
        currentIndex:0,
        title:"服装馆",
        ulList:['女装',"男装","童装童鞋","户外运动","男女鞋","内衣配饰","箱包皮具","珠宝配饰"]
      }
    },
    async mounted(){
      //异步发送请求
      this.clothingObj = await reqClothing('/clothing')

      //
      this.$nextTick(() => {
        new BScroll('.wrapper',{
          scrollX:"true",
          click:true
        })
      })
    },

    methods:{
      handleClick(index) {
        return this.currentIndex = index
      }
    },

    watch: {
      clothingObj () {
        this.$nextTick(() => {
          new Swiper ('.swiper-container', {
            
            loop: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  #clothingContainer
    width 100%
    .headerContainer
      header
        width 100%
        height 45px
        display flex
        justify-content space-between
        line-height 45px
        .iconfont
          width 0.8rem
          height 200px
          font-size 20px
          padding 0 10px
        h2
          font-size 17px
      .swiper-container
        img 
          width 100%
          height 158px
      .categoryContainer
        display flex
        flex-wrap wrap
        .categoryItem
          width 20%
          height 85px
          img 
            width 75px
            height 75px
    .bigNav
      width 100%
      height 100px
    .blank_10px
      width 100%
      height 10px
      background-color #f8f8f8
    .blank_1px
      width 100%
      height 2px
      background-color #f2f2f2
    .titleImg
       width 100%
       height 39px
    .swiper-container
      img 
        width 100%
        height 158px
    .iconContainer
      display flex
      flex-wrap wrap
      img
        width 20%
        height 75px
    .Img_h157
      width 100%
      height 157px
    .bottomImg
        width 100%
        height 100px
        margin-top -2px
    .buyFashion
      margin-top 10px
      .faContainer
        display flex
        .buySmlImg
          width 33%
          height 147px
          border-right 1px solid #eee
          &.last-child
            border:none!important 
    .bigBrand
      .navBigImg
        width 100%
        height 100px
      .smlBrandCntainer
        display flex
        .smlBrand
          width 33%
          height 147px
          border-right 1px solid #f2f2f2
          .smlBrand:last-child
            border:none!important
           
    .shopUpdata
      overflow hidden
      .shopContainer
        float left
        width 125px
        height 182px
        box-sizing border-box
        border-right 1px solid #eee
        .shopContainer:last-child
          border:none!important
        .shopBing
          width 124px
          height 124px
        .shopSml
          width 38px
          height 38px
          margin-top -19px
          margin-left 43px
        p
          display block
          font-size 14px
          text-align center
          margin-top 10px
        .ellipsis
          display block
          font-size 14px
          text-align center
          padding-left 20px
    .shopList
      .wrapper
        width 100%
        overflow hidden
        .content
           display flex
           width 620px
           border-bottom 1px solid #e6e6e6
          li
            height 40px
            text-align center
            line-height 40px
            margin 0 15px
            font-size 14px
            &.active
              color #e53e30
              border-bottom 1px solid #e53e30
      .detailContainer
        display flex
        flex-wrap wrap
        justify-content space-between
        background-color #f8f8f8
        margin-top 2px
        .detail
          width 50%
          height 282px
          margin-bottom 4px
          img 
            width 185px
            height 185px
          p
            padding 10px 5px 0 5px
            font-size 14px
            -webkit-box-orient vertical
            overflow hidden
            -webkit-line-clamp 2
            display: -webkit-box;
            text-overflow ellipsis
          .price
            font-size 16px
            color #e53e30
            line-height 40px
      
</style>

