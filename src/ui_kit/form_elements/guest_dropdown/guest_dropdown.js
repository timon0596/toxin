import {Dropdown} from './../dropdown/dropdown'
$('.js-guest-dropdown__body').each((i,el)=>{
	new Dropdown($(el),i)
})