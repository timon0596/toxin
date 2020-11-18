import * as $ from 'jquery';

export class Dropdown {
  constructor({
    formatOutputText,
    mainDiv,
    index,
    counters: {
      counter, $minusButtons, $plusButtons, $values,
    },
    declensions,
  }) {
    this.index = index;
    this.$mainDiv = mainDiv;
    this.counter = counter;
    this.$minusButtons = $minusButtons;
    this.$plusButtons = $plusButtons;
    this.$values = $values;
    this.dec = declensions;
    this.formatOutputText = formatOutputText;
    this.init();
  }

  findElements() {
    this.$display = this.$mainDiv.find('.js-dropdown__display');
    this.$expand = this.$mainDiv.find(
      '.js-dropdown__body .js-dropdown__icon-wrapper',
    );
    this.$body = this.$mainDiv.find('.js-dropdown__body');
    this.$menu = this.$mainDiv.find('.js-dropdown__menu').hide();
    this.$clear = this.$mainDiv.find('.js-dropdown__clear');
    this.$apply = this.$mainDiv.find('.js-dropdown__apply');
    this.type = this.$mainDiv.attr('data-type');
    this.dec = this.dec[this.type];
    this.values = [...this.$values].map((el) => +$(el).text());
    this.formatOutputText = this.formatOutputText[this.type].bind(this);
  }

  handleExpandClick() {
    this.$menu.slideToggle(0);
    this.$body.toggleClass('dropdown__body_active');
  }

  handleMinusButtonsClick(e) {
    const i = [...this.$minusButtons].indexOf(e.target);
    this.values[i] -= 1;
    this.values[i] = this.values[i] < 0 ? 0 : this.values[i];
    this.render();
  }

  handlePlusButtonsClick(e) {
    const i = [...this.$plusButtons].indexOf(e.target);
    this.values[i] += 1;
    this.render();
  }

  disableOrEnableMinusButton(i) {
    if (this.values[i] === 0) {
      this.counter.disable($(this.$minusButtons[i]));
    } else {
      this.counter.enable($(this.$minusButtons[i]));
    }
  }

  handleClearClick() {
    this.values.fill(0);
    this.render();
  }

  handleApplyClick() {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.values));
    this.$menu.slideToggle(0);
    this.$body.toggleClass('dropdown__body_active');
  }

  modulo(number) {
    if (number === 1) return 0;
    if (number > 1 && number < 5) return 1;
    return 2;
  }

  render() {
    this.$values.each((i, el) => {
      $(el).text(this.values[i]);
      this.disableOrEnableMinusButton(i);
    });

    this.sum();
    this.$display.text(this.formatOutputText());
  }

  sum() {
    if (this.values.reduce((acc, i) => acc + i) === 0) {
      this.$clear.addClass('dropdown__clear_invis');
    } else {
      this.$clear.removeClass('dropdown__clear_invis');
    }
  }

  binding() {
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handlePlusButtonsClick = this.handlePlusButtonsClick.bind(this);
    this.handleMinusButtonsClick = this.handleMinusButtonsClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleApplyClick = this.handleApplyClick.bind(this);
  }

  init() {
    this.binding();
    this.findElements();
    this.$expand.on('click.dropdownExpand', this.handleExpandClick);
    this.$plusButtons.on('click.plusButton', this.handlePlusButtonsClick);
    this.$minusButtons.on('click.minusButton', this.handleMinusButtonsClick);
    this.$clear.on('click.dropdownClear', this.handleClearClick);
    this.$apply.on('click.dropdownApply', this.handleApplyClick);
    this.render();
  }
}
