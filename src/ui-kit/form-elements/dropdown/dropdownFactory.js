import { Dropdown } from './classes/dropdown';
import { GuestDropdown } from './classes/guestDropdown';

export class DropdownFactory {
  static #classes = new Map()
      .set('default', Dropdown)
      .set('guests', GuestDropdown);
  static getDropdown(type,args){
    if (type !== undefined && [...this.#classes.keys()].indexOf(type) !== -1) {
      const dropdown = this.#classes.get(type);
      return new dropdown(args);
    }
    const dropdown = this.#classes.get('default');
    return new dropdown(args);
  }
}
