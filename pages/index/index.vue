<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<u-input v-model="value" :type="type" :border="border"  />
		</view>
		<view>
			<u-input v-model="pValue" :type="ptype" :border="pborder" :password-icon="passwordIcon" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '请登录',
				value: '',
				type: 'text',
				border: true,
				pValue: '',
				ptype: 'password',
				passwordIcon: true,
				pborder: true,
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
