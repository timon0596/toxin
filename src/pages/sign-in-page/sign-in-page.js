import { SignIn } from '../../ui-kit/cards/sign-in/sign-in';
import { Registration } from '../../ui-kit/cards/registration/registration';

export class SignInPage {
  constructor($el) {
    this.$el = $el;
    this.signInBlock = new SignIn(this.$el);
    this.signUpBlock = new Registration(this.$el);
    this.signInBlock.hide();
    this.init();
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
