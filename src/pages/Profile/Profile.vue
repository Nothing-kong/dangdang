<template>
  <section class="profile">
      <AllPagesHeader title="我的当当"/>
    <section class="content" v-if="itemDatas.personalList">
      <section class="user-basic" tag="div">
        <router-link to="/login" class="table" v-if="!token">
        <div class="loginContent">
            <span>登录/注册</span>
        </div>
        </router-link>
        <div class="personal-link" v-else>
            <div class="userImg">
              <img src="./imgs/header_o.jpg" alt="">
            </div>
            <div class="user-info">
              <p class="user-info-top">{{user.name? user.name:user.phone}}</p>
              <p class="user_info">
                余额0.00 礼品卡0.00 积分0.00
              </p>
            </div>
        </div>

      </section>
      <section class="userStat" tag="div">
        <div>
          <p>0</p>
          <p>收藏的商品</p>
        </div>
        <div>
          <p>0</p>
          <p>收藏的商品</p>
        </div>
        <div>
          <p>0</p>
          <p>收藏的商品</p>
        </div>
      </section>
      <section class="myslide" tag="div">
          <router-link to="/login">
            <div class="left">
              <i class="iconfont icon-wodedingdan" style="color:#FB8F63"></i>
              <span>我的订单</span>
            </div>
            <div class="right">
              <span>查看全部购买商品</span>
              <i class="iconfont icon-tiaozhuan"></i>
            </div>
          </router-link>
      </section>
      <section class="myorder" tag="div">
        <div>
          <i class="iconfont icon-daifukuan"></i>
          <p>待付款</p>
        </div>
        <div>
          <i class="iconfont icon-daishouhuo"></i>
          <p>待收货</p>
        </div>
        <div>
          <i class="iconfont icon-tuihuanhuo"></i>
          <p>退换货</p>
        </div>
      </section>
      <div class="space"></div>
      <section class="myvip" tag="div">
          <router-link to="/myvip">
            <div class="left">
              <i class="iconfont icon-huiyuan" style="color:#EFD28A"></i>
              <span>会员中心</span>
            </div>
            <div class="right">
              <i class="iconfont icon-tiaozhuan"></i>
            </div>
          </router-link>
      </section>
      <div class="space"></div>
      <section class="myList" tag="div" v-for="(item, index) in itemDatas.personalList.ItemList" :key="index">
          <router-link to="/mylist">
            <div class="left">
              <i :class="item.iconClass" :style="item.color"></i>
              <span>{{item.text}}</span>
            </div>
            <div class="right">
              <i class="iconfont icon-tiaozhuan"></i>
            </div>
          </router-link>
      </section>
      <div class="space"></div>
      <section class="myList" tag="div" v-for="(item, index) in itemDatas.personalList.discounts" :key="'myList'+index">
          <router-link to="/mylist">
            <div class="left">
              <i :class="item.iconClass" style="color:red"></i>
              <span>{{item.text}}</span>
            </div>
            <div class="right">
              <i class="iconfont icon-tiaozhuan"></i>
            </div>
          </router-link>
      </section>
      <div class="space"></div>
      <section class="myList" tag="div">
          <router-link to="/mylist">
            <div class="left">
              <i class="iconfont icon-qiang" style="color:#C2CB5A"></i>
              <span>客服反馈</span>
            </div>
            <div class="right">
              <i class="iconfont icon-tiaozhuan"></i>
            </div>
          </router-link>
      </section>
    </section>
    <section class="loginTo" tag="div">
      <div v-if="token" class="info">
        <span>{{user.name?user.name:user.phone}}</span>
        <span @click="logout">退出</span>
      </div>
      <router-link to="/login" v-else>
        <span>登录</span>
        <span>注册</span>
      </router-link>
      <a href='#' class="toTop">
        <span >
          <i class="iconfont icon-xiangshangjiantou">TOP</i>
        </span>
      </a>
    </section>
  </section>
</template>
<script>
  import Datas from './datas/datas.json'
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  export default {
    data() {
      return {
        itemDatas:{},
        slideItems:[]
      }
    },
    mounted() {
      this.itemDatas = Datas
    },
    computed: {
      ...mapState(['user',"token"])
    },
    methods: {
      logout () {
        MessageBox.confirm('确定执行此操作?').then(
          () => { // 点击确认
            this.$store.dispatch('logout')
          },
          () => { // 点击取消
            console.log('点击了取消')
          }
        )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../commen/stylus/mixins.styl"
  .profile //我的
    width 100%
    .user-basic
      position relative
      width 100%
      height 115px
      background-image url('./imgs/user-bg.jpg')
      background-size cover
      .table
        width 100%px
        height 39px
        .loginContent
          position absolute
          margin-top 30px
          margin-left 50%
          transform translateX(-50%)
          border 2px solid #f8f8f8
          border-radius 20px
          width 77px
          height 39px
          padding 0 20px
          span
            line-height 39px
            font-size 16px
            color #F8F8F8
      .personal-link
        position relative
        display block
        padding 20px 13px
        .userImg
          width 74px
          height 74px
          display inline-block
          float left
          img
            width 100%
            height 100%
        .user-info
          float left
          margin-top 8px
          margin-left 15px
          p
            color white
          .user-info-top
            display block
            height 20px
            font-size 16px
            line-height 20px
          .user_info
            display block
            height 30px
            font-size 12px
            line-height 30px



    .userStat
      display flex
      div
        width 33%
        height 34px
        padding 10px
        border-bottom 1px solid #eee
        border-right 1px solid #eee
        p
          font-size 13px
          text-align center
    .space
      width 100%
      height 10px
      background-color #eee
    .myslide
      width 100%
      height 46px
      border-bottom 1px solid #eee
      .left
        float left
        i
          font-size 22px
          line-height 46px
          margin 0 10px
        span
          font-size 14px
          color #000
      .right
        float right
        span
          font-size 12px
          line-height 46px
          color #000
        i
          font-size 14px
          margin 0 10px
    .myorder
      display flex
      div
        width 33%
        height 54px
        padding 0px
        border-bottom 1px solid #eee
        i
          font-size 22px
          display inline-block
          margin-top 10px
          margin-left 50%
          transform translateX(-50%)
        p
          font-size 12px
          text-align center
    .myvip
      width 100%
      height 46px
      border-bottom 1px solid #eee
      .left
        float left
        i
          font-size 22px
          line-height 46px
          margin 0 10px
        span
          font-size 14px
          line-height 46px
          color #000
      .right
        float right
        i
          font-size 14px
          margin 0 10px
          line-height 46px
    .myList
      width 100%-20px
      height 27px
      padding 10px
      border-bottom 1px solid #eee
      .left
        float left
        i
          font-size 22px
          vertical-align middle
          margin-right 10px
          line-height 27px

        span
          font-size 14px
          line-height 27px
          color #000
      .right
        float right
        i
          font-size 12px
          line-height 27px
    .loginTo
      height 44px
      width 100%
      border-bottom 1px solid #eee
      margin-bottom 50px
      .info
        display inline-block
      span
        font-size 14px
        line-height 44px
        margin-left 20px
        color #000
      .toTop
        float right
        margin-right 10px
        i
          font-size 14px

</style>
