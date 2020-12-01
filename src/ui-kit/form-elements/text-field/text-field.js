import 'jquery-mask-plugin';

export class MaskedTextField {
  constructor($el) {
    this.$el = $el;
    this.init();
  }

  init() {
    this.$el.mask('00.00.0000');
  }

  static on({ eventName, callback, $root }) {
    $root.find('.js-text-field__icon-wrapper').on(eventName, callback);
  }

  static getInputs($root) {
    return $root.find('.js-text-field input');
  }
}
