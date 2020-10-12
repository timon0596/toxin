export class CheckBoxList {
  constructor({ el, checkboxes }) {
    this.$el = el;
    this.checkboxes = checkboxes;
    this.$article;
    this.$expand;
    this.$wrapper;
    this.init();
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
    this.checkboxes[e.data.i].click();
  }

  init() {
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleArticleClick = this.handleArticleClick.bind(this);
    this.findElements();
    this.$article.each((i, el) => {
      $(el).click({ i }, this.handleArticleClick);
    });
    this.$expand.click(this.handleExpandClick);
  }
}
