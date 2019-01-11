//封装ajax
function ajaxGet(url,callback,data){
	var ajax = null;
	if( window.XMLHttpRequest ){
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if( data ){
		url = url + "?" + data;
	}
	ajax.open("get",url);
	ajax.send();
	ajax.onreadystatechange = function(){
		if( ajax.status==200&&ajax.readyState==4 ){
			//得到服务器返回的结果
			//此处得到服务器返回的结果后  是一个不确定的功能
			callback( ajax.responseText );
		}
	}
}