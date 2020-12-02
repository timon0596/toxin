import * as $ from 'jquery';
import { CheckBoxList } from './checkbox-list';

const checkboxLists = [];
$('.js-checkbox-list').each((i, el) => {
  checkboxLists.push(new CheckBoxList({ el: $(el) }));
});
export { checkboxLists };
