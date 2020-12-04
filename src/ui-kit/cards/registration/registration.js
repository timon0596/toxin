export class Registration {
  constructor($parent) {
    this.$parent = $parent;
    this.init();
  }

  init() {
    this.$signInButton = this.$parent.find('.js-registration__sign-in-button');
    this.$el = this.$parent.find('.js-registration');
  }

  addClickHandler(callback) {
    this.$signInButton.on('click', callback);
  }

  show() {
    this.$el.show();
  }

  hide() {
    this.$el.hide();
  }
}
