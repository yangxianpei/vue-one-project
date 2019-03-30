//引入vue
import Vue from 'vue'


//导入router
import VueRouter from 'vue-router'
//vue使用VueRouter
Vue.use(VueRouter)


//按需引入mint-ui
import { Header , Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


//引入app.vue
import app from './APP.vue'
//引入 mui css
import '../lib/mui/css/mui.min.css'
//引入mui 图标
import '../lib/mui/css/icons-extra.css'

//引入mock
require('./mock.js')

//导入自己的路由
import router from './router.js'

import data from './mock.js'


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router,

})

// console.log(m1)


