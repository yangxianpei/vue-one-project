<template>
  <div class="goodscontainer">

    <router-link
      class="goods-sitem"
      v-for="(item,i) in goodslist"
      :key="i"
      :to="'/home/goodsinfo/'+i"
      tag="div"
      >
      <img
        src="//img12.360buyimg.com/mobilecms/s240x240_jfs/t1/4528/10/3590/153299/5b997bf5E4a513949/45ab3dd6c35d981b.jpg!q70.dpg.webp"
        alt
      >
      <h1 class="title" >{{item.Name}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">¥1</span>
          <span class="old">¥{{item.priceold}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock}}件</span>
        </p>
      </div>
    </router-link>

    <mt-button type="danger" size="large" @click="getmore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import goods from "./../../mock.js";


export default {
  data() {
    //data往自己组件挂载私有数据
    return {
      goodslist: [],
      name:'',
    };
  },
  created() {
    this.getgoodslist();
    this.sentname()
  },
  methods: {
    getgoodslist() {
      this.$http.get("http://goods.cn").then(success => {
        this.goodslist = this.goodslist.concat(success.body);
        // console.log(this.goodslist[0].Name)
        for(let i=0;i<this.goodslist.length;i++){
       name=(this.goodslist[i].Name)
      this.$store.commit('addname',name)
     }
      });
    },
    getmore() {
      this.$http.get("http://goods.cn").then(success => {
        this.goodslist = this.goodslist.concat(success.body);
      });
    },
    sentname(){
   
     
     
      // this.$store.commit('addname',this.name)
  
      console.log(this.name)
    }
   
   
  }

};


</script>

<style lang="less" scoped>
.goodscontainer {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: space-between;
  border-radius: 4px;
  .goods-sitem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0, 0, 8 #ccc;
    margin: 3px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    h1 {
      font-size: 10px;
    }
    .info {
      background-color: #eee;
      padding: 2px;
      .now {
        color: red;
        font-weight: bold;
        font-size: 14px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
      }

      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
    p {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
