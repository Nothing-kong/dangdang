# 接口文档

## 目录：
[1、获取首页感兴趣图书列表的数据](#获取首页感兴趣图书列表的数据)<br/>
[2、获取首页秒杀列表的数据](#获取首页秒杀列表的数据)<br/>
[3、请求首页图片路径数据](#请求首首页图片路径数据)<br/>
[4、请求红包雨数据](#请求红包雨数据)<br/>
[5、获取特价书市数据](#获取特价书市数据)<br/>
[6、获取值得买数据](#获取值得买数据)<br/>
[7、获取今日促销数据](#获取今日促销数据)<br/>
[8、发送短信验证码](#发送短信验证码)<br/>
[9、手机号验证码登陆](#手机号验证码登陆)<br/>
[10、用户名密码登录](#用户名密码登录)<br/>
[11、自动登录](#自动登录)<br/>
[12、获取商品详情](#获取商品详情)<br/>
[13、获取服装馆数据](#获取服装馆数据)<br/>
[14、获取分类列表的数据](#获取分类列表的数据)<br/>
[15、获取图书列表](#获取图书列表)<br/>
[16、获取商店数据](#获取商店数据)<br/>
[17、获取新品数据](#获取新品数据)<br/>
[18、获取商品相关数据](#获取商品相关数据)<br/>



## 1、获取首页感兴趣图书列表的数据

### 请求URL：
	http://localhost:4000/home

### 示例：
[http://localhost:4000/home]

### 请求方式：
	GET



## 2、获取首页秒杀列表的数据

### 请求URL：
	http://localhost:4000/seckilled

### 请求方式：
	GET

### 参数类型：
	无


## 3、请求首首页图片路径数据

### 请求URL：
	http://localhost:4000/picture

### 请求方式：
	GET


## 4、请求红包雨数据

### 请求URL：
	http://localhost:4000/redBagRain

### 请求方式：
    GET


## 5、获取特价书市数据

### 请求URL：
	http://localhost:4000/teJiShuShi

### 请求方式：
	GET


## 6、获取值得买数据

### 请求URL：
	http://localhost:4000/DeserveBuying

### 请求方式：
	POST


## 7、获取今日促销数据

### 请求URL：
	http://localhost:4000/jinRiCuXiao

### 请求方式：
	GET


​      
## 8、发送短信验证码

### 请求URL：
	http://localhost:4000/sendcode

### 请求方式：
	Get
### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号


### 9、手机号验证码登陆

#### 请求URL：
	http://localhost:4000/login_sms

#### 请求方式：
	Post

### 参数类型: 请求体
	|参数		|是否必选 |类型     |说明
	|phone     |Y       |string   |手机号
	|code       |Y       |string   |短信验证码

### 10、用户名密码登录

#### 请求URL：
	http://localhost:4000/login_pwd

#### 请求方式：
	Post

### 参数类型: 请求体
	|参数		  |是否必选 |类型     |说明
	|name     |Y       |string   |用户名
	|pwd      |Y       |string   |密码
	|captcha  |Y       |string   |验证码

### 11、自动登录
#### 请求URL：
	http://localhost:4000/auto_login

#### 请求方式：
	Get


### 12、获取商品详情
#### 请求URL：
	http://localhost:4000/detail

#### 请求方式：
	Get


### 13、获取服装馆数据
#### 请求URL：
	http://localhost:4000/clothing

#### 请求方式：
	Get


### 14、获取分类列表的数据
#### 请求URL：
	http://localhost:4000/category

#### 请求方式：
	Get


### 15、获取图书列表
#### 请求URL：
	http://localhost:4000/battle

#### 请求方式：
	Get


### 16、获取商店数据
#### 请求URL：
	http://localhost:4000/shangDian

#### 请求方式：
	Get


### 17、获取新品数据
#### 请求URL：
	http://localhost:4000/maoYi

#### 请求方式：
	Get
	
### 18、获取商品相关数据
#### 请求URL：
	http://localhost:4000/niu

#### 请求方式：
	Get
	

​      
## 1. 测试接口1
### 请求URL:
	http://localhost:4000/clothing

### 请求方式：
	GET

### 返回示例：
	成功:
	{
		"shuffling":{
      "name": "轮播",
      "value": [
          {
              "dd_src": "e894e184297826a6",
              "dd_name": "第一坑位",
              "block": "第一坑位",
              "img_url": "http://img59.ddimg.cn/206770073864889_y.jpg",
              "link_url": "http://shop.m.dangdang.com/20677.html?t=1577513664",
              "component_type": "1",
              "is_only_img": "1"
          }
      ]
  	}
	}

