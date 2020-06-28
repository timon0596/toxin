$('.ckb').click(function(){
	$(this).toggleClass('checked')
})
$('.ckblist').each(function(){
	const i = $(this).find('i')
	const w = $(this).find('.ckblist__wrapper')
	i.click(()=>{
		$(this).toggleClass('expanded')
		w.slideToggle(250)
	})
})