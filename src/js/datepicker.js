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
		$(".calendar-inner").append(`<div class='number ${months[month]}'></div>`)			
		$(".calendar-inner .number")[i-1].innerHTML=i			
		}
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

		

		$(".month").html(months[month] + " " + year)
		$(".calendar-inner .number").each(function(){
			if($(this).hasClass(months[new Date().getMonth()])){
				if($(this).html()==new Date().getDate()){
					$(this).addClass("currentDate")
				}
			}

		})
		
		$(".calendar .number").each(function(){
			$(this).click(function(){
				if($(this).hasClass("nextMonth")||$(this).hasClass("prevMonth")||($(this).hasClass(months[new Date().getMonth()])&&(Number($(this).html())<Number($(".currentDate").html())))){
					console.log(1)
					return false
				}else{
					if(CW["arrival"]==true){
						$(this).parent().find(".arrival").removeClass("arrival")
						$(this).toggleClass("arrival")
						CW["arrival-date"]=new Date($(".month").html().split(" ")[1],months.indexOf($(".month").html().split(" ")[0]),$(this).html())
						CW["arrival-date"]=CW["arrival-date"].toLocaleDateString().split(".")[2]+"-"+CW["arrival-date"].toLocaleDateString().split(".")[1]+"-"+CW["arrival-date"].toLocaleDateString().split(".")[0]
						$(".date-arrival input").val(CW["arrival-date"])

					}				
					
				}
			})
		})
	if($(".date-arrival input").val()){
		if($(".month").html().split(" ")[1]==$(".date-arrival input").val().split("-")[0]&&months.indexOf($(".month").html().split(" ")[0])+1==$(".date-arrival input").val().split("-")[1]){
			$(".calendar .number").each(function(){
				if(!$(this).hasClass("nextMonth")&&!$(this).hasClass("prevMonth")){
					if($(this).html()==$(".date-arrival input").val().split("-")[2]){
						$(this).addClass("arrival")
					}
				}
			})
		}
	}

	
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

console.log(CW)


