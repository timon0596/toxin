import 'jquery';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/all.css';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'bootstrap/js/src/carousel';
import './main.sass';

function importAll(r) {
  r.keys().forEach(r);
}
require.context('./ui-kit/cards', true, /\.scss$/);
require.context('./ui-kit', true, /\.sass/);
require.context('./pages', true, /\.sass/);
importAll(require.context('./ui-kit', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));

require.context('./img', true, /\.(jpe?g|png|svg)$/);
