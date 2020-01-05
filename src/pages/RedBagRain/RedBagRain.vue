<template>
    <div class = 'redBag'>
        <AllPagesHeader title="红包雨召唤"/>
        <div class="main">
            <img class = 'outer' src="http://img63.ddimg.cn/upload_img/00459/h5/main_bg-1541586516.jpg" alt="">
                    <!-- 二维码 -->
            <img class = 'inner' src="http://touch.m.dangdang.com/mina_acode.php?pid=" alt="">
        </div>
        <!-- 底部的版权信息 -->
        <footer class = 'footer'>
            <div class="footer-top">
                <a href="#">登录</a>
                <a href="#">注册</a>
                <a href="#top" class="toTop"><i class="iconfont icon-web-icon-"></i>TOP</a>
            </div>
            <div class="footer-bottom">
                <p class = 'footerDesc'>
                    <a href="#">提建议</a>
                    <a href="#">触屏版</a>
                    <a href="#">电脑版</a>
                    <a href="#">帮 助</a>
                </p>
                <p>Copyright ?2018 北京当当网信息技术有限公司</p>
                <p>北京市朝阳区北三环东路8号，100028</p>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showFooter:false
        }
    },
    methods:{
        isShowFooter(){
            this.showFooter = !this.showFooter
        }
    }
}
</script>
<style lang='stylus' scoped>
.redBag
    width 100%
    height 100%
    .header
        width 100%
        height 53px
        display flex
        background-color white
        z-index 100
        .icon-houtui
            width 48px
            height 100%
            line-height 53px
            font-size 30px
            margin-left 10px
        .text
            display inline-block
            width 280px
            height 100%
            font-size 21px
            line-height 53px
            text-align center
        .openSwitch
            width 48px
            height 100%
            background-image url("http://touch.m.dangdang.com/coreimages/menu.png")
            background-repeat no-repeat
            background-position center center
            background-size 27px
            &.on
                width 48px
                height 100%
                background-image url("http://touch.m.dangdang.com/coreimages/menu-active.png")
                background-repeat no-repeat
                background-position center center
                background-size 27px
    .fade-enter-active, .fade-leave-active
        transition all .5s
    .fade-enter, .fade-leave-to
        opacity 0
        transform translateY(-53px)
    .footer_guide
        border-top 1px solid #eee
        z-index 100
        display flex
        left 0
        top 53px
        width 100%
        height 61px
        padding 4px 0
        box-sizing border-box
        background-color #fff
        .guide_item
            display flex
            flex-direction column
            text-align center
            width 20%
            span
                margin-top 4px
                font-size 15px
                .iconfont
                    font-size 25px

    .main
        width 100%
        height 580px
        position relative
        .outer
            display block
            width 100%
            height 100%
        .inner
            width 120px
            height 120px
            position absolute
            top 50%
            left  50%
            transform translateX(-50%) translateY(-65%)
            border-radius 50%
    .footer
        height 172px
        background-color #fff
        .footer-top
            height 46px
            box-sizing border-box
            border-bottom 1px solid #e5e5e5
            border-top 1px solid #e5e5e5
            line-height 46px
            a
                font-size 17px
                margin-left 20px
                color #4d525d

            .toTop
                float right
                padding 0 8px
        .footer-bottom
            padding-bottom 30px
            p
            text-align center
            color #323232
            height 19px
            line-height 19px
            font-size 14px
            a
                height 100%
                line-height 16px
                font-size 15px
                padding 0 5px
            .footerDesc
                width 355px
                height 26px
                line-height 26px
                margin 6px auto
                font-size 15px
                color #323232
                a
                    padding 0 5px
                    &:nth-of-type(2)
                        color red

</style>
