import { dropdowns } from '@/form-elements/dropdown/init';
import { checkboxLists } from '@/form-elements/checkbox-list/init';

export class FormElements {
  constructor({ $root }) {
    this.$root = $root;
    dropdowns.forEach((el) => {
      el.expand();
    });
    checkboxLists.forEach((el) => {
      el.expand();
    });
  }
}
