import Url from "./config.js";

function baseRequest(url, method, data, {
	noAuth = false,
	noVerify = false
}) {

	let header = {"content-Type":"application/json"};

	if (!noAuth) { //请求资源是否需要登录
		if (false) { //是否登录
			//toLogin();//自动登录
			return Promise.reject({
				msg: '未登陆'
			});
		}
	}

	//if (store.state.app.token) header[TOKENNAME] = 'Bearer ' + store.state.app.token;

	return new Promise((reslove, reject) => {
		uni.request({
			url: Url + '/' + url,
			method: method || 'GET',
			header: header,
			data: data || {},
			success: (res) => {
			
				if (noVerify) //是否要验证服务端返回的资源
					reslove(res.data, res);
				else if (res.statusCode == 200 ) { //服务端返回状态200
					
					try {
						res.data = JSON.parse(res.data);
					} catch (e) {
						//console.log(e);
					}

					reslove(res.data, res);
				} else if ([410000, 410001, 410002].indexOf(res.statusCode) !== -1) { //服务端返回未登录
					toLogin();
					//reject(res.data);
				} else{
					reject(res.data || '系统错误');
				}
					
			},
			fail: (msg) => {
				reject('请求失败');
			}
		})
	});
}
const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
	request[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});
export default request;
