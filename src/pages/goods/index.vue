<template>
<div class="all" v-if="detail">
    <Header></Header>
  <div class='detailContainer'>
    <!-- 轮播图 -->
      <div  class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in detail.big_img" :key="index" >          
              <img :src="item">          
            </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    <!-- 轮播图结束 -->
      <!-- 图书标题及价格开始-->
      <div class="content">
        <div class="title" v-if="detail.dataProduct">
          <p><img src="./images/icon_zy.png" /> {{detail.dataProduct.productName}} </p>
          <p>吉林出版社</p>
          <a class="promo_title"  
          href="javascript:;">跨年狂欢，百万图书5折封顶，点击抢购！</a>
        </div>
        <div class="new_price" v-if="detail.new_price">
          <div class="new_left">
            <div class="main_price_div">¥<span class="main_price">{{detail.new_price.price_1}}</span>
            </div>
            <span class="discount">({{detail.new_price.price_3}})</span>
            <!--降价提醒-->
          <div class="price_remind">
              <a class="notice" href="javascript:;">
                  <span class="icon iconfont icon-jiangjiatixing"></span>
                  降价通知
              </a>
          </div>
          </div>
          <!-- 定价 -->
          <div class='price'>
            <div class="price-div">{{detail.new_price.price_type_name}}<span class="line"> ¥{{detail.new_price.price_2}}</span></div></div>
            <div class="seckill">限购价</div>
          </div>
      </div>
    <!-- 图书标题及价格结束 -->
    <!-- 评论模块开始 -->
      <div class="book_score">
        <div class="left">
          <div class="stars_div" v-if="detail.new_price">
            <span class="score">{{detail.new_price.discount}}</span>
            <div class="stars">
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
              <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
            </div>
          </div>
          <div class="p_num">1448人评分<span class="p_message">精彩评分送积分</span></div>
        </div>
        <div class="right">
          <div class='right-content'><div @click="$router.replace('/comment')">我要写评论</div></div>
          
        </div>
      </div>
    <!-- 评论模块结束 -->
    <!-- 促销模块开始 -->
      <div class="promotion" @click.stop="showPopup">
  
          <div class="promote_name"><span class="aa">促销</span></div>
          <div class="promo_section">
            <div v-if="detail.promo_model">
              <span class="coupon_title">{{detail.promo_model[0].promotion_tag}}</span>
              <span class="icon_list">{{detail.promo_model[0].word}}</span>
            </div>
            <div>
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
            </div>
            <div>
              <span class="coupon_title">加价购</span>
              <span class="icon_list">加1.90~129.00元换购热销商品</span>
            </div>
          </div>
          <div class='arror'>
            <i class="iconfont icon-jiantou1"></i>
          </div>		
      </div>
    <!-- 促销模块结束-->
    <!-- 图书信息模块开始 -->
      <div class="book-info">
        <section v-if="detail.ad_lis">
          <span>作者</span>
          <span>{{detail.ad_list.author_name}}</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>出版</span>
          <span>江苏凤凰文艺出版社</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>排名</span>
          <span>中小学生辅 书籍473名</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
        <section>
          <span>分类</span>
          <span>图书>中小教学辅>新课标</span>
          <span>查看作品</span>
          <i class="iconfont icon-jiantou1"></i>
        </section>
      </div>
      
      <!-- 图书信息模块开始 -->

      <!-- 配送信息开始 -->
      <section class="jump_detail">
        <div class="address">
          <div class="address_dl">
            <dl @click="showPicker=true" v-if="detail.arriver_info">
              <dt>送至：</dt>
              <dd>{{'地址:'||value[0].name}}
                <span v-if="value">
                   {{value[0].name}}&gt;{{value[1].name}}&gt;{{value[2].name}}
                </span>
                <br>{{detail.arriver_info.shipword}}
                <br>{{detail.arriver_info.shipping_fee}}
                <br></dd>
      
            </dl>
            <van-popup v-model="showPicker" position="bottom" >
               <van-area
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                @confirm="onConfirm"
                @change="onChange"
                
              />
            </van-popup>
          </div>
          <div class='arror'>
           <i class="iconfont icon-jiantou1"></i>
        </div>
        </div>	
        <div class="deliver">
          <ul>
              <li class="icon_support" v-for="(item,index) in detail.deliver" :key="index"><i class='iconfont icon-yuandianxiao'></i>{{item.name}}</li>

          </ul>
        </div>
      </section>
      <!-- 配送信息结束 -->
      <!-- 数量图文详情更多卖家-->
      <section class='count'>
        <span>数量:</span>
         <button v-on:click="subtract(countI)">-</button>
         <input type="text" value="0" v-model="countI">
         <button v-on:click="add(countI)">+</button>
      </section>
      <section class="infomation">
        <div class="infomatin_text" @click="$router.replace('/detail')">图文详情</div>
        <div class='arror'>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </section>
      <section class="more-sellers">
        <div class="more-sellers_text" @click="$router.replace('/recommend')">更多卖家</div>
        <div class='arror'>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </section>
  <!--短评长评开始-->
    <div class='comment'>
      <div class="short-comment">
        <div><h4>短评（1620）<span class="good_rate">100.0%好评</span> 
            <div class="write_comment" @click="$router.replace('/comment')">写短评</div></h4>
        </div>
        <ul class="comment_list" v-if="detail.comment_list">
          <li v-for="(item,index) in  detail.comment_list.data" :key="index"><a href="javascript:;">{{item.name}}({{item.label_id}})</a></li>
        </ul>
        <ul class="comment_content">
          <li  v-for='(item,index) in showList' :key="index">
            <div class="book-userinfo">
              <a class="user_pictor" href="javascript:;"><img :src="item.cust_logo"/> </a>
              <span class="user_name"><span>用户昵称</span></span>
              <span class="buy"><img :src="item.customer_identity_url" alt=""></span>
              <div class="stars_div">
                <div class="stars">
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                  <span class="red"><i class='iconfont icon-pingfenmini'></i></span>
                </div>
                <span class="score">9.5分</span>
              </div>
                <div><p class="content_text ">{{item.content}}</p></div>
                <div >
                  <img :src="item.comment_image.big_img" alt="">
                </div>
              <div class="user_operate">
              <span><i class='iconfont icon-dianzan'></i><span class="text">1</span></span>
               <span><i class='iconfont icon-huihua'></i>回复</span>
              </div>
            </div>
          </li>
        </ul>
         <div class="hello">
             <div @click="update_review" class="more">{{word}}</div>
      </div>
      </div>
    </div>
    <div class="lang-comment">暂无长评</div>
    <!-- 短评长评 结束-->
    <section class="shop">
      <div>
        <div class="shop_header"><img src="./images/ddshop_icon.png" alt=""><span>当当自营图书</span></div>
      </div>
      <ul class="shop_info"> 
        <li>
          <p>商品包装</p>
          <strong>4.5</strong>
        </li>
         <li>
          <p>物流速度</p>
          <strong>4.78</strong>
        </li>
         <li>
          <p>快递员满意度</p>
          <strong>4.86</strong>
        </li>
      </ul>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer :countI="countI"></Footer>
  </div>
  <div class="shade">
    <transition name="fade">
    <div class="shade_promotion" v-show="show" @click.stop="show=false">
      <div class="promote-name">
        <span class="aa">促销</span>
        <div class="promotion_text">
          <span class="coupon_title">满额减</span>
          <span class="icon_list">每满￥79.00减￥30.00</span>
        </div>
        <div class="promotion_text">
          <span class="coupon_title">加价购</span>
          <span class="icon_list">加1.90~129.00元换购热销商品</span>
        </div>
        <div class="promotion_text">
          <span class="coupon_title">加价购</span>
          <span class="icon_list">加1.90~129.00元换购热销商品</span>
        </div>
      </div>
    </div>
  </transition>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import areaList from "../../assets/area";
 import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  import {mapState} from 'vuex'
 import Header from '../../components/header/header'
 import Footer from '../../components/footer/footer'
  export default {
      components:{
            Header ,Footer
      },
    data() {
    return {
      value: '',
      showPicker: false,
      countI:1,
      show:false,
        areaList,
      //searchResult: [],
      // toLearnList:[],//进行显示的数据
      showAll:false//标记数据是否需要完全显示的属性
    }
  },
  methods: {
    onConfirm(value) {
      if (value) {
          this.value = value;
      this.showPicker = false;
      }else{
         value[0].name="省"
        value[1].name="市"
        value[2].name="区"
      }
    
    },
    onChange(picker, values) {
       picker.setColumnValues("", values);
      
    },
    showPopup() {
      this.show = !this.show;
    },
    // updateCount(){
    //   //this.count=++this.count
    //   this.$store.commit("updateCount",this.countI)
    // },
   update_review(){
      this.showAll=!this.showAll

   },
         add: function() {
           if (this.countI === 0) {
             this.countI = 1
           }else{
             this.countI++
           }
           
          this.$store.commit("updateCount",this.countI)},
         subtract: function() {if (this.countI <= 0) {this.$toast('不能再少了')} else {this.countI=--this.countI;
          this.$store.commit("updateCount",this.countI)}}
    
  },
  
   async mounted() {
   await  this.$store.dispatch('getDetailInfo'),
    this.$store.commit("updateReview",this.detail.review_list)
     
     

      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
       
    },
     computed: {
      ...mapState(["detail"]),
      ...mapState(["review_list"]),

      showList:function(){
      if(this.showAll === false){var showList = []//定义一个空数组
        if(this.review_list.length>3){for(let i=0;i<3;i++){showList.push(this.review_list[i])}}else{showList = this.review_list}
        return showList}else{return this.review_list;}},
    word:function(){
      if(this.showAll === false){
        return "查看更多评论"
      }else{
        return '点击收起'
      }
    }
  }
      
    
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.all
  .detailContainer
    background-color  #EEEEEE
    .swiper-container
      position relative
      width 100%
      height 100%
      border-bottom 1px solid  #eee
      .swiper-wrapper
          .swiper-slide
            img
              width 100%
              heigth 100%
        .swiper-pagination
          --swiper-pagination-color #E44D26
          position absolute
          left 0
    .content
      //margin-left 5px
      padding 10px 0 12px
      color #4d525d
      font-size 14px
      line-height 20px
      background-color  white
      .title
        margin 5px 10px 4px
        img
          height 14px
          vertical-align middle
        .promo_title
          color red
          font-size 14px
          text-decoration underline
      .new_price
        margin-top 20px
        margin-left 5px
        color #4d525d
        font-size 13px
        display flex
        flex-direction column
        justify-content space-between
        .new_left
          display flex
          .main_price_div 
            color red
            .main_price
              font-size 20px
          .price_remind
            .notice
              border 1px solid #222222
              border-radius 10px
              font-size 10px
              padding 2px 4px
              vertical-align middle
              margin-left 5px
              span
                vertical-align middle
        .price
          margin 10px 0
          .line
            text-decoration line-through
          .seckill
            padding-left 5px 
    .book_score
      display flex
      padding-left 10px
      line-height 30px
      background #F8F8F8
      color #FF8363 
      .left 
        width 75%
        display  flex
        flex-direction column
        .stars_div
          display flex
          .stars
            margin-left 5px
            color #FF8363
        .p_num
          color #4d525d
          padding-right 10px
          .p_message
            color #FF8363
            margin-left 10px     
      .right
        //line-height 60px
        padding-top  15px
        .right-content
          font-size 14px
          border 1px solid red
          border-radius 15px
          bacground #FFF2EF
    .promotion
      display flex   
      margin-top 6px
      padding 10px  0 10px  10px
      background-color  white
      .promote_name
        color #4D525D
        padding-top 2px
        font-size 12px
        
      .promo_section
        width 80%
        display flex
        flex-direction column
        margin 0 10px
        color #4D525D
        .coupon_title
          line-height 25px 
          color #EA002A
          border 1px solid red
          border-radius 4px
          margin 0 10px
          .icon_list
            color #4D525D
            padding-left 15px
            font-size 12px
            
      .arror
          line-height 65px
          color #4D525D
          font-size 8px
    .book-info
      margin-top 6px
      background-color  white
      font-size 14px
      color #4d525d
      padding-left 10px
      padding-right 10px
      line-height 35px
      section
        display flex
        border-bottom 1px solid #eee
        span
          width 20%
          &:nth-child(2)
            width 55%
    .jump_detail
      display flex
      flex-direction column
      padding-left 10px
      margin-top 6px
      background-color  white
      padding-top 10px
      font-size 16px
      padding-right 10px
      .address
        display flex
        border-bottom 1px solid #eee
        .address_dl
          width 92%
          color #4D525D
          dl
            display flex
            dt
              margin-right 20px
            dd
              line-height 25px
        .arror
          line-height 65px
          color #4D525D
          font-size 8px
      .deliver
        font-size 12px
        ul
          display flex
          flex-wrap wrap
          padding 10px 0
          li
            padding 5px 5px
            color #4D525D
            i
              color #FF0000
              font-size 10px
    .count
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4D525D
      span 
        margin-right 20px
        color #4D525D
      button
        vertical-align middle
      input 
        display inline-block
        width 30px
        height 20px
        padding-left 15px
        border-top 1px solid #B4B4B4
        border-bottom 1px solid #B4B4B4
        vertical-align middle
    .infomation
      display flex
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4D525D
      .infomatin_text
        width 93%
    .more-sellers
      display flex
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4D525D 
      .more-sellers_text
        width 93%  
    .comment
      display flex
      flex-direction column
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 12px
      color #4D525D
      .short-comment
        line-height 25px
        font-size 14px
        color #4D525D
        .good_rate
          margin 0 10px
          color #FF8161
        .write_comment
          float right
          border 1px solid #FF8161
          padding 2px 4px
          color #FF8161
          border-radius 8px
        .comment_list
          display flex
          flex-wrap wrap
          li  
            border 1px solid #FF8161
            border-radius 15px
            margin 5px 10px
            padding 2px 6px
            a
              color #FF8161
        .comment_content
          
          .book-userinfo
            //display flex
            padding-top 10px
            position  relative
            .stars_div
              position absolute
              right 10px
              top 15px
              //float right
              display flex
              margin-top 5px
              color  #FF8161
            .user_pictor
              vertical-align middle
              img 
                width 30px
            .user_name
              vertical-align middle
              padding 0 8px
            .buy
              vertical-align middle
              img
                margin-top 3px
            .user_operate
              float right
              i
                margin  0px 5px
        .more
          display inline-block
          width 100px
          height 30px
          text-align center
          margin-top 30px
          margin-left 35%
          border 1px solid #FF8161
          border-radius 10px
          color #FF8161
    .lang-comment
      margin-top 6px
      padding 15px 10px
      background-color  white
      font-size 16px
      color #4d525d
    .shop
      margin-top 6px
      padding 15px 10px 0 15px
      background-color  white
      font-size 16px
      color #4D525D
      .shop_header
        border-bottom 1px solid #eee 
        img 
          width 40px
          vertical-align middle
        span 
          vertical-align middle
          margin-left 10px
          font-size 16px
      .shop_info
        display flex
        justify-content space-around
        padding 10px
        li
          //width 33.33%
          padding-right 15px
          border-right 1px solid #eee
          line-height 25px
  .shade
    .shade_promotion
      position: fixed
      //position:relative
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 40
      backdrop-filter: blur(10px)
      opacity: 1
      background: rgba(7, 17, 27, 0.6)
      &.fade-enter-active, &.fade-leave-active
        transition: opacity 0.5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
      .promote-name
        z-index 1000
        position: absolute
        bottom 0 
        left 0
        background-color white
        font-size 18px
        width 100% 
        height 200px
        .aa
          color #EA002A
          font-size 18px
        .promotion_text
          padding 10px 0
          .coupon_title
            line-height 25px 
            color #EA002A
            border 1px solid red
            border-radius 4px
            margin 0 10px
          .icon_list
            color #4D525D
            padding-left 15px
            font-size 18px   
         

          
           
        
</style>
