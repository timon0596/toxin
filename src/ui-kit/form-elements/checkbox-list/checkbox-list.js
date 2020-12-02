import * as $ from 'jquery';
import { Checkbox } from '../checkbox/checkbox';

export class CheckBoxList {
  constructor({ el }) {
    this.$el = el;
    this.checkbox = new Checkbox({ $root: this.$el });
    this.init();
  }

  expand() {
    this.$expand.trigger('click');
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
    this.checkbox.check({ i: e.data.i });
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
