import * as $ from 'jquery';
import { FormElements } from './form-elements';

$('.form-elements').each((i, el) => {
  new FormElements({ $root: $(el) });
});
