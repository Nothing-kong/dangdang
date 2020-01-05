<template>
    <div class="deserveShopContainer" id="top" v-if="data">
        <header class="header">
            <AllPagesHeader title="值得买"/>
            <ul class="header-list">
                <li v-for="(item,index) in data.nav" :key="index">
                    <img :src="item.iconImageUrl" alt="">
                </li>
            </ul>
        </header>
        <main>
            <div class="discount">
                <div class="discount-text">
                    <span>促销专场</span>
                    <a href="http://z.dangdang.com/optimize/today_promote">更多 <i
                        class="iconfont icon-tiaozhuan"></i></a>
                </div>

                <div class="discountContent">
                    <ul>
                        <li v-for="item in promotions" :key="item.promotion_id">
                            <a :href="'http://search.m.dangdang.com/'+item.url">
                                <p>{{item.title}}</p>
                                <p>{{item.title.slice(item.title.indexOf("每") === -1 ? 100 :
                                    item.title.indexOf("每"))}}</p>
                                <img :src="item.img_url[0]" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div v-for="(item,index) in data.shops" :key="index">
                <div class="seckillShop" :style="'background-image:url('+ item.content[0].backgroundImgUrl +')'">
                    <div class="seckillShop-header">
                        <img v-if="item.content[0].titleImg" :src="item.content[0].titleImg" alt="png">
                        <p v-else class="title">为你推荐</p>
                        <a v-if="item.content[0].titleImg" :href="item.content[0].linkUrl">更多 ></a>
                    </div>

                    <div class="wrapper" :class="'wrapper'+index">
                        <ul class="content" :style="'width:'+ item.content[0].infos.length*110 +'px'">
                            <li v-for="i in item.content[0].infos" :key="i.productId">
                                <a href="">
                                    <img :src="i.productImageUrl" alt="png">
                                    <p>{{i.productName}}</p>
                                    <p>¥{{i.salePrice}}</p>
                                    <del>¥{{i.originPrice}}</del>
                                </a>
                            </li>
                            <li>
                                <span><i class="iconfont icon-tiaozhuan1"></i></span>
                                <p>查看更多</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="shopItem" v-for="shop in item.content.filter(i => i.navType === 1)"
                     :key="shop.infos.productId">
                    <div class="itemContainer">
                        <div class="headerLeft">畅销榜第{{shop.infos[0].num}}名</div>
                        <a href="#">更多 ></a>
                        <div class="itemContent">
                            <img :src="shop.infos[0].productImageUrl" alt="png">
                            <div class="contentRight">
                                <h2 class="ellipsis">{{shop.infos[0].productName}}</h2>
                                <div class="priceBox">
                                    <span class="price">¥ {{shop.infos[0].salePrice}}</span>
                                    <del class="oldPrice">¥ {{shop.infos[0].originPrice}}</del>
                                    <span class="discount" v-if="shop.infos[0].couponModel">{{shop.infos[0].couponModel[0].couponMinUseValue}}减{{shop.infos[0].couponModel[0].couponValue}}</span>
                                </div>
                                <p>
                                    <i class="iconfont icon-huihua">{{shop.infos[0].commentCount}}</i>
                                    <i class="iconfont icon-xingxing">{{shop.infos[0].averageScore}}</i>
                                    <i class="iconfont icon-gouwuche2"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <div class="footer-top">
                <a href="#">登录</a>
                <a href="#">注册</a>
                <a href="#top" class="toTop"><i class="iconfont icon-web-icon-"></i>TOP</a>
            </div>
            <div class="footer-bottom">
                <p>
                    <a href="#">提建议</a>
                    <a href="#">电脑版</a>
                    <a href="#">帮 助</a>
                </p>
                <p>Copyright ©2018 北京当当网信息技术有限公司</p>
                <p>北京市朝阳区北三环东路8号，100028</p>
            </div>
            <a href="#top" class="ToTop">
                <img src="http://z.dangdang.com/static/img/go-top.b54271a.png" alt="">
            </a>
        </footer>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import {DeserveBuying} from "../../api"

    export default {
        data() {
            return {
                data: ""
            }
        },
        async mounted() {
            const result = await DeserveBuying()
            if (result.code === 0) {
                this.data = result.data
            }0
            this.$nextTick(() => {
                this.data.shops.forEach((item,index) => {
                    new BScroll('.wrapper'+index, {
                        scrollX: true,
                        click: true
                    })
                })
            })
        },
        computed: {
            promotions() {
                return this.data.promotions.slice(0, 6)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../commen/stylus/mixins.styl"
    .deserveShopContainer
        height 2000px

    header
        .header-list
            display flex
            flex-wrap wrap
            justify-content center

            li
                border-right 1px solid #eee
                border-top 1px solid #eee
            li:

            :nth-of-type(5), li::nth-of-type(10)
                border none

            img
                width 74px
                height 78px


    main
        .discount
            width 100%
            height 340px
            background-image url("http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png")

            .discount-text
                position relative
                height 20px
                padding 15px 0 5px
                color #fff

                span
                    position absolute
                    left 50%
                    transform translateX(-50%)
                    font-size 18px
                    font-weight 700

                a
                    font-size 14px
                    float right
                    color #fff
                    font-weight 100
                    padding-right 10px

                    i
                        font-size 8px

            .discountContent
                padding 0 13px

                ul
                    display flex
                    flex-wrap wrap
                    height 290px
                    justify-content space-between
                    align-content space-between

                    li
                        width 92px
                        height 123px
                        border-radius 10px
                        background-color #fff
                        padding 10px
                        text-align center

                        p
                            font-size 13px
                            height 15px
                            white-space nowrap
                            overflow hidden
                            text-overflow ellipsis
                            text-align center

                        p:nth-of-type(2)
                            color #943dff

                        img
                            width 73px
                            height 73px
                            margin-top 15px

        .seckillShop
            height 235px
            background-repeat no-repeat
            background-size 100% 190px
            background-color #fff

            .seckillShop-header
                position relative
                height 50px

                img
                    position absolute
                    top 16px
                    left 50%
                    transform translateX(-50%)
                    width 130px
                    height 17px
                .title
                    color #fff
                    font-size 20px
                    font-weight bolder
                    text-align center
                    height 50px
                    line-height 50px
                a
                    display inline-block
                    margin 18px 12px 0 0
                    float right
                    color #fff
                    font-size 12px


            .wrapper
                height 175px
                width 100%
                overflow hidden

                .content
                    width 770px
                    display flex

                    li
                        width 100px
                        height 172px
                        margin-left 10px
                        border-radius 8px
                        overflow hidden
                        background-color #fff
                        box-shadow: 0 2px 2px #d7d7d7;

                        img
                            width 100px
                            height 104px

                        p
                            white-space nowrap
                            text-overflow ellipsis
                            overflow hidden
                            text-align center
                            font-size 12px
                            margin 4px 0

                        p:nth-of-type(2)
                            color red
                            font-size 14px
                            margin 3px 0

                        del
                            display block
                            text-align center
                            font-size 10px
                            color rgb(86, 86, 86);

                    li:last-child
                        background-color transparent
                        box-shadow none
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center
                        color #fff

                        p
                            margin-top 5px


        .shopItem
            position relative
            height 160px
            width 100%
            margin 10px 0
            background-color #fff

            .itemContainer
                position absolute
                top 10px
                height 140px
                width 100%

                .headerLeft
                    display inline-block
                    height 20px
                    text-align center
                    line-height 20px
                    padding 2px 8px
                    border-bottom-right-radius 10px
                    background-image linear-gradient(133deg, #f296bd, #ee3b31);

                a
                    font-size 14px
                    float right
                    color #333
                    font-weight 100
                    padding-right 10px

                .itemContent
                    display flex
                    padding 5px 5px

                    img
                        width 110px
                        height 110px
                        flex-shrink 0

                    .contentRight
                        padding-left 5px

                        h2
                            width 254px

                        .priceBox
                            margin-top 28px

                            .price
                                color: #f23440;
                                font-weight: 400;
                                font-size: 14px;

                            .oldPrice
                                padding 0 12px
                                font-size 10px

                            .discount
                                background-image: url("http://z.dangdang.com/static/img/bg_list_coupon.9497aaa.png")
                                color #fff
                                padding 0 2px
                                font-size 11px

                        p
                            margin-top 15px
                            text-align right

                            i
                                font-size 11px
                                color #98a6aa
                                margin-left 10px

                            i:last-child
                                color red
                                font-size 16px
                                border 1px solid #d5d5d5
                                border-radius 3px
                                padding 3px
                                margin 0 5px 0 20px

    footer
        background-color #fff

        .footer-top
            height 46px
            top-border-1px(#e5e5e5)
            bottom-border-1px(#e5e5e5)
            line-height 46px

            a
                font-size 15px
                margin-left 20px
                color #4d525d;

            a:last-child
                font-size 15px

            .toTop
                float right
                padding 0 8px

        .footer-bottom
            padding-bottom 30px

            p
                text-align center
                color #999

                a
                    padding 0 5px

            p:nth-child(1)
                height 25px
                line-height 25px

                a
                    color #323232


        .ToTop
            position fixed
            right 5px
            bottom 5px

            img
                width 40px
                height 40px


</style>
