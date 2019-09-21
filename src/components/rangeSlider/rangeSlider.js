
$(".rangeSlider").each(function(i,el){
	$(el).slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).html(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    })
})
$( "#amount" ).html($( ".rangeSlider" ).slider( "values", 0 ) +
      " - " + $( ".rangeSlider" ).slider( "values", 1 ))