import { DropdownFactory } from './dropdownFactory';
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
  DropdownFactory.getDropdown($(el).attr('data-type'), {
    mainDiv: $(el), index: i, counters, declensions,
  });
});
