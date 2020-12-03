export class Checkbox {
  constructor({ $root }) {
    this.$el = $root.find('.checkbox__input');
  }

  check() {
    this.$el.trigger('click');
  }
}
