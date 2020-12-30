<template>
	<view>
		<view class="news-item" v-for="item in list" :key="item.id" @click="navigater(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formtDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			// 点击跳转到详情页
			navigater(id) {
				this.$emit("itemClick",id)
			}
		},
		props: {
			list: {
				type: Array
			}
		},
		filters:{
			// 日期格式处理
			formtDate(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const mounth = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year + "-" + mounth +"-"+day
			}
		}
	}
</script>

<style lang="scss">
	.news-item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid $shop-color;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text {
					&:nth-child(2) {
						margin-left: 30rpx;
					}
				}
			}
		}
	}
</style>
