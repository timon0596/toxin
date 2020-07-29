import {Dropdown} from './../dropdown/dropdown'
$('.js-guest-dropdown-body').each((i,el)=>{
	new Dropdown($(el),i)
})