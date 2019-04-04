//引入vue
import Vue from 'vue'


//导入router
import VueRouter from 'vue-router'
//vue使用VueRouter
Vue.use(VueRouter)


//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚进入网站 肯定会调用main.js在刚调用的时候 ,先从本地存储把购物车的数据读出来,放
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
  state: {//this.$store.state.***
    car: car,//将购物车中的商品的数据,用一个数组存储起来,在car数组中,存储一些商品的对象,咱们可以暂时可以讲这个商品对象,设计成这个样子{id:商品id, count:商品数量,price商品单价,selected:true}
    name:[]
  },
  mutations: {//this.$store.commit('方法名称','传唯一的参数')
    addtocar(state, goodsinfo) {
      //点击加入购物车,把商品信息保存到 store的car里
      //分析,
      // 如果 购物车里有 就改变里面商品数量
      //如果没有 则直接把商品数据push 到car中即可
      var flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          //获取到了就终止循环
          return true
        }

      })

      if (flag === false) {
        state.car.push(goodsinfo)

      }

      // 当 更新car之后,把car数组,存储到本地localStorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updategoodsinfo(state, updategoodsinfo) {
      //修改购物车数量值
      state.car.some(item => {
        if (item.id === updategoodsinfo.id) {
          item.count = parseInt(updategoodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormcar(state, id) {
      //根据ID ,从state中购物车删除,
      state.car.some((item, i) => {
        if (item === id) {
          state.car.splice(i, 1)
          return true
        }
      })

      //讲删除完毕后 最新的数据保存到localstore中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateselected(state,info){
       state.car.some(item=>{
          if(item.id===info.id){
              item.selected=info.selected
              return true
          }     
       })
       localStorage.setItem('car', JSON.stringify(state.car))
    },
    addname(state,name){

     state.name.push(name)
    }
    
  },
  getters: {//this.$store.getters.**

    getAllcount(state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count

      })
      return c
    },
     getSelected(state){
      var o={}
      state.car.forEach(item=>{
        o[item.id]=item.selected
      })
      return o
    },
    getAllmunbercount(state){
      var o={
        count:0,
        price:0
      }
      state.car.forEach(item=>{
        if(item.selected){
          o.count+=item.count
          o.price=o.count*item.price
        }
      })
      return o
    } 
 

  }
})

//按需引入mint-ui
// import { Header , Swipe, SwipeItem, Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

//全部导入mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//引入app.vue
import app from './APP.vue'
//引入 mui css
import '../lib/mui/css/mui.min.css'
//引入mui 图标
import '../lib/mui/css/icons-extra.css'


//导入自己的路由
import router from './router.js'

//引入moment时间插件来格式时间日期
import moment from 'moment'
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  moment(dateStr).format(pattern)
})


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置全局对象 默认传参格式 application/x-www-form-urlencoded
Vue.http.options.emulateHTTP = true



//导入vue-preview
import VuePreview from 'vue-preview'

Vue.use(VuePreview)


var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router,
  store

})

// console.log(m1)


