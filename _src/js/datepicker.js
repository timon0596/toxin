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
	},
	objArrivalDate: function(){
		try {
			for(let i=0;i<Object.keys(CW.dates).length;i++){
				if(CW.dates[Object.keys(CW.dates)[i]].arrival==true){
					return new Date(CW.dates[Object.keys(CW.dates)[i]].date.split(".")[2],CW.dates[Object.keys(CW.dates)[i]].date.split(".")[1]-1,CW.dates[Object.keys(CW.dates)[i]].date.split(".")[0])
				}
			}
		} catch(e) {
			// statements
			console.warn(e);
		}
	},
	objDepartDate: function(){
		try {
			for(let i=0;i<Object.keys(CW.dates).length;i++){
				if(CW.dates[Object.keys(CW.dates)[i]].arrival==false&&CW.dates[Object.keys(CW.dates)[i]].date){
					return new Date(CW.dates[Object.keys(CW.dates)[i]].date.split(".")[2],CW.dates[Object.keys(CW.dates)[i]].date.split(".")[1]-1,CW.dates[Object.keys(CW.dates)[i]].date.split(".")[0])
				}
			}
		} catch(e) {
			// statements
			console.warn(e);
		}
	},
	arrivalDate: function(){
		try {
			for(let i=0;i<Object.keys(CW.dates).length;i++){
				if(CW.dates[Object.keys(CW.dates)[i]].arrival==true){
					return CW.dates[Object.keys(CW.dates)[i]].date
				}
			}
		} catch(e) {
			// statements
			console.warn(e);
		}
	},
	departDate: function(){
		try {
			for(let i=0;i<Object.keys(CW.dates).length;i++){
				if(CW.dates[Object.keys(CW.dates)[i]].arrival==false&&CW.dates[Object.keys(CW.dates)[i]].date){
					return CW.dates[Object.keys(CW.dates)[i]].date
				}
			}
		} catch(e) {
			// statements
			console.warn(e);
		}
	},
	currentDate: function(){
		return new Date()
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
		$(this).mouseover(function(event){
			rightDateRange(i,el,event)
			leftDateRange(i,el,event)
			if(el.fullDate==CW.dates.arrivalDate()){
				$(".calendar .number").each(function(i,elem){
					$(this).parent().removeClass("date-range-bgr--right-last date-range-bgr--left-last date-range-bgr")
				})				
			}
			if(CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date==undefined){
				$(".calendar .number").each(function(i,elem){
					$(this).parent().removeClass("date-range-bgr--right-last date-range-bgr--left-last date-range-bgr")
				})
			}
			if(CW.dates.firstDate.date&&CW.dates.secondDate.date){
				$(".calendar .number").each(function(i,elem){
					if(elem.fullDate==CW.dates.arrivalDate()){
						$(this).parent().addClass("date-range-bgr--left-last")
					}
					if(elem.fullDate==CW.dates.departDate()){
						$(this).parent().addClass("date-range-bgr--right-last")
					}
					if(elem.objFullDate>CW.dates.objArrivalDate()&&elem.objFullDate<CW.dates.objDepartDate()){
						$(this).parent().addClass("date-range-bgr")
					}
				})
			}
		})
	})	
}
//-----------------------------------------------------------------
function rightDateRange(i,el,event){
	if((CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date)||(CW.dates.firstDate.date&&CW.dates.secondDate.date==undefined)){
		if(el.objFullDate>CW.dates.objArrivalDate()){
			$(".selected-number").parent().removeClass("date-range-bgr--right-last").addClass("date-range-bgr--left-last")
			$(".calendar .number").each(function(i,elem){
				if(elem.objFullDate>CW.dates.objArrivalDate()&&(elem.objFullDate<el.objFullDate||elem.fullDate==el.fullDate)){
					$(this).parent().removeClass("date-range-bgr--right-last").addClass("date-range-bgr")
				}
				else{
					$(this).parent().removeClass("date-range-bgr date-range-bgr--right-last")
				}

			})
				}
				
			}
}
//-----------------------------------------------------------------
function leftDateRange(i,el,event){
	if((CW.dates.firstDate.date==undefined&&CW.dates.secondDate.date)||(CW.dates.firstDate.date&&CW.dates.secondDate.date==undefined)){
		if(el.objFullDate<CW.dates.objArrivalDate()){
			$(".selected-number").parent().removeClass("date-range-bgr--left-last").addClass("date-range-bgr--right-last")
			$(".calendar .number").each(function(i,elem){
				if(elem.objFullDate<CW.dates.objArrivalDate()&&(elem.objFullDate>el.objFullDate||elem.fullDate==el.fullDate)){
					$(this).parent().removeClass("date-range-bgr--left-last").addClass("date-range-bgr")
				}
				else{
					$(this).parent().removeClass("date-range-bgr date-range-bgr--left-last")
				}

			})
				}
			}
}
//-----------------------------------------------------------------
function numberSelection(){
	$(".calendar .number").each(function(i,el){
		$(this).click(function(){
		try {
								
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
				let flag=false
				
				if(CW.dates.currentDate()>el.objFullDate){
						flag=true
					}
				$(".currentDate").each(function(i,elem){
					if(elem.fullDate==el.fullDate){
						flag=false
					}
				})

				
				if((CW.dates.firstDate.date&&CW.dates.secondDate.date)||flag)
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
							} catch(e) {
								// statements
								console.log(e);
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
			el.objFullDate=new Date(year,month,i+1)
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
	dateRangeBackground()

		
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
	$(".datepicker-inner .calendar-wrapper").slideToggle(250)	
})



$(".date-depart i").click(function(e){
	$(".datepicker-inner .calendar-wrapper").slideToggle(250)		
})

$(".calendar .apply").click(function(){	
	if(CW.dates.arrivalDate()){
		$(".date-arrival input").val(CW.dates.arrivalDate().split(".")[2]+"-"
									+CW.dates.arrivalDate().split(".")[1]+"-"
									+CW.dates.arrivalDate().split(".")[0])
	}else{
		$(".date-arrival input").val("")
	}
	if(CW.dates.departDate()){
		$(".date-depart input").val(CW.dates.departDate().split(".")[2]+"-"
									+CW.dates.departDate().split(".")[1]+"-"
									+CW.dates.departDate().split(".")[0])
	}else{
		$(".date-depart input").val("")
	}	
	$(".datepicker-inner .calendar-wrapper").slideToggle(250)
})




