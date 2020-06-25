$(".checkboxlist").click(function () {
	$(this).find("i").toggleClass("active")
	$(this).find("i").siblings("ul").slideToggle(250)
})
$(".checkboxlist").find("ul li").each(function(i,el){
	$(el).click(function(e){
		e.stopPropagation()
		$(this).toggleClass("checked")
		$(this).find(".check").toggle(250)
	})
})