<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<u-form :model="form" ref="uForm" class="my-form">
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account-fill" label-width="120"
			 :label-position="labelPosition" label="手机" prop="mobile">
				<u-input :border="border" placeholder="请输入手机号" v-model="form.mobile" type="text"></u-input>
			</u-form-item>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="lock-fill" label-width="120"
			 :label-position="labelPosition" label="密码" prop="password">
				<u-input :password-icon="true" :border="border" type="password" v-model="form.password" placeholder="请输入密码"></u-input>
			</u-form-item>
		
			<button class="loginStyle" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
			
		</u-form>

	</view>
</template>

<script>
	import {
		wxLogin
	} from '@/services/api.js';
	
	import md5Libs from "uview-ui/libs/function/md5";
	
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
				form: {
					mobile: '',
					password: '',
					loginType: 'customer'
				},
			}
		},
		onLoad() {

		},
		methods: {
			getUserInfo(res) {
				console.log('login', res)
				this.doLogin()
			},
			doLogin() {
				let that = this;
				uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							// that.switchPage()
					
							if (loginRes.code !== null && loginRes.code !== '') {
								uni.showLoading({
								    title: '登录中...'
								});
								wxLogin({
									authCode: loginRes.code,
									mobile: that.form.mobile,
									password: that.form.password
								}).then(res => {
									if (!that.$u.test.isEmpty(res.access_token)) {
										uni.setStorageSync("token", res.access_token)
										that.$u.vuex("vuex_has_login", true)
										// that.$u.vuex("vuex_ppd", md5Libs.md5(that.form.password))
										that.$u.vuex("vuex_user", res)
											that.$u.vuex("vuex_userid", res.user_id)
									
										that.switchPage()
									}else{
										uni.clearStorageSync()
										this.$u.toast('登录失败');
									}
									uni.hideLoading()
								}).finally(() => {
									uni.hideLoading()
								})
							}
						}
					});
				
			}
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
	
	.my-form {
		width: 79.37%;
		text-align: center;
		vertical-align: middle;
		margin: 0 auto;
		display: inline-block;
		position: relative;
		top: 235rpx;
	}
	
	.loginStyle {
		background-color: #ea810c;
		color: #fff;
		border-radius: 100px;
		margin-top: 150upx;
	}

</style>
