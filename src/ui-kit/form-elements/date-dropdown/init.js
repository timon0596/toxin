import { DateDropdown } from "./date-dropdown";
$(".js-date-dropdown").each((i, el) => {
  new DateDropdown($(el));
});
