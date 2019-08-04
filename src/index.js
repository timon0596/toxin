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

let selectedDates={arrival:undefined,depart:undefined}
let dayDiff=0
let cost_mult_days_initial=$(".cost-mult-days").html()
let cost_mult_days_summary_initial=$(".price .sum").html()
let total_sum_initial=$(".total-sum .sum").html()
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
				dayDiff=Math.ceil((selectedDates.depart-selectedDates.arrival)/1000/60/60/24)
				costPerDay(dayDiff)
			}else{
				$(".arrival-depart .depart").val("")
				selectedDates.depart=undefined
				dayDiff=0
				$(".cost-mult-days").html(cost_mult_days_initial)
				$(".price .sum").html(cost_mult_days_summary_initial)
				$(".total-sum .sum").html(total_sum_initial)
			}
		}
	}).data('datepicker')
datepickerApplyButton()



$(".arrival-depart .input-wrapper").each(function(){
	$(this).click(function(){		
		$(".arrival-depart .calendar-wrapper").slideToggle(250)
	})
})
//-------------------masked-input--------------------
$(".arrival-depart .arrival").mask('99.99.9999')
$(".arrival-depart .depart").mask('99.99.9999')
//-------------------masked-input--------------------
function costPerDay(dayDiff){
	$(".cost-mult-days").html(cost_mult_days_initial)
	$(".price .sum").html(cost_mult_days_summary_initial)
	$(".total-sum .sum").html(total_sum_initial)
	let cost_mult_days_summary=dayDiff*9990
	let day_word_ending=(function(){
		let temp
		if(dayDiff%10==1){
			temp= "сутки"
		}
		if(dayDiff%10>1&&dayDiff%10<5){
			temp= "сутки"
		}
		if(dayDiff>1&&dayDiff<5){
			temp= "суток"
		}
		if(dayDiff%10>=5){
			temp= "суток"
		}
		return temp
	})()
	console.log($(".cost-mult-days").html())
	$(".cost-mult-days").html($(".cost-mult-days").html()+" "+dayDiff+" "+day_word_ending)
	$(".price .sum").html(cost_mult_days_summary+$(".price .sum").html())
	$(".total-sum .sum").html(cost_mult_days_summary+300-2179+$(".total-sum .sum").html())
}



function datepickerApplyButton(){	
    let button = '<span class="datepicker--button apply--button" data-action="apply">применить</span>'
    $(".datepicker .datepicker--buttons").each(function(){
    	$(this).append(button)
    })

}


