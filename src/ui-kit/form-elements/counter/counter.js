export class Counter {
  constructor(el) {
    this.$parent = el;
    this.init();
  }

  disable($minusButton) {
    $minusButton.addClass('counter__button_disabled');
  }

  enable($minusButton) {
    $minusButton.removeClass('counter__button_disabled');
  }

  init() {
    this.minusButtons = this.$parent.find('.js-counter__button:first-child');
    this.plusButtons = this.$parent.find('.js-counter__button:last-child');
    this.valueNodes = this.$parent.find('.js-counter__button:nth-child(2)');
  }

  getMinusButtons() {
    return this.minusButtons;
  }

  getPlusButtons() {
    return this.plusButtons;
  }

  getValueNodes() {
    return this.valueNodes;
  }
}
