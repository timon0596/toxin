import * as $ from 'jquery';
import { Dropdown } from './dropdown';
import { Counter } from '../counter/counter';

const declensions = {
  rooms: [
    ['спальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная', 'ванных', 'ванных'],
  ],
  guests: [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],
};
const formatOutputText = {
  rooms() {
    let result = '';
    let counter = 0;
    this.values.forEach((el, i) => {
      if (this.dec[i] !== undefined && el !== 0) {
        counter += 1;
        result += counter < 3 ? `${el} ${this.dec[i][this.modulo(el)]}, ` : '';
      }
    });
    return result.slice(0, -2).concat('...');
  },
  guests() {
    let result = '';
    const guestsAmount = this.values.slice(0, 2).reduce((acc, el) => acc + el);
    result += guestsAmount ? `${`${guestsAmount} ${this.dec[0][this.modulo(guestsAmount)]}`}, ` : '';
    result += this.values[2] ? `${`${this.values[2]} ${this.dec[1][this.modulo(this.values[2])]}`}, ` : '';
    result += result ? '' : 'Сколько гостей';
    return result.replace(/,\s$/, '');
  },
};
const dropdowns = [];
$('.js-dropdown').each((i, el) => {
  const mainDiv = $(el);
  const counter = new Counter(mainDiv);
  dropdowns.push(new Dropdown({
    mainDiv, index: i, counter, declensions, formatOutputText,
  }));
});
export { dropdowns };
