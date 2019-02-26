$(function(){
	$(".box").on("click",function(){
		if($(this).children(".circle").hasClass("round")){
			$(this).children(".circle").removeClass("round");
		}else{
			$(this).children(".circle").addClass("round");
		}
	});

	$(".li").on("click",function(){
		if($(this).children(".circle").hasClass("round")){
			$(this).children(".circle").removeClass("round");
		}else{
			$(this).children(".circle").addClass("round");
		}
	});	

	$(".box").on("click",function(){
		$(".circle").removeClass("round");
		$(this).children(".circle").addClass("round");
	});

	$(".li").on("click",function(){
		$(".circled").removeClass("round");
		$(this).children(".circled").addClass("round");
		if(!$(".tank").children(".circle").hasClass("round")){
			$(".li").children(".circled").removeClass("round");
		}
		
	});

	$(".usual").on("click",function(){
		$(".li").children(".circled").removeClass("round");
	})

})