
import Vue from 'vue'

import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

import app from './APP.vue'

import '../lib/mui/css/mui.min.css'

var vm = new Vue({
  el:'#app',
  render:c => c(app)
})