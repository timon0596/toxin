export class Counter {
  disable($minusButton) {
    $minusButton.addClass("counter__button_disabled");
  }

  enable($minusButton) {
    $minusButton.removeClass("counter__button_disabled");
  }
}
