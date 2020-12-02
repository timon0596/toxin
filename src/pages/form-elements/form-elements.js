import { dropdowns } from '@/form-elements/dropdown/init';
import { checkboxLists } from '@/form-elements/checkbox-list/init';

export class FormElements {
  constructor({ $root }) {
    this.$root = $root;
    dropdowns.slice(-3).forEach((el) => {
      el.expand();
    });
    checkboxLists[1].expand();
  }
}
