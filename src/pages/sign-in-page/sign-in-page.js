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
      '.js-sign-in__button-create',
    );
    this.$signInEnterButton = this.$signInBlock.find(
      '.js-sign-in__sign-in-button',
    );
  }

  handleSignUpBlockButtonClick() {
    this.$signUpBlock.hide();
    this.$signInBlock.show();
  }

  handleNavSignUpButtonClick() {
    this.$navButtons.show();
    this.$userName.hide();
    this.$signInBlock.hide();
    this.$signUpBlock.show();
  }

  handleSignInEnterButtonClick() {
    this.$navButtons.hide();
    this.$userName.show();
  }

  binding() {
    this.handleSignUpBlockButtonClick = this.handleSignUpBlockButtonClick.bind(
      this,
    );
    this.handleNavSignUpButtonClick = this.handleNavSignUpButtonClick.bind(
      this,
    );
    this.handleSignInEnterButtonClick = this.handleSignInEnterButtonClick.bind(
      this,
    );
  }

  init() {
    this.findElements();
    if (location.pathname.match(/\/sign-in-page.html/)) {
      this.$signInBlock.hide();
      this.binding();
      this.$signUpBlockButton.click(this.handleSignUpBlockButtonClick);
      this.$navSignInButton.click(this.handleSignUpBlockButtonClick);
      this.$navSignUpButton.click(this.handleNavSignUpButtonClick);
      this.$signInButtonCreate.click(this.handleNavSignUpButtonClick);
      this.$signInEnterButton.click(this.handleSignInEnterButtonClick);
    }
  }
}
