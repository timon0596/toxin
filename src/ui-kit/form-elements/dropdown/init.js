import { Dropdown } from "./dropdown";
import { Counter } from "./../counter/counter";
$(".js-dropdown").each((i, el) => {
  const $counters = $(el).find(".counter");
  const $minusButtons = $counters.find(".counter__button:first-child");
  const $plusButtons = $counters.find(".counter__button:last-child");
  const $values = $counters.find(".counter__button:nth-child(2)");
  const counters = {
    Counter: new Counter(),
    $minusButtons,
    $plusButtons,
    $values,
  };
  new Dropdown({ mainDiv: $(el), index: i, counters });
});
