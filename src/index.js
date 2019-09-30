let usericonsSVG = require.context("./img/reviewIcons", true, /\.(png|jpg)$/)
console.log(usericonsSVG)
console.log(window.innerWidth)
import "jquery"
// import "jquery-ui/demos/bootstrap.js"
import "jquery-ui/ui/widget"
import "jquery-ui/ui/keycode"
import "jquery-ui/ui/widgets/mouse"
import "jquery-ui/ui/widgets/slider"
import "jquery-ui/themes/base/base.css"
// import "jquery-ui/themes/base/theme.css"
import './all.css'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
import "popper.js"
import "bootstrap/js/dist/carousel.js"
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/scss/bootstrap.scss"
import "./index.pug"
import "./cards/cards.pug"
import "./headers_and_footers/headers_and_footers.pug"
import "./landingPage.pug"
import "./website_pages/search_room/search_room.pug"
import "./website_pages/room_details/room_details.pug"
import "./style.sass"
import "./js/ckbox.js"
import "./js/ckboxButtons.js"
import "./js/like.js"
import "./js/datepicker.js"
import "./js/air-datepicker.js"
import "./js/masked_input.min.js"
import "./components/components.js"
import toxin_logo from "./img/toxin_logo.svg"
import toxin_logo_img_border from "./img/logo_img_border.svg"
import toxin_logo_left from "./img/left_logo_arc.svg"
import toxin_logo_right from "./img/right_logo_arc.svg"
import lpbgr from "./img/landingPageBackground.svg"
// import pngusericon from "./img/reviewIcons/murad.userIcon.png"
// console.log(typeof pngusericon)






//---------------------room_details_picture-section-----------------------------------------
//---------------------room_details_picture-section-----------------------------------------
//---------------------room_details_picture-section-----------------------------------------
let roomdetailsPNG = require.context("./img/roomdetails", true, /\.png$/)
let roomdetailsImgPath="./img/roomDetailsPics"
if(window.location.pathname=="/room_details.html"){

	//---------------------user-icons---------------------
	//---------------------user-icons---------------------
	//---------------------user-icons---------------------
	
	// console.log(usericonsSVG)
	// console.log(usericonsSVG)
	// $(".review .icon img")[0].src="./img/reviewusericons"+usericonsSVG.keys()[0].slice(1)
	//---------------------user-icons---------------------
	//---------------------user-icons---------------------
	//---------------------user-icons---------------------



	$("main .pics .img").each(function(i,el){
		let path=roomdetailsImgPath+roomdetailsPNG.keys()[i].slice(1)
		$(el).css('background-image', 'url(' + path + ')')
		// el.src=path
		console.log(path)
	})
	
	let picsHGT=485/1440*window.innerWidth	
	$("main .pics").css("height",picsHGT + "px")
	window.onresize=function(){
		let picsHGT=485/1440*window.innerWidth	
		$("main .pics").css("height",picsHGT + "px")
	}


}

//---------------------room_details_picture-section-----------------------------------------
//---------------------room_details_picture-section-----------------------------------------
//---------------------room_details_picture-section-----------------------------------------


let png = require.context("./img/roompreview", true, /\.png$/)
$(".block.room-preview--block").each(function(i,el){
	


let room_number=el.classList[2]
let path_context=`/${room_number}`


let id=$(el).find(".room-preview--slider .carousel.slide").attr('id')+room_number
$(el).find(".room-preview--slider .carousel.slide").attr('id',id)
id=$(el).find(".room-preview--slider .carousel.slide").attr('id')
$("#"+id+" a.carousel-control-prev").attr('href',"#"+id)
$("#"+id+" a.carousel-control-next").attr('href',"#"+id)





for(let i=0;i<4;i++){

	let img=document.createElement("img")
	let path=`./img/roompreviewPics`+path_context+png.keys()[i].slice(5)
	
	img.src=path
	img.class="d-block.w-100"
	
	// $(id+" ol.carousel-indicators").append(`<li data-target=`+`'#carouselExampleIndicators'`+room_number+` data-slide-to=${i-1}></li>`)
	$(this).find("ol.carousel-indicators").append(`<li data-target='#${id}' data-slide-to=${i}></li>`)
	$(this).find(".carousel-inner").append("<div class='carousel-item'>"+"</div>")
	if(i==0){
		$($(this).find(".carousel-inner .carousel-item")[i]).addClass("active")
		$($(this).find("ol.carousel-indicators li")[i]).addClass("active")
	}
	$($(this).find(".carousel-inner .carousel-item")[i]).append(img)

}
$(this).find(".carousel-control-prev .carousel-control-prev-icon").append("<i class='material-icons'>expand_more</i>")
$(this).find(".carousel-control-next .carousel-control-next-icon").append("<i class='material-icons'>expand_more</i>")
	
})
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
let arr=[];

const months=["янв","фев","марта","апр","мая","июня","июля","авг","сен","окт","нояб","дек"]
let dayDiff=0
let cost_mult_days_initial=$(".cost-mult-days").html()
let cost_mult_days_summary_initial=$(".price .sum").html()
let total_sum_initial=$(".total-sum .sum").html()
$(".arrival-depart .calendar-wrapper").each(function(i,el){
	
	// el.arrival_depart_dates={arrival:undefined,depart:undefined}
	el.selectedDates={arrival:undefined,depart:undefined}
	arr[i]=$(el).datepicker({
		multipleDates: 2,
		range: true,
		clearButton: true,
		minDate: new Date(),
		onSelect: function(){
			if(arr[i].selectedDates[0]){
				$(el).parent().find(".arrival").val(arr[i].selectedDates[0].toLocaleDateString())
				el.selectedDates.arrival=arr[i].selectedDates[0]
			}else{
				$(el).parent().find(".arrival").val("")
				el.selectedDates.arrival=undefined
				localStorage.removeItem("arrival")
				localStorage.removeItem("depart")
				console.log(localStorage.getItem("arrival"))				
			}
			if(arr[i].selectedDates[1]){

				localStorage.setItem("arrival",arr[i].selectedDates[0].toLocaleDateString())
				localStorage.setItem("depart",arr[i].selectedDates[1].toLocaleDateString())
				console.log(localStorage.getItem("arrival"))

				let arrivalDate=Number(arr[i].selectedDates[0].toLocaleDateString().split(".")[0])+" "+months[Number(arr[i].selectedDates[0].toLocaleDateString().split(".")[1])-1]
				let departDate=Number(arr[i].selectedDates[1].toLocaleDateString().split(".")[0])+" "+months[Number(arr[i].selectedDates[1].toLocaleDateString().split(".")[1])-1]
				console.log(arrivalDate+" - "+departDate)

				$(".dateDropdown .filterDateDropdown input").val(arrivalDate+" - "+departDate)

				$(el).parent().find(".depart").val(arr[i].selectedDates[1].toLocaleDateString())
				el.selectedDates.depart=arr[i].selectedDates[1]
					if($(el).parents()[1]==$(".block.lux-block")[0]){
						dayDiff=Math.ceil((el.selectedDates.depart-el.selectedDates.arrival)/1000/60/60/24)
						costPerDay(dayDiff)	
					}
			}else{
				$(el).parent().find(".depart").val("")
				el.selectedDates.depart=undefined
				if($(el).parents()[1]==$(".block.lux-block")[0]){
					dayDiff=0
					$(".cost-mult-days").html(cost_mult_days_initial)
					$(".price .sum").html(cost_mult_days_summary_initial)
					$(".total-sum .sum").html(total_sum_initial)	
				}
				
			}
		}
	}).data('datepicker')
})
datepickerApplyButton()



$(".dateDropdown .filterDateDropdown").click(function(){
	$(this).siblings(".calendar-wrapper").slideToggle(250)
})
console.log(localStorage.getItem("arrival")&&localStorage.getItem("depart"))
if(localStorage.getItem("arrival")&&localStorage.getItem("depart")){
	$(".arrival-depart .arrival").val(localStorage.getItem("arrival"))
	$(".arrival-depart .depart").val(localStorage.getItem("depart"))
	let arrivalDate=Number(localStorage.getItem("arrival").split(".")[0])+" "+months[Number(localStorage.getItem("arrival").split(".")[1])-1]
	let departDate=Number(localStorage.getItem("depart").split(".")[0])+" "+months[Number(localStorage.getItem("depart").split(".")[1])-1]
	$(".dateDropdown .filterDateDropdown input").val(arrivalDate+" - "+departDate)
}
//---------------------------------------------------
// if(air_dp.selectedDates[0]){
// 	$(".arrival-depart .arrival").val(air_dp.selectedDates[0].toLocaleDateString())
// 	selectedDates.arrival=air_dp.selectedDates[0]
// }else{
// 	$(".arrival-depart .arrival").val("")
// 	selectedDates.arrival=undefined						
// }
// if(air_dp.selectedDates[1]){
// 	$(".arrival-depart .depart").val(air_dp.selectedDates[1].toLocaleDateString())
// 	selectedDates.depart=air_dp.selectedDates[1]
// 	dayDiff=Math.ceil((selectedDates.depart-selectedDates.arrival)/1000/60/60/24)
// 	costPerDay(dayDiff)
// }else{
// 	$(".arrival-depart .depart").val("")
// 	selectedDates.depart=undefined
// 	dayDiff=0
// 	$(".cost-mult-days").html(cost_mult_days_initial)
// 	$(".price .sum").html(cost_mult_days_summary_initial)
// 	$(".total-sum .sum").html(total_sum_initial)
// }
//---------------------------------------------------

$(".arrival-depart .input-wrapper").each(function(i,el){
	$(this).click(function(){		
		$(el).parent().find(".calendar-wrapper").slideToggle(250)
	})
})
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
//--------------------------------------calendar--------------------------------------------
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
//-------------------------------masked-textfield-------------------------------------
$(document).ready(function(){
	$(".masked_textfield .text_field input").each(function(i,el){
		$(this).mask("99.99.9999",{placeholder:"дд.мм.гггг"})
	})
})
//-------------------------------masked-textfield-------------------------------------
//-------------------------------slick-slider-initialization-------------------------------------
// $(document).ready(function(){
// 	$(".room-preview--slider").slick({
// 		dots: true,
// 		slidesToShow: 1,
//   		adaptiveHeight: true,
//   		infinite: true
// 	})
// })


