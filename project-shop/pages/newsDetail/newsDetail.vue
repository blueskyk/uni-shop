<template>
	<view class="news-detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | formtDate}}</text>
			<text>浏览：{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: null,
				detail: {}
			}
		},
		methods: {
			// 获取详情数据
			async getNewsDetail() {
			const res = await this.$request({
					url: `/api/getnew/${this.id}`
				})
				this.detail = res.data.message[0]
			}
		},
		onLoad(e) {
			this.id = e.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
.news-detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.title {
		text-align: center;
		width: 710rpx;
		display: block;
		margin: 20rpx 0;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
}
</style>
