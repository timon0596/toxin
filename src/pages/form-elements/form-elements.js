export class FormElements {
  constructor({
    $textfield,
    $button,
    $buttonWithBorder,
    $dropdowns,
    $checkboxList,
    $dropdownClearButton,
  }) {
    this.$textfield = $textfield;
    this.$button = $button;
    this.$buttonWithBorder = $buttonWithBorder;
    this.$dropdowns = $dropdowns;
    this.$checkboxList = $checkboxList;
    this.$dropdownClearButton = $dropdownClearButton;
    this.dropdowns();
    this.textField();
    this.buttons();
    this.checkbox();
  }

  buttons() {
    this.$button.mouseover();
    this.$buttonWithBorder.mouseover();
  }

  textField() {
    this.$textfield.val('This is pretty awesome');
    this.$textfield[0].focus();
  }

  dropdowns() {
    this.$dropdowns.click();
    $(this.$dropdownClearButton[0]).click();
    $(this.$dropdowns[0]).click();
  }

  checkbox() {
    this.$checkboxList.click();
  }
}
