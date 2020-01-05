<template>
    <div class="discountBookContainer" v-if="data">
        <header>
            <!-- <PageHeader title="特卖专区"/> -->
            <AllPagesHeader title="特卖专区"/>

            <div class="searchContainer">
                <div class="inputContainer">
                    <input type="text" placeholder="搜索商品">
                </div>
            </div>
        </header>

        <main>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in data.swiper" :key="index">
                        <img :src="item.img_url" alt="">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>

            <div class="nav">
                <div class="nav1">
                    <ul>
                        <li v-for="(item,index) in nav1.content" :key="index">
                            <a :href="item.link_url">{{item.show_word}}</a>
                        </li>
                    </ul>
                </div>
                <div class="nav2">
                    <ul>
                        <li v-for="(item,index) in nav2.content" :key="index">
                            <a :href="item.link_url">{{item.show_word}}</a>
                        </li>
                    </ul>
                </div>
            </div>

			<div class="floor" v-for="(section,index) in data.sections" :key="section.id">
                <a :href="index >=3 ? 'javascript:;' : 'http://search.m.dangdang.com/giantmall.php?path_name=wang11'"><img class="titleImg" :src="section.content[0].title_img" alt="png"></a>
				<div class="select">
					<div class="wrapper" :class="'wrapper1'+index">
						<ul class="content" :style="'width:'+section.content[1].value.length*107+'px'">
							<li v-for="item in section.content[1].value" :key="item.id">
								<img :src="item.img_url" alt="png">
								<p class="ellipsis">{{item.product_name}}</p>
								<p class="price">￥ {{item.sale_price}}</p>
							</li>
						</ul>
					</div>
					<div class="wrapper" :class="'wrapper2'+index">
						<ul class="content" :style="'width:'+section.content[2].value.length*107+'px'">
							<li v-for="item in section.content[2].value" :key="item.id">
                                <img :src="item.img_url" alt="png">
                                <p class="ellipsis">{{item.product_name}}</p>
                                <p class="price">￥ {{item.sale_price}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="guessLikes">
				<img class="titleImg" src="http://img60.ddimg.cn/upload_img/00743/suishiqi/caininxihuanb-1553687671.jpg" alt="">
				<div class="nav">
					<span>猜您喜欢</span>
				</div>
				<div class="likes">
					<ul>
						<li v-for="item in data.guessLikeBooks" :key="item.product_id">
							<img :src="item.image_url" alt="png">
							<p class="bookName ellipsis">{{item.product_name}}</p>
							<p class="price">
								<span>￥</span>
								<span>{{item.price1}}</span>
								<span>.{{item.price2}}</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
        </main>

		<footer>
			<div class="more">
				<a href="http://touch.m.dangdang.com/guessyoulike.php?pagesize=100&cids=01.00.00.00.00.00">查看更多</a>
			</div>
			<div class="bottom">
				<img src="http://img60.ddimg.cn/upload_img/00610/new_index/icon_smile.png" alt="">
				<span>到底了，再拉裤子都掉啦</span>
			</div>
		</footer>
    </div>
</template>

<script>
    import PageHeader from "@/components/pagesHeader/pagesHeader"
	import Swiper from "swiper"
	import BScroll from "better-scroll"
    import "swiper/css/swiper.min.css"
    import {reqTeJiaShuShi} from "../../api"
    export default {
        data(){
            return {
                data:""
            }
        },
        async mounted(){
            const result = await reqTeJiaShuShi();
            if(result.code === 0){
                this.data = result.data;
            }

            this.$nextTick(() => {
                new Swiper ('.swiper-container', {
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
                this.data.sections.forEach((item,index) => {
                    new BScroll('.wrapper1'+index,{
                        scrollX: true,
                        click: true,
                        bounce: {
                            left: false,
                            right: false
                        }
                    })
                    new BScroll('.wrapper2'+index,{
                        scrollX: true,
                        click: true,
                        bounce: {
                            left: false,
                            right: false
                        }
                    })
                })
            })
        },
        computed:{
            nav1(){
                console.log(this.data.nav.find(item => item.id === 1));
                return this.data.nav.find(item => item.id === 1)
            },
            nav2(){
                return this.data.nav.find(item => item.id === 2)
            }
        },
        components:{
            PageHeader
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    header
        .searchContainer
            background-color: #fff;
            padding 10px 12px
            .inputContainer
                position relative
                width 100%
                height 30px
                border-radius 15px
                background-color #eee
            input
                width 50%
                height 30px
                position absolute
                top 0
                left 30px
                background-color transparent
                border none
            input:focus
                border none
                outline none

    main
        .swiper-container
            width 100%
            height 157px
            img
                width 100%
                height 157px
        .nav
            ul
                display flex
                justify-content space-around
                background-color #fff
                margin-bottom 3px
                li
                    display flex
                    align-items center
                    width 75px
                    height 38px
                    a
                        text-align center
                        width 100%
                        color black
                        font-weight 100
                        border-left 1px solid #eee
                li:nth-of-type(1)
                    background-image url("http://img61.ddimg.cn/upload_img/00705/yhj/01-5.31-ued.jpg")
                    background-repeat: no-repeat;
                    background-position: 50%;
                    background-size: 100% 100%;
                    a
                        color #fff
                        border none
        .floor
            width 100%
            .titleImg
                width 100%
                height 52px
            .select
                padding 10px 0 0 5px
                background-color #fff
                .wrapper
                    width 100%
                    overflow hidden
                    ul
                        display flex
                        li
                            width 102px
                            height 160px
                            overflow hidden
                            margin-right 5px
                            background-image none
                            img
                                width 102px
                                height 102px
                            p
                                margin-top 5px
                            .price
                                color red
                                span
                                    background-color red
                                    color #fff
                                    font-size 11px
                            .edition
                                color #ff6d34;
                                font-size 10px
                                background url("http://img62.ddimg.cn/upload_img/00775/h5/bookmark-1557296402.png")
                                background-repeat no-repeat
                                background-size 8px 10px
                                padding-left 11px
        .guessLikes
            .titleImg
                width 100%
                height 52px
            .nav
                display flex
                align-items flex-end
                width 100%
                height 50px
                background-color #fff
                span
                    display inline-block
                    width 58px
                    height 40px
                    text-align center
                    line-height 40px
                    color #e64436
                    font-size 14px
                    border-bottom 1px solid #e64436
                    margin-left 15px
            .likes
                width 100%
                ul
                    display flex
                    flex-wrap wrap
                    justify-content space-between
                    li
                        box-size border-box
                        background-color #fff
                        overflow hidden
                        margin-top 4px
                        width 49.5%
                        height 276px
                        img
                            width 185px
                            height 185px
                        .bookName
                            height 40px
                            line-height 30px
                            font-size 13px
                            padding-left 5px
                        .price
                            color #e53e30;
                            span
                                font-size 13px
                            span:nth-child(2)
                                font-size 15px
    footer
        .more
            height 45px
            padding 8px 0
            a
                display block
                width 48px
                height 28px
                padding 0 35px
                border 1px solid #898989
                border-radius 24px
                color #898989
                line-height 28px
                margin 8px auto
        .bottom
            padding 10px 0
            text-align center
            color #898989
            background-color #fff
            img
                width 19px
                height 8px





</style>

