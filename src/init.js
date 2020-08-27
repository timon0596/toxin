import { RoomDetails } from "./ui-kit/cards/room-details/room-details";
import { SignInPage } from "./pages/sign-in-page/sign-in-page";
$(".room-details").each((i, el) => {
  new RoomDetails($(el));
});
const cards = {
  signIn: $(".js-sign-in"),
  signUp: $(".js-registration"),
};
$(document).ready(() => {
  new SignInPage(cards);
});
