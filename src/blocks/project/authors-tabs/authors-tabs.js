 $(".authors-tabs__content").not(":first").hide();
 $(".authors-tabs__header-caption").click(function() {
  $(".authors-tabs__header-caption").removeClass("authors-tabs__header-caption--active").eq($(this).index()).addClass("authors-tabs__header-caption--active");
  $(".authors-tabs__content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("authors-tabs__header-caption--active");

