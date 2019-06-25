let elem=$(".dropdown-guests");
console.log(elem)
	elem.sum=0;
	$(elem).find("i").click(function(){
		$(elem).find(".controls").slideToggle(250)
		$(elem).find(".guests").toggleClass("active")
	})