export class RangeSlider {
  constructor(el) {
    this.$el = el;
    this.$parent;
    this.$amount;
    this.handleSlide = this.handleSlide.bind(this);
    this.sliderOptions = {
      range: true,
      min: 0,
      max: 15000,
      values: [5000, 10000],
      slide: this.handleSlide,
    };
    this.init();
  }

  search() {
    this.$parent = this.$el.parent();
    this.$amount = this.$parent.find('.js-range-slider__amount');
  }

  handleSlide(event, ui) {
    this.$amount.text(`${ui.values[0]}₽` + ` - ${ui.values[1]}₽`);
  }

  init() {
    this.search();
    this.$el.slider(this.sliderOptions);
    this.$amount.text(
      `${this.$el.slider('values', 0)
      }₽`
        + ` - ${
          this.$el.slider('values', 1)
        }₽`,
    );
  }
}
