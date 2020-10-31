<template>
	<div>
		<u-card   padding="0" :head-border-bottom="false" :foot-border-top="true" :border="false"  >
			<view class="" slot="body"> 
				
				<view class="u-body-item u-flex u-col-between u-p-t-0" @click="stroyClick(item)" v-for="item in newsList">
					<image src="../../static/images/policy1.jpg" mode="widthFix"></image>
					<view class="u-body-item-title">
						<view class="article-title">{{item.sendTitle}}</view><p >{{item.sendTime}}</p>
					</view>
				</view>
			
			</view>
		</u-card>
	</div>
</template>

<script>
	export default {
		methods:{
			stroyClick(item){
				uni.navigateTo({
					url: '../story/story?item='+encodeURIComponent(JSON.stringify(item)),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		data(){
			return {
				newsList:[],
			}
		},
		onLoad(option) {
			this.$request.post("wx/getNewsList",{"lmOid":"130","page":"1","rows":"20"}).then(res=>{
				console.log(res);
				this.newsList = res.data.rows;
			});
		},
	}
</script>

<style scoped lang="scss">
	.u-body-item{
		margin-bottom: 20rpx;
	}
	.u-body-item image {
			width: 220rpx;
			flex: 0 0 220rpx;
			height: 220rpx;
			border-radius: 8rpx;
			margin-right: 12rpx;
		}
	
		.u-body-item-title{.article-title{font-size: 28rpx;height: 80rpx;}p{font-size:20rpx;color: #909399;}}
	
</style>
