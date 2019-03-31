import VueRouter from 'vue-router'

import Homecontainer from './components/tabber/Homecontainer.vue'
import Membercontainer from './components/tabber/Membercontainer.vue'
import Shopcarcontainer from './components/tabber/Shopcarcontainer.vue'
import Searchcontainer from './components/tabber/Searchcontainer.vue'
import Newslist from './components/Newslist/Newslist.vue'
import Newsinfo from './components/Newslist/Newsinfo.vue'

var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    { path: '/home', component: Homecontainer },
    { path: '/member', component: Membercontainer },
    { path: '/shopcar', component: Shopcarcontainer },
    { path: '/search', component: Searchcontainer },
    { path:'/home/newslist',component:Newslist},
    { path:'/home/newsinfo/:id',component:Newsinfo}

  ],
  linkActiveClass: 'mui-active' //设置自己的类名 这个类名刚好mui组件里有内置css所以有样式


})

//把路由暴露出去
export default router