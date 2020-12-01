export class Nav {
  constructor($el) {
    this.$el = $el;
    this.init();
  }

  init() {
    this.refs = this.$el.find('[data-signed="false"]');
  }

  getRefs() {
    return this.refs;
  }
}
