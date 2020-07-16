import {dateDropdown} from './../../form_elements/date_dropdown/date_dropdown.js'

let datepickerObj = {
	              		days: 0,
	              		fromTo: '',
	              		from: '',
	              		to: ''
	              	}
datepickerObj = JSON.parse(localStorage?.getItem('datepicker'))??datepickerObj
dateDropdown(datepickerObj)
export function roomDetails (el,payment,dp){
	let datepicker = dp
	const $hab = $(el).find('.tax__habitation')
	const $srv = $(el).find('.tax__services')
	const $exsrv = $(el).find('.tax__extra-services')
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
$('.block__room-details').each((i,el)=>{
	roomDetails(el,{cost: 9990,discount: 2179,extraServices: 300},datepickerObj)
})