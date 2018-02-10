$( document ).ready(function() {
    
    // modal dispatch
    $('.btn--open-dispatch').click(function() {
    	$('.modal--dispatch').fadeIn();
    });

    $('.modal--dispatch .modal__head-close').click(function() {
    	$('.modal--dispatch').fadeOut();
    });


    // modal contact
    $('.btn--open-contact').click(function() {
    	$('.modal--contact').fadeIn();
    });

    $('.modal--contact .modal__head-close').click(function() {
    	$('.modal--contact').fadeOut();
    });
});