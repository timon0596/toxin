function importAll (r) {
  r.keys().forEach(r);
}
import 'jquery'
import 'jquery-ui/ui/widgets/slider'
import 'jquery-ui/themes/base/all.css'
// import 'jquery-ui/themes/base/slider.css'
import './index.pug'
import 'air-datepicker/dist/css/datepicker.min.css'
import 'bootstrap/js/src/carousel.js'
import './main.sass'
// import './ui_kit/form_elements/date_dropdown/date_dropdown'
require.context('./ui_kit/cards', true, /\.scss$/)
require.context('./ui_kit', true, /\.sass/)
require.context('./pages', true, /\.sass/)
importAll(require.context('./ui_kit', true, /\.js$/))
importAll(require.context('./pages', true, /\.js$/))

const userImg = require.context('./img/users', true, /\.(jpe?g|png)$/)
const preview_img = require.context('./img/preview', true, /\.(jpe?g|png|svg)$/)
const imgs = require.context('./img', false, /\.(jpe?g|png|svg)$/)

