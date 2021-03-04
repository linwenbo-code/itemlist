import qs from 'qs'

// 登录
export async function wxLogin(params) {
	console.log('cmdType: ' + params.cmdType);
	console.log('mobile: ' + params.mobile);
	console.log('password: ' + params.password);
	
	/*
	params.tenantId = '000000'
	params.type = 'account'
	params.grant_type = 'social'
	params.scope = 'all'
	*/
	
	// 请求
	return uni.request({
	    url: 'http://localhost:8888', 
		method: 'POST',
		header: {
			'Content-Type': 'application/json'
		},
	    data: {
			cmdType: params.cmdType,
			mobile: params.mobile,
			password: params.password
		},
	    success: function(res) {
	        console.log(res.data);
			console.log('round trip completed. ')  
		}
	});
}

export const CMD_LOGIN = 1, CMD_REGISTER = 2;
