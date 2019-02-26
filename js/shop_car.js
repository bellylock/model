$(function(){
    var localStorage = window.localStorage;
    var shopCar = localStorage.getItem("shop");
    var array = [];
    array = JSON.parse(shopCar);
    if(shopCar == null){
        array = [];
    }else{
        array = JSON.parse(shopCar);
    }
    // $(".shopBtn span").text(array.length);
    for (var i = 0; i < array.length; i++) {
        $("tbody").append(`
                <tr index="${i}">
                    <td class="on">
                        <div class="box"><span class="kuang" index="${i}"></span></div>
                    </td>
                    <td class="stock">
                        <a href="pro_details.html"><img src="${array[i].img}"></a>
                        <p>${array[i].p}</p>
                        <span class="span">${array[i].span}</span>
                    </td>
                    <td class="active">
                        <em class="price" index="${i}">${array[i].price}</em>
                    </td>
                    <td class="active">
                        <button index="${i}"  type="button" class="sub">-</button>
                        <input index="${i}"  type="text" class="input" value="${array[i].number}">
                        <button index="${i}"  type="button" class="plus">+</button>
                    </td>
                    <td class="active price">
                        <i class="totalPrice" index="${i}">${array[i].price}</i>
                    </td>
                    <td class="delete">
                        <img class="img" index="${i}" src="images/delete.png">
                    </td>
                </tr>
            `)
    }

	$(".fang").on("click",function(){
        var index = $(this).attr("index");
        if($($(".fang")[index]).hasClass("duigou")){
             $($(".fang")[index]).removeClass("duigou");
        }else{
             $($(".fang")[index]).addClass("duigou");
        }
    });


	var totalPrice = 0; 
	var shopCount = 0; 
	$(".kuang").on("click",function(){
    	var index = $(this).attr("index");
    	if($(this).hasClass("duigou")){
    		$(this).removeClass("duigou");
    		shopCount--;
    		var price = $($(".totalPrice")[index]).text()*1;
    		totalPrice -= price;

    	}else{
    		$(this).addClass("duigou");
    		shopCount++;
    		var price = $($(".totalPrice")[index]).text()*1;
    		totalPrice += price;

    	}

    	var length = $(".kuang").length;
    	if( shopCount == length){
    		$(".allCheck").addClass("duigou");
    	}else{
    		$(".allCheck").removeClass("duigou");
    	}
    	$("#totalPrice").text(returnFloat(totalPrice));
    	$("#count").text(shopCount)
    	// console.log(totalPrice)
    });

    $(".plus").on("click",function(){
    	var index = $(this).attr("index");
    	var value = $($(".input")[index]).val();    	
    	value++;
    	$($(".input")[index]).val(value);
    	var price = $($(".price")[index]).text();
    	var temPrice = value * price;
    	temPrice = temPrice.toFixed(2);
    	$($(".totalPrice")[index]).text(temPrice);

    	if( $($(".kuang")[index]).hasClass("duigou")){
    		totalPrice += (price * 1);
    		$("#totalPrice").text(returnFloat(totalPrice))
    	}
    	//console.log(temPrice,totalPrice,price)
    });

    $(".sub").on("click",function(){
        var	index = $(this).attr("index");
        var value = $($(".input")[index]).val();       
        if( value <= 1 ){
        	return;
        }
        value--;
        $($(".input")[index]).val(value);
        var price = $($(".price")[index]).text();
        var temPrice = value * price;
        temPrice = temPrice. toFixed(2);
        $($(".totalPrice")[index]).text(temPrice);

        if($($(".kuang")[index]).hasClass("duigou")){
        	totalPrice -= (price * 1);
        	$("#totalPrice").text(returnFloat(totalPrice))
        }
        // console.log(totalPrice)
    });

    $(".input").on("change",function(){
    	var index = $(this).attr("index");
    	var price = $($(".price")[index]).text();
    	var value = $(this).val();
    	var temPrice = price * value;
        temPrice = temPrice.toFixed(2);
    	$($(".totalPrice")[index]).text(temPrice);
        if($($(".kuang")[index]).hasClass("duigou")){
            // var temp = $($(".totalPrice")[index]).text()*1;
            // totalPrice += temp;
            // temPrice += temp;
            $("#totalPrice").text(temPrice);
        }
        

    });

    $(".input").on("input",function(){
    	this.value = this.value.replace(/\D/g,"");
    	if(this.value <= 1 ){
    	   this.value = 1;
    	}
    });

    var index = $(".kuang").attr("index");
	$(".allCheck").on("click",function(){
		if($(this).hasClass("duigou")){
			$(".allCheck").removeClass("duigou");
			$(".kuang").removeClass("duigou");
			shopCount = 0;
			totalPrice = 0;
            // totalPrice = totalPrice.toFixed(2);
		}else{
			$(".allCheck").addClass("duigou");
			for( var i = 0; i < $(".kuang").length ; i++){
				if(!$($(".kuang")[i]).hasClass("duigou")){
					$($(".kuang")[i]).addClass("duigou");
					var tempTotalprice = $($(".totalPrice")[i]).text() * 1;
                    shopCount++;
					totalPrice += tempTotalprice;
                    // totalPrice = totalPrice.toFixed(2);
				}
			
			}

		}
		$("#totalPrice").text(totalPrice);
        $("#count").text(shopCount);
	});

	$("#clear").on("click",function(){
        layer.confirm("确认是否删除",{
            btn:['删除','取消']
        },function(){
            layer.closeAll();
            for( var i = 0; i < $(".kuang").length ; i++){

            if( $($(".kuang")[i]).hasClass("duigou")){
                var tempTotalprice = $($(".totalPrice")[i]).text()*1;
                totalPrice -= tempTotalprice;
                $($("tbody tr")[i]).remove();
                shopCount --;
                i--;
                
            }
            if( i < 0 ){
                $(".allCheck").removeClass("duigou");
                shopCount = 0;
            }
        }

        $("#totalPrice").text(totalPrice);
        $("#count").text(shopCount);
            
            for(var j = 0 ; j < $("tbody tr").length ; j++){
                    $($(".img")[j]).attr("index",j);
                    $($(".kuang")[j]).attr("index",j);
                    $($(".plus")[j]).attr("index",j);
                    $($(".sub")[j]).attr("index",j);
                    $($(".input")[j]).attr("index",j);
                }
        },function(){})
        
		// for( var i = 0; i < $(".kuang").length ; i++){

		// 	if( $($(".kuang")[i]).hasClass("duigou")){
		// 		var tempTotalprice = $($(".totalPrice")[i]).text()*1;
		// 		totalPrice -= tempTotalprice;
		// 		$($("tbody tr")[i]).remove();
  //               shopCount --;
		// 		i--;
                
		// 	}
		// 	if( i < 0 ){
		// 		$(".allCheck").removeClass("duigou");
  //               shopCount = 0;
		// 	}
		// }

		// $("#totalPrice").text(totalPrice);
  //       $("#count").text(shopCount);
			
		// 	for(var j = 0 ; j < $("tbody tr").length ; j++){
		// 			$($(".img")[j]).attr("index",j);
		// 			$($(".kuang")[j]).attr("index",j);
		// 			$($(".plus")[j]).attr("index",j);
		// 			$($(".sub")[j]).attr("index",j);
		// 			$($(".input")[j]).attr("index",j);
		// 		}
	});
    //有弹出框的删除
    $(".img").on("click",function(){
                var index = $(this).attr('index');
                layer.confirm("确认是否删除",{
                    btn:['删除','取消']
                },function(){
                    layer.closeAll();
                    
                    if($($(".kuang")[index]).hasClass("duigou")){
                            var tempTotalPrice = $($(".totalPrice")[index]).text() * 1;
                            totalPrice -= tempTotalPrice;
                            shopCount--;
                            // $("#totalPrice").text(totalPrice);
                            // $("#count").text(shopCount);
                            
                        }else{
                            // totalPrice = 0;
                            // shopCount = 0;
                        }
                        $("#totalPrice").text(totalPrice);
                        $("#count").text(shopCount);
                    $($("tbody tr")[index]).remove();
                    for(var i = 0 ; i < $("tbody tr").length; i++){
                        $($(".img")[i]).attr("index",i);
                        $($(".kuang")[i]).attr("index",i);
                        $($(".totalPrice")[i]).attr("index",i)  
                    }
                    if(shopCount == $("tbody tr").length){
                        $(".allCheck").addClass("duigou");
                    }else{
                        $(".allCheck").removeClass("duigou");
                    }
                    if( shopCount == 0){
                        $(".allCheck").removeClass("duigou")
                    }

               },function(){})                  
     });
    
    //没有弹出框的删除
	// $(".img").on("click",function(){
	// 	var index = $(this).attr('index');
	// 	if($($(".kuang")[index]).hasClass("duigou")){
	// 		var tempTotalPrice = $($(".totalPrice")[index]).text() * 1;
	// 		totalPrice -= tempTotalPrice;
	// 		shopCount--;
	// 		$("#totalPrice").text(totalPrice);
 //            $("#count").text(shopCount)
	// 	}


	// 	$($("tbody tr")[index]).remove();
		
	// 	for(var i = 0 ; i < $("tbody tr").length ; i++){
	// 		$($(".img")[i]).attr("index",i);
	// 	}
	// 	if(shopCount == $("tbody tr").length){
	// 		$(".allCheck").addClass("duigou");
	// 	}else{
	// 		$(".allCheck").removeClass("duigou");
	// 	}
	// 	if( shopCount ==0){
	// 		$(".allCheck").removeClass("duigou")
	// 	}

	// });


	function returnFloat(value){ var value=Math.round(parseFloat(value)*100)/100; var xsd=value.toString().split("."); if(xsd.length==1){ value=value.toString()+".00"; return value; } if(xsd.length>1){ if(xsd[1].length<2){  value=value.toString()+"0"; } return value; }}


})