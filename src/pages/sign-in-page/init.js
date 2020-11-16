import * as $ from 'jquery';
import { SignInPage } from './sign-in-page';

const cards = {
  signIn: $('.js-sign-in'),
  signUp: $('.js-registration'),
  $navButtons: $('.js-nav__item_unsigned'),
  $userName: $('.js-nav__item_signed'),
  $navSignUpButton: $('.js-nav__sign-up-button'),
  $navSignInButton: $('.js-nav__sign-in-button'),
  $signUpBlockButton: $('.js-registration .js-registration__sign-in-button'),
};
new SignInPage(cards);
