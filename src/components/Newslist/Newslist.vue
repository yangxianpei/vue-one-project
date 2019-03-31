<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars3.githubusercontent.com/u/46846142?s=40&v=4"
          >
          <div class="mui-media-body">
            <h1>千城:数据来自mock</h1>
            <p class="mui-ellipsis">
              <span>发表日期:2012-12-12</span>
              <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.Image">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <!-- <span>发表日期:{{item.Date | dateFormat}}</span> -->
               <span>发表日期:{{item.Date  }}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import title from "./../../mock.js";
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    getnewslist() {
      this.$http.get("http://f.cn").then(
        success => {
          this.newslist = success.body
        },
        fail => {
          Toast("获取失败");
        }
      );
    }
  }
}
</script>

<style lang="less" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
