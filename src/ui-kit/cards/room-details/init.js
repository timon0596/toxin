import * as $ from 'jquery';
import { RoomDetails } from './room-details';

$('.js-room-details').each((i, el) => {
  const $element = $(el);
  const $blockSum = $element.find('.js-room-details__sum h2');
  const roomDetailsParams = {
    $element,
    $blockSum,
  };
  new RoomDetails(roomDetailsParams);
});
