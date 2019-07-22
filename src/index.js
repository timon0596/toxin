import "jquery"
import "./index.pug"
import "./cards/cards.pug"
import "./style.sass"
import "./js/dropdown.js"
import "./js/dropdown_bedroom.js"
import "./js/ckbox.js"
import "./js/ckboxButtons.js"
import "./js/like.js"
import "./js/datepicker.js"
import "./js/air-datepicker.js"
import "./air-datepicker.css"

let air_dp=$(".arrival-depart .calendar-wrapper").datepicker({
		multipleDates: 2,
		range: true,
		clearButton: true,
		onSelect: function(){
			if(air_dp.selectedDates[0]){
				$(".arrival-depart .arrival").val(air_dp.selectedDates[0].toLocaleDateString())
			}else{
				$(".arrival-depart .arrival").val("")							
			}
			if(air_dp.selectedDates[1]){
				$(".arrival-depart .depart").val(air_dp.selectedDates[1].toLocaleDateString())
			}else{
				$(".arrival-depart .depart").val("")
			}

		}
	}).data('datepicker')
$(".arrival-depart input").each(function(){
	$(this).click(function(){
		$(".arrival-depart .calendar-wrapper").slideToggle(250)
	})
})
