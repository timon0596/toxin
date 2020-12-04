import 'air-datepicker';
import 'jquery-mask-plugin';
import * as $ from 'jquery';
import { TextField } from '../text-field/text-field';

export class DateDropdown {
  constructor({
    $el,
    buttons: { $clearButton, $applyButton },
    navigation: { prevHtml, nextHtml },
    navTitles,
  }) {
    this.$el = $el;
    this.selectedDates = {
      fromTo: '', from: '', to: '', days: 0,
    };
    this.$clearButton = $clearButton;
    this.$applyButton = $applyButton;
    this.navTitles = navTitles;
    this.prevHtml = prevHtml;
    this.nextHtml = nextHtml;
    this.init();
  }

  defineElements() {
    this.isFilter = this.$el.hasClass('date-dropdown_filter');
    this.$datepickerContainer = this.$el.find(
      '.js-date-dropdown__datepicker-container',
    );
    this.$datepickerContainer = (this.$datepickerContainer[0]
      ? this.$datepickerContainer : this.$el);
    this.$clearButton.on('click', this.handleClearButtonClick);
    this.$applyButton.on('click', this.handleApplyButtonClick);
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
      onSelect: this.handleDatepickerSelect,
    };
  }

  binding() {
    this.handleDatepickerSelect = this.handleDatepickerSelect.bind(this);
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleExpandButtonClick = this.handleExpandButtonClick.bind(this);
  }

  init() {
    this.inputs = [];
    this.$el.find('.date-dropdown__display').each((i, el) => {
      this.inputs.push(new TextField({ $root: $(el) }));
    });
    this.binding();
    this.defineElements();
    this.selectedDatesFromLocalStorage();
    this.datepickerInit();
    this.inputs.forEach((el) => {
      el.addClickHandler({ callback: this.handleExpandButtonClick });
      el.addChangeHandler({ callback: this.handleInputsChange });
    });
  }

  handleInputsChange() {
    this.datepickerInstance.selectDate([
      this.dateFromLocaleDateString(this.inputs[0].getValue()),
      this.dateFromLocaleDateString(this.inputs[1].getValue()),
    ]);
  }

  handleExpandButtonClick() {
    this.$datepickerInline.slideToggle(250);
  }

  handleClearButtonClick() {
    this.$datepickerClearButton.click();
    this.datepickerInstance.selectDate([new Date(), new Date()]);
    localStorage?.removeItem('datepicker');
    this.$datepickerClearButton.click();
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
      this.inputs[0].setValue(
        this.selectedDates.from,
      );
      if (inputCondition) {
        this.inputs[1].setValue(
          this.selectedDates.to,
        );
      }
    } else {
      this.inputs[0].setVal(
        fd,
      );
    }
  }

  emitEvent() {
    const dateSelectEvent = $.Event('new-date-select');
    dateSelectEvent.selectedDates = { ...this.selectedDates };
    this.$el.trigger(dateSelectEvent);
  }

  handleDatepickerSelect(fd, d) {
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
    this.$datepickerClearButton = this.$datepickerContainer.find('[data-action="clear"]').hide();
    this.$datepickerInline = this.$datepickerContainer.find('.datepicker-inline');
    if (this.$datepickerContainer !== this.$el) {
      this.$datepickerInline.hide();
    }
    this.$datepickerButtons = this.$datepickerContainer.find('.datepicker--buttons');
    this.$datepickerButtons.append(this.$clearButton).append(this.$applyButton);
  }
}
