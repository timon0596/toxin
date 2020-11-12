import { Dropdown } from './dropdown';

export class GuestDropdown extends Dropdown {
  constructor(args) {
    super(args);
  }

  displayText() {
    let result = '';
    const guestsAmount = this.values.slice(0, 2).reduce((acc, el) => acc + el);
    result += guestsAmount ? `${`${guestsAmount} ${this.dec[0][this.modulo(guestsAmount)]}`}, ` : '';
    result += this.values[2] ? `${`${this.values[2]} ${this.dec[0][this.modulo(this.values[2])]}`}, ` : '';
    result += result ? '' : 'Сколько гостей';
    return result.replace(/\,\s$/, '');
  }
}
