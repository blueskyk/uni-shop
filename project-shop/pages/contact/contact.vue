<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view @click="call">联系电话：400-1234-567（ 点击拨打 ）</view>
			<view>家庭住址：江苏省徐州市泉山区地铁一号线杏山子站附近</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:117.126889,
				latitude: 34.255785,
				markers: [
					{
						longitude:117.126889,
						latitude: 34.255785,
						iconPath: "../../static/home.jpg",
						width: 30,
						height:30
					}
				]
			}
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber:"400-1234-567"
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	width: 100%;
	height: 100rpx;
	.img {
		width: 100%;
		height: 320rpx;
	}
	
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border: 2rpx solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
