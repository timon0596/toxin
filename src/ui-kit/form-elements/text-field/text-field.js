import 'jquery-mask-plugin';
import * as $ from 'jquery';

export class MaskedTextField {
  static selectors = {
    icon: '.js-text-field__icon-wrapper',
    input: '.js-text-field input'
  }
  constructor($el) {
    this.$el = $el;
    this.init();
  }

  init() {
    this.$el.mask('00.00.0000');
  }
  
  static on({
    eventName, callback, $root, selector = 'icon',
  }) {
    const selectorStr = [
      'icon',
      'input',
    ].indexOf(selector) !== -1 ? MaskedTextField.selectors[selector] : null;
    $root.find(selectorStr).on(eventName, callback);
  }

  static setVal({ $root, order = 0, val }) {
    $($root.find('.js-text-field input')[order]).val(val);
  }

  static getVal({$root, order = 0,}){
    return $root.find('.js-text-field input')[order].value
  }
}
