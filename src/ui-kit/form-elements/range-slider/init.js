import * as $ from 'jquery';
import { RangeSlider } from './range-slider';

$('.js-range-slider .js-range-slider__scale').each((i, el) => {
  new RangeSlider($(el));
});
