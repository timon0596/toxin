import * as $ from 'jquery';

export class Checkbox {
  constructor({ $root }) {
    this.$root = $root;
    this.init();
  }

  check({ i }) {
    $(this.$inputs[i]).trigger('click');
  }

  init() {
    this.$inputs = this.$root.find('.checkbox__input');
  }
}
