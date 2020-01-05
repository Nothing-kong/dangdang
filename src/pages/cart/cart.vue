<template>
<div class="cartAll">
    <AllPagesHeader title="购物车"/>
      <!-- 购物车显示开始 -->
  <div class="cartContainer_second"  v-if="count>0" >
    <!-- 编辑头部 -->
    <div class="compile">
      <div class="compile_left">
       <img @click="compileChange" :src="isChange ? require('./images/c_checkbox_off.png'):require('./images/c_checkbox_on.png')" alt="" >
        <img class="complite_dangdang" src="./images/dangdang.png" alt="">
        <span class="complite_text">当当网</span>
      </div>
      <button @click="compileConChange">编辑</button>
    </div>
    <!-- 编辑头部结束 -->
     <!-- 编辑内容开始 -->
    <div class="compile_content" >
      <div class="content_top">
        <span class="content_top_left">满额减</span>
        <span class="content_top_right">购物满79元立减30元，满158元立减60元，满230元<i class="iconfont icon-jiantou1"></i></span>
      </div>
      <div class="compile_content_img" v-if="isShow">
        <img  class="compile_content_img-left" @click="compileChange" :src="isChange ? require('./images/c_checkbox_off.png'):require('./images/c_checkbox_on.png')" alt="">
        <img class="compile_content_img-right" src="./images/27950877-1_l_3.jpg" alt="">
        <div class="book_info">
          <p>鬼谷子全集正版原著珍藏版全书绝学白话文鬼谷子教你攻心术鬼谷子的局
          </p>
          <div class="main_price_div">￥{{detail.new_price.price_1}} <span class="main_price_delete">￥{{detail.new_price.price_2}}</span>
          </div>
          <div class="book_count">
            <span>x{{count}}</span>
            <button @click="compileConChange"><i class="iconfont icon-xiugai"></i></button>
          </div>
        </div>
      </div>
      <div class="compile_content_check" v-else>
        <img src="./images/27950877-1_l_3.jpg" alt="">
        <div class="compile_content_check_count">
          <section >
            <button v-on:click="subtract(countH)">-</button>
            <input type="text" value="0" v-model="count">
            <button v-on:click="add(countH)">+</button>
          </section>
          <button class="button_icon" @click="handleClick"><i class="iconfont icon-iconset0212"></i></button>
        </div>
        <button @click="compileConChange">完成</button>
      </div>
       <!-- 编辑内容结束 -->
      <div class="special">
        <span class="special_left">加价购</span>
        <span class="special_right">购买本商品可买加价购<i class="iconfont icon-jiantou1"></i></span>
      </div>
      <div class="compile_content_footer">
        <span class="price_span">￥{{detail.new_price.price_1*count}}元</span>
        <span>满额小计:</span>
      </div>
    </div>
     <!-- 编辑内容结束 -->
     <!-- 底部导航条 -->
    <footer class="footer">
      <div>
        <img @click="compileChange" :src="isChange ? require('./images/c_checkbox_off.png'):require('./images/c_checkbox_on.png')" alt="">
        <span class="footer_allcheck" @click="isChecked">全选</span>
      </div>
      <div class="footer_right">
        <span>结算（{{count}}）</span>
        <span  class="footer_price">合计: ￥{{detail.new_price.price_1*count}}元</span>
      </div>

     </footer>
     <!-- 底部导航条结束 -->
  </div>
  <!-- 购物车显示结束 -->
  <!-- 空购物车显示 -->
  <div class="cartContainer" v-else>
    <div class="nthing">
        <img src="./images/cart_null.gif" alt="">
        <p>您还没有购买任何商品</p>
        <div class="button">
          <button>逛一逛</button>
          <button>我的收藏</button>
        </div>
    </div>
  </div>
   <!-- 空购物车显示结束 -->

</div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import PagesHeader from '../../components/pagesHeader/pagesHeader'
  export default {
    components:{
        PagesHeader
    },
    data() {
      return {
        isShow:true,
        isChange:true,
        countH:0
      }
    },
    methods: {
      compileChange(){
        this.isChange=!this.isChange
      },
      compileConChange(){
        this.isShow=!this.isShow
      },
        add: function() {this.countH=++this.countH;
          this.$store.commit("updateCartCount",this.countH)},
         subtract: function() {if (this.countH <= 0) {this.$toast('不能再少了')} else {this.countH=--this.countH;
          this.$store.commit("updateCartCount",this.countH)}},//添加减少逻辑
          isChecked(){
          if(this.count>0){
            this.isChange=false
          }//改变全选状态
          },
          handleClick(){
              this.$dialog.confirm({
              title: '标题',
              message: '确定删除该商品么？'
            }).then(() => {
              // on confirm
            }).catch(() => {
              // on cancel
            })
          }
    },
    computed: {
      ...mapState(["count","countH","detail"])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../commen/stylus/mixins.styl"
.header-top
    display flex
    height 44px
    justify-content space-between
    bottom-border-1px(#999)
    .topContent
        font-size 18px
        line-height 44px
    span
        padding 0 10px
        line-height 44px
    .fanhui
        margin-right 8px
        font-size 16px
    .icon-more
        font-size 24px

.cartAll
  background-color #eeeeee
  width 100%
  height 80%

  .cartContainer
    background-color #F2F2F2
    width 100%
    height 93.463vh


    //position relative
    img
      //position absolute
      width 200px
      height 200px
      margin-left 100px
      margin-top 60px
    p
      text-align center
      font-size 16px
      font-weight bold
      margin-top 20px
      color #B0B0B0
    .button
      button
        border 0
        background-color transparent
        outline none
        color #B0B0B0
        font-size 20px
        border 1px solid  #B0B0B0
        padding 10px
        border-radius 10px
        text-aline center
        margin-left 65px
        margin-top 20px
  .cartContainer_second
    //display none
    width 100%
    /*padding-top 50px*/
  .compile
    display flex
    width 100%
    line-height 25px
    border-bottom 1px solid #F2F2F2
    background-color  white
    margin-top 6px
    font-size 16px
    color #4d525d
    line-height 35px
    .compile_left
      padding 5px 15px
      width 75%
      img
        width 20px
        vertical-align middle
    .complite_dangdang
      width 32px
      height 25px
      vertical-align middle
      margin 0 10px
    .complite_text
      vertical-align middle
      font-size 16px
      color #7B7B7B
    button
      border 0
      background-color transparent
      outline none
      color #7B7B7B
      font-size 16px
  .compile_content
    //position relative
    background-color  white
    .content_top
      padding-top 8px
      .content_top_left
        font-size 16px
        background-color red
        color white
        margin-left 15px
        padding 2px
      .content_top_right
        overflow hidden
        width 150px
        white-space nowrap
        margin-left 10px
        vertical-align middle
        i
          vertical-align middle
          margin-left 5px
    .compile_content_img
      display flex
      margin 15px
      .compile_content_img-left
        width 20px
        height 20px
        margin-top 20px
      .compile_content_img-right
        width 100px
        margin-left 20px
      .book_info
        width 50%
        margin-left 20px
        .main_price_div
          margin 15px
          font-size 16px
          color red
          .main_price_delete
            text-decoration line-through
            color #7B7B7B
        .book_count
          margin 15px
          font-size 16px
          display flex
          justify-content space-between
          button
            border 0
            background-color transparent
            outline none
            color #7B7B7B
            i
              font-size 20px
    .compile_content_check
      display  flex
      justify-content space-around
      .compile_content_check_count
        display flex
        flex-direction column
        justify-content space-around
        font-size 20px
        section
          button
            font-size 20px
            //display inline-block
            border 0
            background-color transparent
            outline none
            border 1px solid #EFEFEF
            width 45px
            heigth 48px
          input
            //display inline-block
            width 80px
            font-size 20px
            text-align  center
            //border 1px solid #EFEFEF
            border-top 1px solid #EFEFEF
            border-bottom 1px solid #EFEFEF
            height 22px
        .button_icon
          border 0
          background-color transparent
          outline none
          margin-left 80px
          i
            font-size 20px
      button
        border 0
        background-color transparent
        outline none
        border 1px solid #EFEFEF
        background-color #eee
    .special
      .special_left
        color red
        font-size 14px
        border 1px solid red
        border-radius 5px
        margin-left 50px
      .special_right
        font-size 14px
        color #7B7B7B
        margin-left 10px
    .compile_content_footer
      height 40px
      background-color #FAFAFA
      line-height 40px
      padding-right 15px
      span
        float right
      .price_span
        color red
        margin-left 5px
  .footer
    display flex
    justify-content space-between
    position absolute
    bottom 0px
    left 0px
    height 50px
    background-color white
    width 100%
    line-height 50px
    img
      width 20px
      padding-left 10px
      height 20px
      padding-top 17px
      vertical-align top
    .footer_allcheck
      margin 0 0 0 20px
      font-size 17px
      color #4d525d
      vertical-align middle
    .footer_right
        span
          padding 0 10px
          height 50px
          font-size 17px
          color #4d525d
        .footer_price
          display inline-block
          background-color red
          color #fff
</style>
