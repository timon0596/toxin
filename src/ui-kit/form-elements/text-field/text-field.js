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
}
