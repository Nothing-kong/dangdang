import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
import 'lib-flexible'
import * as API from '@/api'
import store from './store/store'
import AllPagesHeader from "./components/allPagesHeader/allPagesHeader"
import './validate'
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Field } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import { Toast } from 'vant';
import { Overlay } from 'vant';
import { Area } from 'vant';
import { Dialog } from 'vant';
Vue.use(Dialog);
Vue.use(Area);
Vue.use(Overlay);

Vue.use(Toast);
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(Field);
Vue.use(Popup);

Vue.use(Picker);

Vue.config.productionTip = false
Vue.prototype.$API = API

Vue.component(Button.name, Button)
Vue.component("AllPagesHeader",AllPagesHeader)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
