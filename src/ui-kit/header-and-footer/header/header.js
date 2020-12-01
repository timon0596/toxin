import * as $ from 'jquery';

export class Header {
  constructor({ $header, nav }) {
    this.$header = $header;
    this.nav = nav;
    this.init();
  }

  init() {
    this.$navItems = this.nav.getRefs().hide();
    this.$nav = this.$header.find('.header__nav');
    this.$burger = this.$header.find('.header__burger');
    this.$slideUp = this.$header.find('.header__slide-up');
    this.handleSlideUpClick = this.handleSlideUpClick.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.$slideUp.on('click', this.handleSlideUpClick);
    this.$burger.on('click', this.handleBurgerClick);
    $(window).on('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    if (window.innerWidth >= 1280) {
      this.$slideUp.hide();
      this.$burger.hide();
      this.$nav.show();
    } else {
      this.$nav.hide();
      this.$slideUp.hide();
      this.$burger.show();
    }
  }

  handleSlideUpClick() {
    this.$slideUp.hide();
    this.$burger.show();
    this.$nav.slideUp(250);
  }

  handleBurgerClick() {
    this.$burger.hide();
    this.$slideUp.show();
    this.$nav.slideDown(250);
  }
}
