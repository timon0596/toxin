$(document).ready(()=>{
	const $sign_up = $('.block-registration')
	const $sign_in = $('.block-sign-in')

	function signInHandler(){
		$sign_up.hide()
		$sign_in.show()
	}
	function signUpHandler(){
		$('.nav__btn-item').show()
		$('.nav__item.nav__user-name').hide()
		$sign_in.hide()
		$sign_up.show()
	}
	function enterHandler(){
		$('.nav__btn-item').hide()
		$('.nav__item.nav__user-name').show()
	}
	
	if('/sign_in.html'==location.pathname){
		$('.js-sign-in,.js-nav__sign-in').click(signInHandler)
		$('.js-btn-create,.js-nav__sign-up').click(signUpHandler)
		$('.js-sign-in-btn').click(enterHandler)
	}
})
