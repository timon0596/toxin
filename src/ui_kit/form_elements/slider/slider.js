$('.js-range-slider .js-range-slider__scale').each((i,el)=>{
	$(el).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $(el).parent().find( ".range-slider__amount" ).text( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
      }
    })
	$(el).parent().find( ".range-slider__amount" ).text( $(el).slider( "values", 0 ) + "₽" + " - " +
	     $(el).slider( "values", 1 ) + "₽" )
})