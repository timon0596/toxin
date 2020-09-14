import { RoomDetails } from "./room-details";
const $element = $(".room-details");
const $dd = $element.find(".js-date-dropdown");
const roomDetailsParams = {
  $element,
  $dd,
};
new RoomDetails(roomDetailsParams);
