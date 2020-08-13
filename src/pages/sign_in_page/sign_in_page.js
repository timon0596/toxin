$(document).ready(()=>{
	const $sign_up = $('.js-block-registration')
	const $sign_in = $('.js-block-sign-in')

	function signInHandler(){
		$sign_up.hide()
		$sign_in.show()
	}
	function signUpHandler(){
		$('.js-nav__btn-item').show()
		$('.js-nav__user-name').hide()
		$sign_in.hide()
		$sign_up.show()
	}
	function enterHandler(){
		$('.js-nav__btn-item').hide()
		$('.js-nav__user-name').show()
	}
	
	if('/sign_in_page.html'==location.pathname){
		$('.js-block-registration__sign-in-button,.js-nav__sign-in-button').click(signInHandler)
		$('.js-block-sign-in__button-create,.js-nav__sign-up-button').click(signUpHandler)
		$('.js-block-sign-in__sign-in-button').click(enterHandler)
	}
})