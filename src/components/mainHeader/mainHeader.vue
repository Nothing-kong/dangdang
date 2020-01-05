<template>
  <div>
    <header class="main-header">
      <span @click="$router.replace('/msite')"><i class="iconfont icon-back"></i></span>
      <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
      </span>
      <span @click="handleClick">
        <i class="iconfont icon-sandian" v-if="!isShow"></i>
        <i class="iconfont icon-fanhui" v-if="isShow"></i>
      </span>
    </header>
    <FooterGuide v-if="isShow" :isShow="isShow"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "../FooterGuide/FooterGuide"
  export default {
    name:"MianHeader",
    data () {
      return {
        isShow:false
      }
    },
    props: {
      title: String
    },
    components:{
      FooterGuide
    },
    methods : {
      handleClick(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
