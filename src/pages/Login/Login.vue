<template>
    <section class="loginContainer">
        <header class="header">
            <i class="iconfont icon-fanhui" @click="$router.back()"></i>
            <div class="header_title">
                <span class="header_title_text">当当登录</span>
            </div>
            <i class="iconfont icon-more"></i>
        </header>
        <section class="loginContent" tag="div">
            <div class="contentHeader">
                <span :class="{on:isShowSms}" @click="isShowSms=true">账号密码登录</span>
                <span class="contentHeaderright" :class="{on:!isShowSms}" @click="isShowSms=false">短信快捷登录</span>
            </div>
            <form>
                <div class="loginMessage" :class="{on:isShowSms}">
                    <div class="line">
                        <i class="iconfont icon-profile"></i>
                        <input type="text" placeholder="请输入手机号/邮箱/昵称" v-model="name" v-validate="'required'">
                        <i class="iconfont icon-qingchuhaoma" v-show="name" @click="clearname"></i>
                    </div>
                    <span style="color: red;" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                    <div class="line down">
                        <i class="iconfont icon-mima"></i>
                        <input :type=" mimayincang ? 'password' : 'text'" placeholder="请输入密码"
                               v-model="pwd" name="pwd" v-validate="'required'">
                        <i class="iconfont icon-mimayincang" @click="mimayincang=false" :class="{on:!mimayincang}"></i>
                        <i class="iconfont icon-yanjing" @click="mimayincang=true" :class="{on:mimayincang}"></i>
                        <i class="iconfont icon-qingchuhaoma" v-show="pwd" @click="clearpwd"></i>
                    </div>
                    <span style="color: red;" v-show="errors.has('pwd')">{{ errors.first('pwd') }}</span>
                    <section class="login_message">
                        <input type="text" maxlength="11" placeholder="验证码"
                               v-model="captcha" name="captcha" v-validate="{required: true,regex: /^[0-9a-zA-Z]{4}$/}">
                        <img class="get_verification" src="http://localhost:4000/captcha"
                             alt="captcha" @click="updateCaptcha" ref="captcha">
                        <span style="color: red;" v-show="errors.has('captcha')">{{ errors.first('captcha') }}</span>
                    </section>
                </div>
                <div class="loginMessage" :class="{on:!isShowSms}">
                    <div class="line down">
                        <i class="iconfont icon-mobilenumber"></i>
                        <input type="text" placeholder="请输入手机号"
                               v-model="phone" name="phone" v-validate="'required|mobile'">
                        <i class="iconfont icon-qingchuhaoma" v-show="phone" @click="clearphone"></i>
                    </div>
                    <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>


                    <div class="line down">
                        <i class="iconfont icon-yanzhengmax"></i>
                        <input type="text" placeholder="请输入验证码"
                               v-model="code" name="code" v-validate="'required'">
                        <button class="get_verification" @click.prevent="sendCode" v-show="isRightPhone"
                                :class="{is_rightphone:isRightPhone}">
                            {{computeTime>0 ? `短信已发送(${computeTime}s)` : '发送验证码'}}
                        </button>
                    </div>
                    <span style="color: red;" v-show="errors.has('code')">{{ errors.first('code') }}</span>
                </div>
                <button class="login_submit" @click.prevent="login">登录</button>
            </form>
            <div class="register">
                <span>忘记密码？</span>
                <span>立即注册</span>
            </div>
        </section>
        <section class="loginOther" tag="div">
            <div class="OtherContainer">
                <i class="iconfont icon-QQ" style="color:#98D4F7"></i>
                <i class="iconfont icon-weibo" style="color:#FF999B"></i>
                <i class="iconfont icon-zhifubao" style="color:#A3BAEF"></i>
            </div>
        </section>
        <section class="declaration" tag="div">
            <p>安全问题 | 登录代表您已同意《当当隐私政策》</p>
        </section>
    </section>
</template>

<script type="text/ecmascript-6">
    import {Toast, MessageBox} from 'mint-ui'

    export default {
        data() {
            return {
                code: '',
                name: '',// 用户名
                phone: '',// 手机号
                captcha: '',//图形验证码
                pwd: '',// 密码
                isShowSms: true,//true: 显示账号登陆界面,  false: 显示手机登陆界面
                mimayincang: true,
                computeTime: 0, // 计时剩余时间
            }
        },
        computed: {
            // 是否是一个正确的手机号
            isRightPhone() {
                return /^1\d{10}$/.test(this.phone)
            }
        },
        mounted(){
            this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
        },
        methods: {
            clearname() {
                this.name = ''
            },
            clearpwd() {
                this.pwd = ''
            },
            clearphone() {
                this.phone = ''
            },
            clearCode() {
                this.code = ''
            },
            updateCaptcha() {
                this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
            },
            async sendCode() {
                // 进行倒计时效果显示
                this.computeTime = 60
                const intervalId = setInterval(() => {
                    this.computeTime--
                    if (this.computeTime <= 0) {
                        this.computeTime = 0
                        clearInterval(intervalId)
                    }
                }, 1000);
                // 发请求
                const result = await this.$API.reqSendCode(this.phone)
                if (result.code === 0) {
                    Toast('验证码短信已发送');
                } else {
                    // 停止倒计时
                    this.computeTime = 0
                    MessageBox('提示', result.msg || '发送失败');
                }
            },

            async login() {
                // 进行前台表单验证
                let names
                if (this.isShowSms) {
                    names = ['name', 'pwd', 'captcha']
                } else {
                    names = ['phone', 'code']
                }
                const success = await this.$validator.validateAll(names) // 对指定的所有表单项进行验证
                // 如果验证通过, 发送登陆的请求
                let result
                if (success) {
                    const {isShowSms, phone, code, name, pwd, captcha} = this
                    if (isShowSms) {
                        // 密码登陆
                        result = await this.$API.reqPwdLogin({name, pwd, captcha})
                        this.updateCaptcha() // 更新图形验证码
                        this.captcha = ''
                    } else {
                        // 短信登陆
                        result = await this.$API.reqSmsLogin({phone, code})
                    }
                    // 根据请求的结果, 做不同响应处理
                    if (result.code === 0) {
                        const user = result.data
                        // 将user保存到vuex的state
                        this.$store.dispatch('saveUser', user) // 将user和token保存到state, 将token保存local

                        // 跳转到个人中心
                        this.$router.replace({path: '/profile'})
                    } else {
                        MessageBox('提示', result.msg)
                    }
                }
            }
        },

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .loginContainer
        width 100%
        // height 100%

        .header
            display flex
            justify-content space-between
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 44 pxq
            padding 0 10px
            box-sizing border-box
            background-color #fff
            border-bottom 1px solid #eee

            .iconfont
                font-size 16px
                line-height 44px

            .header_title
                width 30%
                color #333
                font-size 17px
                text-align center
                line-height 44px

        .loginContent
            box-sizing border-box
            width 100%
            padding 82px 39px 0 39px

            .contentHeader
                width 100%
                height 58px
                color #aaa

                .on
                    color #000

                span
                    display inline-block
                    font-size 20px
                    font-weight bold
                    line-height 58px

                .contentHeaderright
                    float right

            .loginMessage
                width 100%
                display none

                &.on
                    display block

                .line
                    width 100%
                    height 46px
                    border-top 1px solid #eee

                    i
                        font-size 20px
                        line-height 46px

                    input
                        outline none
                        font-size 14px
                        line-height 46px
                        vertical-align top
                        padding-left 10px

                    .icon-qingchuhaoma
                        float right
                        margin-right 10px

                .down
                    position relative
                    border-bottom 1px solid #eee
                    margin-bottom 10px

                    .icon-mimayincang, .icon-yanjing, .icon-qingchuhaoma
                        float right
                        margin-right 10px

                    .on
                        display none

                    .get_verification
                        position absolute
                        top 50%
                        right 10px
                        transform translateY(-50%)
                        border 0
                        color #ccc
                        font-size 14px
                        background transparent

                    .is_rightphone
                        color black

                .login_message
                    position relative
                    margin-top 16px
                    height 48px
                    font-size 14px
                    background #fff

                    input
                        width 100%
                        height 100%
                        padding-left 10px
                        box-sizing border-box
                        border 1px solid #ddd
                        border-radius 4px
                        outline 0
                        font 400 14px Arial

                    .get_verification
                        position absolute
                        top 50%
                        right 10px
                        transform translateY(-50%)
                        border 0
                        color #ccc
                        font-size 14px
                        background transparent

            .login_submit
                display block
                outline none
                width 100%
                height 42px
                margin-top 20px
                margin-bottom 32px
                border-radius 4px
                background #F43849
                color #fff
                text-align center
                font-size 16px
                line-height 42px
                border 0

            .register
                width 100%
                height 19px
                margin-bottom 18px
                display flex
                justify-content space-between

                span
                    font-size 14px
                    line-height 19px
                    color red

        .loginOther
            width 100%
            height 100px

            .OtherContainer
                display flex
                justify-content space-evenly

                i
                    font-size 45px

        .declaration
            width 100%
            height 14px
            font-size 12px
            line-height 14px
            text-align center
</style>
