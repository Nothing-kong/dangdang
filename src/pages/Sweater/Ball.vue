<template>
  <div class="footer">
    <div class="gotop" v-show="gotop" @click="toTop">
      <p><i class="iconfont icon-arrow-top"></i></p>
      <p class="zi">顶部</p>
    </div>
    <div class="history">
      <div class="back">
        <p class="iz">浏览历史</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        gotop:false
      }
      
    },
    mounted() {
　　// 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果 
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
  }
</script>

<style stylus lang="stylus" rel="stylesheet/stylus">
  .footer
    .gotop
      width 40px
      height 40px       
      text-align center
      position fixed
      right 10px
      bottom 30px
      cursor pointer
      padding 10px
      border-radius 50%
      background white
      color #000000
      p
      .icon-arrow-top
        font-size 16px
      .zi
        font-size 15px
        margin-top 5px
    .history
      width 40px
      height 40px
      color #000000
      background red
      border-radius 50%
      position fixed
      right 10px
      bottom 100px
      padding 10px
      background white
      color #000000
      p
      .iz
        width 30px
        height 20px
        font-size 15px
        text-align center
        line-height 20px
        padding 0 5px
        

 
</style>

