import * as $ from 'jquery';
import { CheckBoxList } from './checkbox-list';

const checkboxLists = [];
$('.js-checkbox-list').each((i, el) => {
  const checkboxList = new CheckBoxList({ el: $(el) });
  if ($(el).attr('data-opened')) {
    checkboxLists.push(checkboxList);
  }
});
export { checkboxLists };
