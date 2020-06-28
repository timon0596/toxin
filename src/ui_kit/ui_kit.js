//------------------------dropdown------------------------
//------------------------dropdown------------------------
//------------------------dropdown------------------------


import {Dropdown} from './js/dropdown'
import './js/ckb'
$('.dropdown').each((i,el)=>{
	new Dropdown($(el),i)
})