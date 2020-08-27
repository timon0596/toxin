import { RoomDetails } from "./ui-kit/cards/room-details/room-details";
$(".room-details").each((i, el) => {
  new RoomDetails($(el));
});
