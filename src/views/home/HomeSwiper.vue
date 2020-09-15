<template>
	<div>
		<swiper>
			<swiper-item v-for="(item, index) in test" :key="index">
				<a href="">
					<img src="#" alt="">
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from '@/components/common/swiper/index'
	export default {
		data(){
			return {
				test: [4,5,6,7]
			}
		},
		components: {
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
	
</style>
