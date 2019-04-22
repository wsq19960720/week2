require({
	paths: {
		"mui": "libs/mui.min"
	}
})
require(["mui"], function(mui) {
	console.log(mui)

	function init() {
		getcome()
		getpay()
	}

	function getcome() {
		var zhi = document.querySelector(".zhi")
		zhi.onclick = function() {
			mui.ajax('/getpay', {
				data: {

				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(res) {
					render(res.data)
					del()
				},
				error: function(xhr, type, errorThrown) {

				}
			});
		}

	}

	function getpay() {
		var shou = document.querySelector(".shou")
		shou.onclick = function() {
			mui.ajax('/getincome', {
				data: {

				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 10000, //超时时间设置为10秒；
				success: function(res) {
					rend(res.data)
					dels()

				},
				error: function(xhr, type, errorThrown) {

				}
			});

		}
	}

	function rend(data) {
		var olis = document.querySelector(".olis")
		var str = "";
		data.forEach(item => {
			str +=
				`<li class="mui-table-view-cell">
					<a class="">
						${item.name}
					</a>
					<a class="">
						${item.pice}
					</a>
                    <a class="">
						${item.bei}
					</a>
					<a class="">
						${item.lei}
					</a>
					<button type="button" class="mui-btn mui-btn-red dels" data-id="${item._id}">删除</button>
				</li>`
		})
		olis.innerHTML = str;
	}

	function render(data) {
		var list = document.querySelector(".list")
		var str = "";
		data.forEach(item => {
			str +=
				`<li class="mui-table-view-cell">
					<a class="">
						${item.name}
					</a>
					<a class="">
						${item.pice}
					</a>
                    <a class="">
						${item.bei}
					</a>
					<a class="">
						${item.lei}
					</a>
					<button type="button" class="mui-btn mui-btn-red del" data-id="${item._id}">删除</button>
				</li>`
		})
		list.innerHTML += str;
	}

	function del() {
		var btn = [...document.querySelectorAll(".del")]
		btn.forEach(item => {
			item.onclick = function() {
				var userid = this.getAttribute("data-id");
				mui.ajax('/dels', {
					data: {
						id: userid
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒；
					success: function(data) {
						mui.alert('删除了', '警告', '确定', function(e) {
							getcome()
						}, 'div')

					},
					error: function(xhr, type, errorThrown) {

					}
				});
			}
		})
	}

	function dels() {
		var btn = [...document.querySelectorAll(".dels")]
		btn.forEach(item => {
			item.onclick = function() {
				var userid = this.getAttribute("data-id");
				mui.ajax('/del', {
					data: {
						id: userid
					},
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒；
					success: function(data) {
						mui.alert('删除了', '警告', '确定', function(e) {
							getpay()
						}, 'div')

					},
					error: function(xhr, type, errorThrown) {

					}
				});
			}
		})
	}
	var add=document.querySelector(".add")
	add.onclick=function () {
		location.href="../html/add.html"
	}
	init();
})
