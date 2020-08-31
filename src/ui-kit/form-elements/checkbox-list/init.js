import { CheckBoxList } from "./checkbox-list";
$(".checkbox-list").each((i, el) => {
  new CheckBoxList($(el));
});
