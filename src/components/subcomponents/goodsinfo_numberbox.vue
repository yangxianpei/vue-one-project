<template>
<!-- 问题: 由于max传来的值是异步获取的所以 不能同步拿到,就会拿到undefined 解决办法利用watch监听拿到最终的新值 -->
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1"  @change="countchange" ref='numbox'>
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
          console.log(this.$refs.numbox.value)
          this.$emit('getcount',parseInt(this.$refs.numbox.value))
        }
    },
    props:["max"],
    watch:{
        "max":function(newval,oldval){

            mui('.mui-numbox').numbox().setOption('max',newval); //帮忘记 选择器前面的点 .mui-numbox
        }
    }
}
    
</script>

<style lang="less" scoped>

</style>
