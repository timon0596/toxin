let date=new Date()
let months=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
const CW=$(".calendar")

CW["dates"]={
	firstDate:{
		date:undefined,
		arrival:true
	},
	secondDate:{
		date:undefined,
		arrival:false
	}
}
$(".calendar .clean").click(function(){
	CW.dates.firstDate.date=undefined
	CW.dates.secondDate.date=undefined
	$(".calendar .number").each(function(i,el){
		$(this).removeClass("selected-number")
		$(".date-arrival input").val("")
		$(".date-depart input").val("")
	})
})
//-----------------------------------------------------------------
function dateRangeBackground(){
	$(".calendar .number").each(function(i,el){
		$(this).mouseover(function(){
			if((CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date)||(CW.dates.firstDate.date&&CW.dates.secondDate.date==undefined)){

			}
		})
	})	
}
//-----------------------------------------------------------------
function numberSelection(){
	$(".calendar .number").each(function(i,el){
		$(this).click(function(){
			if($(this).hasClass("selected-number")){
				$(this).removeClass("selected-number")
				if(el.fullDate==CW.dates.firstDate.date){
					CW.dates.firstDate.date=undefined
					CW.dates.firstDate.arrival=false
					if(CW.dates.secondDate.date)
						CW.dates.secondDate.arrival=true
					else{
						CW.dates.firstDate.arrival=true
					}
				}
				if(el.fullDate==CW.dates.secondDate.date){
					CW.dates.secondDate.date=undefined
					CW.dates.secondDate.arrival=false
					if(CW.dates.firstDate.date)
						CW.dates.firstDate.arrival=true
					else{
						CW.dates.firstDate.arrival=true
					}	
				}
				if(CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date==undefined){
					$(".date-arrival input").val("")
					$(".date-depart input").val("")
				}

			}else{
				if(CW.dates.firstDate.date&&CW.dates.secondDate.date)
					return false
				if(CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date==undefined)
					CW.dates.firstDate.date=el.fullDate
				else if(CW.dates.firstDate.date)
					CW.dates.secondDate.date=el.fullDate
				else{
					CW.dates.firstDate.date=el.fullDate
				} 
				$(this).addClass("selected-number")
				if(CW.dates.firstDate.date&&CW.dates.secondDate.date){
					let date1=new Date(CW.dates.firstDate.date.split(".")[2],
						CW.dates.firstDate.date.split(".")[1],
						CW.dates.firstDate.date.split(".")[0])
					let date2=new Date(CW.dates.secondDate.date.split(".")[2],
						CW.dates.secondDate.date.split(".")[1],
						CW.dates.secondDate.date.split(".")[0])
					if(date1<date2){
						CW.dates.firstDate.arrival=true
						CW.dates.secondDate.arrival=false
					}else{
						CW.dates.firstDate.arrival=false
						CW.dates.secondDate.arrival=true
					}
				}
			}
			console.log(CW["dates"])
			if(CW.dates.firstDate.date){
				if(CW.dates.firstDate.arrival==true)
					$(".date-arrival input").val(CW.dates.firstDate.date.split(".")[2]+"-"
						+CW.dates.firstDate.date.split(".")[1]+"-"
						+CW.dates.firstDate.date.split(".")[0])
				else{
					$(".date-depart input").val(CW.dates.firstDate.date.split(".")[2]+"-"
						+CW.dates.firstDate.date.split(".")[1]+"-"
						+CW.dates.firstDate.date.split(".")[0])
				}
			}
			if(CW.dates.secondDate.date){
				if(CW.dates.secondDate.arrival==true)
					$(".date-arrival input").val(CW.dates.secondDate.date.split(".")[2]+"-"
						+CW.dates.secondDate.date.split(".")[1]+"-"
						+CW.dates.secondDate.date.split(".")[0])
				else{
					$(".date-depart input").val(CW.dates.secondDate.date.split(".")[2]+"-"
						+CW.dates.secondDate.date.split(".")[1]+"-"
						+CW.dates.secondDate.date.split(".")[0])
				}
			}					
		})
	})
}
//-----------------------------------------------------------------




function buildcalendar(year,month){
		if(month==12){
			month=0
			year++
		}
		if(month==-1){
			month=11
			year--
		}
		date=new Date(year,month)
		let firstday=new Date(year,month).getDay()
		let dinm=32-new Date(year,month,32).getDate()
		if(firstday==0){firstday=7}
		for(let i=1;i<=dinm;i++){
			$(".calendar-inner").append("<div class='number-wrapper'><div class='number'></div></div>")			
			$(".calendar-inner .number")[i-1].innerHTML=i			
		}


//adding dates to number cells
		$(".calendar .number").each(function(i,el){			
			el.fullDate= new Date(year,month,i+1).toLocaleDateString()
		})


//previous month + next month dates rendering		
		for(let i=0;i<firstday-1;i++){
			$(".calendar-inner").prepend("<div class='number-wrapper'><div class='number prevMonth'></div></div>")
		}
		if(month==0)month=12
		let j=32-new Date(year,month-1,32).getDate()
		for(let i=firstday-2;i>=0;i--){
			$(".calendar-inner .prevMonth")[i].innerHTML=j
			j--			
		}
		if(month==12)month=0
		let lngt=$(".calendar-inner .number").length
		for(let i=0;i<35-lngt;i++){
			$(".calendar-inner").append("<div class='number-wrapper'><div class='number nextMonth'></div></div>")
		}
		$(".calendar-inner .nextMonth").each(function(i){
			$(this).html(i+1)
		})
		if($(".calendar-inner .number").length>35){
			lngt=$(".calendar-inner .number").length
			for(let i=0;i<42-lngt;i++){
				$(".calendar-inner").append("<div class='number-wrapper'><div class='number nextMonth'></div></div>")		
			}
			$(".calendar-inner .nextMonth").each(function(i){
				$(this).html(i+1)
			})
		}

		
//current date
		$(".month").html(months[month] + " " + year)
		$(".calendar-inner .number").each(function(i,el){
			if(el.fullDate==new Date().toLocaleDateString()){
				if($(this).html()==new Date().getDate()){
					$(this).addClass("currentDate")
				}
			}

		})
	numberSelection()
	$(".calendar .number").each(function(i,el){
		if(el.fullDate){
			if(el.fullDate==CW.dates.firstDate.date||el.fullDate==CW.dates.secondDate.date){
			$(this).addClass("selected-number")
		}
		}
	})

		
}
//-----------------------------------------------------------------










try {
	buildcalendar(date.getFullYear(),date.getMonth())

} catch(e) {
	// statements
	console.warn("calendar don't exist on this page");
}


$(".calendar .next").click(function(){
	$(".calendar-inner").empty()
	buildcalendar(date.getFullYear(),date.getMonth()+1)
})
$(".calendar .prev").click(function(){
	$(".calendar-inner").empty()
	buildcalendar(date.getFullYear(),date.getMonth()-1)
})



$(".date-arrival i").click(function(e){
	$(".calendar-wrapper").slideToggle(250)	
})



$(".date-depart i").click(function(e){
	$(".calendar-wrapper").slideToggle(250)		
})

$(".calendar .apply").click(function(){
	$(".calendar-wrapper").slideToggle(250)
})




console.log(new Date().toLocaleDateString())