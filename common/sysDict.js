import request from "./request.js";

var getQuickCode = function(codeType) {
	return request.get("api/categories").then(res => {
		console.log(res);
		for(let i in res.data.categories){
			let item = res.data[i];
			if(item.name === codeType){
				return Promise.resolve(item);
			}
		}
	});
};

export default getQuickCode;
