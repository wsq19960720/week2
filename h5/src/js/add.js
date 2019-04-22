require({
	paths: {
		"mui": "libs/mui.min"
	}
})
require(["mui"], function(mui) {
	console.log(mui)
	var que = document.querySelector(".que");
	que.onclick = function() {
		var name = document.querySelector(".name").value;
		var lei = document.querySelector(".lei").value;
		var pice = document.querySelector(".pice").value;
		var bei = document.querySelector(".bei").value;
		mui.ajax('/addcome', {
			data: {
				name: name,
				pice: pice,
				lei: lei,
				bei: bei
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(res) {
				console.log(res.data.ops)
				location.href="../index.html"
				
			},
			error: function(xhr, type, errorThrown) {

			}
		});
	}
	que.onclick = function() {
		var name = document.querySelector(".name").value;
		var lei = document.querySelector(".lei").value;
		var pice = document.querySelector(".pice").value;
		var bei = document.querySelector(".bei").value;
		mui.ajax('/addpay', {
			data: {
				name: name,
				pice: pice,
				lei: lei,
				bei: bei
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(res) {
				console.log(res.data.ops)
				location.href="../index.html"
				
			},
			error: function(xhr, type, errorThrown) {
	
			}
		});
	}
	
})
