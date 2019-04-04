<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
        <img :src="item.Image" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>

export default{
    props:['lunbotulist','infull'],
    
}

</script>

<style lang="less" scoped>
.mint-swipe {
  height: 150px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: rebeccapurple;
    }
    &:nth-child(3) {
      background-color: hotpink;
    }
  }
}
</style>
