<template>
  <div id="app">
		<router-view/>
		<!-- 底部导航 -->
		<main-tab-bar/>
  </div>
</template>
<script>
	import MainTabBar from '@/components/content/mainTabBar/MainTabBar'
	export default {
		components: {
			MainTabBar
		}
	}
</script>
<style>
	@import "./assets/css/base.css";
	@import url("./assets/css/font/iconfont.css");
</style>
