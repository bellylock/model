$(function(){
	var aa = document.querySelector("#vCode");
		var code1 = new vCode(aa,{
			len: 4,             //验证码字体数量
		    bgColor: "#b5f4f4", //验证码背景颜色
		    colors: [           //验证码字体颜色
		        '#DDDDDD',
		        '#DDFF77',
		        '#77DDFF',
		        '#99BBFF',
		        '#7700BB',
		        '#EEEE00',
		        '#000507',
		        '#980023',
		        '#50001a',
		    ]
		});
})