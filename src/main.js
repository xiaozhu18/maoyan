import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import loading from './layout/loading'
Vue.component('loading',loading)
import { InfiniteScroll,Search,Indicator,Toast,IndexList, IndexSection } from 'mint-ui'
Vue.use(MintUI).use(InfiniteScroll).use(Search).use(IndexList).use(IndexSection)
import { Header } from 'mint-ui';
Vue.component(Header.name, Header)

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.prototype.$Toast=Toast
Vue.prototype.$load=Indicator
Vue.prototype.$axios=axios
// 把 axios 方法 通过 原型 挂载 到vue根实例上（自定义key值为$http,vue实例也是一个对象嘛，所以可以自定义），
// 这样 在vue项目里哪里都可以用了，不用单个mport axios from 'axios' 引入了。
Vue.config.productionTip = false


Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
