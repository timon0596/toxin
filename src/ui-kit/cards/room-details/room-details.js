export class RoomDetails {
  constructor({ $element, $dd, $blockSum }) {
    this.$block = $element;
    this.$dropdown = $dd;
    this.$blockSum = $blockSum;
    this.$taxHabitation;
    this.$taxHabitationTextBlock;
    this.$taxHabitationSumBlock;
    this.init();
  }
  findElements() {
    this.$taxHabitation = this.$block.find(".js-room-details__tax-name");

    this.$taxHabitationSumBlock = this.$block.find(".js-room-details__tax-sum");
  }
  onNewDateSelectedHandler(e) {
    if (e.selectedDates.days) {
      const sum = 9990 * e.selectedDates.days;
      const total = sum - 2179 + 300;
      const declension = e.selectedDates.days % 10 == 1 ? "сутки" : "суток";
      const taxHabitationInt = Math.floor(sum / 1000);
      const taxHabitationModulo = ((sum % 1000) + "").padStart(3, "0");
      const taxHabitationTaxSum = `${taxHabitationInt} ${taxHabitationModulo}₽`;
      const taxHabitationText = `9 990₽ х ${e.selectedDates.days} ${declension}`;
      const totalInt = Math.floor(total / 1000);
      const totalModulo = ((total % 1000) + "").padStart(3, "0");
      const blockSumText = `${totalInt} ${totalModulo}₽`;
      this.$taxHabitation.text(taxHabitationText);
      this.$taxHabitationSumBlock.text(taxHabitationTaxSum);
      this.$blockSum.text(blockSumText);
    }
  }
  init() {
    this.findElements();
    this.$block.on(
      "new-date-selected",
      this.onNewDateSelectedHandler.bind(this)
    );
  }
}
