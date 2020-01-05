<template>
    <div id='firstView' v-if="picture && redBagRain">
        <!-- 点击关闭的广告 -->
        <div class="clickAdver" ref='beClosedAdver' v-show='!sectionSearch'>
            <div class="close" @click='isClose'>
                <img src="http://touch.m.dangdang.com/images/close-app-download.png" alt="">
            </div>
            <div class="left">
                <img src="http://img61.ddimg.cn/upload_img/00742/123/zuobian-1541766933.png" alt="">
            </div>
            <div class="left">
                <img src="http://img62.ddimg.cn/upload_img/00742/123/youbian-1541766952.png" alt="">
            </div>
        </div>
        <!-- 隐藏部分 -->
        <div class='componentToSeacher' v-show='sectionSearch'>
            <div class='header'>
        <span class='backIcon' @click="isShowSearch">
          <i class='iconfont icon-houtui'></i>
        </span>
            <div class='search'>
                <div class='searchContainer'>
                    <div class='searchIcon'>
                        <i class='iconfont icon-search'></i>
                    </div>
                    <input class='searchContent' type='text' placeholder='儿童情绪管理'/>
                </div>
            </div>
            <div class='iconMenu'>
                <i class='iconfont'>搜索</i>
            </div>
            </div>
            <div class="contentInner">
                <p class='hotSearch'>
                    <i class='iconfont icon-remensousuo'></i>
                    <span>热门搜索</span>
                </p>
                <a href="http://search.m.dangdang.com/search.php?keyword=%E7%A2%A7%E7%84%B6%E5%BE%B7">
                    <ul class='hotWord'>
                        <li class="hotItemWord">安奈儿</li>
                        <li class="hotItemWord">网易严选</li>
                        <li class="hotItemWord">呼吸</li>
                        <li class="hotItemWord">秋水伊人</li>
                        <li class="hotItemWord">数学帮帮忙</li>
                        <li class="hotItemWord">数学帮帮忙</li>
                        <li class="hotItemWord">红楼梦</li>
                        <li class="hotItemWord">变量2</li>
                        <li class="hotItemWord">盗墓笔记全套全集</li>
                        <li class="hotItemWord">七田真</li>
                        <li class="hotItemWord">蚂蚁和西瓜</li>
                        <li class="hotItemWord">只有医生知道</li>
                    </ul>
                </a>
            </div>
        </div>

        <div class="first" v-show='!sectionSearch'>
            <!-- 头部的输入框+logo -->
            <div class='header'>
                <h1 class='logo'>
                    <img src="../images/logo/logo.png" alt="">
                </h1>
                <div class='search'>
                    <div class='searchContainer'>
                        <div class='searchIcon'>
                            <i class='iconfont icon-search'></i>
                        </div>
                        <input class='searchContent' @focus='isShowSearch' type='text' placeholder='米小圈'/>
                    </div>
                </div>
                <div class='iconMenu' @click="$router.push('/category')">
                    <i class='iconfont icon-mulu'></i>
                </div>
            </div>
            <!-- 轮播-->
            <a href="http://shop.m.dangdang.com/7733.html?t=1578070523">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(pic,index) in picture.swiper_url" :key='index'>
                            <img :src="pic" alt="">
                        </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </a>
            <!-- 十个商品列表 -->
            <ul class="shopList">
                <li class="shopItem" v-for="(p,index) in picture.swiper_list" :key='index'>
                    <a :href="p.path ? p.path : p.linkUrl">
                        <img :src="p.imgUrl" alt="">
                    </a>
                </li>
            </ul>
            <!-- 中间的1px的分割线 -->
            <div class="border"></div>
            <!-- 下面的今日秒杀 -->
            <div class="discount">
                <a href="http://touch.m.dangdang.com/seckill.php?t=1578069735">
                    <div class="dsTitle" v-for="(p,index) in picture.title.secKilled" :key='index'>
                        <img class='dsPic' :src="p" alt="">
                    </div>
                </a>
                <div class="dsContent">
                    <!-- 秒杀时间 -->
                    <span class="seckillingTime">
                  <span class='seckillingContent'>
                    <span class="time">
                      <van-count-down :time="time">
                        <template v-slot="timeData">
                          <span class="item">{{ timeData.hours }}</span>
                          <span class="text">时</span>
                          <span class="item">{{ timeData.minutes }}</span>
                          <span class="text">分</span>
                          <span class="item red">{{ timeData.seconds }}</span>
                          <span class="text">秒</span>
                        </template>
                      </van-count-down>
                    </span>
                  </span>
                </span>
                    <!-- 秒杀列表 -->
                    <div class="wrapper">
                        <ul class="content">
                            <li class="goodsDsItem" v-for="(item,index) in seckilledList" :key='index'>
                                <img :src="item.img_url" alt="">
                                <p class="goodsDesc">{{item.product_name}}</p>
                                <div class='price'>
                                    <p class="currentPrice">￥{{item.directPrice}}</p>
                                    <p class="oldPrice">￥{{item.origin_price}}</p>
                                </div>
                            </li>
                            <li class='goodsDsItem'>
                                <img src="http://img60.ddimg.cn/upload_img/00610/new_index/more.png" alt="">
                            </li>
                        </ul>
                        <div class='empty'></div>
                    </div>
                </div>
            </div>
            <!-- 沪江网校 -->
            <div class="interSchool" v-for="(p,index) in picture.hujiang_url" :key='index'>
                <img class='bigPicture' :src="p" alt="">
            </div>
            <div class="empty"></div>

            <!-- 全球最大的书城 -->
            <div class="bookCity">
                <!-- 上面文字部分 -->
                <div class="headerDesc">
                    <div class="titleTop" v-for="(p,index) in picture.title.bookCity" :key='index'>
                        <img :src="p" alt="">
                    </div>
                    <ul class="titleList">
                        <li class="titleItem">
                            <p class="text">当当书城</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">电子书</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">网络文学</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                    </ul>
                </div>
                <!-- 中间的1px的边框  -->
                <div class="border"></div>
                <!-- 下面的图片主体部分 -->
                <div class="bigPic" v-for="(p,index) in picture.bookCity_url" :key='index'>
                    <img class='bigPicture' :src="p" alt="">
                </div>
                <!-- 中间的1px的边框  -->
                <div class="border"></div>
                <!-- 图书列表 -->
                <!-- 第一层 -->
                <div class="bookTitleList">
                    <ul class="bookList">
                        <li class="bookItem" v-for="(p,index) in picture.firstFloor" :key='index'>
                    <span class="desc">
                      <p class='blackDesc'>{{p.name}}</p>
                      <p class='redDesc'>{{p.desc}}</p>
                    </span>
                            <span class='bookPic'>
                      <img :src="p.img_url" alt="">
                    </span>
                        </li>
                    </ul>
                </div>
                <div class="empty"></div>
            </div>

            <!-- 服装鞋包 -->
            <div class="clothesAndBag">
                <!-- 上面文字部分 -->
                <div class="headerDesc">
                    <div class="titleTop" v-for="(p,index) in picture.title.clothing" :key='index'>
                        <img :src="p" alt="">
                    </div>
                    <ul class="titleList">
                        <li class="titleItem">
                            <p class="text">服装品牌榜单</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">服装上新</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">服装馆</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                    </ul>
                </div>
                <!-- 上边的1px的边框  -->
                <div class="border"></div>
                <!-- 下面的图片主体部分 -->
                <div class="bigPic" v-for="(p,index) in picture.clothing_url" :key='index'>
                    <img class='bigPicture' :src="p" alt="">
                </div>
                <!-- 下边的1px的边框  -->
                <div class="border"></div>
                <!-- 图书列表 -->
                <!-- 第一层 -->
                <div class="firstFloorClothes">
                    <div class="leftFloorWrapper" v-for="(p,index) in picture.secondFloor.womanClothing" :key='index'>
                  <span class="leftFloorDesc">
                    <p class="topDesc">{{p.name}}</p>
                    <p class="bottomDesc">{{p.desc}}</p>
                  </span>
                        <div class="imgDesc">
                            <img :src="p.img_url" alt="">
                        </div>
                    </div>
                    <ul class="rightFloorWrapper">
                        <li class="rightFloorItem" v-for="(p,index) in picture.secondFloor.childrenShoes" :key='index'>
                            <div class="rightFloorDesc">
                                <p class='blackDesc'>{{p.name}}</p>
                                <p class='redDesc'>{{p.desc}}</p>
                            </div>
                            <span class='rightFloorPic'>
                      <img :src="p.img_url" alt="">
                    </span>
                        </li>
                    </ul>
                </div>
                <!-- 第二层 -->
                <ul class="secondFloorShoes">
                    <li class='shoesList' v-for="(p,index) in picture.secondFloor.exercises" :key='index'>
                        <div class="leftDesc">
                            <p class="topDesc">
                                {{p.name}}
                            </p>
                            <p class="bottomDesc">
                                {{p.desc}}
                            </p>
                        </div>
                        <div class="leftPic">
                            <img :src="p.img_url" alt="">
                        </div>
                    </li>
                </ul>

                <!-- 第三层 -->
                <ul class="thirdFloorShoes">
                    <li class="thirdShoeItem" v-for="(p,index) in picture.secondFloor.studentsBags" :key='index'>
                        <div class="shoesDesc">
                            <p class="topDesc">{{p.name}}</p>
                            <p class="bottomDesc">{{p.desc}}</p>
                        </div>
                        <div class="shoesPic">
                            <img :src="p.img_url" alt="">
                        </div>
                    </li>
                </ul>
                <!-- 中间的10px -->
                <div class="empty"></div>
            </div>

            <!-- 聚实惠 -->
            <div class="focusBenefit">
                <!-- 上面文字部分 -->
                <div class="headerDesc">
                    <div class="titleTop" v-for="(p,index) in picture.title.focus" :key='index'>
                        <img :src="p" alt="">
                    </div>
                    <ul class="titleList">
                        <li class="titleItem">
                            <p class="text">服装品牌榜单</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">服装上新</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                        <li class="titleItem">
                            <p class="text">服装馆</p>
                            <i class="iconfont icon-youcejiantou"></i>
                        </li>
                    </ul>
                </div>
                <!-- 上边的1px的边框  -->
                <div class="border"></div>
                <!-- 下面的图片主体部分 -->
                <div class="bigPic" v-for="(p,index) in picture.focusBenefit_url" :key='index'>
                    <img class='bigPicture' :src="p" alt="">
                </div>
                <!-- 下边的1px的边框  -->
                <div class="border"></div>
                <!-- 列表 -->
                <!-- 第一层 -->
                <ul class="secondFloorShoes">
                    <li class='shoesList' v-for="(p,index) in picture.thirdFloor.goods" :key='index'>
                        <div class="leftDesc">
                            <p class="topDesc">
                                {{p.name}}
                            </p>
                            <p class="bottomDesc">
                                {{p.desc}}
                            </p>
                        </div>
                        <div class="leftPic">
                            <img :src="p.img_url" alt="">
                        </div>
                    </li>

                </ul>
                <!-- 第二层 -->
                <ul class="thirdFloorShoes">
                    <li class="thirdShoeItem" v-for="(p,index) in picture.thirdFloor.secKilledSingle" :key='index'>
                        <div class="shoesDesc">
                            <p class="topDesc">{{p.name}}</p>
                            <p class="bottomDesc">{{p.desc}}</p>
                        </div>
                        <div class="shoesPic">
                            <img :src="p.img_url" alt="">
                        </div>
                    </li>
                </ul>
                <!-- 中间的17px -->
                <div class="bottomBorder"></div>
            </div>
            <!-- 偏好推荐 -->
            <div class="preference">
                <h2 class="titleDesc">
                    <div class="titleDetail">
                        <i class='iconfont icon-weixuanzhongcopy'></i>
                        <p class="text">根据您的偏好猜您可能喜欢</p>
                    </div>
                </h2>
                <ul class="preferList">
                    <li class="preferItem" v-for='(data,index) in datas.reco_list' :key='index'>
                        <div class="dataNormal" v-if='data.beloved_tag===0'>
                            <div class="preferPic">
                                <img :src="data.image_url" alt="">
                            </div>
                            <span class="preferTitle">
                    {{data.name}}
                  </span>
                            <div class="business">
                                <div class="title" v-for="(tag,index) in data.productTags" :key='index'>
                                    <p class="businessNormal" v-if='tag.type === 0'>{{tag.name}}</p>
                                    <p class="businessRed" v-else>{{tag.name}}</p>
                                </div>
                            </div>
                            <div class="price">
                                <i class='iconfont icon-jiage'></i>
                                <p class="text">{{data.price}}</p>
                            </div>
                        </div>
                        <div class="dataFirst" v-if='data.beloved_tag===1'>
                            <!-- 结构 -->
                            <h1 class="preferPic">
                                <img src='../images/circle.png' alt="">
                                <p>为你推荐</p>
                                <img src='../images/circle.png' alt="">
                            </h1>
                            <span class="preferTitle">
                    <img :src="data.image_url" alt="">
                  </span>
                            <span class="business">
                  {{data.second_category_name}}
                  </span>
                            <div class="price">
                  <span>
                    点击查看
                  </span>
                            </div>
                        </div>

                        <div class="dataSecond" v-if='data.beloved_tag===2'>
                            <!-- 结构 -->
                            <h1 class="preferPic">
                                <img src='../images/circle.png' alt="">
                                <p>为你推荐</p>
                                <img src='../images/circle.png' alt="">
                            </h1>
                            <span class="preferTitle">
                    <img :src="data.image_url" alt="">
                  </span>
                            <span class="business">
                  {{data.second_category_name}}
                  </span>
                            <div class="price">
                  <span>
                    点击查看
                  </span>
                            </div>
                        </div>


                    </li>
                </ul>
                <div class="preferBottom">
                    <div class="preferTitle">
                        <div class="preferDesc">
                            <img class='smile' src="../images/icon_smile.png" alt="">
                            <p class="text">到底了，再拉裤子都掉了</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 底部的版权信息 -->
            <footer class='footer'>
                <div class="footer-top">
                    <a href="#">登录</a>
                    <a href="#">注册</a>
                    <a href="#top" class="toTop"><i class="iconfont icon-web-icon-"></i>TOP</a>
                </div>
                <div class="footer-bottom">
                    <p class='footerDesc'>
                        <a href="#">提建议</a>
                        <a href="#">触屏版</a>
                        <a href="#">电脑版</a>
                        <a href="#">帮 助</a>
                    </p>
                    <p>Copyright ?2018 北京当当网信息技术有限公司</p>
                    <p>北京市朝阳区北三环东路8号，100028</p>
                </div>
                <a href="#top" class="ToTop">
                    <img src="http://z.dangdang.com/static/img/go-top.b54271a.png" alt="">
                </a>
            </footer>
            <!-- 侧边导航 -->
            <div class="adver" @click="isShowAdver = !isShowAdver" v-show='isShowAdver'>
                <span>广</span>
                <span>告</span>
                <span>x</span>
            </div>
            <!-- 红包雨 -->
            <div class="rBR">
                <div class="redBagRain" v-for='(rb,index) in redBagRain.data.hongbaoyu.activity_list' :key='index'
                     @click="$router.push('/red_bag_rain')">
                    <img :src="rb.icon_h5" alt="">
                </div>
            </div>
            <!-- 到顶部 -->
            <a href='#top' class="switchTop" ref="switchTop">
                <img src="http://touch.m.dangdang.com/images/go-top.png" alt="">
            </a>
            <!-- end111111111111111111111111111111111111111end -->
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import "swiper/css/swiper.css"
    import BScroll from "better-scroll"
    import {reqHome, reqSecKilled, reqPicture, reqRedBagRain} from '../../api'
    import Vue from 'vue'
    import {CountDown} from 'vant'

    Vue.use(CountDown);
    export default {
        data() {
            return {
                datas: "",
                seckilledDatas: [],
                picture: "",
                isShowAdver: true,
                redBagRain: "",
                time: 6 * 60 * 60 * 1000,
                sectionSearch: false
            }
        },
        computed: {
            seckilledList() {
                return this.seckilledDatas.filter((item) => item.img_url)
            }
        },
        async mounted() {
            window.addEventListener("scroll",() => {
                if(this.$refs.switchTop){
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    if(scrollTop >= 1000){
                        this.$refs.switchTop.style.display = "block"
                    } else {
                        this.$refs.switchTop.style.display = "none"
                    }
                }
            })

            let result = await reqSecKilled()
            if (result.code === 0) {
                this.seckilledDatas = result.data.productsInfo
            }
            this.datas = await reqHome()

            this.picture = await reqPicture()

            this.redBagRain = await reqRedBagRain()

            this.$nextTick(() => {
                new BScroll('.wrapper', {
                    scrollX: true,
                    click: true
                }),
                    new Swiper('.swiper-container', {
                        loop: true,
                        autoplay: true,
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    })
            })
        },
        methods: {
            isClose() {
                this.$refs.beClosedAdver.remove()
            },
            isShowSearch() {
                this.sectionSearch = !this.sectionSearch
                this.$store.commit("setSectionSearch",this.sectionSearch)
            }
        }
    }
</script>

<style lang='stylus' scoped>
    #firstView
        width 100%
        height 100%
        background-color #eff4fa

        .clickAdver
            width 100%
            height 70px
            position relative
            display flex

            .left
                width 50%
                height 100%

                img
                    width 100%
                    height 100%

            .right
                width 50%
                height 100%

                img
                    width 100%
                    height 100%

            .close
                width 25px
                height 25px
                position absolute
                top 11px
                right 11px

                img
                    width 100%
                    height 100%

        .header
            width 100%
            height 44px
            display flex

            .logo
                width 11%
                height 100%

                img
                    display block
                    width 70%
                    height 68%
                    margin 12% auto
                    box-sizing border-box

            .search
                width 78%
                height 25px
                margin-top 9px
                box-sizing border-box

                .searchContainer
                    width 100%
                    height 100%
                    display flex
                    border-radius 24px
                    background-color #e8ecf0

                    ::placeholder
                        color #7a8992
                        font-size 12px

                    .searchIcon
                        width 17px
                        height 100%
                        line-height 25px
                        margin-left 10px
                        margin-right 5px

                        .icon-search
                            font-size 18px
                            line-height 30px
                            color #b5bec5

                    .searchContent
                        width 170px
                        height 100%
                        background-color #e8ecf0
                        border-radius 24px
                        border none
                        outline none

            .iconMenu
                width 11%
                height 100%
                box-sizing border-box
                text-align center

                .icon-mulu
                    font-size 24px
                    line-height 44px
                    color #7a8992

        .componentToSeacher
            width 100%
            height 100%

            .header
                width 100%
                height 45px
                background-color white

                .backIcon
                    display inline-block
                    text-align center
                    width 11%
                    height 100%

                    .iconfont
                        font-size 26px
                        height 45px
                        line-height 45px
                        color #646464

                .search
                    height 30px
                    line-height 30px
                    margin auto 0

                    .searchContainer
                        .searchContent
                        ::placeholder
                            color #b5bec5
                            font-size 14px

                .iconMenu
                    i
                        font-size 13px
                        line-height 45px
                        color #646464

            .contentInner
                position absolute
                top 44px
                bottom 0
                background-color #f2f2f2
                width 100%
                height 100vh
                padding-left 10px

                .hotSearch
                    height 32px
                    line-height 32px
                    color #646464

                    span
                        font-size 13px
                        color #646464

                .hotWord
                    height 28px
                    line-height 28px
                    font-size 13px

                    display flex
                    flex-wrap wrap

                    li
                        height 100%
                        padding 0 13px
                        height 28px
                        line-height 28px
                        margin-bottom 5px
                        margin-right 5px
                        border-radius 4px
                        color #464646
                        font-size 13px
                        text-align center
                        background-color white


        .swiper-container
            img
                width 100%
                height 110px

        .shopList
            width 100%
            display flex
            flex-wrap wrap

            .shopItem
                width 20%
                height 77px

                img
                    width 100%
                    height 100%

        .border
            height 1px
            width 100%
            background-color #eff4fa

        .discount
            width 100%
            background-color white

            .dsTitle
                width 100%
                height 41px

                .dsPic
                    width 100%
                    height 41px

            .dsContent
                width 100%

                .seckillingTime
                    width 100%
                    height 50px
                    display inline-block
                    text-align center

                    .seckillingContent
                        display inline-block
                        width 100%
                        height 25px
                        padding-top 3px
                        box-sizing border-box

                        .time
                            display inline-block
                            width 100%
                            height 25px
                            text-align center
                            line-height 25px

                            .item
                                display inline-block
                                width 19px
                                height 21px
                                color #fff
                                font-size 14px
                                text-align center
                                line-height 21px
                                background-color #323232
                                border-radius 5px

                            .red
                                background-color red

                            .text
                                display inline-block
                                text-align center
                                line-height 25px
                                width 13px
                                height 100%
                                font-size 13px
                                margin 0 6px


                .wrapper
                    overflow hidden
                    width 100%

                    .content
                        width 1590px
                        display flex

                        .goodsDsItem
                            width 106px
                            padding 0 5px
                            display flex
                            flex-direction column

                            img
                                width 96px
                                height 96px

                            .goodsDesc
                                fint-size 16px
                                margin-top 9px
                                color #323232
                                line-height 19px
                                height 40px
                                display -webkit-box
                                -webkit-box-orient vertical
                                -webkit-line-clamp 2
                                overflow hidden
                                text-overflow ellipsis

                            .price
                                width 100%
                                height 35px
                                padding 6px 0 14px 0
                                display flex
                                flex-direction column

                                .currentPrice
                                    height 19px
                                    line-height 19px
                                    font-size 14px
                                    color red

                                .oldPrice
                                    height 16px
                                    line-height 16px
                                    font-size 10px
                                    color #bababa
                                    text-decoration line-through

        .empty
            width 100%
            height 10px
            background-color #eff4fa

        .interSchool
            width 100%
            height 100px

        .bigPicture
            width 100%
            height 100px

        .bookCity
            width 100%
            background-color white

        .headerDesc
            width 100%
            height 62px

            .titleTop
                width 100%
                height 40px

                img
                    width 100%
                    height 100%

            .titleList
                width 100%
                height 14px
                box-sizing border-box
                display inline-block
                text-align center

                .titleItem
                    height 14px
                    line-height 14px
                    margin-right 10px
                    display inline-block

                    p
                        font-size 12px
                        display inline-block
                        margin-right 5px

                    .iconfont
                        font-size 12px
                        color black

        .bookTitleList
            width 100%
            height 390px

            .bookList
                width 100%
                height 100%
                display flex
                flex-wrap wrap

            .bookItem
                width 33.333%
                height 33.333%
                display flex
                flex-direction column
                box-sizing border-box
                border-right 1px solid #eff4fa
                border-bottom 1px solid #eff4fa

                &::nth-of-type(3n+3)
                    border-right none

                .desc
                    width 100%
                    height 48px
                    padding 13px 9px 0 10px
                    text-align center
                    display flex
                    flex-direction column
                    box-sizing border-box

                    .blackDesc
                        height 17px
                        font-size 14px

                    .redDesc
                        height 14px
                        font-size 12px
                        color red

                .bookPic
                    width 100%
                    height 100px

                    img
                        width 83px
                        height 83px
                        display block
                        margin 0 auto

        .clothesAndBag
            width 100%
            height 560px
            background-color white

        .firstFloorClothes
            width 100%
            height 172px
            display flex

            .leftFloorWrapper
                width 50%
                height 100%
                display flex
                position relative
                box-sizing border-box
                border-right 1px solid #eff4fa
                border-bottom 1px solid #eff4fa

                .leftFloorDesc
                    width 56px
                    height 100%
                    padding 7px 8px 0
                    display flex
                    flex-direction column

                    .topDesc
                        width 100%
                        height 14px
                        font-size 14px

                    .bottomDesc
                        width 100%
                        margin-top 3px
                        height 12px
                        font-size 12px
                        color #c72895

                .imgDesc
                    position absolute
                    right 0
                    bottom 0
                    width 100px
                    height 100px

                    img
                        width 100px
                        height 100px

            .rightFloorWrapper
                width 50%
                height 100%
                display flex
                flex-direction column

                .rightFloorItem
                    width 100%
                    height 50%
                    display flex
                    position relative
                    border-left 1px solid #eff4fa
                    border-bottom 1px solid #eff4fa
                    box-sizing border-box

                    .rightFloorDesc
                        width 70px
                        height 100%
                        display flex
                        padding-left 8px
                        flex-direction column
                        justify-content center

                        .blackDesc
                            height 14px
                            color #323232
                            font-size 14px
                            line-height 14px

                        .redDesc
                            height 12px
                            color #c72895
                            font-size 12px
                            line-height 12px
                            margin-top 3px

                    .rightFloorPic
                        position absolute
                        right 0
                        bottom 3px
                        width 66px
                        height 66px
                        margin auto

                        img
                            width 100%
                            height 100%

        .secondFloorShoes
            width 100%
            height 85px
            display flex

            .shoesList
                width 50%
                height 100%
                display flex
                box-sizing border-box
                position relative
                border-right 1px solid #eff4fa
                border-bottom 1px solid #eff4fa

                .leftDesc
                    width 52px
                    height 66px
                    padding 3px 35px 3px 10px
                    display flex
                    flex-direction column
                    justify-content center

                    .topDesc
                        height 14px
                        color #323232
                        overflow hidden
                        font-size 14px
                        line-height 14px

                    .bottomDesc
                        height 12px
                        overflow hidden
                        color #c72895
                        font-size 12px
                        line-height 12px
                        margin-top 3px

                .leftPic
                    width 66px
                    height 66px
                    position absolute
                    top 2px
                    right 0

                    img
                        display block
                        width 100%
                        height 100%

        .thirdFloorShoes
            width 100%
            height 127px
            display flex

            .thirdShoeItem
                width 25%
                height 100%
                display flex
                flex-direction column
                box-sizing border-box
                border-right 1px solid #eff4fa
                border-bottom 1px solid #eff4fa

                .shoesDesc
                    width 100%
                    height 44px
                    text-align center
                    padding 12px 2px 0
                    box-sizing border-box

                    .topDesc
                        display block
                        height 16px
                        line-height 16px
                        font-size 14px
                        color #323232
                        overflow hidden

                    .bottomDesc
                        display block
                        height 12px
                        line-height 12px
                        color #c72895
                        font-size 12px
                        overflow hidden

                .shoesPic
                    width 75px
                    height 75px
                    margin 0 auto

                    img
                        display block
                        width 100%
                        height 100%

        .bottomBorder
            width 100%
            height 17px
            background-color #eff4fa

        .focusBenefit
            width 100%
            height 388px
            background-color white

            .secondFloorShoes
                width 100%
                height 85px
                display flex

                .shoesList
                    width 50%
                    height 100%
                    display flex
                    box-sizing border-box
                    position relative
                    border-right 1px solid #eff4fa
                    border-bottom 1px solid #eff4fa

                    .leftDesc
                        width 66px
                        height 80px
                        padding 3px 0 3px 10px
                        display flex
                        flex-direction column
                        justify-content center

                        .topDesc
                            height 17px
                            color #323232
                            overflow hidden
                            font-size 14px
                            line-height 17px

                        .bottomDesc
                            height 15px
                            overflow hidden
                            color #6770f2
                            font-size 12px
                            line-height 15px
                            margin-top 3px

                    .leftPic
                        width 79px
                        height 79px
                        position absolute
                        top 2px
                        right 0

                        img
                            display block
                            width 100%
                            height 100%

            .thirdFloorShoes
                .thirdShoeItem
                    .shoesDesc
                        .topDesc
                            display block
                            height 17px
                            line-height 17px
                            font-size 14px
                            color #323232
                            overflow hidden

                        .bottomDesc
                            display block
                            height 15px
                            line-height 15px
                            color #6770f2
                            font-size 12px
                            overflow hidden

        .preference
            width 100%
            display flex
            flex-direction column
            background-color #eff4fa

            .titleDesc
                width 224px
                height 18px
                margin 13px auto
                background-color #eff4fa
                text-align center
                position relative

                &::before
                    content: ''
                    position absolute
                    top 9px
                    left 0
                    width 100%
                    height 1px
                    background-color #d9dfe6
                    z-index 10

                .titleDetail
                    position relative
                    width 192px
                    height 100%
                    display inline-block
                    background-color #eff4fa
                    z-index 22

                    .iconfont
                        color #f3344a
                        line-height 20px
                        font-size 13px
                        padding-right 8px
                        display inline-block

                    .text
                        line-height 20px
                        font-size 13px
                        color #313c47
                        display inline-block

            .preferList
                width 100%
                height 100%
                display flex
                flex-wrap wrap
                justify-content space-between

                .preferItem
                    width 185px
                    height 260px
                    padding-bottom 10px
                    margin-bottom 5px
                    display flex
                    flex-direction column
                    background-color white

                    .dataNormal
                        width 100%
                        height 186px

                        .preferPic
                            width 100%
                            height 186px

                            img
                                width 100%
                                height 100%

                        .preferTitle
                            height 30px
                            line-height 15px
                            box-sizing border-box
                            margin 5px 0 0
                            padding 0 5px
                            font-size 13px
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 2
                            overflow hidden
                            text-overflow ellipsis

                        .business
                            height 21px
                            padding 5px 5px 0
                            box-sizing border-box
                            display flex

                            .title
                                height 15px

                                .businessNormal
                                    display inline-block
                                    height 15px
                                    line-height 13px
                                    border 1px solid #f2303c
                                    padding 1px 2px 0
                                    box-sizing border-box
                                    margin-right 3px
                                    font-size 10px
                                    color #f2303c
                                    border-radius 2px

                                .businessRed
                                    display inline-block
                                    height 15px
                                    line-height 13px
                                    color white
                                    background-color red
                                    border 1px solid #f2303c
                                    padding 1px 2px 0 1px
                                    box-sizing border-box
                                    margin-right 3px
                                    font-size 10px
                                    border-radius 2px

                        .price
                            width 48px
                            height 20px
                            color #e53e30
                            margin 0 13px 0 4px
                            display flex

                            .iconfont
                                width 12px
                                line-height 20px
                                font-size 18px
                                font-weight 500
                                margin-right 4px
                                color #e53e30

                            .text
                                font-size 14px
                                line-height 20px
                                color #e53e30

                    .dataFirst
                        width 100%
                        height 186px
                        background-image url("http://touch.m.dangdang.com/images/recommend_bg@3x.png")
                        background-size 100% 100%

                        .preferPic
                            width 100%
                            height 32px
                            line-height 32px
                            display inline-block
                            text-align center

                            img
                                display inline-block
                                width 6px
                                height 6px

                            p
                                display inline-block
                                width 56px
                                height 32px
                                font-size 11px
                                color white

                        .preferTitle
                            display block
                            width 156px
                            height 156px
                            box-sizing border-box
                            margin 0 16px
                            padding 18px
                            background-color white
                            box-shadow 0 2px 5px rgba(0, 0, 0, 0.1)
                            border-radius 10px

                            img
                                display block
                                width 120px
                                height 120px

                        .business
                            display inline-block
                            height 48px
                            width 100%
                            text-align center
                            line-height 48px
                            font-size 13px

                        .price
                            width 100%
                            height 24px
                            display inline-block
                            text-align center

                            span
                                display inline-block
                                width 71px
                                height 100%
                                line-height 24px
                                color #b0d1f9
                                border 1px solid #b0d1f9
                                font-size 10px
                                text-align center
                                border-radius 30px

                    .dataSecond
                        width 100%
                        height 186px
                        background-image url('http://touch.m.dangdang.com/images/shop_bg@3x.png')
                        background-size 100% 100%

                        .preferPic
                            width 100%
                            height 32px
                            line-height 32px
                            display inline-block
                            text-align center

                            img
                                display inline-block
                                width 6px
                                height 6px

                            p
                                display inline-block
                                width 56px
                                height 32px
                                font-size 11px
                                color white

                        .preferTitle
                            display block
                            width 156px
                            height 156px
                            box-sizing border-box
                            margin 0 16px
                            padding 18px
                            background-color white
                            box-shadow 0 2px 5px rgba(0, 0, 0, 0.1)
                            border-radius 10px

                            img
                                display block
                                width 120px
                                height 120px

                        .business
                            display inline-block
                            height 48px
                            width 100%
                            text-align center
                            line-height 48px
                            font-size 13px

                        .price
                            width 100%
                            height 24px
                            display inline-block
                            text-align center

                            span
                                display inline-block
                                width 71px
                                height 100%
                                line-height 24px
                                color #b0d1f9
                                border 1px solid #b0d1f9
                                font-size 10px
                                text-align center
                                border-radius 30px

            .preferBottom
                width 100%
                height 40px
                display flex
                background-color #eff4fa
                justify-content space-around

                .preferTitle
                    width 190px
                    height 20px
                    margin 10px auto
                    position relative

                    &::before
                        content ''
                        position absolute
                        top 10px
                        left 0
                        background-color #d9dfe6
                        height 1px
                        width 100%
                        z-index 1

                    .preferDesc
                        width 163px
                        height 100%
                        margin 0 auto
                        padding 5px 0 0 9px
                        box-sizing border-box
                        position relative
                        background-color #eff4fa
                        z-index 2

                        .smile
                            width 20px

                        .text
                            position absolute
                            top 5px
                            left 38px
                            font-size 11px
                            color #9ca8b6

        .footer
            height 187px
            background-color #fff

            .footer-top
                height 46px
                box-sizing border-box
                border-bottom 1px solid #e5e5e5
                border-top 1px solid #e5e5e5
                line-height 46px

                a
                    font-size 14px
                    margin-left 20px
                    color #4d525d

                .toTop
                    float right
                    padding 0 8px

            .footer-bottom
                padding-bottom 30px

                p
                    text-align center
                    color #999
                    height 16px

                    a
                        height 100%
                        line-height 16px
                        font-size 12px
                        padding 0 5px

                .footerDesc
                    width 355px
                    height 26px
                    line-height 26px
                    margin 5px auto
                    font-size 13px
                    color #323232

                    a
                        padding 0 5px

                        &:nth-of-type(2)
                            color red

            .ToTop
                position fixed
                right 5px
                bottom 5px

                img
                    width 40px
                    height 40px

        .adver
            width 14px
            height 35px
            padding 4px 0 2px
            position fixed
            right 0px
            top 180px
            text-align center
            z-index 100
            box-sizing border-box
            display flex
            flex-direction column
            border-top-left-radius 5px
            border-bottom-left-radius 5px
            background-color rgba(166, 166, 166, .8)

            span
                font-size 9px
                color white
                line-height 10px

        .rBR
            width 50px
            height 50px
            position fixed
            right 3px
            top 350px

            .redBagRain
                width 100%
                height 100%

                img
                    width 100%
                    height 100%

        .switchTop
            display none
            width 40px
            height 40px
            position fixed
            right 12px
            bottom 50px

            img
                width 100%
                height 100%
</style>
