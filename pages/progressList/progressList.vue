<template>
	<view class="wrap">
		
		<u-form class="search-con">
			<u-form-item label-width="300" label="姓名/企业名称" required="true">
				<u-input placeholder="请填写姓名" v-model="searchNmae" type="text"></u-input>
			</u-form-item>
			<u-form-item label="身份证号/企业注册号" label-width="300" required="true">
				<u-input v-model="searchID" placeholder="请填写身份证号"></u-input>
			</u-form-item>
			<u-button class="addPartners" size="mini" @click="sousuo">
				</u-icon>搜索
			</u-button>
		</u-form>

		<!-- <u-button class="addPartners" size="mini" @click="searchClick">
			<u-icon name="plus" color="#2979ff" size="28"></u-icon>搜索弹窗
		</u-button>
		<u-modal ref="uModal" v-model="searchShow" :show-title="false" :show-cancel-button="true" confirm-text="修改"
		 cancel-text="删除" cancel-color="red" @confirm="editPartnerConfirm()" @cancel="delPartnerClick" :content="modalContent"></u-modal>
		<u-popup border-radius="10" v-model="newPartnersShow" mode="bottom" length="50%" :mask="true" height="400rpx">
			<view>
				<u-form class="u-form-pop">
					<view></view>
					<u-form-item label-width="250" label="姓名" required="true">
						<u-input placeholder="请填写姓名" v-model="newPartnersName" type="text"></u-input>
					</u-form-item>
					<u-form-item label="身份证号" label-width="250" required="true">
						<u-input v-model="newPartnersIDCard" placeholder="请填写身份证号"></u-input>
					</u-form-item>

					<u-form-item class="footer">
						<u-button @click="closePoup">取消</u-button>
						<u-button v-if="isEdit === true" type="primary" @click="newPartnersSubmit">修改</u-button>
						<u-button v-else type="primary" @click="newPartnersSubmit">搜索</u-button>
					</u-form-item>
				</u-form>
			</view>
		</u-popup> -->
		<view class="title">您共有{{listSize}}笔贷款</view>
		<view class="menus-ul">
			<view class="menus-li" v-for="item in list" :key="item.IDCard">
				<view class="infor">
					<view class="infor-box">
						<u-icon name="account" :size="30"></u-icon>
						<text class="infor-name">{{item.name}}</text>
						<text class="infor-id">{{item.IDCard}}</text>
					</view>
				</view>
				<view class="menus-tit">
					<text class="info">您已申请江西创业担保贷款</text>
					<text class="applyMoney">{{item.applyMoney}}</text>
				</view>
				<view class="loan">
					<view class="loan-zhi">
						<p>
							【贷款编号】
							<text>{{item.projectNo}}</text>
						</p>
						<text>{{list.projectNo}}</text>
						<text>【经营类型】{{item.businessType}}</text>
					</view>
					<view class="loan-btn">
						<u-button class="u-btn" size="medium" type="primary">{{item.loanState}}</u-button>
					</view>
				</view>
				<view class="upload">
					<u-button class="upload-btn" size="mini" type="primary">续贷</u-button>

					<a class="upload-desc" @click="uploadDescClick(item.oid)">查看图片资料</a>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchNmae: '',
				searchID: '',
				searchShow: false,
				partnerModalShow: false,
				listSize:0,
				list: [
					// {
					// 	name: "丽丽",
					// 	IDCard: "362330188888888888",
					// 	applyMoney: "10万",
					// 	projectNo: "011111111",
					// 	businessType: "个人创业",
					// 	loanState: "已还款",
					// 	continue: "续贷",
					// },
				],
			};
		},
		methods: {
			searchClick() {
				this.newPartnersName = "";
				this.newPartnersIDCard = "";
				this.searchShow = true;
				this.newPartnersShow = true;
			},
			closePoup() {
				this.isEdit = false;
				this.editID = null;
				this.searchShow = false;
			},
			sousuo(){
				this.$request.get("/wx/applyRecord",{"realName":this.searchNmae,"idCard":this.searchID}).then(res=>{
					this.list = res.data;
					this.listSize = this.list.length;
				})
			},
			uploadDescClick(oid){
				uni.navigateTo({
					url:'../progressList/upload-desc?oid='+oid
				})
				
			}
		},
		onLoad: function(option) {
		},
	};
</script>

<style scoped lang="scss">
	page {
		// background-color: #f5f5f5;
	}
.u-btn{margin-top:20rpx;float: right;}
	.title{margin-top: 80rpx;margin-bottom: 20rpx;}
	.menus-tit {
		overflow: hidden;

		.info {
			float: left;
			padding: 30rpx 10rpx;
			font-size: 34rpx;
		}

		.applyMoney {
			float: right;
			font-size: 50rpx;
			color: #f40000;
			padding: 20rpx 0;
		}
	}

	.menus-ul {
		.menus-li {
			display: block;
			margin: 0 30rpx 30rpx;
			padding: 30rpx 30rpx;
			border: 1px solid #f5f5f5;
			background: #fff;
		}
	}

	.loan {
		overflow: hidden;
		padding-bottom: 0.27rem;
		margin-bottom: 0.13rem;
		border-bottom: solid 1px #ededed;

		.loan-zhi {
			float: left;
			width: 65%;
			color: #999;
		}
	}

	.progress-num {
		font-size: 0.37rem;
		color: #666;
		line-height: 0.76rem;
		padding: 0 0.4rem;
	}

	.infor {
		background-color: #fff;
	}

	.infor-box {
		overflow: hidden;
		font-size: 30rpx;
		border-bottom: solid 1px #e5e5e5;
	}

	.infor-name {
		padding-left: 5rpx;
	}

	.infor-id {
		float: right;
	}

	.menus-ul li {
		padding: 0.47rem 0.4rem 0.13rem;
		margin-bottom: 0.13rem;
		background-color: #fff;
	}

	.menus-tit span {
		float: right;
		font-size: 30rpx;
		color: #f40000;
	}

	.loan {
		overflow: hidden;
		border-bottom: solid 1px #ededed;
	}

	.loan-zhi {
		float: left;
		width: 68%;
	}

	.loan-btn {
		float: right;
		max-width: 31%;
		overflow: hidden;

		.u-btn {
			padding-left: 30rpx;
			padding-right: 30rpx;
		}
	}



	.loan-btn a.no {
		background-color: #f65b5d;
	}

	.loan-btn a.yes {
		background-color: #71be6b;
	}

	.upload {
		overflow: hidden;
	}

	.upload-btn {
		float: left;
	}

	.upload-desc {
		float: right;
		font-size: 0.32rem;
		color: #999;
	}

	.upload-detail {
		float: left;
		color: #fff;
		padding: 0 0.27rem;
		line-height: 0.6rem;
		background-color: #3e92e7;
		border-radius: 4px;
	}

	.applyMoney {
		float: right;
	}
</style>
