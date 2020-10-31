<template>
	<div>

		<view class="swiper-con">
			<u-swiper :height="250" :list="swiperList" :title="title" :effect3d="true" :interval="3000"></u-swiper>
		</view>
		<view class="wrap">
			<view class="tit">
				<h3>推荐</h3>
			</view>
			<u-card padding="0" margin="10" v-for="(item,index) in recommendedList" :key="index">
				<view class="" slot="body">
					<view class="u-body-item u-flex u-col-between  u-border-bottom" @click="articleClick(item.tid)">
						<image :src="item.thumb" mode="widthFix"></image>
						<view class="u-body-item-title">
							<view class="article-title">{{item.title}}</view>
							<p class="tip">教程</p>
							<p class="tip">{{item.category.name}}</p>
							<p class="tip">{{item.viewcount}}
								<u-icon name="eye" size="26"></u-icon>
							</p>
						</view>
					</view>

				</view>

			</u-card>
		</view>
		<div class="footer">
			<p>©2019 3D模艺网 赣ICP证18014406号</p>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				articleId: '',
				thumb:"",
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				title: false,
				recommendedList: []
			}
		},
		onLoad: function() {},
		onReady: function() {
			this.$request.get("api/tags/图文").then(res => {
				for (var i in res.topics) {
					let item = res.topics[i];
					this.recommendedList.push(item);
				
				}
			});

		

			// this.$request.get("api/categories").then(res => {
			// 	var iL = [];
			// 	for(var i in res.categories){
			// 		let item = res.categories[i];
			// 		if(item.name === "教程"){
			// 			for(var c of item.children){

			// 				for(var d of c.children){
			// 					let mapTemp = {};

			// 					if(d.posts[0]){
			// 						mapTemp["content"] = d.posts[0].content;
			// 						mapTemp["title"] = d.posts[0].topic.title;
			// 					}

			// 					iL.push(mapTemp);

			// 				}
			// 			}

			// 		}
			// 	}
			// this.recommendedList = iL;
			// console.log(this.recommendedList);
			// });



		},
		methods: {
			articleClick(id) {
				uni.navigateTo({
					url: '../topic/article?id=' + id
				})
			},
		},

	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 40rpx;
	}

	.swiper-con {
		margin-top: 20rpx;
	}

	.logo {
		padding: 20rpx 20rpx;
		height: 260rpx;
		background-color: #007AFF;
	}



	.personal-infor {
		height: 200rpx;
		background: #FFFFFF;
		position: absolute;
		margin: 0 4%;
		width: 92%;
		padding: 20rpx;
		top: 230rpx;
		box-shadow: 1px 1px 2px 0px #eee;
		z-index: 3;

		.infor-name {
			font-weight: bold;
		}
	}


	.cellGroup {
		margin-top: 70rpx;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.btn-progress {
		float: right;
		box-shadow: -1px 1px 4px 0px #999;
	}


	.tit {

		h3 {
			border-bottom: 4px solid #007AFF;
			display: inline;
			padding-bottom: 10rpx;
		}

		.subtit {
			padding-top: 20rpx;
			letter-spacing: 5rpx;
		}

	}

	.u-body-item {
		font-size: 32rpx;
		color: #333;
		padding: 20rpx 10rpx;

		.tip {
			display: inline-block;
			margin-right: 20rpx;
		}
	}

	.u-body-item image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		border-radius: 8rpx;
		margin-right: 12rpx;
	}

	.u-body-item-title {
		.article-title {
			font-size: 28rpx;
			height: 80rpx;
		}

		p {
			font-size: 20rpx;
			color: #909399;
		}
	}

	.footer {
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #fff;
		z-index: 2;
	}
</style>
