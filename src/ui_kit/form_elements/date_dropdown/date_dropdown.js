import 'air-datepicker'

let datepicker = {
	              		days: 0,
	              		fromTo: '',
	              		from: '',
	              		to: ''
	              	}
$('.date-dropdown__wrapper .date-dropdown-datepicker').each((i,el)=>{
		const $block = $(el).parents('.block__room--details')

		const inp = $(el).parent().find('input')
		datepicker = JSON.parse(localStorage?.getItem('datepicker'))??datepicker

		if(inp[1]){
			$(inp).on('change',function(){
				DPinstance.selectDate([new Date($(inp[0]).val().split('.').reverse().join('-')),new Date($(inp[1]).val().split('.').reverse().join('-'))])
			})
		}
		const DPinstance = $(el).datepicker({
	    minDate: new Date(),
	    multipleDates: 2,
	    range: true,
	    multipleDatesSeparator: ' - ',
	    dateFormat: 'dd.mm.yyyy',
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
	              	
	              	datepicker.fromTo= fd
	              	datepicker.from= d[0]?.toLocaleDateString('ru-RU',options)??''
	              	datepicker.to = d[1]?.toLocaleDateString('ru-RU',options)??''
	              	datepicker.days = d[1]?Math.round((d[1]-d[0])/1000/60/60/24):0
	              	
	              	if(inp.length==2){
	              		$(inp[0]).val(datepicker.from)
	              		$(inp[1]).val(datepicker.to)
	              	}
	              	else{
	              		$(inp[0]).val(datepicker.fromTo)
	              	}
	              if(!!$block[0]&&datepicker.to){
	              	roomDetails($block,{cost: 9990,discount: 2179,extraServices: 300})
	              }
	            }
		}).data('datepicker')
		datepicker.days?DPinstance.selectDate([new Date(datepicker.from.split('.').reverse().join('-')),new Date(datepicker.to.split('.').reverse().join('-'))]):0
		const dpClear = $('.datepicker--button[data-action="clear"]').hide()
		const dpInline = $(el).find('.datepicker-inline').hide()
		const dpBtns = $(el).find('.datepicker--buttons')
		const dpExpand = inp.next('i')
		dpExpand.click(()=>{
			dpInline.slideToggle(250)
		})
		const clear = $('<div>',{
			class: 'toxin-text-btn_grey',
			html: '<h3>очистить</h3>',
			on: {
				click:()=>{
					dpClear.click()
					localStorage?.removeItem('datepicker')
				}
			}
		})
		const apply = $('<div>',{
			class: 'toxin-text-btn',
			html: '<h3>применить</h3>',
			on: {
				click:()=>{
					localStorage.setItem('datepicker',JSON.stringify(datepicker))
					dpInline.slideUp(250)
				}
			}
		})
		dpBtns.append(clear).append(apply)
})
function roomDetails (el,payment){
	const $hab = $(el).find('.tax__habitation')
	const $srv = $(el).find('.tax__services')
	const $exsrv = $(el).find('.tax__extra--services')
	const hab__total = payment.cost*datepicker.days
	const hab__total_str = Math.floor(hab__total/1000)+' '+String(hab__total).substring(String(hab__total).length-3,String(hab__total).length)+'₽'
	const hab__tax__text = payment.cost +'₽'+' x ' + datepicker.days + (datepicker.days==1?' сутки':' суток')
	const $total__sum = $(el).find('.total__sum')
	let total__sum = hab__total - payment.discount + payment.extraServices
	total__sum = Math.floor(total__sum/1000)+' '+String(total__sum).substring(String(total__sum).length-3,String(total__sum).length)+'₽'
	$total__sum.html(total__sum)
	$hab.html('<div class="tax__text"></div>')
	const $hab_tax_text = $(el).find('.tax__habitation').find('.tax__text')
	$hab_tax_text.html(hab__tax__text)
	$hab.append(hab__total_str)
}
$('.block__room--details').each((i,el)=>{
	roomDetails(el,{cost: 9990,discount: 2179,extraServices: 300})
})