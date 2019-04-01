<template>
  <div class="newsinfocontainner">
    <!-- 标题 -->
      <h3 class="title">{{this.newsinfo.title}}</h3>
      <p class="subtitle">
        <span class="time">发表时间:{{this.newsinfo.Date}}</span>
        <span class="click">点击:{{this.newsinfo.click}}次</span>
      </p>
      <hr>
      <div class="content">{{this.newsinfo.Paragraph}}</div>


      <!-- 发表评论 -->
      <comment :id="this.id"></comment>
  </div>
</template>

<script>
import data3 from "./../../mock.js";
import { Toast } from "mint-ui";

//导入comment.vue评论子组件
import comment from './../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //
      newsinfo: []
    };
  },
  created() {
    this.getnewsinfo();
  },
  methods: {
    getnewsinfo() {
      this.$http.get("http://c.cn").then(
        success => {
                 
        this.newsinfo = success.body[this.id]

        },
        fail => {
          Toast("获取失败");
        }
      );
    }
  },
  components:{
    comment
  }
};
</script>

<style lang="less" scoped>
.newsinfocontainner {
    li{
        list-style: none;
    }
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color:red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
      font-size: 12px;
      text-indent: 2em;
     
  }
}
</style>
