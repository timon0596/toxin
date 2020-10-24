export class Dropdown {
  static declensions = {
    bed: [
      ["спальня", "спальни", "спален"],
      ["кровать", "кровати", "кроватей"],
      ["ванная", "ванных", "ванных"],
    ],
    guest: [
      ["гость", "гостя", "гостей"],
      ["младенец", "младенца", "младенцев"],
    ],
  };

  constructor({
    mainDiv,
    index,
    counters: { Counter, $minusButtons, $plusButtons, $values },
  }) {
    this.index = index;
    this.$mainDiv = mainDiv;
    this.Counter = Counter;
    this.$minusButtons = $minusButtons;
    this.$plusButtons = $plusButtons;
    this.$values = $values;
    this.$display;
    this.$expand;
    this.$expandIcon;
    this.$body;
    this.$menu;
    this.$clear;
    this.$apply;
    this.isGuest;
    this.dec;
    this.localStorageName;
    this.values;
    this.init();
  }

  findElements() {
    this.$display = this.$mainDiv.find(".js-dropdown__display");
    this.$expand = this.$mainDiv.find(
      ".js-dropdown__body .js-dropdown__icon-wrapper"
    );
    this.$body = this.$mainDiv.find(".js-dropdown__body");
    this.$menu = this.$mainDiv.find(".js-dropdown__menu").hide();
    this.$clear = this.$mainDiv.find(".js-dropdown__clear");
    this.$apply = this.$mainDiv.find(".js-dropdown__apply");
    this.isGuest = this.$mainDiv.hasClass("dropdown_guest");
    this.dec = Dropdown.declensions[this.isGuest ? "guest" : "bed"];
    this.localStorageName = this.$mainDiv.attr("class").replace(/\s/g, "");
    this.values = this.localStorageValues();
  }

  localStorageValues() {
    const vals = localStorage.getItem(this.localStorageName);
    return vals
      ? JSON.parse(vals)
      : this.$values
          .text()
          .split("")
          .map((n) => +n);
  }

  displayValuePart(i) {
    if (this.isGuest) {
      if (i === 0) {
        return this.values[0] + this.values[1]
          ? `${this.values[0] + this.values[1]} ${
              this.dec[0][this.modulo((this.values[0] + this.values[1]) % 10)]
            }, `
          : "";
      } else {
        return this.values[2]
          ? `${this.values[2]} ${
              this.dec[1][this.modulo(this.values[2]) % 10]
            }, `
          : "";
      }
    } else {
      return this.values[i]
        ? `${this.values[i]} ${this.dec[i][this.modulo(this.values[i]) % 10]}, `
        : "";
    }
  }

  displayValue() {
    if (this.isGuest) {
      return `${this.displayValuePart(0)}` + `${this.displayValuePart(2)}`;
    } else {
      return (
        `${this.displayValuePart(0)}` +
        `${this.displayValuePart(1)}` +
        `${this.displayValuePart(2)}`
      );
    }
  }

  handleExpandClick() {
    this.$menu.slideToggle(0);
    this.$body.toggleClass("dropdown__body_active");
  }

  handleMinusButtonsClick(e) {
    const i = [...this.$minusButtons].indexOf(e.target);
    this.values[i]--;
    this.values[i] = this.values[i] < 0 ? 0 : this.values[i];
    this.render();
  }

  handlePlusButtonsClick(e) {
    const i = [...this.$plusButtons].indexOf(e.target);
    this.values[i]++;
    this.render();
  }

  disableOrEnableMinusButton(i) {
    this.values[i] === 0
      ? this.Counter.disable($(this.$minusButtons[i]))
      : this.Counter.enable($(this.$minusButtons[i]));
  }

  handleClearClick() {
    this.values.fill(0);
    localStorage.removeItem(this.localStorageName);
    this.render();
  }

  handleApplyClick() {
    localStorage.setItem(this.localStorageName, JSON.stringify(this.values));
    this.$menu.slideToggle(250);
    this.$body.toggleClass("dropdown__body_active");
  }

  modulo(number) {
    if (number === 1) return 0;
    if (number > 1 && number < 5) return 1;
    else return 2;
  }

  render() {
    this.$values.each((i, el) => {
      $(el).text(this.values[i]);
      this.disableOrEnableMinusButton(i);
    });
    this.$display.text(this.displayValue().trim().slice(0, -1));
    if (this.isGuest) {
      if (this.values.reduce((acc, val) => acc + val) === 0) {
        this.$display.text("Сколько гостей");
      }
    }
    this.sum();
  }

  sum() {
    this.values.reduce((acc, i) => acc + i) === 0
      ? this.$clear.addClass("dropdown__clear_invis")
      : this.$clear.removeClass("dropdown__clear_invis");
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
    this.$expand.on("click.dropdownExpand", this.handleExpandClick);
    this.$plusButtons.on("click.plusButton", this.handlePlusButtonsClick);
    this.$minusButtons.on("click.minusButton", this.handleMinusButtonsClick);
    this.$clear.on("click.dropdownClear", this.handleClearClick);
    this.$apply.on("click.dropdownApply", this.handleApplyClick);
    this.render();
  }
}
