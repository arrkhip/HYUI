$(document).ready(function() {
	$('.js-page-header__switch').click(function() {
		$(this).toggleClass('page-header__switch--active');
		$('.page-header__list').toggleClass('page-header__list--active');

	});
});