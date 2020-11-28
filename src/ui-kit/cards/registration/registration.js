export class Registration {
  constructor($parent) {
    this.$parent = $parent;
    this.init();
  }

  init() {
    this.$signIn = this.$parent.find('.js-registration__sign-in-button');
    this.$el = this.$parent.find('.js-registration');
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
