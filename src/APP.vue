<template>
  <div class="container"> 
    <!-- Header -->
  <mt-header fixed title="城院商城"></mt-header>
	
     <!-- content -->
		 <transition>
		 <router-view></router-view>
		 </transition>

	
     <!-- fonter -->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-yxp" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-yxp" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-yxp" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-yxp" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
     

   
  </div>
</template>

<script>

</script>


<style lang='scss' scoped>
    .container{
      padding:40px 0;
			padding-bottom: 50px;
			overflow-x: hidden;  //有滚动条 就加一个overflow-x:hidder
    }

  .mint-header {
    z-index: 10;
  }
		.v-enter{
			opacity: 0;
			transform: translateX(100%); //进来是100%
		}
		.v-leave-to{
			opacity: 0;
			transform: translateX(-100%);//出去是-100%;  posiru
			position: absolute; //里面的字在乱动 我就加position:absolute
		}
		.v-enter-active,
		.v-leave-active{
			transition: all 0.5s ease;
		}

		.mui-bar-tab .mui-tab-item-yxp.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-yxp {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-yxp .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-yxp .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mui-bar-tab .mui-tab-item-yxp {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
</style>