<template>

  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max" style="height:25px; ">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount"  @change="countchange" ref='numbox'  readonly >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 分析:子组件什么时候向父组件传递数据 -->
</template>
<script>
//导入 mui
import mui from './../../../lib/mui/js/mui.min.js'

export default {
    mounted() {
        mui('.mui-numbox').numbox()
    },
    methods:{
        //每当文本框数据被修改的时候,立即把最新的数据通过数据调用传递给父组件.
        countchange(){
        //  数量改变了
        console.log(this.$refs.numbox.value)
        this.$store.commit("updategoodsinfo",{
          id:this.goodsid,
          count:this.$refs.numbox.value
        })
        }
    },
    props:['initcount','goodsid']
   
}
    
</script>

<style lang="less" scoped>

</style>
