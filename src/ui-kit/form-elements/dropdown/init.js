import { Dropdown } from "./dropdown";
$(".js-dropdown").each((i, el) => {
  new Dropdown($(el), i);
});
