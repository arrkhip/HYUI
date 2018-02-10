$(document).ready(function() {
	$('.js-page-header__switch').click(function() {
		$(this).toggleClass('page-header__switch--active');
		$('.page-header__list').toggleClass('page-header__list--active');
		$('.page-header__switch svg').toggle();
		$('body').toggleClass('scroll-hidden');
	});


	// fixed navigation
	var nav = document.querySelector('.page-header');
	var topOffset = 50;

    window.onscroll = function() {
      if (nav.classList.contains('page-header--fixed') && window.pageYOffset < topOffset) {
        nav.classList.remove('page-header--fixed');
      } else if (window.pageYOffset > topOffset) {
        nav.classList.add('page-header--fixed');
      }
    };

});