$(function(){
	$(".on").on("click",function(){
            $(".on").removeClass('picked');
            $(this).addClass('picked');
     });

	$(".comment ul li").eq(0).children("img").on("click",function(){
		var src = ("images/yellow-star - 1.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".comment ul li").eq(0).children("img").attr("src","images/pc-2.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".comment ul li").eq(0).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".comment ul li").eq(0).children("em").text("差")
			break;
			case 1:
			$(".comment ul li").eq(0).children("em").text("一般")
			break;
			case 2:
			$(".comment ul li").eq(0).children("em").text("满意");
			break;
			case 3:
			$(".comment ul li").eq(0).children("em").text("好")
			break;
			case 4:
			$(".comment ul li").eq(0).children("em").text("非常好")
			break;
			}
		}
	});

	$(".comment ul li").eq(1).children("img").on("click",function(){
		var src = ("images/yellow-star - 1.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".comment ul li").eq(1).children("img").attr("src","images/pc-2.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".comment ul li").eq(1).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".comment ul li").eq(1).children("em").text("差")
			break;
			case 1:
			$(".comment ul li").eq(1).children("em").text("一般")
			break;
			case 2:
			$(".comment ul li").eq(1).children("em").text("满意");
			break;
			case 3:
			$(".comment ul li").eq(1).children("em").text("好")
			break;
			case 4:
			$(".comment ul li").eq(1).children("em").text("非常好")
			break;
			}
		}
	});

	$(".comment ul li").eq(2).children("img").on("click",function(){
		var src = ("images/yellow-star - 1.png");
		var aIndex = $(this).parent().attr("index");
		var index = $(this).attr("index")*1;
		$(".comment ul li").eq(2).children("img").attr("src","images/pc-2.png")
		for (var i = 0; i < (index + 1); i++) {
		$($(".comment ul li").eq(2).children("img")[i]).attr("src",src)
			switch(i){
			case 0:
			console.log($($("ul li")[aIndex]));
			 $(".comment ul li").eq(2).children("em").text("差")
			break;
			case 1:
			$(".comment ul li").eq(2).children("em").text("一般")
			break;
			case 2:
			$(".comment ul li").eq(2).children("em").text("满意");
			break;
			case 3:
			$(".comment ul li").eq(2).children("em").text("好")
			break;
			case 4:
			$(".comment ul li").eq(2).children("em").text("非常好")
			break;
			}
		}
	});
})