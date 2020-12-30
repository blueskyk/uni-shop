<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<view class="swiper-item">
					<image :src="item.img"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- nav -->
		<view class="nav">
			<navigator class="nav-item" v-for="(item,index) in navs" :key="index" open-type="navigate" :url="item.path">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</navigator>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		onLoad() {
			this.getSwipers(),
				this.getHotGoods()
		},
		components: {
			goodsList
		},
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icon: "iconfont icon-shangpin",
						title: "精选商城",
						path: "/pages/goods/goods"
					},
					{
						icon: "iconfont icon-xinxi",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icon: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icon: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/videos/videos"
					}
				]
			}
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$request({
					url: "/api/getlunbo"
				})
				this.swipers = res.data.message
			},
			// 获取推荐商品的数据
			async getHotGoods() {
				const res = await this.$request({
					url: "/api/getgoods?pageindex=1"
				})
				this.goods = res.data.message
			},
			// 跳转到商品详情页面
			goGoodsDetail(id) {
				uni.navigateTo({
					url: `../../pages/goodsDetail/goodsDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
			}
		}

		.nav {
			display: flex;
			text-align: center;

			.nav-item {
				flex: 1;

				.iconfont {
					width: 120rpx;
					height: 120rpx;
					line-height: 120rpx;
					border-radius: 50%;
					background-color: $shop-color;
					margin: 20rpx auto;
					color: #fff;
					font-size: 50rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot-goods {
			background-color: #eee;
			margin-top: 20rpx;
			overflow: hidden;

			.title {
				height: 100rpx;
				line-height: 100rpx;
				text-align: center;
				letter-spacing: 40rpx;
				color: $shop-color;
				background-color: #fff;
				margin: 14rpx 0;
				font-size: 40rpx;
			}
		}
	}
</style>
