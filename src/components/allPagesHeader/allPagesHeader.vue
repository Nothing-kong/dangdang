<template>
    <div>
        <div class="header">
            <!-- 返回按钮 -->
            <span @click="$router.push('/msite')">
            <i class="iconfont icon-back"></i>
        </span>

            <!-- 搜索框 -->
            <div>
                <div class="title" v-if="title">
                    <span>{{title}}</span>
                </div>
                <div class="search" v-if="!title">
                <span>
                    <i class="iconfont icon-sousuo"></i>
                </span>
                    <input type="text" placeholder="搜索商品/种类/店铺"/>
                </div>
            </div>


            <!-- 右侧文字 动态切换 -->
            <span class="sandian" @click="isShow = !isShow">
        <i class="iconfont" :class="{'icon-sandian':!isShow,'icon-ziyuan1':isShow}"></i>
        </span>

            <!-- 点击三点,显示导航 -->

        </div>
        <transition name="fade">
            <div class="footer_guide" v-show="isShow">
                <div class="guide_item" @click="$router.push('msite')">
                    <i class="iconfont icon-xuanzhongshangcheng"></i>
                    <span>首页</span>
                </div>
                <div class="guide_item" @click="$router.push('category')">
                    <i class="iconfont icon-mulu"></i>
                    <span>分类</span>
                </div>
                <div class="guide_item" @click="$router.push('deserveBuying')">
                    <i class="iconfont icon-bao"></i>
                    <span>值得买</span>
                </div>
                <div class="guide_item" @click="$router.push('cart')">
                    <i class="iconfont icon-gouwuche2"></i>
                    <span>购物车</span>
                </div>
                <div class="guide_item" @click="$router.push('profile')">
                    <i class="iconfont icon-person"></i>
                    <span>我的当当</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props:{
            title:String
        },
        data() {
            return {
                isShow:false
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header
        width 100%
        height 45px
        display flex
        justify-content space-between
        line-height 45px
        position relative
        .sandian
            width 40px
        span
            font-size 14px
            margin-left 5px
            .iconfont
                width 36px
                height 30px
                font-size 20px
                padding 0 10px

            .icon-ziyuan1
                font-size 16px
                color red
        .title
            text-align center
            span
                font-size 18px
        .search
            width 280px
            height 30px
            line-height 30px
            margin-top 7px
            border-radius 30px
            overflow hidden
            background-color #eee
            position relative

            span
                position absolute
                left 0
                top 0

                .iconfont
                    font-size 12px

            input
                width 245px
                height 100%
                margin-left 30px
                background-color #e8ecf0
                outline none
                font-size 14px
                padding-left 5px

    .footer_guide
        overflow hidden
        border-top 1px solid #eee
        z-index -1
        display flex
        justify-content space-around
        width 100%
        height 50px
        background-color #eee
        &.fade-enter-active, &.fade-leave-active {
            transition: all 0.3s;
        }
        &.fade-enter, &.fade-leave-to {
            height 0px
        }
        .guide_item
            display flex
            flex-direction column
            justify-content center
            height 50px
            padding-top 5px
            i
                height 20px
                font-size 20px
                text-align center
            span
                font-size 12px


</style>
