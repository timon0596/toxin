let date=new Date()
let months=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]



let calendar=$(".calendar .number")

function buildCalendar(year,month){
	date=new Date(year,month)
	let firstday=new Date(year,month).getDay()
	let dinm=32-new Date(year,month,32).getDate()
		console.log(dinm)
if(firstday==0)firstday=6
for(let i=firstday-2,j=32-new Date(year,month-1,32).getDate();i>=0;i--){
	calendar[i].innerHTML=j;j--
	}	
for(let i=firstday-1,j=1;j<=dinm;i++){
	calendar[i].innerHTML=j;j++

	}
for(let i=dinm+firstday-1,j=1;i<calendar.length;i++){
	calendar[i].innerHTML=j;j++

	
}
$(".month").html(months[month])

}
buildCalendar(date.getFullYear(),date.getMonth())
$(".datepicker .next").click(function(){
	buildCalendar(date.getFullYear(),date.getMonth()+1)
})
console.log($(".datepicker .next"))

