const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const md5 = require('blueimp-md5')
const svgCaptcha = require('svg-captcha');
const UserModel = require('../models');
const checkToken = require('../token/checkToken')
const createToken = require('../token/createToken')
const sms_util = require('../util/sms_util')
const _filter = {
    'pwd': 0,
    '__v': 0
}
const users = {}
const teJiShuShi = require('../data/teJiShuShi')
const zhiDeMai = require('../data/zhiDeMai')
const category = require('../data/category')
const jinRiCuXiao = require('../data/jinRiChuXiao')
const clothing = require('../data/clothing')
const detail = require('../data/detail')
const home = require('../data/home')
const redBagRain = require('../data/redBagRain')
const battle = require('../data/battle')
const shangDian = require('../data/shangDian')
const maoYi = require('../data/maoYi')
const niu = require('../data/niu')
const seckilled = require('../data/seckilled')
const picture = require("../data/picture")
/*
密码登陆
 */
router.post('/login_pwd', function (req, res) {
    console.log(req.body);
    const name = req.body.name
    const pwd = md5(req.body.pwd)
    const captcha = req.body.captcha.toLowerCase()
    // console.log('/login_pwd', name, pwd, captcha)

    // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
    if (captcha !== req.session.captcha) {
        return res.send({
            code: 1,
            msg: '验证码不正确'
        })
    }
    // 删除保存的验证码
    delete req.session.captcha

    UserModel.findOne({
        name
    })
        .then((user) => {
            if (user) {
                if (user.pwd !== pwd) {
                    res.send({
                        code: 1,
                        msg: '用户名或密码不正确!'
                    })
                } else {
                    res.send({
                        code: 0,
                        data: {
                            _id: user._id,
                            name: user.name,
                            phone: user.phone,
                            token: createToken(user._id)
                        }
                    })
                }
                return new Promise(() => {

                }) // 返回一个pending状态的promise对象
            } else {
                return UserModel.create({
                    name,
                    pwd
                })
            }
        })
        .then((user) => {
            const data = {
                _id: user._id,
                name: user.name,
                token: createToken(user._id)
            }
            // 3.2. 返回数据(新的user)
            res.send({
                code: 0,
                data
            })
        })
        .catch(error => {
            console.error('/login_pwd', error)
        })
})

/*
一次性图形验证码
 */
router.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create({
        ignoreChars: '0o1l',
        noise: 2,
        color: true
    });
    req.session.captcha = captcha.text.toLowerCase();
    console.log(req.session);
    console.log('/captcha', req.session.captcha)
    res.type('svg');
    res.send(captcha.data)
});

/*
根据请求携带的token查询对应的user
 */
router.get('/auto_login', function (req, res) {
    // 得到请求头中的token
    const token = req.headers['authorization']

    // 如果请求头中没有token, 直接返回
    if (!token) {
        return res.send({
            code: 1,
            msg: '请先登陆'
        })
    }

    // 解码token, 如果失败或过了有效期, 返回401
    const decoded = jwt.decode(token, 'secret')
    if (!decoded || decoded.exp < Date.now() / 1000) {
        res.status(401)
        return res.json({
            message: 'token过期，请重新登录'
        })
    }

    // 根据解码出的用户id, 查询得到对应的user, 返回给客户端
    const userId = decoded.id
    UserModel.findOne({
        _id: userId
    },_filter)
        .then(user => {
            res.send({
                code: 0,
                data: user
            })
        })
})

/*
发送验证码短信
*/
router.get('/sendcode', function (req, res, next) {
    //1. 获取请求参数数据
    var phone = req.query.phone;
    //2. 处理数据
    //生成验证码(6位随机数)
    var code = sms_util.randomCode(6);
    //发送给指定的手机号
    console.log(`向${phone}发送验证码短信: ${code}`);
    sms_util.sendCode(phone, code, function (success) { //success表示是否成功
        if (success) {
            users[phone] = code
            console.log('保存验证码: ', phone, code)
            res.send({
                "code": 0
            })
        } else {
            //3. 返回响应数据
            res.send({
                "code": 1,
                msg: '短信验证码发送失败'
            })
        }
    })
})

/*
短信登陆
*/
router.post('/login_sms', function (req, res, next) {
    var phone = req.body.phone;
    var code = req.body.code;
    if (users[phone] != code) {
        res.send({
            code: 1,
            msg: '手机号或验证码不正确'
        });
        return;
    }
    //删除保存的code
    delete users[phone];

    UserModel.findOne({
        phone
    })
        .then(user => {
            if (user) {
                user._doc.token = createToken(user._id)
                res.send({
                    code: 0,
                    data: user
                })
            } else {
                //存储数据
                return new UserModel({
                    phone
                }).save()
            }
        })
        .then(user => {
            user._doc.token = createToken(user._id)
            res.send({
                code: 0,
                data: user
            })
        })
        .catch(error => {
            console.error('/login_sms', error)
        })
})

//redBagRain
router.get("/redBagRain",function (req,res){
    res.send(redBagRain)
})

//home
router.get("/home",function (req,res){
    res.send(home)
})

//discountBooks
router.get("/teJiShuShi",function (req,res){
    res.send(teJiShuShi)
})

//deserveShop
router.get("/DeserveBuying",function (req,res){
    res.send(zhiDeMai)
})

//category
router.get("/category",function (req,res){
    res.send(category)
})

//jinRiCuXiao
router.get("/jinRiCuXiao",function (req,res){
    res.send(jinRiCuXiao)
})

//clothing
router.get("/clothing",function (req,res){
    res.send(clothing)
})

//detail
router.get("/detail",function (req,res){
    res.send(detail)
})

//battle
router.get("/battle",function (req,res){
    res.send(battle)
})

//seckilled
router.get("/seckilled",function (req,res){
    res.send(seckilled)
})

//picture
router.get("/picture", function (req, res) {
	res.send(picture)
})

router.get("/shangDian",function (req,res){
    res.send(shangDian)
})

router.get("/maoYi",function (req,res){
    res.send(maoYi)
})

router.get("/niu",function (req,res){
    res.send(niu)
})
module.exports = router;

