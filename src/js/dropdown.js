$(".dropdown i").click(function() {
	$(this).parent().find(".wrapper__dropdown").slideToggle(250);
	$(this).parent().toggleClass("active");

	let mainNode = $(this).parent();
	let clear = false;	
	let control = $(this).parent().find(".control");
	$(control).each(function(i,elem){
	$(mainNode).find(".clean").click(function(){
		$(mainNode).find(".clean").addClass("inactive");
		clear = true;
		$(control).each(function(i,el){
			$(el).find(".number").html(0);
			$(mainNode).find(".text").html("Сколько гостей");
		});
	});
	let counter =0;


		$(elem).find(".plus").click(function(){
			let sum =0;
			if(clear){
				counter=0;
				sum=0;
			}
			if(counter<0){
				counter=0;
				$(elem).find(".number").html(counter);
			}
			else{
				counter=$(elem).find(".number").html();
				counter++;				
			}

			

			$(elem).find(".number").html(counter);
			$(mainNode).find(".clean").removeClass("inactive");
			$(control).each(function(i,el){
				sum+=Number($(el).find(".number").html());
			});
			
			if(sum%10==1&&sum!=11)
				$(mainNode).find(".text").html(String(sum) + " гость");
			if(sum%10==2||sum%10==3||sum%10==4)
				$(mainNode).find(".text").html(String(sum) + " гостя");
			if((sum%10==0&&sum!=0)||sum%10>4||(sum>=11&&sum<=14))
				$(mainNode).find(".text").html(String(sum) + " гостей");
			clear=false;
		});



		$(elem).find(".minus").click(function(){
			let sum =0;
			counter=$(elem).find(".number").html();
			counter--;
			if(counter<0){
				counter=0;
				$(elem).find(".number").html(counter);
			}
			else
			$(elem).find(".number").html(counter);
			$(control).each(function(i,el){
				sum+=Number($(el).find(".number").html());
			});



			if(sum==0){
					$(mainNode).find(".clean").addClass("inactive");
					$(mainNode).find(".text").html("Сколько гостей");
					console.log(sum);
				}else{
					if(sum%10==1&&sum!=11)
						$(mainNode).find(".text").html(String(sum) + " гость");
					if(sum%10==2||sum%10==3||sum%10==4)
						$(mainNode).find(".text").html(String(sum) + " гостя");
					if(sum%10==0||sum%10>4||(sum>=11&&sum<=14))
						$(mainNode).find(".text").html(String(sum) + " гостей");
				}		
		});			
	});
});
	


