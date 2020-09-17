export class CheckBoxList {
  constructor(el) {
    this.$el = el;
    this.$expand;
    this.$wrapper;
    this.init();
  }

  findElements() {
    this.$expand = this.$el.find(".js-checkbox-list__expand");
    this.$wrapper = this.$el.find(".js-checkbox-list__wrapper").hide();
  }

  onClickHandler() {
    this.$el.toggleClass("checkbox-list_expanded");
    this.$wrapper.slideToggle(250);
  }

  init() {
    this.findElements();
    this.$expand.click(this.onClickHandler.bind(this));
  }
}
