import 'jquery-mask-plugin';

export class TextField {
  constructor({ $root }) {
    this.$el = $root.find('.js-text-field');
    this.init();
  }

  init() {
    this.$icon = this.$el.find('.js-text-field__icon-wrapper');
    this.$input = this.$el.find('.text-field__input-wrapper input');
  }

  handleIconClick({ callback }) {
    this.$icon.on('click', callback);
  }

  handleInputChange({ callback }) {
    this.$input.on('change', callback);
  }

  getVal() {
    return this.$input[0].value;
  }

  setVal(val) {
    this.$input.val(val);
  }
}
