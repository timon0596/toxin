import * as $ from 'jquery';
import { Header } from './header';
import { Nav } from '../nav/nav';

$(document).ready(() => {
  $('header.header').each((i, el) => {
    new Header({
      $header: $(el),
      nav: new Nav($(el)),
    });
  });
});
