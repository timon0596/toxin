import * as $ from 'jquery';

export class Checkbox {
  static check({ $root, i }) {
    $($root.find('.checkbox__input')[i]).click();
  }
}
