<template>
  <section id="picture">
    <div class="left"   v-for="(li,index) in leftList.products" :key="index">
      <p class="photo"><img :src="li.image_url"></p>
      <p class="name">{{leftList.products[index].name}}</p>
      <p class="word">
        <span class="juan">卷</span>
        <span class="manjian">满2件3折</span>
      </p>
      <p class="price">
        <span class="yuan">￥</span>
        <span class="qian">{{leftList.products[index].price}}</span>
        <span class="detail">.00</span>
      </p>
    </div>
    <!-- <div class="right"  v-for="(wen,index) in rightList" :key="index">
        <p class="photo"><img src="http://img3m8.ddimg.cn/83/34/1418943818-1_h_1.jpg" class=""></p>
        <p class="name">【双旦狂欢 3折到手价 59元】毛针织衫女新款秋韩版修身毛衫百搭长袖上衣中长套头毛衣</p>
        <p class="word">
        <span class="juan">卷</span>
        <span class="manjian">满2件3折</span>
        </p>
        <p class="price">
        <span class="yuan">￥</span>
        <span class="qian">229</span>
        <span class="detail">.00</span>
        </p>
    </div> -->
  </section>
</template>

<script type="text/ecmascript-6">
import { reqCommon } from '../../api'
import { reqRight } from '../../api'

  export default {
    data(){
      return{
        leftList:{},
        rightList:{}
      }
    },
    async mounted(){
      const result = await reqCommon()
      if (result.errorCode === 0) {
          this.leftList = result
          this.rightList =result
      }
    },

    components:{

    }
  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus">
  #picture
    width 380px
    display flex
    flex-wrap wrap
    .left 
      border-bottom 1px solid #e4e4e4
      border-right 2px solid #e4e4e4
      width 187px
      .photo img
        width 186px
        height 186px  
      .name
        overflow hidden
        text-overflow ellipsis
        width 162px
        height 38px
        line-height 19px
        color #444
        font-size 15px
        margin 6px 12px
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        word-break: break-all
      .word
        width 163px
        height 17px
        
        margin-left 12px
        span
          font-size 10px
          color #ffffff
          font-weight bold
          
        .juan
          width 16px 
          height 15px
          line-height 15px
          padding 3px
          background-color red
          border-radius 3px
          margin 0 5px
          margin-left -1px
        .manjian
          width 16px 
          height 15px
          line-height 15px
          padding 3px
          background-color red
          border-radius 3px
      .price
        width 65px
        height 19px
        font-size 17px
        margin 0 0 0 8px
        .yuan
          font-size 14px
          color #ff463c 
        .qian
          font-size 16px
          color #ff463c
        .detail
          font-size 14px
          color #ff463c
    // .right 
    //   border-bottom 1px solid #e4e4e4
    //   border-right 2px solid #e4e4e4
    //   width 187px
    //   .photo img
    //     width 186px
    //     height 186px  
    //   .name
    //     overflow hidden
    //     text-overflow ellipsis
    //     width 162px
    //     height 38px
    //     line-height 19px
    //     color #444
    //     font-size 15px
    //     margin 6px 12px
    //     display -webkit-box
    //     -webkit-box-orient vertical
    //     -webkit-line-clamp 2
    //     word-break: break-all
    //   .word
    //     width 163px
    //     height 17px
        
    //     margin-left 12px
    //     span
    //       font-size 10px
    //       color #ffffff
    //       font-weight bold
          
    //     .juan
    //       width 16px 
    //       height 15px
    //       line-height 15px
    //       padding 3px
    //       background-color red
    //       border-radius 3px
    //       margin 0 5px
    //       margin-left -1px
    //     .manjian
    //       width 16px 
    //       height 15px
    //       line-height 15px
    //       padding 3px
    //       background-color red
    //       border-radius 3px
    //   .price
    //     width 65px
    //     height 19px
    //     font-size 17px
    //     margin 0 0 0 8px
    //     .yuan
    //       font-size 14px
    //       color #ff463c 
    //     .qian
    //       font-size 16px
    //       color #ff463c
    //     .detail
    //       font-size 14px
    //       color #ff463c
    
</style>
