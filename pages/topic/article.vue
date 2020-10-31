<template>
	<div class="wrap">
		<view class="title">{{title}}</view>
		<rich-text class="content" :nodes="content"></rich-text>
		<!-- <view class="content" v-html="content" @click="getDom($event)"></view> -->
	</div>
</template>

<script>
	// import $ from jQuery;
	export default {
		data() {
			return {
				title: "",
				content: "",
			}
		},
		onReady(option) {

		},
		onLoad(option) {
			this.$request.get("api/topic/" + option.id).then(res => {
				this.title = res.title;
				this.content = res.posts[0].content;
			});
		},
		
		methods: {
		
		},
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 40rpx;

		.title {
			font-size: 30rpx;
			font-weight: 700;
			text-align: center;
			margin-bottom: 0;
			border: none;
			background: none;
		}

		p {
			color: #666;
			line-height: 50rpx;
		}
	}
</style>
