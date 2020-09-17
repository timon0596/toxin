export class SignInPage {
  constructor({
    signIn,
    signUp,
    $navButtons,
    $userName,
    $navSignUpButton,
    $navSignInButton,
    $signUpBlockButton,
  }) {
    this.$signUpBlock = signUp;
    this.$signInBlock = signIn;
    this.$navButtons = $navButtons;
    this.$userName = $userName;
    this.$navSignUpButton = $navSignUpButton;
    this.$navSignInButton = $navSignInButton;
    this.$signUpBlockButton = $signUpBlockButton;
    this.$signInButtonCreate;
    this.$signInEnterButton;
    this.init();
  }
  findElements() {
    this.$signInButtonCreate = this.$signInBlock.find(
      ".js-sign-in__button-create"
    );
    this.$signInEnterButton = this.$signInBlock.find(
      ".js-sign-in__sign-in-button"
    );
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
    this.findElements();
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
