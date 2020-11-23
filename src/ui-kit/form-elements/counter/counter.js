import * as $ from 'jquery';

export class Counter {
  disable($minusButton) {
    $minusButton.addClass('counter__button_disabled');
  }

  enable($minusButton) {
    $minusButton.removeClass('counter__button_disabled');
  }

  counters(el) {
    return $(el).find('.js-counter');
  }

  minusButtons($counters) {
    return $counters.find('.js-counter__button:first-child');
  }

  plusButtons($counters) {
    return $counters.find('.js-counter__button:last-child');
  }

  values($counters) {
    return $counters.find('.js-counter__button:nth-child(2)');
  }
}
