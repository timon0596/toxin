function importAll (r) {
  r.keys().forEach(r);
}
import 'jquery'
import 'jquery-ui/ui/widgets/slider'
import 'jquery-ui/themes/base/all.css'
import './index.pug'
import 'air-datepicker/dist/css/datepicker.min.css'
import 'bootstrap/js/src/carousel.js'
import './main.sass'
require.context('./ui_kit/cards', true, /\.scss$/)
require.context('./ui_kit', true, /\.sass/)
require.context('./pages', true, /\.sass/)
importAll(require.context('./ui_kit', true, /\.js$/))
importAll(require.context('./pages', true, /\.js$/))

const userImg = require.context('./img/users', true, /\.(jpe?g|png)$/)
const preview_img = require.context('./img/preview', true, /\.(jpe?g|png|svg)$/)
const imgs = require.context('./img', false, /\.(jpe?g|png|svg)$/)


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
	
	if('/sign_in.html'==location.pathname){
		$('.js-block-registration__sign-in-button,.js-nav__sign-in-button').click(signInHandler)
		$('.js-block-sign-in__button-create,.js-nav__sign-up-button').click(signUpHandler)
		$('.js-block-sign-in__sign-in-button').click(enterHandler)
		console.log($('.js-sign-in-btn'))
	}
})