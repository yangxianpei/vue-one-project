<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition>
    <!-- 商品轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <slide :lunbotulist="lunbotu"></slide>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{this.$store.state.name[id]}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>¥2999</del>&nbsp;&nbsp;销售价:
            <span class="nowprice">¥{{goodslist.price}}</span>
          </p>
          <p>
            购买数据:
            <numberbox @getcount="getSelectedCount" :max="lunbotu.Integer"></numberbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addtoshopcar">加入购物车</mt-button>
          </p>

          <!-- 分析:如何实现加入购物车时候,拿到选择的数量 -->
          <!-- 1.经过 分析 按钮属于goodsinfo的 数字 goodsinfonumber组件-->
          <!-- 2.由于涉及到了父子组件嵌套了,所以,无法直接连接goodsinfo页面中 获取到,选到商品的值 -->
          <!-- 3. 解决这个问题:子组件向父组件传值(事件调用机制) -->
          <!-- 4.事件调用机制：父向子传递方法，子调用这个方法，同时把数据当作参数 传递给这个方法 -->
        </div>
      </div>
    </div>

    <!-- 参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header"></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品库存:{{goodslist.stock}}</p>
          <p>商品情况:无</p>
          <p>上架时间:无</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">商品评论</mt-button>
        <mt-button type="danger" size="large" plain @click="gocomment(id)">商品介绍</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
//导入轮播图
import slide from "./../subcomponents/slide.vue";

//导入数字框
import numberbox from "./../subcomponents/goodsinfo_numberbox.vue";
export default {
  data() {
    return {
      lunbotu: "",
      goodslist: "", //轮播图数据
      id: this.$route.params.id,
      ballflag: false, //小球隐藏标志符
      selectcount: 1 //保存用户选择的商品的数量,默认为1
    };
  },
  created() {
    this.getlunbotu();
    this.getgoodsinfo();
    console.log("Nameinfo");
  },
  methods: {
    getlunbotu() {
      this.$http.get("http://g.cn").then(success => {
        // console.log(success.body)
        this.lunbotu = success.body;
      });
    },
    getgoodsinfo(id) {
      this.$http.get("http://goodsxiangxi.cn").then(success => {
        this.goodslist=success.body[this.id]
        console.log( this.goodslist.price)
      });
    },
    goDesc(id) {
      //点击跳转详细
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    gocomment(id) {
      //点击跳转评论
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //动态获取小球X 和 Y坐标
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xx = badgePosition.left - ballPosition.left;
      const yy = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xx}px, ${yy}px)`;
      //  el.style.transform="translate(100px, 220px)";
      el.style.transition = "all 1s cubic-bezier(0,0,.25,1)";
      done();
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    addtoshopcar() {
      this.ballflag = !this.ballflag;
      // {id:商品id, count:商品数量,price商品单价,selected:true}
      var goodsinfo = {
        id: this.$route.params.id,
        count: this.selectcount,
        price: this.goodslist.price,
        name:this.$store.state.name[this.id],
        selected: true
      };
      //调用store 中的mutation 来将商品加入购物车
      this.$store.commit("addtocar", goodsinfo);
    },
    getSelectedCount(count) {
      this.selectcount = count;
    }
  },
  components: {
    slide,
    numberbox
  }
};
</script>

<style lang="less" scoped>
.goodsinfo {
  background-color: #ccc;
  overflow: hidden;
}
.mui-card-content-inner {
  padding: 0;
}
.nowprice {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.mui-card-footer {
  display: block;
  .mint-button {
    margin: 15px 0;
  }
}
.ball {
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  z-index: 12;
  top: 294px;
  left: 119px;
}
</style>
