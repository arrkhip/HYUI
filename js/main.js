
 $(".authors-tabs__content").not(":first").hide();
 $(".authors-tabs__header-caption").click(function() {
  $(".authors-tabs__header-caption").removeClass("authors-tabs__header-caption--active").eq($(this).index()).addClass("authors-tabs__header-caption--active");
  $(".authors-tabs__content").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("authors-tabs__header-caption--active");


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


    $("#form-dispatch").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
        $(".modal").fadeOut();
    });
    return false;
  });




  });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJwcm9qZWN0L2F1dGhvcnMtdGFicy9hdXRob3JzLXRhYnMuanMiLCJwcm9qZWN0L21vZGFsL21vZGFsLmpzIiwicHJvamVjdC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiICQoXCIuYXV0aG9ycy10YWJzX19jb250ZW50XCIpLm5vdChcIjpmaXJzdFwiKS5oaWRlKCk7XHJcbiAkKFwiLmF1dGhvcnMtdGFic19faGVhZGVyLWNhcHRpb25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5hdXRob3JzLXRhYnNfX2hlYWRlci1jYXB0aW9uXCIpLnJlbW92ZUNsYXNzKFwiYXV0aG9ycy10YWJzX19oZWFkZXItY2FwdGlvbi0tYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJhdXRob3JzLXRhYnNfX2hlYWRlci1jYXB0aW9uLS1hY3RpdmVcIik7XHJcbiAgJChcIi5hdXRob3JzLXRhYnNfX2NvbnRlbnRcIikuaGlkZSgpLmVxKCQodGhpcykuaW5kZXgoKSkuZmFkZUluKClcclxufSkuZXEoMCkuYWRkQ2xhc3MoXCJhdXRob3JzLXRhYnNfX2hlYWRlci1jYXB0aW9uLS1hY3RpdmVcIik7XHJcblxyXG4iLCIkKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIG1vZGFsIGRpc3BhdGNoXHJcbiAgICAkKCcuYnRuLS1vcGVuLWRpc3BhdGNoJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBcdCQoJy5tb2RhbC0tZGlzcGF0Y2gnKS5mYWRlSW4oKTtcclxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzY3JvbGwtaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubW9kYWwtLWRpc3BhdGNoIC5tb2RhbF9faGVhZC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgXHQkKCcubW9kYWwtLWRpc3BhdGNoJykuZmFkZU91dCgpO1xyXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbC1oaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBtb2RhbCBjb250YWN0XHJcbiAgICAkKCcuYnRuLS1vcGVuLWNvbnRhY3QnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgIFx0JCgnLm1vZGFsLS1jb250YWN0JykuZmFkZUluKCk7XHJcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsLWhpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm1vZGFsLS1jb250YWN0IC5tb2RhbF9faGVhZC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgXHQkKCcubW9kYWwtLWNvbnRhY3QnKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2Nyb2xsLWhpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoXCIjZm9ybS1kaXNwYXRjaFwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgdXJsOiBcIm1haWwucGhwXCIsXHJcbiAgICAgIGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuICAgIH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5tb2RhbFwiKS5mYWRlT3V0KCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgfSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0JCgnLmpzLXBhZ2UtaGVhZGVyX19zd2l0Y2gnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ3BhZ2UtaGVhZGVyX19zd2l0Y2gtLWFjdGl2ZScpO1xyXG5cdFx0JCgnLnBhZ2UtaGVhZGVyX19saXN0JykudG9nZ2xlQ2xhc3MoJ3BhZ2UtaGVhZGVyX19saXN0LS1hY3RpdmUnKTtcclxuXHRcdCQoJy5wYWdlLWhlYWRlcl9fc3dpdGNoIHN2ZycpLnRvZ2dsZSgpO1xyXG5cdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzY3JvbGwtaGlkZGVuJyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBmaXhlZCBuYXZpZ2F0aW9uXHJcblx0dmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcicpO1xyXG5cdHZhciB0b3BPZmZzZXQgPSA1MDtcclxuXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2UtaGVhZGVyLS1maXhlZCcpICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8IHRvcE9mZnNldCkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWhlYWRlci0tZml4ZWQnKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0b3BPZmZzZXQpIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXItLWZpeGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG59KTsiXX0=
