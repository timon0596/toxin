function importAll(r) {
  r.keys().forEach(r);
}
import "jquery";
import "jquery-ui/ui/widgets/slider";
import "jquery-ui/themes/base/all.css";
import "air-datepicker/dist/css/datepicker.min.css";
import "bootstrap/js/src/carousel.js";
import "./main.sass";
require.context("./ui-kit/cards", true, /\.scss$/);
require.context("./ui-kit", true, /\.sass/);
require.context("./pages", true, /\.sass/);
importAll(require.context("./ui-kit", true, /\.js$/));
importAll(require.context("./pages", true, /\.js$/));

const imgs = require.context("./img", true, /\.(jpe?g|png|svg)$/);
