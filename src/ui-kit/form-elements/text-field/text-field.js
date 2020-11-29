import * as $ from 'jquery';
import 'jquery-mask-plugin';

export class MaskedTextField {
  constructor() {
    this.init();
  }

  init() {
    this.$inputs = $('.js-text-field_masked input');
    this.$inputs.mask('00.00.0000');
  }

  static on({ eventName, callback, $root }) {
    $root.find('.js-text-field__icon-wrapper').on(eventName, callback);
  }

  static getInputs($root) {
    return $root.find('.js-text-field input');
  }
}
