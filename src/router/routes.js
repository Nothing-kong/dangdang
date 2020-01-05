
import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import DeserveBuying from '../pages/DeserveBuying/DeserveBuying.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Login from '@/pages/Login/Login'
import Profile from '@/pages/Profile/Profile'
import Clothing from '@/pages/Clothing/Clothing.vue'

import TeJiaShuShi from "../pages/teJiaShuShi/teJiaShuShi.vue"
import JinRiCuXiao from "../pages/jinRiCuXiao/jinRiCuXiao.vue"
import Sweater from '../pages/Sweater/Sweater.vue'
import Library from '../pages/Library/Library'
import RedBagRain from '@/pages/RedBagRain/RedBagRain'
import Goods from '@/pages/goods'
import Cart from '@/pages/cart/cart'
import Detail from '@/pages/detail/detail'
import Recommend from '@/pages/recommend/recommend'
import Comment from '../pages/comment/comment.vue'
import Shop from '../pages/Sweater/Shop.vue'
import Lyh from '../pages/Sweater/liuyanhu.vue'

//test
// import AllHeader from "../components/allPagesHeader/allPagesHeader"

export default [
    {
        path:'/msite',
        component:Msite,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/clothing',
        component:Clothing,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/deservebuying',
        component:DeserveBuying,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/shopcart',
        component:ShopCart
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/jinRiCuXiao',
        component:JinRiCuXiao
    },
    {
        path:'/teJiaShuShi',
        component:TeJiaShuShi
    },
    {
        path:'/red_bag_rain',
        component:RedBagRain
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/goods',
        component:Goods,
    },
    {
        path:'/cart',
        component:Cart,
    },
    {
        path:'/detail',
        component:Detail,
    },
    {
        path:'/recommend',
        component:Recommend,
    },
       {
        path:'/comment',
        component:Comment,
    },
    {
        path:'/library',
        component:Library
    },
    {
        path:'/sweater',
        component:Sweater,
        children:[
            {
                path:'/sweater/shop',
                component:Shop
            },
            {
                path:'/sweater/Lyh',
                component:Lyh
            },
            {
                path:'/sweater',
                redirect:'/sweater/Lyh'
            },
        ]
    },
    {
        path:'/',
        redirect:'/msite',
    }
]
