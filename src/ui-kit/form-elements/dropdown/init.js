import { Dropdown } from './dropdown';
import { Counter } from '../counter/counter';

$('.js-dropdown').each((i, el) => {
  const $counters = $(el).find('.js-counter');
  const $minusButtons = $counters.find('.js-counter__button:first-child');
  const $plusButtons = $counters.find('.js-counter__button:last-child');
  const $values = $counters.find('.js-counter__button:nth-child(2)');
  const counters = {
    Counter: new Counter(),
    $minusButtons,
    $plusButtons,
    $values,
  };
  new Dropdown({ mainDiv: $(el), index: i, counters });
});
