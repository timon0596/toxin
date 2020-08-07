import 'air-datepicker'
import 'jquery-mask-plugin'
function dateFromLocaleDateString(str){
	return new Date(str.split('.').reverse().join('.'))
}
function dateDropdown(selector){
	let selectedDates = {fromTo:'',from:'',to:'',days: 0}
	selectedDates = JSON.parse(localStorage?.getItem('datepicker'))||selectedDates
	$(selector).each((i,el)=>{
			const $dateInput = $(el).find('input')
			$dateInput.mask('00.00.0000')
			const $datepicker = $(el).find('.date-dropdown-datepicker')
			const DPinstance = $datepicker.datepicker({
		    minDate: new Date(),
		    multipleDates: 2,
		    range: true,
		    multipleDatesSeparator: ' - ',
		    dateFormat: !$dateInput[1]?'dd M':'dd.mm.yyyy',
		    language: {
		    	daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
		    },
		    navTitles: {
		        days: '<h2>MM yyyy</h2>',
		    },
		    clearButton: true,
		    prevHtml:'<i class="material-icons">arrow_back</i>',
		    nextHtml:'<i class="material-icons">arrow_forward</i>',
		    onSelect: function(fd, d, picker) {
		                const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
		              	selectedDates.fromTo= fd
		              	selectedDates.from= d[0]?d[0].toLocaleDateString('ru-RU',options):''
		              	selectedDates.to = d[1]?d[1].toLocaleDateString('ru-RU',options):''
		              	selectedDates.days = d[1]?Math.round((d[1]-d[0])/1000/60/60/24):0
		              	let inputCondition = selectedDates.from&&selectedDates.to
		              	if($dateInput[1]){
		              		$($dateInput[0]).val(selectedDates.from)
		              		inputCondition?$($dateInput[1]).val(selectedDates.to):0
		              	}
		              	else{
		              		$dateInput.val(fd)
		              	}
		              	const dateSelectEvent = $.Event('new-date-selected')
		              	dateSelectEvent.selectedDates = {...selectedDates}
		              	$(el).trigger(dateSelectEvent)
		            }
			}).data('datepicker')
			
			if(selectedDates.days){

				DPinstance.selectDate([dateFromLocaleDateString(selectedDates.from),dateFromLocaleDateString(selectedDates.to)])

			}

			const dpClear = $('.datepicker--button[data-action="clear"]').hide()
			const dpInline = $(el).find('.datepicker-inline').hide()
			const dpBtns = $(el).find('.datepicker--buttons')
			const dpExpand = $dateInput.next('i')
			dpExpand.click(()=>{
				dpInline.slideToggle(250)
			})
			const clear = $('<div>',{
				class: 'toxin-btn toxin-btn_grey',
				html: '<h3>очистить</h3>',
				on: {
					click:()=>{
						dpClear.click()
						localStorage?.removeItem('datepicker')
					}
				}
			})
			const apply = $('<div>',{
				class: 'toxin-btn toxin-btn_with-no-bg',
				html: '<h3>применить</h3>',
				on: {
					click:()=>{
						localStorage.setItem('datepicker',JSON.stringify(selectedDates))
						dpInline.slideUp(250)
					}
				}
			})
			dpBtns.append(clear).append(apply)
	})
}
dateDropdown('.js-date-dropdown')
dateDropdown('.js-filter-date-dropdown')