<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<u-input v-model="name" :type="type" :border="border"  />
		</view>
		<view>
			<u-input v-model="price" :type="type" :border="border"  />
		</view>
		<view>
			<u-input v-model="amount" :type="type" :border="border"  />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '请输入入库商品信息',
				name: '',
				type: 'text',
				border: true,
				price: '',
				amount: ''
			}
		},
		methods: {
			
		}
	};
	console.log("hey");
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

</style>
