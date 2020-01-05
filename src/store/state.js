export default {
    user: {}, // 用户信息对象
    token: localStorage.getItem('token_key') || '', // 当前用户登陆的标记
    count:0,
    detail:{},
    countI:0,
    review_list:[],
    countH:0,
    sectionSearch:false
}
