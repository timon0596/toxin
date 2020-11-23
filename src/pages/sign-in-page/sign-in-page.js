import * as $ from 'jquery';
import { SignIn } from '../../ui-kit/cards/sign-in/sign-in';
import { Registration } from '../../ui-kit/cards/registration/registration';

export class SignInPage {
  constructor() {
    if (location.href.includes('sign-in-page.html')) {
      this.signInBlock = new SignIn();
      this.signUpBlock = new Registration();
      this.signInBlock.hide();
      this.init();
    }
  }

  init() {
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.signInBlock.addEventHandler(this.handleSignInClick);
    this.signUpBlock.addEventHandler(this.handleSignUpClick);
  }

  handleSignUpClick() {
    this.signUpBlock.hide();
    this.signInBlock.show();
  }

  handleSignInClick() {
    this.signInBlock.hide();
    this.signUpBlock.show();
  }
}
