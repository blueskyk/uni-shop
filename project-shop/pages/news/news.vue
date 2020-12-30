<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components: {
			newsItem
		},
		methods: {
			// 获取资讯的数据
			 async getNews() {
				const res = await this.$request({
					url: "/api/getnewslist"
				})
				this.newsList = res.data.message
			},
			// 跳转到新闻详情页面
			goDetail(id) {
				uni.navigateTo({
					url: `../newsDetail/newsDetail?id=${id}`
				})
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
</style>
