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
import "./js/masked_input.min.js"
import "./air-datepicker.css"
let selectedDates={arrival:undefined,depart:undefined}
let dayDiff=0
let air_dp=$(".arrival-depart .calendar-wrapper").datepicker({
		multipleDates: 2,
		range: true,
		clearButton: true,
		minDate: new Date(),
		onSelect: function(){
			if(air_dp.selectedDates[0]){
				$(".arrival-depart .arrival").val(air_dp.selectedDates[0].toLocaleDateString())
				selectedDates.arrival=air_dp.selectedDates[0]
			}else{
				$(".arrival-depart .arrival").val("")
				selectedDates.arrival=undefined						
			}
			if(air_dp.selectedDates[1]){
				$(".arrival-depart .depart").val(air_dp.selectedDates[1].toLocaleDateString())
				selectedDates.depart=air_dp.selectedDates[1]
			}else{
				$(".arrival-depart .depart").val("")
				selectedDates.depart=undefined
			}
			if(selectedDates.depart){
				dayDiff=Math.ceil((selectedDates.depart-selectedDates.arrival)/1000/60/60/24)
				
			}else{dayDiff=0}
			console.log(dayDiff)

		}
	}).data('datepicker')
$(".arrival-depart .input-wrapper").each(function(){
	$(this).click(function(){
		
		
		$(".arrival-depart .calendar-wrapper").slideToggle(250)
	})
})
//-------------------masked-input--------------------
$(".arrival-depart .arrival").mask('99.99.9999')
$(".arrival-depart .depart").mask('99.99.9999')
//-------------------masked-input--------------------


