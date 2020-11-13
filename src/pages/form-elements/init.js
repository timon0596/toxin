import { FormElements } from './form-elements';

if (window.location.pathname.includes('/form-elements.html')) {
  const formElements = {
    $textfield: $('.js-text-field:nth-child(2) input'),
    $button: $('.js-button:nth-child(2)'),
    $buttonWithBorder: $('.js-button:nth-child(4)'),
    $dropdowns: $(
      '.js-form-elements__row_dropdowns .js-dropdown__icon-wrapper',
    ),
    $dropdownClearButton: $(
      '.js-form-elements__row_dropdowns .js-dropdown .js-dropdown__clear',
    ),
    $checkboxList: $(
      '.js-checkbox-list:nth-child(2) .js-checkbox-list__expand',
    ),
  };
  new FormElements(formElements);
}
