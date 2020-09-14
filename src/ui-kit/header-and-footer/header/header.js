export class Header {
  constructor() {
    this.$navItems;
    this.init();
  }
  init() {
    this.$navItems = $('[data-signed="false"]').hide();
  }
}
