$( document ).ready(function() {
    
    // modal dispatch
    $('.btn--open-dispatch').click(function() {
    	$('.modal--dispatch').fadeIn();
        $('body').addClass('scroll-hidden');
    });

    $('.modal--dispatch .modal__head-close').click(function() {
    	$('.modal--dispatch').fadeOut();
        $('body').removeClass('scroll-hidden');
    });


    // modal contact
    $('.btn--open-contact').click(function() {
    	$('.modal--contact').fadeIn();
        $('body').addClass('scroll-hidden');
    });

    $('.modal--contact .modal__head-close').click(function() {
    	$('.modal--contact').fadeOut();
        $('body').removeClass('scroll-hidden');
    });
});