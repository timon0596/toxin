import { DateDropdown } from './date-dropdown';

$('.js-date-dropdown').each((i, el) => {
  const $expandButton = $(el).find('.js-text-field__icon-wrapper');
  const buttons = {
    $clearButton: $('<div>', {
      class: 'button button_with-no-bg',
      html: '<div class="heading heading_color_grey"><h3>очистить</h3></div>',
    }),
    $applyButton: $('<div>', {
      class: 'button button_with-no-bg',
      html:
        '<div class="heading heading_color_purple"><h3>применить</h3></div>',
    }),
  };
  const navigation = {
    prevHtml: '<i class="icon icon_color_purple">arrow_back</i>',
    nextHtml: '<i class="icon icon_color_purple">arrow_forward</i>',
  };
  const navTitles = {
    days: '<div class="heading"><h2>MM yyyy</h2></div>',
  };
  const $inputs = $(el).find('input');
  new DateDropdown({
    el: $(el),
    buttons,
    navigation,
    navTitles,
    $expandButton,
    $inputs,
  });
});
