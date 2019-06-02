
function dropdown_guests(){let elem=$(".dropdown_guests");
	elem.sum=0;
	$(elem).find("i").click(function(){
		$(elem).find(".wrapper__dropdown").slideToggle(250)
		$(elem).toggleClass("active")
	})
	$(elem).find(".row").each(function(i,el){
		el.counter=+$(el).find(".number").html()





		$(el).find(".plus").click(function(){
			elem.sum=0;
			elem.guest=0;
			elem.text="";
			elem.third="";
			el.counter=+$(el).find(".number").html()
			el.counter++;
			$(el).find(".number").html(el.counter)
			$(elem).find(".clean").removeClass("inactive")
			$(elem).find(".row").each(function(i,el){
				elem.sum+=+$(el).find(".number").html()
				if(!$(el).hasClass("third"))
					elem.guest+=+$(el).find(".number").html()
				else if($(el).find(".number").html()!=0){
					elem.third=$(el).find(".number").html()
					if(elem.third%10==1&&elem.third!=11)
						elem.text=", "+String(elem.third) +" младенец";
					else if(elem.third>10&&elem.third<15)
						elem.text=", "+String(elem.third)+" младенцев";
					else if(elem.third%10>1&&elem.third%10<5)
						elem.text=", "+String(elem.third) +" младенца";
					else if(elem.third%10>4||elem.third%10==0)
						elem.text=", "+String(elem.third)+" младенцев";
				}
			})
			if(elem.guest==0){
				elem.text="Сколько гостей";
				elem.third=0;
				el.counter=0;
				$(elem).find(".third .number").html(0);
				$(elem).find(".clean").addClass("inactive")
			}
			else if(elem.guest%10==1&&elem.guest!=11)
				elem.text=""+elem.guest +" гость"+elem.text;
			else if(elem.guest>10&&elem.guest<15)
				elem.text=""+elem.guest+" гостей"+elem.text;
			else if(elem.guest%10>1&&elem.guest%10<5)
				elem.text=""+elem.guest +" гостя"+elem.text;
			else if(elem.guest%10>4||elem.guest%10==0)
				elem.text=""+elem.guest+" гостей"+elem.text;
			$(elem).find(".text").html(elem.text)

				
		})





		$(el).find(".minus").click(function(){
			elem.sum=0;
			elem.guest=0;
			elem.text="";
			elem.third="";
			el.counter=+$(el).find(".number").html()
			if(el.counter<=0)
				el.counter=0
			else
				el.counter--
			$(el).find(".number").html(el.counter)
			$(elem).find(".row").each(function(i,el){
				elem.sum+=+$(el).find(".number").html()
				if(!$(el).hasClass("third"))
					elem.guest+=+$(el).find(".number").html()
				else if($(el).find(".number").html()!=0){
					elem.third=$(el).find(".number").html()
					if(elem.third%10==1&&elem.third!=11)
						elem.text=", "+String(elem.third) +" младенец";
					else if(elem.third>10&&elem.third<15)
						elem.text=", "+String(elem.third)+" младенцев";
					else if(elem.third%10>1&&elem.third%10<5)
						elem.text=", "+String(elem.third) +" младенца";
					else if(elem.third%10>4||elem.third%10==0)
						elem.text=", "+String(elem.third)+" младенцев";
				}
			})
			if(elem.guest==0){
				elem.text="Сколько гостей";
				elem.third=0;
				el.counter=0;
				$(elem).find(".third .number").html(0);
				$(elem).find(".clean").addClass("inactive")
			}
			else if(elem.guest%10==1&&elem.guest!=11)
				elem.text=""+elem.guest +" гость"+elem.text;
			else if(elem.guest>10&&elem.guest<15)
				elem.text=""+elem.guest+" гостей"+elem.text;
			else if(elem.guest%10>1&&elem.guest%10<5)
				elem.text=""+elem.guest +" гостя"+elem.text;
			else if(elem.guest%10>4||elem.guest%10==0)
				elem.text=""+elem.guest+" гостей"+elem.text;
			$(elem).find(".text").html(elem.text)
			
			if(elem.sum==0)
				{
					$(elem).find(".clean").addClass("inactive")
				}				
		})
	})





	$(elem).find(".clean").click(function(){
		$(elem).find(".row").each(function(i,el){
			$(el).find(".number").html(0)
		})
		$(elem).find(".text").html("Сколько гостей")
		$(elem).find(".clean").addClass("inactive")
	})
};
dropdown_guests();
