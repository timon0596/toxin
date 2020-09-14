import { RoomDetails } from "./room-details";
const $element = $(".js-room-details");
const $dd = $element.find(".js-date-dropdown");
const $blockSum = $element.find(".js-room-details__sum h2");
const roomDetailsParams = {
  $element,
  $dd,
  $blockSum,
};
new RoomDetails(roomDetailsParams);
