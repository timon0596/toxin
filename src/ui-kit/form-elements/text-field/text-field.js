import 'jquery-mask-plugin';

export class TextField {
  constructor({ $root }) {
    this.$el = $root.find('.js-text-field');
    this.init();
  }

  init() {
    this.$icon = this.$el.find('.js-text-field__icon-wrapper');
    this.$input = this.$el.find('.text-field__input');
  }

  addClickHandler({ callback }) {
    this.$icon.on('click', callback);
  }

  addChangeHandler({ callback }) {
    this.$input.on('change', callback);
  }

  getValue() {
    return this.$input[0].value;
  }

  setValue(value) {
    this.$input.val(value);
  }
}
