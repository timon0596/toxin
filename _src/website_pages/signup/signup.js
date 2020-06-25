
$(".signup").each(function(i,el){
	$(this).click((event)=>{
		localStorage.setItem("signup_or_signin", "signup")

		if(window.location.href.split("/").reverse()[0]=="signup.html"){
			event.preventDefault()
			if(localStorage.getItem("signup_or_signin")=="signup"){
				$(".registration-block").css("display","grid")
				$(".sign-in--block").css("display","none")
			}
			if(localStorage.getItem("signup_or_signin")=="signin"){
				$(".sign-in--block").css("display","grid")
				$(".registration-block").css("display","none")
			}
		}

	})
})
$(".signin").each(function(i,el){
	$(this).click((event)=>{
		localStorage.setItem("signup_or_signin", "signin")

		if(window.location.href.split("/").reverse()[0]=="signup.html"){
			event.preventDefault()
			if(localStorage.getItem("signup_or_signin")=="signup"){
				$(".registration-block").css("display","grid")
				$(".sign-in--block").css("display","none")
			}
			if(localStorage.getItem("signup_or_signin")=="signin"){
				$(".sign-in--block").css("display","grid")
				$(".registration-block").css("display","none")
			}
		}
	})
})
if(window.location.href.split("/").reverse()[0]=="signup.html"){
			
			if(localStorage.getItem("signup_or_signin")=="signup"){
				$(".registration-block").css("display","grid")
				$(".sign-in--block").css("display","none")
			}
			if(localStorage.getItem("signup_or_signin")=="signin"){
				$(".sign-in--block").css("display","grid")
				$(".registration-block").css("display","none")
			}
		}
