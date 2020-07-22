$('.ckb-list').each(function(){
	const i = $(this).find('i')
	const w = $(this).find('.ckb-list__inner')
	i.click(()=>{
		$(this).toggleClass('ckb-list_expanded')
		w.slideToggle(250)
	})
})