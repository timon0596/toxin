let date=new Date()
let months=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]





function buildCalendar(year,month){
		if(month==12){
			month=0
			year++
		}
		date=new Date(year,month)
		let firstday=new Date(year,month).getDay()
		let dinm=32-new Date(year,month,32).getDate()
		if(firstday==0){firstday=7}
		for(let i=1;i<=dinm;i++){
		$(".calendar").append("<div class='number'></div>")			
		$(".calendar .number")[i-1].innerHTML=i			
		}
		for(let i=0;i<firstday-1;i++){
			$(".calendar").prepend("<div class='number prevMonth'></div>")

		}
		if(month==0)month=12
		let j=32-new Date(year,month-1,32).getDate()
		for(let i=firstday-2;i>=0;i--){
			$(".calendar .prevMonth")[i].innerHTML=j
			j--			
		}
		if(month==12)month=0



		console.log(month)

		$(".month").html(months[month] + " " + year)
	
}



buildCalendar(date.getFullYear(),date.getMonth())

$(".datepicker .next").click(function(){
	$(".calendar").empty()
	buildCalendar(date.getFullYear(),date.getMonth()+1)
})

