<template>
  <div>
    <!-- 商品展示-->
    <div class="infolist" v-for="(item,i) in list" :key="item.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getSelected[item.id]" @change='selectedchange(item.id,$store.getters.getSelected[item.id])'></mt-switch>
            <img
              src="//img14.360buyimg.com/mobilecms/s240x240_jfs/t1/21333/14/5246/180334/5c3ad7b6Ef7d727c0/c16e93d0bf77a31f.jpg!q70.dpg.webp"
              alt
            >
            <div class="info">
              <h1>{{item.name}}</h1>
              <p>
                <span class="price">￥{{item.price}}</span>
                <shopcarnumber :initcount="item.count" :goodsid="item.id"></shopcarnumber>
                <a href @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品结算 -->

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
  
            <div class="left">
              <p>总计(不含运费)</p>
              <p>
                已勾选商品
                <span class="red">{{$store.getters.getAllmunbercount.count}}</span>件,总价
                <span class="red">￥{{$store.getters.getAllmunbercount.price}}</span>
              </p>
            </div>
            <mt-button type="danger">去结算</mt-button>
    
        </div>
      </div>
    </div> 
  </div>
       
</template>

<script>
import shopcarnumber from "./../subcomponents/shopcarnumber.vue";

export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      this.list = this.$store.state.car;
      console.log(this.$store.state.car);
    },
    remove(id, index) {
      // 点击删除,把商品从store中根据ID删除,同时当前组件中list中对应的那个也删除
      this.list.splice(index, 1);
      this.$store.commit("removeFormcar", id);
    },
    selectedchange(id,val){
      // console.log(id +'-----'+ val)
      this.$store.commit('updateselected',{id,selected:val})
    }
  },

  components: {
    shopcarnumber
  }
};
</script>

<style lang="less" scoped>
.mui-card-content-inner {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  img {
    width: 50px;
    height: 50px;
  }
  h1 {
    font-size: 13px;
  }
  .info {
    .price {
      color: red;
      font-size: 13px;
    }
  }
}
.mui-card-content-inner {
     display: flex;
    justify-content: space-between;
    padding:0 5px;
 
    align-content: center;
    .left {
      .red {
        color: red;
      }
    }
  
}
</style>
