import { CheckBoxList } from './checkbox-list';

$('.js-checkbox-list').each((i, el) => {
  const checkboxes = $(el).find('.checkbox__input');
  new CheckBoxList({ el: $(el), checkboxes });
});
