function dateSelectedHandler(e){
	
	if(e.selectedDates.days){
		const $block = $(this).parents('.room-details')
		const $taxHabitation = $block.find('.tax-habitation')
		const $blockSum = $block.find('.room-details__sum h2')
		const sum = 9990*e.selectedDates.days
		const total = sum - 2179 + 300
		const declension = e.selectedDates.days%10==1?'сутки':'суток'
		const taxHabitationInt = Math.floor(sum/1000)
		const taxHabitationModulo = (sum%1000+'').padStart(3,'0')
		const taxHabitationTaxSum = `${taxHabitationInt} ${taxHabitationModulo}₽`
		const taxHabitationText = `9 990₽ х ${e.selectedDates.days} ${declension}`
		const totalInt = Math.floor(total/1000)
		const totalModulo = (total%1000+'').padStart(3,'0')
		const blockSumText = `${totalInt} ${totalModulo}₽`
		$taxHabitation.find('.room-details__tax-text').text(taxHabitationText)
		$taxHabitation.find('.room-details__tax-sum').text(taxHabitationTaxSum)
		$blockSum.text(blockSumText)
	}
}
$('.room-details').each((i,el)=>{
	const $dd = $(el).find('.js-date-dropdown')
	$dd.on('new-date-selected',dateSelectedHandler)
})