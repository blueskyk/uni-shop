<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClick(index,item.id)" :class="active === index?'active':''" v-for="(item,index) in cates" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view  v-for="item in secondData" :key="item.id" class="item">
				<image @click="showImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<view v-if="secondData.length===0">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.getPicsCate()
		},
		data() {
			return {
			cates: [],
			active: 0,
			secondData: []
			}
		},
		methods: {
			// 获取图片列表
			async getPicsCate() {
			const res = await this.$request({
					url: "/api/getimgcategory"
				})
				this.cates = res.data.message
			},
			// 左侧列表点击渲染
			async leftClick(index,id) {
				this.active = index
				const res = await this.$request({
					url: `/api/getimages/${id}`
				})
				this.secondData = res.data.message
			},
			// 实现图片的预览
			showImg(current) {
				const urls = this.secondData.map(item => {
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1rpx solid #eee;

			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				font-size: 30rpx;
				text-align: center;
				border-top: 1rpx solid #eee;

				&.active {
					color: #fff;
					background-color: $shop-color;
				}
			}
		}
		.right {
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 20rpx;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
