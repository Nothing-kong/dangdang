<template>
    <div id="categoryContainer">
        <AllPagesHeader/>
        <!-- 内容区,动态显示 -->
        <div class="navContainer" v-if="!isSearch && allCategoryObj" :class="{searchDown:showGuide}">
            <!-- 左侧导航列表 -->
            <div class="wrapper wrapperLeft" ref="left">
                <ul class="allCategoryObj" ref="leftUl">
                    <li
                        :class="{on: index === currentIndex}"
                        v-for="(item,index) in allCategoryObj"
                        :key="index"
                        @click="handleClick(index)"
                    >
                        <a href="#">{{item.content.title}}</a>
                    </li>
                </ul>
            </div>
            <!-- 右侧内容大容器 -->
            <div class="wrapper" ref="right">
                <div class="rightNav" v-if="currentObj.content">
                    <!-- 右侧大图 -->
                    <div class="navImg" v-if="currentObj.content.banner.length >=1">
                        <img
                            :src="currentObj.content.banner[0].img"
                            v-if="currentObj.content.banner.length === 1"
                        />
                        <div class="swiper-container" v-if="currentObj.content.banner.length > 1">
                            <div class="swiper-wrapper">
                                <div
                                    class="swiper-slide"
                                    v-for="(item,index) in currentObj.content.banner"
                                    :key="index"
                                >
                                    <img :src="item.img"/>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                    <!-- 右侧小导航 -->
                    <div class="miniBanner" v-if="currentObj.content">
                        <div
                            class="mini_bannner"
                            v-for="(item,index) in currentObj.content.mini_banner.content"
                            :key="index"
                            :class="{allWidth:currentObj.content.mini_banner.content.length == 1}"
                        >
                            <h3>{{item.promo_title}}</h3>
                            <p>{{item.promo_text}}</p>
                            <span>
                <i class="iconfont icon-jiantou1"></i>
              </span>
                        </div>
                    </div>
                    <!-- 右侧内容展示 -->
                    <div v-if="currentObj.content">
                        <div v-for="(pItem,index) in currentObj.content.pile" :key="index">
                            <div class="hasImgContainer" v-for="(item,index) in pItem.group" :key="index">
                                <!-- 分类style-type为2 -->
                                <div class="bookListContainer" v-if="item.style_type == 2">
                                    <p class="bookTitle">{{item.group_name || item.pile_name}}</p>
                                    <ul class="booksList">
                                        <li v-for="(dItem,index) in item.detail" :key="index">
                                            <img :src="dItem.icon"/>
                                            <p>{{dItem.title}}</p>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 分类style-type为1 -->
                                <div class="fictionContainer" v-if="item.style_type == 1">
                                    <div class="fictionHeader">
                                        <span class="fictionHeaderLeft bookTitle">{{item.group_name}} ></span>
                                        <span class="fictionHeaderRight"
                                              @click="goto('/library')">{{item.more}} ></span>
                                    </div>

                                    <div class="fictionUpContent">
                                        <ul class="upList" v-if="!item.show">
                                            <li v-for="(i,index) in item.detail" :key="index" v-show="index < 5"><p>
                                                {{i.title}}</p></li>
                                            <li class="fold" @click="toggleUnfold(item,true)">
                                                <p>查看更多</p>
                                                <span>
                          <i class="iconfont icon-zhankai"></i>
                        </span>
                                            </li>
                                        </ul>
                                        <ul class="upList" v-if="item.show">
                                            <li v-for="(i,index) in item.detail" :key="index"><p>{{i.title}}</p></li>
                                            <li class="fold" @click="toggleUnfold(item,false)">
                                                <p>收起</p>
                                                <span>
                          <i class="iconfont icon-zhankai"></i>
                        </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- 分类style-type为3 -->
                                <div class="booksContainer" v-if="item.style_type == 3">
                                    <div class="fictionHeader">
                                        <span class="fictionHeaderLeft bookTitle">{{item.group_name}} ></span>
                                        <span class="fictionHeaderRight"
                                              @click="goto('/library')">{{item.more}} ></span>
                                    </div>
                                    <div class="boonsContent">
                                        <p v-for="(Ditem,index) in item.detail" :key="index">{{Ditem.title}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 搜索区展示 -->
        <div class="mask" v-if="isSearch">
            <!-- 搜索展示的头部 -->
            <header>
        <span>
          <i class="iconfont icon-remensousuo"></i>
        </span>
                <span class="title">热门搜索</span>
            </header>
            <!-- 搜索展示的内容区 -->
            <section>
                <span>安奈儿</span>
                <span>网易严选</span>
                <span>呼吸</span>
                <span>秋水伊人</span>
                <span>数学帮帮忙</span>
                <span>数学帮帮忙</span>
            </section>
            <!-- 空白区域 -->
            <!-- <div class="blank"></div> -->
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import Swiper from "swiper"
    import "swiper/css/swiper.css"
    import BScroll from "better-scroll"
    import {reqCategory} from "../../api/index"

    export default {
        data() {
            return {
                allCategoryObj: [],
                isShow: false,
                currentIndex: 0,
                currentObj: {},
                styleType: "",
                showList: false,
                isSearch: false,
                showGuide: false
            }
        },

        async mounted() {
            //发异步请求
            this.allCategoryObj = await reqCategory("/category")
            //修改初始化数据为图书页面
            this.currentObj = this.allCategoryObj[this.currentIndex]
            //右侧滑动
            this.$nextTick(() => {
                this.leftScroll = new BScroll(this.$refs.left, {
                    scrollY: "true",
                    click: true
                })
                new BScroll(this.$refs.right, {
                    scrollY: "true",
                    click: true
                })
            })
        },
        methods: {
            toggleUnfold(item, flag) {
                this.$set(item, 'show', flag)
            },
            handleClick(index) {
                //根据下标获取当前对象
                this.currentObj = this.allCategoryObj[index]
                //点击移动
                //获取top值
                let top = index * 47
                if(index < 19){
                    this.leftScroll.scrollTo(0, -top, 500)
                }
                return (this.currentIndex = index)
            },
            goto(path) {
                //判断输入框是否为获取焦点状态
                if (this.isSearch) {
                    //将isSearch修改为false
                    this.isSearch = false
                    return
                }
                if (this.$route.path !== path) {
                    this.$router.replace(path)
                } else { // 如果请求的时当前的, 直接强制刷新
                    window.location.reload()
                }
            },
            handleSearch() {
                //修改展示导航的状态
                this.showGuide = false
                this.isSearch = true
            },
            handleGuide() {
                this.showGuide = !this.showGuide
            }
        },

        watch: {
            currentObj() {
                this.$nextTick(() => {
                    new Swiper(".swiper-container", {
                        loop: true,
                        autoplay: true,
                        pagination: {
                            el: ".swiper-pagination"
                        }
                    })
                })
            }
        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #categoryContainer
        header
            width 100%
            height 45px
            display flex
            line-height 45px
            position relative

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
                border-top 1px solid #eee
                display flex
                position absolute
                top 45px
                left 0
                width 100%
                height 50px
                padding 6px 0
                box-sizing border-box
                background-color #eee

                .guide_item
                    display flex
                    flex-direction column
                    text-align center
                    width 20%
                    height 50px
                    margin-top 10px

                    &.on
                        color red

                    span
                        margin-top -25px
                        font-size 12px

                        .iconfont
                            font-size 18px

        .searchDown
            margin-top 50px
            transition all 0.5s

        .navContainer
            background-color #eff4fa
            border-top 1px solid #eee
            transition all 0.5s

            .bookTitle
                padding 7px 0 0 14px
                font-size 13px
                font-weight bold

            .wrapperLeft
                width 80px
                float left

                .allCategoryObj
                    width 80px
                    height 1410px
                    background-color #eff4fa

                    li
                        width 100%
                        height 47px
                        background-color #fff

                        &.on
                            background-color #eff4fa

                            a
                                color red

                        a
                            display block
                            width 100%
                            height 100%
                            font-size 14px
                            text-align center
                            line-height 47px

            .wrapper
                height 575px
                overflow hidden

                .rightNav
                    float left
                    width 286px
                    max-height 8500px
                    padding-left 9px
                    background-color #eff4fa

                    .navImg
                        width 286px
                        height 102 p

                        img
                            width 100%
                            height 100%

                    .miniBanner
                        height 69px
                        display flex
                        justify-content space-between
                        overflow hidden

                        .mini_bannner
                            width 92px
                            height 40px
                            line-height 15px
                            margin-top 10px
                            padding 13px 35px 13px 13px
                            background-color #fff
                            margin-right 1px
                            position relative
                            overflow hidden

                            &.allWidth
                                width 100%

                            h3
                                font-size 15px
                                font-weight bold
                                margin-bottom 6px

                            p
                                color #8e8e8e

                            .iconfont
                                position absolute
                                top 0
                                right 0
                                width 34px
                                height 60px
                                line-height 60px
                                text-align center
                                font-size 20px

                        .mini_right
                            margin-left 5px

                .hasImgContainer
                    margin-top 10px

                    .bookListContainer
                        width 286px
                        min-height 120px
                        background-color white
                        margin-top 10px
                        overflow hidden

                        .booksList
                            li
                                float left
                                width 80px
                                height 114px
                                padding 15px 6px 2px 6px

                                img
                                    width 68px
                                    height 68px

                                p
                                    font-size 12px
                                    text-align center
                                    line-height 25px
                                    color #8e8e8e

                    .fictionContainer
                        width 286px
                        margin-top 10px
                        background-color #fff

                        .fictionHeader
                            box-sizing border-box
                            width 100%
                            height 35px

                            .fictionHeaderLeft
                                float left

                            .fictionHeaderRight
                                float right
                                margin-right 14px
                                margin-top 7px
                                color #8e8e8e

                        .fictionUpContent
                            width 286px
                            min-height 49px

                            .upList
                                // height 98px
                                overflow hidden
                                position relative
                                display flex
                                flex-wrap wrap
                                justify-content space-between
                                padding 0 14px

                                li
                                    width 33.3333%
                                    height 44px
                                    text-align center
                                    vertical-align middle
                                    border-bottom 1px solid #eee
                                    display flex
                                    align-items center
                                    position relative

                                    p
                                        width 100%
                                        font-size 13px
                                        text-align center

                                    &:after
                                        content ''
                                        width 1px
                                        height 14px
                                        background-color #e1e1e1
                                        position absolute
                                        top 50%
                                        right 0
                                        margin-top -7px

                                li:nth-of-type(3n):after
                                    width 0

                                li:last-child:after
                                    width 0

                                .unfold, .fold
                                    color #bababa
                                    text-align center

                                    .iconfont
                                        font-size 12px

                    .booksContainer
                        width 286px
                        margin-top 10px
                        background-color #fff

                        .fictionHeader
                            box-sizing border-box
                            width 100%
                            height 35px

                            .fictionHeaderLeft
                                float left

                            .fictionHeaderRight
                                float right
                                margin-right 14px
                                margin-top 7px
                                color #8e8e8e

                        .boonsContent
                            p
                                width 259px
                                height 48px
                                line-height 48px
                                padding-left 10px
                                color #4d525d
                                border-bottom 1px solid #eee

        .mask
            background-color #eee
            overflow hidden

            header
                width 80%
                height 40px
                color #646464
                font-size 14px
                line-height 40px

                .iconfont
                    font-size 16px

                .title
                    margin-left -8px

            section
                span
                    display block
                    float left
                    min-width 50px
                    height 33px
                    background-color #fff
                    border-radius 5px
                    line-height 33px
                    font-size 12px
                    text-align center
                    margin-left 10px
                    margin-bottom 10px
                    padding 0 10px


</style>
