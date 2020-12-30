<template>
	<view class="goods-list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="noMore" v-if="flag">-----没有更多数据了-----</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		onLoad() {
			this.getGoodsList()
		},
		components:{
			goodsList
		},
		data() {
			return {
				pageIndex: 1,
				goods: [],
				flag: false
			}
		},
		methods: {
			// 获取商品列表的数据
			async getGoodsList(callBack) {
			const res = await this.$request({
					url: "/api/getgoods?pageindex="+this.pageIndex
				})
				this.goods =[...this.goods,...res.data.message]
				callBack && callBack()
			},
			// 跳转到商品详情界面
			goGoodsDetail(id) {
				uni.navigateTo({
					url: `../goodsDetail/goodsDetail?id=${id}`
				})
			}
		},
		onReachBottom() {
			if(this.goods.length < this.pageIndex * 10) return this.flag = true
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					uni.stopPullDownRefresh()
				},1000)
			})
			
		}
	}
</script>

<style lang="scss">
	.goods-list {
		width: 100%;
		background-color: #eee;
		.noMore {
			font-size: 28rpx;
			text-align: center;
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
		}
	}
</style>
