import { CheckBoxButton } from './checkbox-button';

$('.js-checkbox-button').each((i, el) => {
  const checkbox = $(el).find('.checkbox__input');
  new CheckBoxButton({ el: $(el), checkbox });
});
