$(function(){
			$(".kuang").on("click",function(){
				if($(".kuang").hasClass("duigou")){
					$(this).removeClass("duigou");
				}else{
					$(this).addClass("duigou");
				}
			});

			$(".kuang1").on("click",function(){
				if($(".kuang1").hasClass("duigou")){
					$(this).removeClass("duigou");
				}else{
					$(this).addClass("duigou");
				}
			});

			
			$(".fk").on("click",function(){
				$(".fk").removeClass("duigou");
				$(this).addClass("duigou");
			})

			$(".box").on("click",function(){
          		$(".box").removeClass("on");
          		$(this).addClass("on");
     		})

			$(".li").on("click",function(){
				$(".li").removeClass("actived");
				$(this).addClass("actived");
			});


		})