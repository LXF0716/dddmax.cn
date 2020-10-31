<template>

</template>
<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '111，画楼西畔桂堂东'
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
			}
		},
		onLoad: function() {
			debugger;
			// this.model.name = JSON.parse(localStorage.getItem("userInfo")).userName;
			console.log("分类========")
			console.log(this.$getQuickCode("人物"));
			this.list = this.$getQuickCode("教程").posts;
			console.log(this.list);
		},
		methods: {},
		
	}
</script>

<style scoped lang="scss">
	
</style>
