import * as $ from 'jquery';
import { CheckBoxList } from './checkbox-list';

$('.js-checkbox-list').each((i, el) => {
  new CheckBoxList({ el: $(el) });
});
