import { MaskedTextField } from '@/form-elements/text-field/text-field';
import { Dropdown } from '@/form-elements/dropdown/dropdown';
import { CheckBoxList } from '@/form-elements/checkbox-list/checkbox-list';

export class FormElements {
  constructor($el) {
    this.$el = $el;
    this.textFieldManipulations();
    this.dropdownManipulations();
    CheckBoxList.expand({ $root: this.$el, order: 1 });
  }

  textFieldManipulations() {
    MaskedTextField.setVal({
      $root: this.$el,
      val: 'This is pretty awesome',
      order: 1,
    });
  }

  dropdownManipulations() {
    for (let i = 2; i < 5; i += 1) {
      Dropdown.expand({ $root: this.$el, order: i });
    }
  }
}
