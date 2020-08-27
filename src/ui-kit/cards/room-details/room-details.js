export class RoomDetails {
  constructor(element) {
    this.$block = element;
    this.$dropdown = this.$block.find(".js-date-dropdown");
    this.$taxHabitation = this.$block.find(".room-details__tax-habitation");
    this.$blockSum = this.$block.find(".room-details__sum h2");
    this.$taxHabitationTextBlock = this.$taxHabitation.find(
      ".room-details__tax-text"
    );
    this.$taxHabitationSumBlock = this.$taxHabitation.find(
      ".room-details__tax-sum"
    );
    this.init();
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
      this.$taxHabitationTextBlock.text(taxHabitationText);
      this.$taxHabitationSumBlock.text(taxHabitationTaxSum);
      this.$blockSum.text(blockSumText);
    }
  }
  init() {
    this.$block.on(
      "new-date-selected",
      this.onNewDateSelectedHandler.bind(this)
    );
  }
}
