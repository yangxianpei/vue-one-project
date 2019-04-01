<template>
  <div class="photoinfocontainer">
    <h3>标题:{{photoinfo.title}}</h3>
    <p class="subtitle"></p>
    <div class="spancontainer">
      <span class="time">发表时间:{{photoinfo.Date}}</span>
      <span class="click">点击:{{photoinfo.click}}次</span>
    </div>

    <hr>
    
    <!-- 缩略图区域 -->

<div class='suoluetucontainer'>
<template class='suoluetu'>
  <vue-preview :slides="list" @close="handleClose" class='a'></vue-preview>
</template>
</div>

    
<div class="textcontent">{{photoinfo.Paragraph}}</div>
    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
//导入评论子组件
import comment from "./../subcomponents/comment.vue";
import './../../../src/mock.js'
import suolue from './../../../src/mock.js'

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list:[
        //       {
        //     src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
        //     msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        //     alt: 'picture1',
        //     title: 'Image Caption 1',
        //     w: 600,
        //     h: 400
        //   },
        //   {
        //     src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
        //     msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
        //     alt: 'picture2',
        //     title: 'Image Caption 2',
        //     w: 1200,
        //     h: 900
        //   }
      ]
    };
  },
  created() {
    this.getphotoinfo()
    this.getsuolietu()
  },
  methods: {
    getphotoinfo(id) {
      this.$http.get("http://f.cn").then(success => {
        // console.log(success.body[this.id]);
        this.photoinfo = success.body[this.id];
      });
    },
    getsuolietu(){
        this.$http.get('http://suo.cn').then((success)=>{
          
            success.body.forEach(item=>{
                item.w=600,
                item.h=400

            })
            this.list= success.body
              console.log(this.list)
        })
    }
  },
  components: { //注册评论组件
    "cmt-box": comment
  }
};
</script>

<style lang="less" scoped>
.photoinfocontainer {
  h3 {
    font-size: 18px;
    margin: 10px;
  }
  .time {
    font-size: 13px;
  }
  .click {
    font-size: 13px;
  }
  .spancontainer {
    display: flex;
    justify-content: space-between;
  }

  .textcontent {
    margin: 10px 0;
    font-size: 13px;
  }
 
    
}

  
</style>
