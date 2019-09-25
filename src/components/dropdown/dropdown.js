function dropdown_bedroom(){let elem=$(".dropdown_bedroom");
	$(elem).find(".text").html("2 спальни, 2 кровати...")
	elem.sum=0;
	elem.text="";
	elem.first="2 спальни"
	elem.second=", 2 кровати..."
	$(elem).find("i").click(function(){
		$(elem).find(".wrapper__dropdown").slideToggle(250)
		$(elem).toggleClass("active")
	})
	$(elem).find(".row").each(function(i,el){
		el.counter=+$(el).find(".number").html()
		if(!$(el).hasClass("third")){
			$(el).find(".number").html(2)
			$(el).find(".minus").removeClass("inactive")
		}




		$(el).find(".plus").click(function(){
			el.counter=+$(el).find(".number").html()
			el.counter++;
			$(el).find(".number").html(el.counter)
			if($(el).hasClass("first")){
				if(el.counter==1)
					elem.first="1 спальня"
				else if(el.counter>1&&el.counter<5)
					elem.first=el.counter+" спальни"
				else if(el.counter>4)
					elem.first=el.counter+" спален"
				else if(el.counter==0)
					elem.first="спальни"
			}
			if($(el).hasClass("second")){
				if(el.counter==1)
					elem.second=", 1 кровать..."
				else if(el.counter>1&&el.counter<5)
					elem.second=", "+el.counter+" кровати..."
				else if(el.counter>4)
					elem.second=", "+el.counter+" кроватей..."
				else if(el.counter==0)
					elem.second=", кровати..."
			}
			elem.text=elem.first+elem.second
			$(elem).find(".text").html(elem.text)
			$(this).siblings(".minus").removeClass("inactive")
			


		})





		$(el).find(".minus").click(function(){
			el.counter=+$(el).find(".number").html()
			if(el.counter<=0)
				el.counter=0
			else
				el.counter--
			$(el).find(".number").html(el.counter)
			if($(el).hasClass("first")){
				if(el.counter==1)
					elem.first="1 спальня"
				else if(el.counter>1&&el.counter<5)
					elem.first=el.counter+" спальни"
				else if(el.counter>4)
					elem.first=el.counter+" спален"
				else if(el.counter==0)
					elem.first="спальни"
			}
			if($(el).hasClass("second")){
				if(el.counter==1)
					elem.second=", 1 кровать..."
				else if(el.counter>1&&el.counter<5)
					elem.second=", "+el.counter+" кровати..."
				else if(el.counter>4)
					elem.second=", "+el.counter+" кроватей..."
				else if(el.counter==0)
					elem.second=", кровати..."
			}
			elem.text=elem.first+elem.second
			$(elem).find(".text").html(elem.text)
			if($(this).siblings(".number").html()==0)
				$(this).addClass("inactive")
										
		})
	})





	
};
dropdown_bedroom();
