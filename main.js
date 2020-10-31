import Vue from 'vue'
import uView from "uview-ui";
import App from './App'
import request from "./common/request.js";
import myUtils from "./common/utils.js";

Vue.config.productionTip = false
Vue.use(uView);
App.mpType = 'app'
Vue.prototype.$request = request;
Vue.prototype.$Dictionaries;
Vue.prototype.$myUtils = myUtils;
Vue.prototype.$getQuickCode = function(codeType) {
	for(var i in Vue.prototype.$Dictionaries){
		let item = Vue.prototype.$Dictionaries[i];
		if(item.name === codeType){
			return item;
		}
	}
};



const app = new Vue({
	...App,
	created: function() {
		request.get("api/categories").then(res => {
			Vue.prototype.$Dictionaries = res.categories;
		});

	}
})


app.$mount()
