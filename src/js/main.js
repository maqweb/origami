$(document).ready(function () {

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

  $('.burger').click(function(){
    $('.nav').addClass('show-pannel');
    $('.burger').hide();
    $('.closeMark').show();
    $('.logo__link').show();
    $('.phone').addClass('show-pannel');
    $('.soc__list-mob').addClass('show-pannel');
    $('body').css('overflow', 'hidden');
  });

  $('.closeMark').click(function(){
    $('.nav').removeClass('show-pannel');
    $('.closeMark').hide();
    $('.burger').show();
    $('.phone').removeClass('show-pannel');
    $('.soc__list-mob').removeClass('show-pannel');
    $('body').css('overflow', 'visible');
  })

  $('.politic__link').click(function(){
    $('.politic__page').show()
    $('body').css('overflow', 'hidden');
  })

  $('.close-button').click(function() {
    $('.politic__page').hide()
    $('body').css('overflow', 'visible');
  })

  $('.calc-call').click(function(){
    $('.calculator').show();
    $('body').css('overflow', 'hidden');
  })

  $('.close-button').click(function () {
    $('.calculator').hide();
    $('body').css('overflow', 'visible');
  })

  $('.call').click(function () {
    $('#modal_box, #black_fill').show();
  })

  $('#close_modal, #black_fill').click(function () {
    $('#modal_box, #black_fill').hide();
  })

});
