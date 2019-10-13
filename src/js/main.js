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

  $('.call').click(function () {
    $('#modal_box, #black_fill').show();
  })

  $('#close_modal, #black_fill').click(function () {
    $('#modal_box, #black_fill').hide();
  })

});
