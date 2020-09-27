import 'air-datepicker';
import 'jquery-mask-plugin';

export class DateDropdown {
  constructor({
    el,
    $expandButton,
    buttons: { $clearButton, $applyButton },
    navigation: { prevHtml, nextHtml },
    navTitles,
    $inputs,
  }) {
    this.datepickerInstance;
    this.$el = el;
    this.selectedDates = {
      fromTo: '', from: '', to: '', days: 0,
    };
    this.$clearButton = $clearButton;
    this.$applyButton = $applyButton;
    this.$expandButton = $expandButton;
    this.navTitles = navTitles;
    this.prevHtml = prevHtml;
    this.nextHtml = nextHtml;
    this.$inputs = $inputs;
    this.isFilter;
    this.$datepickerContainer;
    this.$datepickerClearButton;
    this.$datepickerInline;
    this.$datepickerButtons;
    this.datepickerConfig;
    this.init();
  }

  defineElements() {
    this.isFilter = this.$el.hasClass('date-dropdown_filter');
    this.$datepickerContainer = this.$el.find(
      '.js-date-dropdown__datepicker-container',
    );
    this.$clearButton.click(this.handleClearButtonClick);
    this.$applyButton.click(this.handleApplyButtonClick);
    this.datepickerConfig = {
      minDate: new Date(),
      multipleDates: 2,
      range: true,
      multipleDatesSeparator: ' - ',
      dateFormat: this.isFilter ? 'dd M' : 'dd.mm.yyyy',
      language: {
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      },
      navTitles: this.navTitles,
      clearButton: true,
      prevHtml: this.prevHtml,
      nextHtml: this.nextHtml,
      onSelect: this.handleDatepickerSelect.bind(this),
    };
  }

  binding() {
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleExpandButtonClick = this.handleExpandButtonClick.bind(this);
  }

  init() {
    this.binding();
    this.defineElements();
    this.selectedDatesFromLocalStorage();
    this.datepickerInit();
    this.$expandButton.click(this.handleExpandButtonClick);
  }

  handleExpandButtonClick() {
    this.$datepickerInline.slideToggle(250);
  }

  handleClearButtonClick() {
    this.$datepickerClearButton.click();
    localStorage?.removeItem('datepicker');
  }

  handleApplyButtonClick() {
    localStorage.setItem('datepicker', JSON.stringify(this.selectedDates));
    this.$datepickerInline.slideUp(250);
  }

  dateFromLocaleDateString(str) {
    return new Date(str.split('.').reverse().join('.'));
  }

  selectedDatesFromLocalStorage() {
    this.selectedDates = JSON.parse(localStorage?.getItem('datepicker')) || this.selectedDates;
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
    const dateSelectEvent = $.Event('new-date-selected');
    dateSelectEvent.selectedDates = { ...this.selectedDates };
    this.$el.trigger(dateSelectEvent);
  }

  handleDatepickerSelect(fd, d, picker) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    this.selectedDates.fromTo = fd;
    this.selectedDates.from = d[0]
      ? d[0].toLocaleDateString('ru-RU', options)
      : '';
    this.selectedDates.to = d[1]
      ? d[1].toLocaleDateString('ru-RU', options)
      : '';
    this.selectedDates.days = d[1]
      ? Math.round((d[1] - d[0]) / 1000 / 60 / 60 / 24)
      : 0;
    this.fillInputsWithValues(fd);
    this.emitEvent();
  }

  datepickerInit() {
    this.datepickerInstance = this.$datepickerContainer
      .datepicker(this.datepickerConfig)
      .data('datepicker');
    if (this.selectedDates.days) {
      this.datepickerInstance.selectDate([
        this.dateFromLocaleDateString(this.selectedDates.from),
        this.dateFromLocaleDateString(this.selectedDates.to),
      ]);
    }
    this.$datepickerClearButton = this.$el.find('[data-action="clear"]').hide();
    this.$datepickerInline = this.$el.find('.datepicker-inline').hide();
    this.$datepickerButtons = this.$el.find('.datepicker--buttons');
    this.$datepickerButtons.append(this.$clearButton).append(this.$applyButton);
  }
}
