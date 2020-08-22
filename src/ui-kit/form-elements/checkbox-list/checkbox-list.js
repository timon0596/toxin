$(".checkbox-list").each(function () {
  const i = $(this).find("i");
  const w = $(this).find(".checkbox-list__wrapper");
  i.click(() => {
    $(this).toggleClass("checkbox-list_expanded");
    w.slideToggle(250);
  });
});
