<template>
	<div>
		<tab-bar>
			<tab-bar-item path='/home'>
				<div slot="icon" class="iconfont fb-home"></div>
				<div slot="info">首页</div>
			</tab-bar-item>
			<tab-bar-item path='/category'>
				<div slot="icon" class="iconfont fb-Similarproducts"></div>
				<div slot="info">分类</div>
			</tab-bar-item>
			<tab-bar-item path='/shopCart'>
				<div slot="icon" class="iconfont fb-cart-Empty"></div>
				<div slot="info">购物车</div>
			</tab-bar-item>
			<tab-bar-item path='/profile'>
				<div slot="icon" class="iconfont fb-account"></div>
				<div slot="info">个人</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from '@/components/common/tabBar/TabBar'
	import TabBarItem from '@/components/common/tabBar/TabBarItem'
	export default {
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>

</style>
