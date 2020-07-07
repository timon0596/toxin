import 'jquery'
import 'jquery-ui/ui/widgets/slider'
import 'jquery-ui/themes/base/all.css'
// import 'jquery-ui/themes/base/slider.css'
import './index.pug'
import './ui_kit/ui_kit'
import 'air-datepicker/dist/css/datepicker.min.css'
import 'bootstrap/scss/vendor/_rfs.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/src/carousel.js'
import './main.sass'
const userImg = require.context('./img/users', true, /\.(jpe?g|png)$/)
const preview_img = require.context('./img/preview', true, /\.(jpe?g|png|svg)$/)
const imgs = require.context('./img', false, /\.(jpe?g|png|svg)$/)
console.log(imgs)

