import {Dropdown} from './../dropdown/dropdown'
$('.js-guest-dropdown').each((i,el)=>{
	new Dropdown($(el),i)
})