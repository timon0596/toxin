import * as $ from 'jquery';

export class SignIn {
  constructor() {
    this.init();
  }

  init() {
    this.$el = $('.js-sign-in');
    this.$signUp = $('.js-sign-in__button-create');
  }

  addEventHandler(callback) {
    this.callback = callback.bind(this);
    this.$signUp.on('click', this.callback);
  }

  show() {
    this.$el.show();
  }

  hide() {
    this.$el.hide();
  }
}
