<template>
	<view class="goods-detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item @click="showImg(item.src)" v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="goods-box">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="goods-name">{{info.title}}</view>
		</view>
		<view class="goods-info">
			<view>库号：{{info.goods_no}}</view>
			<view>库存：{{info.stock_quantity}}</view>
		</view>
		<view class="goods-content">
			<view class="title">{{content.title}}</view>
			<rich-text :nodes="content.content"  class="content" ></rich-text>
		</view>
		<view class="goods-nav">
			<uni-goods-nav></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				swipers: [],
				info: {},
				content: {}
			}
		},
		methods: {
			// 获取商品详情轮播图数据
			async getGoodsSwipers() {
			const res = await this.$request({
					url:  `/api/getthumimages/${this.id}`
				})
				this.swipers = res.data.message
			},
			// 获取详情介绍的数据
			async getDetailInfo() {
				const res = await this.$request({
					url: `/api/goods/getinfo/${this.id}`
				})
				this.info = res.data.message[0]
			},
			// 获取详情介绍
			async getDetailContent() {
				const res = await this.$request({
					url: `/api/goods/getdesc/${this.id}`
				})
				this.content = res.data.message[0]
				console.log(this.content)
			},
			// 点击查图片
			showImg(current) {
				const urls = this.swipers.map(item => {
					return item.src
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getGoodsSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		}
	}
</script>

<style lang="scss">
.goods-detail {
	width: 100vw;
	swiper {
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.goods-box {
		padding: 20rpx;
		border-bottom: 5rpx solid #ccc;
		.price {
			font-size: 30rpx;
			color: $shop-color;
			line-height: 80rpx;
			text {
				&:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
		}
		.goods-name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.goods-info {
		padding: 0 20rpx;
		font-size: 32rpx;
		line-height: 60rpx;
		border-bottom: 5rpx solid #ccc;
	}
	.goods-content {
		padding-bottom: 100rpx;
		.title {
			font-size: 32rpx;
			padding-left: 20rpx;
			border-bottom: 2rpx solid #eee;
			line-height: 70rpx;
		}
		.content {
			padding: 10rpx;
			font-size: 28rpx;
			color: #333;
			line-height: 50rpx;
		}
	}
	.goods-nav {
		position: fixed;
		bottom: -10rpx;
		width: 100%;
	}
}
</style>
