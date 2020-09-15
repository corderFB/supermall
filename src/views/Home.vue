<template>
  <div id="home">
		<!-- 头部 -->
		<home-nav-bar/>
		<home-swiper/>
  </div>
</template>

<script>
import HomeNavBar from './home/HomeNavBar'
import HomeSwiper from './home/HomeSwiper'
export default {
  name: 'Home',
  components: {
		HomeNavBar,
		HomeSwiper
  }
}
</script>
<style>

</style>
