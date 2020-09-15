<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	#tab-bar{
		display: flex;
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 0.875rem;
		height: 3.0625rem;
		background-color: #42B983;
	}
	.tab-bar-item{
		flex: 1;
		margin-top: 0.5rem;
	}
</style>
