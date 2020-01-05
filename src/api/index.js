import ajax from "./ajax"


//异步获取首页的数据
export const reqHome = () => ajax.get("/home")
//异步获取首页的数据
export const reqSecKilled = () => ajax.get("/seckilled")
//异步获取首页的数据
export const reqPicture = () => ajax.get("/picture")
//异步获取首页的数据
export const reqRedBagRain = () => ajax.get("/redBagRain")


export const reqTeJiaShuShi = () => ajax.get("/teJiShuShi")

export const DeserveBuying = () => ajax.get("/DeserveBuying")

export const reqJinRiCuXiao = () => ajax.get("/jinRiCuXiao")

//.发送短信验证码
export const reqSendCode = (phone) => ajax.get('/sendcode', {
  // url: '/sendcode',
  params: {
    phone
  }
})

// .用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha})

//  手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax.post('/login_sms', {phone, code})

//  自动登陆
export const reqAutoLogin = () => ajax.get('/auto_login')

//获取商品详情
export const getDetail=()=>ajax.get("/detail")



//异步获取服装馆数据
export const reqClothing = () => ajax.get("/clothing")

//异步获取分类列表的数据
export const reqCategory = () => ajax.get("/category")

//图书列表
export const reqLibrary = () => ajax.get("/battle")
//商店
export const reqShop = () => ajax.get("/shangDian")
//新品
export const reqCommon = () => ajax.get("/maoYi")
//新品  
export const reqRight = () => ajax.get("/niu")
