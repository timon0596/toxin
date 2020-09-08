import "air-datepicker";
import "jquery-mask-plugin";
export class DateDropdown {
  constructor({
    el,
    buttons: {$clearButton,$applyButton},
    navigation: {prevHtml,nextHtml},
    navTitles
  }) {
    this.datepickerInstance;
    this.$el = el;
    this.selectedDates = { fromTo: "", from: "", to: "", days: 0 };
    this.isFilter;
    this.$inputs;
    this.$datepickerContainer;
    this.$expandButton;
    this.$datepickerClearButton;
    this.$datepickerInline;
    this.$datepickerButtons;
    this.$clearButton;
    this.$applyButton;
    this.datepickerConfig;
    this.init();
  }
  defineElements() {
    this.isFilter = this.$el.hasClass("date-dropdown_filter");
    this.$inputs = this.$el.find("input");
    this.$datepickerContainer = this.$el.find(
      ".date-dropdown__datepicker-container"
    );
    this.$expandButton = this.$el.find(".text-field__icon-wrapper");
    this.$clearButton = $clearButton
    this.$clearButton.click(this.clearButtonOnClick.bind(this))
    this.$applyButton = $applyButton
    this.$applyButton.click(this.applyButtonOnClick.bind(this))
    this.datepickerConfig = {
      minDate: new Date(),
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: " - ",
      dateFormat: this.isFilter ? "dd M" : "dd.mm.yyyy",
      language: {
        daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      },
      navTitles,
      clearButton: true,
      prevHtml,
      nextHtml,
      onSelect: this.datepickerOnSelectHandler.bind(this),
    };
  }
  init() {
    this.defineElements();
    this.selectedDatesFromLocalStorage();
    this.datepickerInit();
    this.$expandButton.click(() => {
      this.$datepickerInline.slideToggle(250);
    });
  }
  clearButtonOnClick(){
    this.$datepickerClearButton.click();
    localStorage?.removeItem("datepicker");
  }
  applyButtonOnClick(){
    localStorage.setItem(
      "datepicker",
      JSON.stringify(this.selectedDates)
    );
    this.$datepickerInline.slideUp(250);
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
