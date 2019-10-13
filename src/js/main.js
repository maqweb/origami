$(document).ready(function () {

  $('.burger').click(function(){
    $('.nav').addClass('show-pannel').addClass('shadow');
    $('.burger').hide();
    $('.closeMark').show();
    $('.logo__link').show();
    $('.phone').addClass('show-pannel');
    $('.soc__list-mob').addClass('show-pannel');
  });

  $('.closeMark').click(function(){
    $('.nav').removeClass('show-pannel').removeClass('shadow');
    $('.closeMark').hide();
    $('.burger').show();
    $('.phone').removeClass('show-pannel');
    $('.soc__list-mob').removeClass('show-pannel');
  })
  
  $('#slider').slick({
    dots: true,
    autoplay: true,
    nextArrow: '<img src="img/vector-2.svg" alt="">',
    prevArrow: '<img src="img/vector.svg" alt="">'
  });

  $('#reviews__wrap').slick({
    dots: true,
    autoplay: true,
    nextArrow: '<img src="img/vector-2.svg" alt="">',
    prevArrow: '<img src="img/vector.svg" alt="">'
  });

  $('.gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      }
    })
  })

  $('.call').click(function () {
    $('#modal_box, #black_fill').show();
  })

  $('#close_modal, #black_fill').click(function () {
    $('#modal_box, #black_fill').hide();
  })

});
