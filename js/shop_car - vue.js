// $(function(){
// 	$(".fang").on("click",function(){
//                     var index = $(this).attr("index");
//                     if($($(".fang")[index]).hasClass("duigou")){
//                          $($(".fang")[index]).removeClass("duigou");
//                     }else{
//                          $($(".fang")[index]).addClass("duigou");
//                     }
//     });

// 	var totalPrice = 0;
// 	var shopCount = 0;
// 	$(".kuang").on("click",function(){
//     	var index = $(this).attr("index");
//     	if($(this).hasClass("duigou")){
//     		$(this).removeClass("duigou");
//     		shopCount--;
//     		var price = $($(".totalPrice")[index]).text()*1;
//     		totalPrice -= price;
//     		// totalPrice = totalPrice.toFixed(2);

//     	}else{
//     		$(this).addClass("duigou");
//     		shopCount++;
//     		var price = $($(".totalPrice")[index]).text()*1;
//     		totalPrice += price;
//     		// totalPrice = totalPrice.toFixed(2);

//     	}

//     	var length = $(".kuang").length;
//     	if( shopCount == length){
//     		$(".allCheck").addClass("duigou");
//     	}else{
//     		$(".allCheck").removeClass("duigou");
//     	}
//     	$("#totalPrice").text(totalPrice);
//     	$("#count").text(shopCount)
//     	// console.log(totalPrice)
//     });

//     $(".plus").on("click",function(){
//     	var index = $(this).attr("index");
//     	var value = $($(".input")[index]).val();    	
//     	value++;
//     	$($(".input")[index]).val(value);
//     	var price = $($(".price")[index]).text();
//     	var temPrice = value * price;
//     	temPrice = temPrice.toFixed(2);
//     	$($(".totalPrice")[index]).text(temPrice);

//     	if( $($(".kuang")[index]).hasClass("duigou")){
//     		totalPrice += (price * 1);
//     		$("#totalPrice").text(totalPrice)
//     	}
//     	//console.log(temPrice,totalPrice,price)
//     });

//     $(".sub").on("click",function(){
//         var	index = $(this).attr("index");
//         var value = $($(".input")[index]).val();       
//         if( value <= 1 ){
//         	return;
//         }
//         value--;
//         $($(".input")[index]).val(value);
//         var price = $($(".price")[index]).text();
//         var temPrice = value * price;
//         temPrice = temPrice. toFixed(2);
//         $($(".totalPrice")[index]).text(temPrice);

//         if($($(".kuang")[index]).hasClass("duigou")){
//         	totalPrice -= (price * 1);
//         	$("#totalPrice").text(totalPrice)
//         }
//         console.log(totalPrice)
//     });

//     $(".input").on("change",function(){
//     	var index = $(this).attr("index");
//     	var price = $($(".price")[index]).text();
//     	var value = $(this).val();
//     	var temPrice = price * value;
//     	temPrice = temPrice.toFixed(2);
//     	$($(".totalPrice")[index]).text(temPrice);
//     });

//     $(".input").on("input",function(){
//     	this.value = this.value.replace(/\D/g,"");
//     	if(this.value <=1 ){
//     		this.value = 1;
//     	}
//     });


    

//     var index = $(".kuang").attr("index");
// 	$(".allCheck").on("click",function(){
// 		if($(this).hasClass("duigou")){
// 			$(this).removeClass("duigou");
// 			$(".kuang").removeClass("duigou");
// 			shopCount = 0;
// 			totalPrice = 0;
// 		}else{
// 			shopCount = $(".kuang").length;
// 			$(this).addClass("duigou");
// 			for( var i = 0; i < $(".kuang").length ; i++){
// 				if(!$($(".kuang")[i]).hasClass("duigou")){
// 					$($(".kuang")[i]).addClass("duigou");
// 					var tempTotalprice = $($(".price")[index]).text() * 1;
// 					totalPrice += tempTotalprice;
// 				}
			
// 			}

// 		}
// 		$("#totalPrice").text(totalPrice);
// 	});

// 	$("#clear").on("click",function(){
// 		for( var i = 0; i < $(".kuang").length ; i++){

// 			if( $($(".kuang")[i]).hasClass("duigou")){
// 				var tempTotalprice = $($(".totalPrice")[i]).text()*1;
// 				totalPrice -= tempTotalprice;
// 				$($("tbody tr")[i]).remove();
// 				i--;
// 			}
// 			if( i < 0 ){
// 				$(".allCheck").removeClass("duigou")
// 			}
// 		}

// 		$("#totalPrice").text(totalPrice);
			
// 			for(var j = 0 ; j < $("tbody tr").length ; j++){
// 					$($(".img")[j]).attr("index",j);
// 					$($(".kuang")[j]).attr("index",j);
// 					$($(".plus")[j]).attr("index",j);
// 					$($(".sub")[j]).attr("index",j);
// 					$($(".input")[j]).attr("index",j);
// 				}
// 	});

// 	$(".img").on("click",function(){
// 				var index = $(this).attr('index');
// 				if($($(".kuang")[index]).hasClass("duigou")){
// 					var tempTotalPrice = $($(".totalPrice")[index]).text() * 1;
// 					totalPrice -= tempTotalPrice;
// 					shopCount--;
// 					$("#totalPrice").text(totalPrice);
// 				}

// 				$($("tbody tr")[index]).remove();
				
// 				for(var i = 0 ; i < $("tbody tr").length ; i++){
// 					$($(".img")[i]).attr("index",i);
// 				}
// 				if(shopCount == $("tbody tr").length){
// 					$(".allCheck").addClass("duigou");
// 				}else{
// 					$(".allCheck").removeClass("duigou");
// 				}
// 				if( shopCount ==0){
// 					$(".allCheck").removeClass("duigou")
// 				}	
// 		});



	


// })


var array = [
            {img:"images/car-1.jpg",price:"7390",number:1,check:false},
            {img:"images/car-2.jpg",price:"3771",number:1,check:false},
            {img:"images/car-3.jpg",price:"1460",number:1,check:false},
            {img:"images/car-4.jpg",price:"6299",number:1,check:false},
            {img:"images/car-5.jpg",price:"4280",number:1,check:false},
];


var app = new Vue({
    el:"#app",
    data:{
        allCheck:false,
        count:0,
        list:array,

    },
    methods:{

    },
    computed:{

    },

});

























