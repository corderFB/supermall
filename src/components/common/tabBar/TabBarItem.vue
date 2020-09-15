<template>
		<div class="tab-bar-item" :style="activeColor" @click="itemClick">
			<slot name="icon"></slot>
			<slot name="info"></slot>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				// isActive: false
			}
		},
		props: {
			path:String,
			color: {
				type: String,
				default: '#ffffff'
			}
		},
		methods: {
			itemClick(){
				this.$router.replace(this.path).catch(err => err)
			}
		},
		computed: {
			isActive(){
				return this.$route.path === this.path
			},
			activeColor(){
				return this.isActive ? {color: this.color} : {}
			}
		}
	}
</script>

<style>

</style>
