$(".text_field__dropdown + i").click(function () {
	$(".text_field__dropdown").toggleClass("active");
	
	if($(".text_field__dropdown + i").hasClass("active")){
		$(".dropdown__guests").hide(500);
	}else{
		$(".dropdown__guests").show(500);
	}
	$(".text_field__dropdown + i").toggleClass("active");
	
});