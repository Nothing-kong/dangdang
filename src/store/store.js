import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'


Vue.use(Vuex)


export default new Vuex.Store({
  state,
  mutations, // 总的mutations, 它内部看到的就是总的state
  actions, // 总的actions, 它内部看到的就是总的state
  getters,
})