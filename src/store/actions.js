/*
包含n个用于间接更新状态数据的方法的对象
方法可以包含异步和逻辑处理代码
*/

import {
	reqAutoLogin,
	getDetail
} from '@/api'

import {
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
} from './mutation-types'

export default {

	/*
	保存用户
	*/
	saveUser ({commit}, user) {
		const token = user.token
		// 将token保存local
		localStorage.setItem('token_key', token)

		delete user.token  // 删除user内部的token

		// 将token保存到state
		commit(RECEIVE_USER, {user})
		// 将user保存到state
		commit(RECEIVE_TOKEN, {token})
	},

	/*
	自动登陆的异步action
	*/
	async autoLogin ({commit, state}) {

		if (state.token && !state.user._id) { // 必须要有token且没有user信息
			// 发送自动登陆的请求
			const result = await reqAutoLogin()
            console.log(result);
			if (result.code===0) {
				const user = result.data  // 没有token
				commit(RECEIVE_USER, {user})
			}
		}
	},

	logout ({commit}) {
		localStorage.removeItem('token_key')
		commit(RESET_USER)
		commit(RESET_TOKEN)
	},


	async getDetailInfo({commit}){
		const result = await getDetail()
		commit('setDetailInfo',result.data)
	},
}
