class myUtils {
	//获取担保方式
	static getDBFS(list) {
		let arr = [];
		try {
			if (list.length <= 0) {
				return "9";
			}
			for (let item of list) {
				arr.push(item.number);
			}
			return arr.join(",");
		} catch (e) {
			return "";
		}
	}



	/*
	 *function：计算两个日期相隔多少年
	 *param string startDateStr[格式如：2011-11-5]
	 *param string endDateStr[格式如：2012-12-01]
	 */
	static getDateYearSub(startDateStr, endDateStr) {
        var day = 24 * 60 * 60 *1000; 

        var sDate = new Date(Date.parse(startDateStr.replace(/-/g, "/")));
        var eDate = new Date(Date.parse(endDateStr.replace(/-/g, "/")));

        //得到前一天(算头不算尾)
        sDate = new Date(sDate.getTime() - day);
		
        //获得各自的年、月、日
        var sY  = sDate.getFullYear();     
        var sM  = sDate.getMonth()+1;
        var sD  = sDate.getDate();
        var eY  = eDate.getFullYear();
        var eM  = eDate.getMonth()+1;
        var eD  = eDate.getDate();

        if(eY > sY ) {
            return eY - sY;
        } else {
            //alert("两个日期之间并非整年，请重新选择");
            return 0;
        }
    }
	

	//净利率 //负债率
	static calSocialSal(val1,val2,flag)
	{
	
		debugger;
	    if (val1 == "")
	    {
	        return "";
	    }
	    if(val2==""){
	        return "";
	    }
	    else if (flag=="1")
	    {
	        var val1_1=parseFloat(val1);
	        var val2_1=parseFloat(val2);
	        if (val1_1<=0){
	            return 0.00;
	        }
	        if (val2_1<=0){
	            return 100.00;
	        }
	        return ((val1_1/val2_1)*100).toFixed(2);
	    }else if (flag=="2"){
	        var val1_1=parseFloat(val1);
	        var val2_1=parseFloat(val2);
	        return (val1_1-val2_1).toFixed(2);
	    }
	}
}
export default myUtils;
