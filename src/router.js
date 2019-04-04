import VueRouter from 'vue-router'

import Homecontainer from './components/tabber/Homecontainer.vue'
import Membercontainer from './components/tabber/Membercontainer.vue'
import Shopcarcontainer from './components/tabber/Shopcarcontainer.vue'
import Searchcontainer from './components/tabber/Searchcontainer.vue'
import Newslist from './components/Newslist/Newslist.vue'
import Newsinfo from './components/Newslist/Newsinfo.vue'
import Photolist from './components/photo/photolist.vue'
import Photoinfo from './components/photo/photoinfo.vue'
import Goodslist from './components/goodslist/goodslist.vue'
import Goodinfo from './components/goodslist/goodsinfo.vue'
import Goodsdesc from './components/goodslist/goodsdesc.vue'
import Goodscomment from './components/goodslist/goodscomment.vue'
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    { path: '/home', component: Homecontainer },
    { path: '/member', component: Membercontainer },
    { path: '/shopcar', component: Shopcarcontainer },
    { path: '/search', component: Searchcontainer },
    { path:'/home/newslist',component:Newslist},
    { path:'/home/newsinfo/:id',component:Newsinfo},
    { path:'/home/photolist',component:Photolist},
    { path:'/home/photo/:id',component:Photoinfo},
    { path:'/home/goodslist',component:Goodslist},
    { path:'/home/goodsinfo/:id',component:Goodinfo},
    { path:'/home/goodsdesc/:id',component:Goodsdesc ,name:'goodsdesc'},
    { path:'/home/goodscomment/:id',component:Goodscomment ,name:'goodscomment'}
  ],
  linkActiveClass: 'mui-active' //设置自己的类名 这个类名刚好mui组件里有内置css所以有样式


})

//把路由暴露出去
export default router