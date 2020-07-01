//------------------------dropdown------------------------
//------------------------dropdown------------------------
//------------------------dropdown------------------------


import {Dropdown} from './js/dropdown'
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