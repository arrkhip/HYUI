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


  //   $("#form-form-dispatch").submit(function() {

  //      var form_data = $(this).serialize(); //собераем все данные из формы
  //      $.ajax({
  //           type: "POST", //Метод отправки
  //           url: "mail.php", //путь до php фаила отправителя
  //           data: form_data,
  //           success: function() {
  //            alert("Ваше сообщение отпрвлено!");
  //          });
  //    });
  // });




});