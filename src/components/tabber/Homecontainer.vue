<template>
  <div>
    <!-- 轮播图 -->
   <slide :lunbotulist='lunbotulist' :infull='false'></slide>

  

    <!-- 六宫格 -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="./../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="./../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="./../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="./../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
         <img src="./../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="./../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>    
    </ul>
  </div>
</template>


<script>
import  "./../../mock.js";
// console.log(data)

//导入轮播图
import slide from './../subcomponents/slide.vue' 

//提醒用户导入mint-ui
import {Toast} from 'mint-ui'


  export default{
  data() {
    return {
      lunbotulist: ""
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("http://g.cn").then(
        success => {
          this.lunbotulist = success.body
          console.log( this.lunbotulist.Image)
        },
        fail => {
          Toast("获取失败");
        }
      );
    }
  },
  components:{
    slide
  }
}
</script>
<style lang="less" scoped>

ul li img {
  width: 60px;
  height:60px;
}

.mui-grid-view.mui-grid-9{
  background-color: white;
  border: none
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;

}
.mui-media-body{
  font-size: 13px;

}

</style>
 