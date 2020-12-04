export class SignIn {
  constructor($parent) {
    this.$parent = $parent;
    this.init();
  }

  init() {
    this.$el = this.$parent.find('.js-sign-in');
    this.$signUp = this.$parent.find('.sign-in__creation-button');
  }

  addClickHandler(callback) {
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
