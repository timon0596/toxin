export class RangeSlider {
  constructor(el) {
    this.$el = el;
    this.handleRangeSliderSlide = this.handleRangeSliderSlide.bind(this);
    this.sliderOptions = {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
      slide: this.handleRangeSliderSlide,
    };
    this.init();
  }

  search() {
    this.$parent = this.$el.parent();
    this.$amount = this.$parent.find('.js-range-slider__amount');
  }

  handleRangeSliderSlide(event, ui) {
    this.$amount.text(`${this.getValue(ui.values[0])}₽ - ${this.getValue(ui.values[1])}₽`);
  }

  getValue(i) {
    const int = parseInt(`${i / 1000}`, 10);
    const rest = `${i % 1000}`;
    return `${int} ${rest.padStart(3, 0)}`;
  }

  init() {
    this.search();
    this.$el.slider(this.sliderOptions);
    this.$amount.text(
      `${this.getValue(this.$el.slider('values', 0))
      }₽`
        + ` - ${
          this.getValue(this.$el.slider('values', 1))
        }₽`,
    );
  }
}
