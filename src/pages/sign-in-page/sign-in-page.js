export class SignInPage {
  constructor({ signIn, signUp }) {
    this.$signUpBlock = signUp;
    this.$signInBlock = signIn;
    this.$signUpBlockButton = this.$signUpBlock.find(
      ".js-registration__sign-in-button"
    );
    this.$signInButtonCreate = this.$signInBlock.find(
      ".js-sign-in__button-create"
    );
    this.$signInEnterButton = this.$signInBlock.find(
      ".js-sign-in__sign-in-button"
    );
    this.$navButtons = $(".nav__item_unsigned");
    this.$userName = $(".nav__item_signed");
    this.$navSignUpButton = $(".nav__sign-up-button .button");
    this.$navSignInButton = $(".nav__sign-in-button .button");
    this.init();
  }
  signInHandler() {
    this.$signUpBlock.hide();
    this.$signInBlock.show();
  }
  signUpHandler() {
    this.$navButtons.show();
    this.$userName.hide();
    this.$signInBlock.hide();
    this.$signUpBlock.show();
  }
  enterHandler() {
    this.$navButtons.hide();
    this.$userName.show();
  }
  init() {
    if ("/sign-in-page.html" == location.pathname) {
      this.$signInBlock.hide();
      this.$signUpBlockButton.click(this.signInHandler.bind(this));
      this.$navSignInButton.click(this.signInHandler.bind(this));
      this.$navSignUpButton.click(this.signUpHandler.bind(this));
      this.$signInButtonCreate.click(this.signUpHandler.bind(this));
      this.$signInEnterButton.click(this.enterHandler.bind(this));
    }
  }
}
