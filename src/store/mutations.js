/*
包含n个用于直接更新状态数据的方法的对象
方法不可以包含异步和逻辑处理代码
*/

import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
} from './mutation-types'

export default {
		[RECEIVE_TOKEN] (state, {token}) {
      state.token = token
    },
    [RECEIVE_USER] (state, {user}) {
      state.user = user
    },
    [RESET_TOKEN] (state) {
      state.token = ''
    },
    [RESET_USER] (state) {
      state.user = {}
    },
    setCount(state,countI) {
      console.log(countI)
    state.count=state.count+countI
    },
    setDetailInfo(state,detail){
      state.detail=detail
    },
    setSectionSearch(state,sectionSearch){
        state.sectionSearch = sectionSearch
    },
    updateCount(state,countI){
      state.countI=countI
    },
    updateReview(state,review){
      state.review_list=review
    },
    updateCartCount(state,count){
      state.count=state.count+count
    }
}
