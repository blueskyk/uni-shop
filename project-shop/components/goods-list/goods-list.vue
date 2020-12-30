<template>
	<!-- 商品列表 -->
	<view class="goods-list">
		<view @click="navigator(item.id)" v-for="item in goods" :key="item.id" class="goods-item">
			<image :src="item.img_url" mode=""></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navigator(id) {
				this.$emit("goodsItemClick",id)
			}
		},
		props: {
			goods: {
				type: Array
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
		.goods-item {
			margin: 10rpx 0;
			padding: 15rpx 0;
			background-color: #fff;
			width: 355rpx;
			box-sizing: border-box;
	
			image {
				display: block;
				margin: auto;
				width: 80%;
				margin: 0 auto;
				height: 300rpx;
			}
	
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text {
					&:nth-child(2) {
						font-size: 28rpx;
						color: #ccc;
						margin-left: 20rpx;
						text-decoration: line-through;
					}
				}
			}
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;
			}
		}
	}
</style>
