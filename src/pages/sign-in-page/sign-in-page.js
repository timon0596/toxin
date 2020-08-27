$(document).ready(() => {
  const $sign_up = $(".js-registration");
  const $sign_in = $(".js-sign-in");
  function signInHandler() {
    $sign_up.hide();
    $sign_in.show();
  }
  function signUpHandler() {
    $(".nav__item_unsigned").show();
    $(".nav__item_signed").hide();
    $sign_in.hide();
    $sign_up.show();
  }
  function enterHandler() {
    $(".nav__item_unsigned").hide();
    $(".nav__item_signed").show();
  }

  if ("/sign-in-page.html" == location.pathname) {
    $sign_in.hide();
    $(".js-registration__sign-in-button,.nav__sign-in-button").click(
      signInHandler
    );
    $(".js-sign-in__button-create,.nav__sign-up-button").click(signUpHandler);
    $(".js-sign-in__sign-in-button").click(enterHandler);
  }
});
