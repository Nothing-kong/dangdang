<template>
    <div class="header-top">
        <span><i class="iconfont icon-fanhui" @click="$router.push('/msite')"></i></span>
        <div class="topContent">{{title}}</div>
        <span><i class="iconfont icon-more"></i></span>
    </div>
</template>

<script>
    export default {
        props:{
            title:String
        },
        data() {
            return {

            }
        }
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
</style>
