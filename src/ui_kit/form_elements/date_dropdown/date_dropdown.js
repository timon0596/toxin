import 'air-datepicker'
import 'jquery-mask-plugin'
import {roomDetails} from './../../cards/room_details/room_details.js'
export function dateDropdown(datepickerObj){
	let datepicker = datepickerObj
	$('.date-dropdown__wrapper .date-dropdown-datepicker').each((i,el)=>{
			const $block = $(el).parents('.block__room-details')

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
		    dateFormat: !inp[1]?'dd M':'dd.mm.yyyy',
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
		              	if(location.pathname=='/search_room_page.html'){
		              		let q = fd
		              		inp[0].value = q
		              	}

		              if(!!$block[0]&&datepicker.to){
		              	roomDetails($block,{cost: 9990,discount: 2179,extraServices: 300},datepicker)
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
				class: 'toxin-btn toxin-btn_with-no-bg toxin-btn_grey',
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
						localStorage.setItem('datepicker',JSON.stringify(datepicker))
						dpInline.slideUp(250)
					}
				}
			})
			dpBtns.append(clear).append(apply)

	})
}
