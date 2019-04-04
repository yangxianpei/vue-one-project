<template>
  <div>
    <!-- 顶部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id===0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @click="getmore"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <!-- 图片加载区 -->
    <ul>
      <router-link style="list-style:none" v-for="item in list" :key="item.id" :to="'/home/photo/'+item.id" tag='li'>   
        <img v-lazy="item.Image">
        <div class="infoa">
            <div class="bodya">{{item.Paragraph}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//导入mui
import mui from "./../../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
import p from "./../../../src/mock.js";
import image from "./../../../src/mock.js";

export default {
  data() {
    return {
      cates: [], //所有分类
      list: [] //图片
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getphoto();
    this.getimage(0);
  },

  methods: {
    getphoto() {
      this.$http.get("http://p.cn").then(success => {
        this.cates = success.body
        // console.log(success.body);
      });
    },
    getimage(catesid) {
      this.$http.get("http://i.cn").then(success => {
        this.list = success.body[catesid]

      });
    },
    getmore(catesid){

       this.$http.get("http://i.cn").then(success => {
        this.list = success.body[2]

      })
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}

ul {
    margin: 0;
    padding: 0;
      
  li {
      text-align: center;
      margin:10px 10px;
      border-radius: 8%;
       position: relative;
    box-shadow: 0,0,6px #999;
    background-color: #ccc;
    img{
        width:100%;
        border-radius: 10%;
        vertical-align: middle;//图片多出3像素
         
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;  
    }

      .infoa{
      color: white;
       position: absolute;
       bottom: 0;
      text-align: left;
      background-color: rgba(0,0,0,0.4);
      max-height: 84px;

      .bodya{
          font-size: 13px;
        text-indent: 2em;
      }
  }
  }


}
</style>
