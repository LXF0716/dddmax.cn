<template>
	<view class="wrap">
		<u-form @submit @reset ref="uForm">
			<u-row gutter="20">
				<u-col class="title">
					1.营业执照
					<text class="tip">（相关部门核准颁发的经营许可证或种、养殖业承包合同）</text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.yyzz" mode="aspectFill">
						<u-loading size="44" mode="flower" slot="loading" v-if="loadingSlot"></u-loading>
											<view v-if="errorSlot" slot="error" style="font-size: 24rpx;">加载失败</view>
					</u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					2.法定代表人身份证
					<text class="tip">（身份证正反面各一张）</text>
				</u-col>
			<u-col :span="12">
				<u-image  ref="uImage" :width="width" :height="height" :src="src.sfz" mode="aspectFit">
				</u-image>
			</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					3.法定代表人个人简历
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.grjl" mode="aspectFit"></u-image>
				</u-col>
			</u-row>

			<u-row gutter="20">
				<u-col class="title">
					4.公司章程
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.gszc" mode="aspectFit"></u-image>
				</u-col>
			</u-row>

			<u-row gutter="20">
				<u-col class="title">
					5.验资报告
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.yzbg" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					6.近两年年度财务会计报告或报表以及近三个月的会计报表
					<text class="tip"></text>
				</u-col>
				<u-col :span="4">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.kjcwbb" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					7.主要核算账号12个月流水
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.zykszh" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					8.企业信息报告及股东个人信用报告
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.qyxybg" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					9.企业简介
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.qyjj" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					10.经营产地房屋租赁合同或不动产证
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
					<u-image  ref="uImage" :width="width" :height="height" :src="src.zphtbdc" mode="aspectFit"></u-image>
				</u-col>
			</u-row>

			<u-row gutter="20">
				<u-col class="title">
					11.可以说明经营情况的证明文件
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
				<u-image  ref="uImage" :width="width" :height="height" :src="src.qyjjqkzmwj" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
			<u-row gutter="20">
				<u-col class="title">
					12.与企业和企业负责人有关的参考资料
					<text class="tip"></text>
				</u-col>
				<u-col :span="12">
				<u-image  ref="uImage" :width="width" :height="height" :src="src.ckzl" mode="aspectFit"></u-image>
				</u-col>
			</u-row>
		</u-form>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				width: '200',
				height: '200',
				loadingSlot: false,
				statusCurrent: 0,
				errorSlot: false,
				src:{
					"yyzz":"",
					"sfz":"",
					"grjl":"",
					"gszc":"",
					"yzbg":"",
					"kjcwbb":"",
					"zykszh":"",
					"qyxybg":"",
					"qyjj":"",
					"zphtbdc":"",
					"qyjjqkzmwj":"",
					"ckzl":"",
				}
			}
		},
		onLoad: function(option) {
			//基本数据
			this.$request.post("/wx/getFileList",{"billOid":option.oid}).then(res=>{
				let Url = "http://117.41.171.6:8990/rzdb";
				// let Url = "http://127.0.0.1:8990/cydb"
			
				for(let item of res.data){
					// console.log(item.billType)
					switch (item.billType) {
						case "sfz"://身份证
							this.src.sfz = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "yyzz"://营业执照
							this.src.yyzz = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "zykszh"://`12流水
							this.src.zykszh = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "yzbg"://验资报告
							this.src.yzbg = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "qyxybg"://企业信用报告
							this.src.qyxybg = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "qyjj"://企业简介
							this.src.qyjj = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "gszc"://公司章程
							this.src.gszc = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "grjl"://法人个人简历
							this.src.grjl = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;	
						case "zphtbdc"://房屋不动产证
							this.src.zphtbdc = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "qyjjqkzmwj"://说明经营情况的证明文件
							this.src.qyjjqkzmwj = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "kjcwbb"://会计财务报表
							this.src.kjcwbb = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;
						case "ckzl"://参考资料
							this.src.ckzl = Url+"/baseinfo/sysfileinfo/SysFileInfo/getViewBO?oid="+item.oid;
							break;			
					}	
				}
			})
		},
	}
</script>

<style>
	.u-image{display: inline-block;margin: 5px;background-color: #eee  !important;}
</style>
