<template>
	<div class="navBar">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</div>
</template>

<script>
</script>

<style>
	.navBar{
		display: flex;
		height: 2.75rem;
		line-height: 2.75rem;
		font-size: 0.875rem;
		text-align: center;
		color: #ffffff;
		background-color: #42B983;
	}
	.navBar .left{
		width: 4.375rem;
	}
	.navBar .center{
		flex: 1;
	}
	.navBar .right{
		width: 4.375rem;
	}
</style>
