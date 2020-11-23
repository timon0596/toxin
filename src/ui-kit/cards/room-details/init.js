import * as $ from 'jquery';
import { RoomDetails } from './room-details';

{ const $element = $('.js-room-details');
  const $blockSum = $element.find('.js-room-details__sum h2');
  const roomDetailsParams = {
    $element,
    $blockSum,
  };
  new RoomDetails(roomDetailsParams); }
