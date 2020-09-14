export class Header {
  constructor() {
    this.$header;
    this.$navItems;
    this.init();
  }
  init() {
    this.$header = $("header");
    this.$navItems = this.$header
      .find('.nav__item[data-signed="false"]')
      .hide();
  }
}
