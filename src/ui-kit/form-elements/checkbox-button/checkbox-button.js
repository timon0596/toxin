export class CheckBoxButton {
  constructor({ el, checkbox }) {
    this.$el = el;
    this.checkbox = checkbox;
    this.init();
  }

  findElements() {
    this.$name = this.$el.find('.js-checkbox-button__name');
  }

  handleNameClick() {
    this.checkbox.click();
  }

  init() {
    this.handleNameClick = this.handleNameClick.bind(this);
    this.findElements();
    this.$name.on('click', this.handleNameClick);
  }
}
