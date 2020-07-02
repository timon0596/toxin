//------------------------dropdown------------------------
//------------------------dropdown------------------------
//------------------------dropdown------------------------

import 'jquery-mask-plugin'
import {Dropdown} from './js/dropdown'
import 'air-datepicker'
import './js/ckb'
$('.dropdown').each((i,el)=>{
	new Dropdown($(el),i)
})
//------------------------slider------------------------
//------------------------slider------------------------
//------------------------slider------------------------
$('.range--slider').each((i,el)=>{
	$(el).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $(el).parent().find( ".range--slider__amount" ).text( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
      }
    })
	$(el).parent().find( ".range--slider__amount" ).text( $( ".range--slider" ).slider( "values", 0 ) + "₽" + " - " +
	     $( ".range--slider" ).slider( "values", 1 ) + "₽" )
})
//---------------------masked-textfield----------------------------
$('.js-date.masked--textfield').mask('00.00.0000')

//---------------------block__room--details------------------------
const datepickers = {}
$('.date--dropdown__wrapper .date--dropdown__datepicker').each((i,el)=>{

		$(el).datepicker({
	    minDate: new Date(),
	    multipleDates: 2,
	    range: true,
	    multipleDatesSeparator: ' - ',
	    dateFormat: 'dd.mm.yyyy',
	    onSelect: function(fd, d, picker) {
	                if (!d) return
	                const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
	              	datepickers[i] = {
	              		days: 0,
	              		fromTo: fd,
	              		from: d[0].toLocaleDateString('ru-RU',options),
	              		to: ''
	              	}
	              	datepickers[i].to = d[1]?.toLocaleDateString('ru-RU',options)??''
	              	datepickers[i].days = d[1]?Math.round((d[1]-d[0])/1000/60/60/24):0
	              	console.log(datepickers[i])
	            }


		})
		
})
