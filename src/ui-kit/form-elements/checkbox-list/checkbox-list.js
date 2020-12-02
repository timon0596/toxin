import * as $ from 'jquery';
import { Checkbox } from '../checkbox/checkbox';

export class CheckBoxList {
  constructor({ el }) {
    this.$el = el;
    this.init();
  }

  static expand({ $root, order = 0 }) {
    $($root.find('.js-checkbox-list__expand')[order]).click();
  }

  findElements() {
    this.$article = this.$el.find('.js-checkbox-list__article');
    this.$expand = this.$el.find('.js-checkbox-list__expand');
    this.$wrapper = this.$el.find('.js-checkbox-list__wrapper').hide();
  }

  handleExpandClick() {
    this.$el.toggleClass('checkbox-list_expanded');
    this.$wrapper.slideToggle(250);
  }

  handleArticleClick(e) {
    Checkbox.check({ i: e.data.i, $root: this.$el });
  }

  init() {
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.findElements();
    this.$article.each((i, el) => {
      $(el).on('click', { i }, this.handleArticleClick);
    });
    this.$expand.on('click', this.handleExpandClick);
  }
}
