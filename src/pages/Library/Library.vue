<template>
    <section class="bar_name">
        <!-- -->

        <!-- <header class="header">
          <span>
            <i class="iconfont icon-jiantou2"></i>
          </span>
          <div class="header_title">
            <span class="header_title_text">畅销图书榜</span>
          </div>
         <span>
            <i class="iconfont icon-shenglvehao"></i>
          </span>
        </header> -->

        <AllPagesHeader title="畅销图书榜"/>

        <!-- 滑动bar -->
        <section class="user-basic">
            <router-link tag="div" to="" class="table">
                <div class="wrapper">
                    <ul class="content">
                        <li v-for="(item,index) in list" :key="index" @click="handleClick(index)" :class="{active: index === currentIndex}">{{item}}</li>
                    </ul>
                </div>
            </router-link>
        </section>
        <!-- <div class="line"></div> -->
        <!-- 结束 -->
        <div class="down">
      <span class="jiantou" @click="toDown" :class="{toDown:isDown}">
        <i class="iconfont icon-jiantou "></i>
      </span>
            <ul class="down_pull" :class="{isDown: isDown}">
                <li class="item " v-for="(fox,index) in lis" :key="index">{{fox}}</li>
            </ul>
        </div>
        <!-- 图书列表开始 -->
        <div class="tushulist" v-for="(dist,index) in dataList.aa" :key="index">
            <div class="book" is_bottom="0" @click="$router.push('/goods')">
                <div class="book_img">
                    <span class="book_index">{{index+1}}</span>
                </div>
                <div class="img_div">
                    <img class="" :src="dist.image_url">
                </div>
            </div>
            <div class="content">
                <p>
                <h2 class="baioti">{{dataList.aa[index].name}}</h2>
                </p>
                <p class="zuozhe">{{dataList.aa[index].author_name}}</p>
                <p class="chubanshe">{{dataList.aa[index].chuabnshe}}</p>
                <p>
                    <span class="biao">{{dataList.aa[index].ziying}}</span>
                    <span class="qian">限时抢</span>
                </p>
                <p>
                    <span class="xianjia">{{dataList.aa[index].price}}</span>
                    <span class="yuanjia">￥33.33</span>
                </p>
                <p>
                    <span><i class="iconfont icon-icon-"></i></span>
                    <span><i class="iconfont icon-icon-"></i></span>
                    <span><i class="iconfont icon-icon-"></i></span>
                    <span><i class="iconfont icon-icon-"></i></span>
                    <span><i class="iconfont icon-star"></i></span>
                    <span class="pinglun">3823评论</span>
                </p>
            </div>
        </div>

    </section>
</template>
<script>
    import BScroll from 'better-scroll'
    import {reqLibrary} from '../../api';

    export default {
        data() {
            return {
                dataList: {},
                isDown: false,
                list: ["新书热卖榜",
                    "图书畅销榜",
                    "童书新书榜",
                    "童书畅销榜",
                    "热搜榜",
                    "好评榜",
                    "飙升榜",
                ],
                lis: [
                    "童书",
                    "小说",
                    "艺术",
                    "军事",
                    "风水",
                    "植物/园艺",
                    "宗教",
                    "技术",
                    "社会",
                    "科学",
                    "法律",
                    "考试",
                    "专记",
                    "心理学",
                    "自然科学",
                    "专记",
                    "专记",
                    "专记"
                ],
                currentIndex:0
            }
        },
        async mounted() {
            const result = await reqLibrary()
            // console.log(result)
            if (result.errorCode === 0) {
                this.dataList = result
            }

            this.$nextTick(() => {
                new BScroll('.wrapper',{
                scrollX:"true",
                click:true
                })
            })
        },
        methods: {
            toDown() {
                this.isDown = !this.isDown
            },
            handleClick(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .bar_name //我的
        width 100%

        .header //头部公共css
            display flex
            justify-content space-between
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 44px
            padding 0 10px
            box-sizing border-box
            border-bottom 1px solid #949494
            position relative

            .iconfont
                font-size 16px
                line-height 44px 

            .header_title
                width 30%
                color #333
                font-size 17px
                text-align center
                line-height 44px

        .user-basic
            width 100%
            overflow hidden
            height 45px
            background-size cover
            box-sizing border-box
            white-space nowrap
            border-bottom 1px solid #949494

            .table
                .wrapper
                    width 100%
                    overflow hidden
                    .content
                        display flex
                        flex-wrap nowrap
                        width 600px
                        height 39px
                        text-align center
                        margin-right 12px
                        li
                            width 70px
                            margin-left 20px
                            font-size 14px
                            color #555
                            line-height 39px
                            &.active
                                color red
                                border-bottom 1px solid red

        // .line
        //     position absolute
        //     width 100%
        //     height 4px
        //     background white
        //     top 85px

        .down
            position relative
            border-bottom 1px solid #969696
            margin-left 0

            .jiantou
                position: absolute;
                right: 12px;
                top: 10px;

            .toDown
                transform rotateZ(180deg)

            ul
                width 100%
                paddig 7.2px 30px 7.2px 7.2px
                // display flex
                // flex-wrap wrap
                height 46px
                min-height 46px
                overflow hidden

                .item
                    line-height 20px
                    // width 30px
                    padding 0 12px
                    margin 8px
                    height 20px
                    color #969696
                    float left
                    border 1px solid #969696
                    border-radius 10px
                    text-align center
                    font-size 12px

            .isDown
                height 120px


        .tushulist
            padding-bottom 20px
            width 100%
            height 142px
            position relative
            border-bottom 1px #969696 solid

            .book
                float left
                display inline-block

                .book_img
                    .book_index
                        width 10px
                        height 10px
                        background red
                        color white

                .img_div
                    width 124px
                    height 124px

                    img
                        width 122px
                        height 121px

            .content
                margin-left 10px

                .baioti
                    max-height 32px
                    font-size 16px
                    color #3f3f3f
                    text-overflow ellipsis
                    overflow hidden
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    word-break: break-all

                .zuozhe
                    color #a0a0a0
                    font-size 12px
                    white-space nowrap
                    text-overflow: ellipsis
                    overflow: hidden

                .chubanshe
                    color #a0a0a0
                    font-size 12px

                p
                    margin-top 10px

                    .biao
                        border 1px solid #a0a0a0
                        font-size 11px
                        padding 0 2px
                        margin-right 4px

                    .qian
                        border 1px solid #a0a0aa
                        background-color red
                        color #ffffff
                        font-size 11px
                        padding 0 2px

                    .xianjia
                        font-size 14px
                        color #ff4433
                        font-weight bold
                        margin-right 7px

                    .yuanjia
                        font-size 11px
                        color #a0a0a0

                    .icon-icon-
                        color red
                        font-size 19px

                    .pinglun

                        margin-left 7px
                        color #a0a0a0

    // .xingxing
    //   po
    //   width 90px
    //   height 16px
    //   border 1px red solid

</style>
