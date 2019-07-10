let date=new Date()
let months=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
const CW=$(".calendar-wrapper")
CW["arrival"]=false
CW["depart"]=false
CW["arrival-date"]
CW["depart-date"]




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
			$(".calendar-inner").append(`<div class='number'></div>`)			
			$(".calendar-inner .number")[i-1].innerHTML=i			
		}



		$(".calendar .number").each(function(i,el){			
			el.fullDate= new Date(year,month,i+1).toLocaleDateString()
		})


//previous month + next month dates rendering		
		for(let i=0;i<firstday-1;i++){
			$(".calendar-inner").prepend("<div class='number prevMonth'></div>")
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
			$(".calendar-inner").append("<div class='number nextMonth'></div>")
		}
		$(".calendar-inner .nextMonth").each(function(i){
			$(this).html(i+1)
		})
		if($(".calendar-inner .number").length>35){
			lngt=$(".calendar-inner .number").length
			for(let i=0;i<42-lngt;i++){
				$(".calendar-inner").append("<div class='number nextMonth'></div>")		
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
		
		

	
}


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
	if(CW["depart"]==false){
		$(".calendar-wrapper").slideToggle(250)
	if(CW["arrival"]==false){
		CW["arrival"]=true
	}else{
			CW["arrival"]=false
		}
	}
})



$(".date-depart i").click(function(e){
	if(CW["arrival"]==false){
		$(".calendar-wrapper").slideToggle(250)
	if(CW["depart"]==false){
		CW["depart"]=true
	}else{
			CW["depart"]=false
		}
	}	
})




console.log(new Date().toLocaleDateString())