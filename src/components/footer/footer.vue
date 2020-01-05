<template>
<van-goods-action>
  <van-goods-action-icon icon="chat-o icon-dianpu" text="客服" />
  <van-goods-action-icon icon="cart-o" text="购物车" :info="count" @click="$router.replace('/cart')"/>
  <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"/>
  <van-goods-action-button type="danger" text="立即购买"/>
</van-goods-action>
  <!-- <footer class="footer border-1px">
    <div class='left'>s
      <router-link  class="item" to="/shop" >
      <span class="item_icon">
      <i class="iconfont icon-dianpu"></i>
    </span>
      <span>店铺</span>
  </router-link> 
  <div class="item">
      <span class="item_icon">
      <i class="iconfont icon-shoucang-chanpinxiangqing"></i>
    </span>
      <span>收藏</span>
  </div>
  <div class="item">
      <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
    <span>购物车</span>
  </div>
    </div>
  
  <div class='right'>
    <router-link to='/profile' class="item alone">
    <span>立即购买</span>
  </router-link>
    <div class="item alone">加入购物车</div>
  </div>

  
</footer> -->
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
  //     mounted() {
  //   this.$toast('添加购物车成功');
  // },
  props:['countI'],
    computed: {
      ...mapState(["count"]),
    },
    methods: {
      // onClickIcon() {
      //   Toast('点击图标');
      // },
      onClickButton() {
        this.$toast('添加购物车成功')
        this.$store.commit("setCount",this.countI)
        
      
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

// .footer
//     top-border-1px(#e4e4e4)
//     position fixed
//     z-index 100
//     left 0
//     right 0
//     bottom 0
//     background-color #fff
//     width 100%
//     height 51px
//     display flex
//     .left
//       display flex
//       width 45%
//       //margin-left 10px
//       margin-top 10px
//       text-align center
//       .item
//         display flex
//         flex-direction column
//         width 33.3333%
//         color #8E9A9B
//     .right 
//       display flex
//       width 55%
//       &:nth-child(1)
//       .alone
//         text-align center
//         line-height 51px
//         width 50%
//         color #8E9A9B
//         background yellow
</style>
