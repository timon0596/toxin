import 'jquery-mask-plugin';

export class MaskedTextField {
  constructor($el) {
    this.$el = $el;
    this.init();
  }

  init() {
    this.$el.mask('00.00.0000');
  }
}
