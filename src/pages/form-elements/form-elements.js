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
    this.textField();
    this.dropdowns();
  }

  textField() {
    this.$textfield.val("This is pretty awesome");
    this.$textfield[0].focus();
  }

  dropdowns() {
    this.$dropdowns.click();
    $(this.$dropdownClearButton[0]).click();
    console.log(this.$dropdownClearButton);
    $(this.$dropdowns[0]).click();
  }
}
