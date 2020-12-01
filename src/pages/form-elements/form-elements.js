import * as $ from 'jquery';
import { MaskedTextField } from '@/form-elements/text-field/text-field';
import { Dropdown } from '@/form-elements/dropdown/dropdown';

export class FormElements {
  constructor($el) {
    this.$el = $el;
    this.textFieldManipulations();
    this.dropdownManipulations();
  }

  textFieldManipulations() {
    this.input = $(MaskedTextField.getInputs(this.$el)[1]);
    this.input.val('This is pretty awesome');
    this.input.focus();
  }

  dropdownManipulations() {
    this.dropdownExpandButtons = [...Dropdown.getExpandButtons(this.$el)].reverse();
    for (let i = 0; i < 3; i += 1) {
      $(this.dropdownExpandButtons[i]).click();
    }
    this.dropdownClearButton = $(Dropdown.getClearButtons(this.$el)[3]);
    this.dropdownClearButton.click();
  }
}
