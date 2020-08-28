import { RoomDetails } from "./ui-kit/cards/room-details/room-details";
import { SignInPage } from "./pages/sign-in-page/sign-in-page";
import { DateDropdown } from "./ui-kit/form-elements/date-dropdown/date-dropdown";

$(document).ready(() => {
  const cards = {
    signIn: $(".js-sign-in"),
    signUp: $(".js-registration"),
  };
  new SignInPage(cards);

  $(".room-details").each((i, el) => {
    new RoomDetails($(el));
  });

  $(".js-date-dropdown").each((i, el) => {
    new DateDropdown($(el));
  });
});
