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
    this.values.forEach((el, i) => {
      if (this.dec[i] && el) {
        result += `${el} ${this.dec[i][this.modulo(el)]}, `;
      }
    });
    return result.slice(0, -2);
  },
  guests() {
    let result = '';
    const guestsAmount = this.values.slice(0, 2).reduce((acc, el) => acc + el);
    result += guestsAmount ? `${`${guestsAmount} ${this.dec[0][this.modulo(guestsAmount)]}`}, ` : '';
    result += this.values[2] ? `${`${this.values[2]} ${this.dec[1][this.modulo(this.values[2])]}`}, ` : '';
    result += result ? '' : 'Сколько гостей';
    return result.replace(/\,\s$/, '');
  },
};
$('.js-dropdown').each((i, el) => {
  const $counters = $(el).find('.js-counter');
  const $minusButtons = $counters.find('.js-counter__button:first-child');
  const $plusButtons = $counters.find('.js-counter__button:last-child');
  const $values = $counters.find('.js-counter__button:nth-child(2)');
  const counters = {
    counter: new Counter(),
    $minusButtons,
    $plusButtons,
    $values,
  };
  new Dropdown({
    mainDiv: $(el), index: i, counters, declensions, formatOutputText,
  });
});
