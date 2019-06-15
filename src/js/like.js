$(".like_wrapper").click(function (argument) {
	if($(this).hasClass("like_wrapper_active")){
		$(this).find(".number").html(+$(this).find(".number").html()-1)
		$(this).find(".like i").html("favorite_border")
	}else{
		$(this).find(".number").html(+$(this).find(".number").html()+1)
		$(this).find(".like i").html("favorite")
	}	
	$(this).toggleClass("like_wrapper_active")

})