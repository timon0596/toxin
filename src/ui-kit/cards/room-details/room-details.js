export class RoomDetails {
  constructor({
    $element, $blockSum, cost = 9990, discount = 2179, tax = 300, currency = '₽',
  }) {
    this.currency = currency;
    this.cost = cost;
    this.discount = discount;
    this.tax = tax;
    this.$block = $element;
    this.$blockSum = $blockSum;
    this.init();
  }

  findElements() {
    this.$taxHabitation = this.$block.find('.js-room-details__tax-name');

    this.$taxHabitationSumBlock = this.$block.find('.js-room-details__tax-sum');
  }

  handleBlockNewDateSelect(e) {
    if (e.selectedDates.days) {
      const { format } = new Intl.NumberFormat('ru', {});

      const sum = this.cost * e.selectedDates.days;
      const total = sum - this.discount + this.tax;
      const declension = e.selectedDates.days % 10 === 1 ? 'сутки' : 'суток';
      const taxHabitationInt = Math.floor(sum / 1000);
      const taxHabitationModulo = (`${sum % 1000}`).padStart(3, '0');
      const taxHabitationTaxSum = `${taxHabitationInt} ${taxHabitationModulo}${this.currency}`;
      const taxHabitationText = `${format(this.cost)}${this.currency} х ${e.selectedDates.days} ${declension}`;
      const totalInt = Math.floor(total / 1000);
      const totalModulo = (`${total % 1000}`).padStart(3, '0');
      const blockSumText = `${totalInt} ${totalModulo}${this.currency}`;
      this.$taxHabitation.text(taxHabitationText);
      this.$taxHabitationSumBlock.text(taxHabitationTaxSum);
      this.$blockSum.text(blockSumText);
    }
  }

  init() {
    this.findElements();
    this.handleBlockNewDateSelect = this.handleBlockNewDateSelect.bind(
      this,
    );
    this.$block.on('new-date-select', this.handleBlockNewDateSelect);
  }
}
