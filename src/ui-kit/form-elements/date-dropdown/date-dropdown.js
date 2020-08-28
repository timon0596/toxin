import "air-datepicker";
import "jquery-mask-plugin";
export class DateDropdown {
  constructor(el) {
    this.datepickerInstance;
    this.$el = el;
    this.selectedDates = { fromTo: "", from: "", to: "", days: 0 };
    this.isFilter = this.$el.hasClass("date-dropdown_filter");
    this.$inputs = this.$el.find("input");
    this.$datepickerContainer = this.$el.find(
      ".date-dropdown__datepicker-container"
    );
    this.$expandButton = this.$el.find(".text-field__icon-wrapper .icon");
    this.$datepickerClearButton;
    this.$datepickerInline;
    this.$datepickerButtons;
    this.$clearButton = $("<div>", {
      class: "button button_with-no-bg",
      html: '<div class="heading heading_color_grey"><h3>очистить</h3></div>',
      on: {
        click: () => {
          this.$datepickerClearButton.click();
          localStorage?.removeItem("datepicker");
        },
      },
    });
    this.$applyButton = $("<div>", {
      class: "button button_with-no-bg",
      html:
        '<div class="heading heading_color_purple"><h3>применить</h3></div>',
      on: {
        click: () => {
          localStorage.setItem(
            "datepicker",
            JSON.stringify(this.selectedDates)
          );
          this.$datepickerInline.slideUp(250);
        },
      },
    });
    this.datepickerConfig = {
      minDate: new Date(),
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: " - ",
      dateFormat: this.isFilter ? "dd M" : "dd.mm.yyyy",
      language: {
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      },
      navTitles: {
        days: '<div class="heading"><h2>MM yyyy</h2></div>',
      },
      clearButton: true,
      prevHtml: '<i class="icon icon_color_purple">arrow_back</i>',
      nextHtml: '<i class="icon icon_color_purple">arrow_forward</i>',
      onSelect: this.datepickerOnSelectHandler.bind(this),
    };
    this.init();
  }
  init() {
    this.selectedDatesFromLocalStorage();
    this.datepickerInit();
    this.$expandButton.click(() => {
      this.$datepickerInline.slideToggle(250);
    });
  }
  dateFromLocaleDateString(str) {
    return new Date(str.split(".").reverse().join("."));
  }
  selectedDatesFromLocalStorage() {
    this.selectedDates =
      JSON.parse(localStorage?.getItem("datepicker")) || this.selectedDates;
  }
  fillInputsWithValues(fd) {
    const inputCondition = this.selectedDates.from && this.selectedDates.to;
    if (!this.isFilter) {
      $(this.$inputs[0]).val(this.selectedDates.from);
      inputCondition ? $(this.$inputs[1]).val(this.selectedDates.to) : 0;
    } else {
      this.$inputs.val(fd);
    }
  }
  emitEvent() {
    const dateSelectEvent = $.Event("new-date-selected");
    dateSelectEvent.selectedDates = { ...this.selectedDates };
    this.$el.trigger(dateSelectEvent);
  }
  datepickerOnSelectHandler(fd, d, picker) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    this.selectedDates.fromTo = fd;
    this.selectedDates.from = d[0]
      ? d[0].toLocaleDateString("ru-RU", options)
      : "";
    this.selectedDates.to = d[1]
      ? d[1].toLocaleDateString("ru-RU", options)
      : "";
    this.selectedDates.days = d[1]
      ? Math.round((d[1] - d[0]) / 1000 / 60 / 60 / 24)
      : 0;
    this.fillInputsWithValues(fd);
    this.emitEvent();
  }
  datepickerInit() {
    this.datepickerInstance = this.$datepickerContainer
      .datepicker(this.datepickerConfig)
      .data("datepicker");
    if (this.selectedDates.days) {
      this.datepickerInstance.selectDate([
        this.dateFromLocaleDateString(this.selectedDates.from),
        this.dateFromLocaleDateString(this.selectedDates.to),
      ]);
    }
    this.$datepickerClearButton = this.$el
      .find('.datepicker--button[data-action="clear"]')
      .hide();
    this.$datepickerInline = this.$el.find(".datepicker-inline").hide();
    this.$datepickerButtons = this.$el.find(".datepicker--buttons");
    this.$datepickerButtons.append(this.$clearButton).append(this.$applyButton);
  }
}
