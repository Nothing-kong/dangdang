<template>
    <div class="container" ref="containerRef" v-if="data" >
        <header>
            <!-- <div class="header-top">
                <span><i class="iconfont icon-fanhui"></i></span>
                <div class="topContent">图书5折封顶</div>
                <span><i class="iconfont icon-more"></i></span>
            </div> -->
            <AllPagesHeader title="图书5折封顶"/>

            <div class="searchContainer">
                <div class="inputContainer">
                    <i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i>
                    <input type="text" placeholder="搜索商品">
                </div>
                <button class="searchBtn">搜索</button>
            </div>
        </header>

        <main ref="main">
            <div class="activity ">
                <img src="http://img62.ddimg.cn/upload_img/00684/zn_yf/wd_01-1576723939.jpg" alt="">
                <img src="http://img61.ddimg.cn/upload_img/00684/zn_yf/wd_02-1576723939.jpg" alt="">
                <img src="http://img63.ddimg.cn/upload_img/00684/zn_yf/wd_03-1576723939.jpg" alt="">
                <div class="active-time">活动时间：2019.12.23-12.31</div>
                <img src="http://img63.ddimg.cn/upload_img/00684/zn_yf/lingdang_01-1576826853.jpg" alt="">
                <div class="fhs">
                    <img src="http://img63.ddimg.cn/upload_img/00684/zn_yf/lingdang02_01-1576826853.jpg" alt="">
                    <img src="http://img63.ddimg.cn/upload_img/00684/zn_yf/lingdang_02_02-1576826853.jpg" alt="">
                    <img src="http://img61.ddimg.cn/upload_img/00684/zn_yf/lingdang_02_03-1576826853.jpg" alt="">
                    <img src="http://img63.ddimg.cn/upload_img/00684/zn_yf/lingdang_02_04-1576826853.jpg" alt="">
                </div>
                <div class="zbd">
                    <div>查看活动说明</div>
                </div>
            </div>

            <div style="height:52px" v-show="isShow"></div>
            <div class="nav" ref="nav">
                <div class="navLeft">
                    <ul class="navUl " ref="navUl" :style="`width:${this.data.nav.length * 84.2}px`">
                        <li :class="{active:current === index}" v-for="(item,index) in data.nav" :key="item.id" @click="clickNav(index)">{{item.content}}</li>
                    </ul>
                </div>
                <div class="navRight" @click="Down" ref="navRight"><i class="iconfont icon-jiantou"></i></div>
            </div>

            <div class="static_module" v-for="item in data.nav" :key="item.id" ref="module">
                <div class="header">
                    <a href="">
                        <span class="title">{{item.content}}</span>
                        <a href="http://search.m.dangdang.com/promotion.php?collection_promo_id=6332757&cid=01.03.00.00.00.00">
                            <span class="more">更多 >></span>
                        </a>
                    </a>
                </div>
                <div class="content">
                    <ul class="itemUl">
                        <li class="item" v-for="(book,index) in setupData[item.content]" :key="index">
                            <img :src="book.image_url" alt="png">
                            <p class="name">{{book.name}}</p>
                            <div>
                                <span class="label_0" v-if="book.productTags[0]">{{book.productTags[0].name}}</span>
                                <span class="label_1" v-if="book.promo_flag">{{book.promo_flag}}</span>
                                <p class="price">￥{{book.price}}</p>
                                <p class="price_e">
                                    <i></i>
                                    电子书版  ￥34.99
                                </p>
                                <span class="btn_cart"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import {reqJinRiCuXiao} from "../../api"
    export default {
        data(){
            return {
                isDown:false,
                    isShow:false,
                    current:0,
                    data:"",
                    leftArr:[],
                    topArr:[]
            }
        },
        methods:{
            Down(){
                this.isDown = !this.isDown;
                this.$refs.navUl.style.width = this.isDown ? '100%' : (this.data.nav.length * 85)+"px";
                this.$refs.navUl.style.flexWrap = this.isDown ? 'wrap' : 'nowrap';
                this.$refs.navRight.style.transform = `rotateZ(${this.isDown ? '180' : '0'}deg)`;
            },
            clickNav(index){
                this.current = index;

                if(index >= this.leftArr.length - 4){
                    this.navLeft.scrollTo(-this.leftArr[this.leftArr.length - 4],0,400);
                } else {
                    this.navLeft.scrollTo(-this.leftArr[index],0,400);
                }
                document.documentElement.scrollTop = this.topArr[index] - 52;
            }
        },
        async mounted(){
            window.addEventListener('scroll',() => {
                let scrollTop = document.documentElement.scrollTop  || document.body.scrollTop
                if(scrollTop > 800){
                    this.isShow = true;
                    this.$refs.nav.style.position = "fixed"
                    this.$refs.nav.style.top = 0
                    this.$refs.nav.style.backgroundColor = "#fff"
                } else {
                    this.isShow = false;
                    this.$refs.nav.style.position = "relative"
                }
            })

            const result = await reqJinRiCuXiao()

            if(result.code === 0){
                this.data = result.data
            }

            this.$nextTick(() => {

                //导航元素据左侧距离
                let navLis = Array.prototype.slice.call(this.$refs.navUl.children)
                navLis.forEach((li) => {
                    this.leftArr.push(li.offsetLeft)
                })

                //div据顶部距离
                let divs = Array.prototype.slice.call(this.$refs.main.children)
                divs.forEach((div) => {
                    if(div.className == "static_module"){
                        this.topArr.push(div.offsetTop)
                    }
                })
                this.navLeft = new BScroll('.navLeft',{
                    scrollX: true,
                    click: true
                })
            })
        },
        computed:{
            setupData(){
                const books = this.data.reco_list
                const obj = {}
                let start = 0;
                let end = 9;
                this.data.nav.forEach((item) => {
                    start += 9;
                    end += 9;
                    obj[item.content] = books.slice(start,end)
                })
                return obj
            }
        },
        watch:{
            isDown(){
                this.$nextTick(() => {
                    this.navLeft.options.scrollX = this.isDown ? false : true;
                    this.navLeft.refresh()
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../commen/stylus/mixins.styl"
            header
                .header-top
                    display flex
                    height 56px
                    justify-content space-between
                    z-index 10
                    bottom-border-1px(#999)
                    .topContent
                        font-size 18px
                        line-height 56px
                    span
                        padding 0 10px
                        line-height 56px
                    .fanhui
                        margin-right 8px
                        font-size 16px
                    .icon-more
                        font-size 24px
                .searchContainer
                    display flex
                    justify-content space-around
                    height 35px
                    background-color #fff
                    padding 10px 0
                    .inputContainer
                        position relative
                        border-radius 35px
                        overflow hidden
                        width 292px
                        background-color #f5f5f5
                        .icon-zelvxuanzefeiyongdaosanjiaoxingfandui
                            position absolute
                            top 50%
                            left 15px
                            transform translateY(-50%)
                            font-size 8px
                        input
                            width 50%
                            height 35px
                            background-color transparent
                            margin-left 40px
                            outline none
                    .searchBtn
                        background-color #fc5165
                        border none
                        color #fff
                        border-radius 5px
                        width 45px
                        height 35px
            main
                .activity
                    font-size 0
                    background-color #56CFC0
                    .active-time
                        font-size 12px
                        text-align center
                        color #faf0d4
                    &>img
                        width 100%
                    .fhs
                        display flex
                        flex-wrap wrap
                        &>img
                            width 50%
                    .zbd
                        background: #018A7A;
                        padding-bottom 18px
                        div
                            background: #ffca52;
                            color: #590506;
                            width: 44%;
                            margin: 0 auto 0;
                            text-align: center;
                            border-radius: 14px;
                            height: 28px;
                            line-height: 28px;
                            border: 2px solid #8a2308;
                            box-shadow: 0 -4px 0 0 #ea7f2b inset;
                            padding-bottom: 0%;
                            font-size: 18px;
                .nav
                    position relative
                    width 100%
                    z-index 99
                    .navLeft
                        width 90%
                        overflow hidden
                        .navUl
                            display flex
                            /*flex-wrap wrap*/
                            li
                                box-sizing border-box
                                width 84px
                                height 52px
                                text-align center
                                line-height 52px
                                font-size 14px
                                color #878890
                            .active
                                color #282828

                    .navRight
                        position absolute
                        right 10px
                        top 16px
                        i
                            font-size 20px
                .static_module
                    .header
                        width 100%
                        height 42px
                        background-image: url("http://img62.ddimg.cn/upload_img/00684/zn_yf/cdq-1576723939.jpg")
                        background-size 100% 100%
                        a
                            display flex
                            height 100%
                            justify-content space-between
                            align-items center
                            span
                                padding-top 5px
                                color #fff
                            .title
                                font-size 16px
                                padding-left 35px
                            .more
                                padding-right 20px

                    .content
                        .itemUl
                            display flex
                            flex-wrap wrap
                            padding 10px 10px
                            background-color #fff
                            .item
                                position relative
                                box-sizing border-box
                                padding-right 10px
                                width 33.333%
                                height 205px
                                img
                                    width 100%
                                .name
                                    margin-top 5px
                                    margin-bottom 5px
                                    font-size 12px
                                    display -webkit-box
                                    -webkit-box-orient vertical
                                    -webkit-line-clamp 2
                                    overflow hidden
                                    text-overflow ellipsis
                                .label_0
                                    border 1px solid #f2303c
                                    color #f2303c
                                    font-size 10px
                                .label_1
                                    color #fff
                                    font-size 10px
                                    background-color red
                                    padding 2px
                                    margin-left 3px
                                .price
                                    color #f2303c
                                    margin 7px 0 3px 0
                                .price_e
                                    color #ff6d34
                                    font-size 8px
                                    i
                                        display inline-block
                                        background-image url("https://h5.dangdang.com/Standard/Framework/Extend/hosts/images/icon_e.png")
                                        background-size 100% 100%
                                        width 6px
                                        height 6px
                                .btn_cart
                                    position absolute
                                    right 4px
                                    bottom 15px
                                    background-image url("https://h5.dangdang.com/Standard/Framework/Extend/hosts/images/btn_buy.png")
                                    background-size 100% 100%
                                    width 25px
                                    height 25px

</style>
