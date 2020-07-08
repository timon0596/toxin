$(document).ready(()=>{
	let sign_up=true
	const $sign_up = $('.block__registration')
	const $sign_in = $('.block__sign--in')

	function signupHandler(){
		sign_up=!sign_up
		sign_up?($sign_in.hide(),$sign_up.show()):($sign_up.hide(),$sign_in.show())
	}
	function signinHandler(){
		$('.nav__btn--item').hide()
		$('.nav__item.user__name').show()
	}
	
	if('/sign_in.html'==location.pathname){
		$('.js-sign--in,.js-create').click(signupHandler)
		$('.js-sign--in--btn').click(signinHandler)
	}
})
