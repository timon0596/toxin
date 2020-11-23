import * as $ from 'jquery';

export class Registration {
  constructor() {
    this.init();
  }

  init() {
    this.$signIn = $('.js-registration__sign-in-button');
    this.$el = $('.js-registration');
  }

  addEventHandler(callback) {
    this.$signIn.on('click', callback);
  }

  show() {
    this.$el.show();
  }

  hide() {
    this.$el.hide();
  }
}
