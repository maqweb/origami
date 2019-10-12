$(document).ready(function () {
  
  $('#slider').slick({
    dots: true,
    // autoplay: true,
    // arrows: true,
    nextArrow: '<img src="img/vector-2.svg" alt="">',
    prevArrow: '<img src="img/vector.svg" alt="">',
  });

  $('#reviews__wrap').slick({
    dots: true,
    // autoplay: true,
    // arrows: true,
    nextArrow: '<img src="img/vector-2.svg" alt="">',
    prevArrow: '<img src="img/vector.svg" alt="">',
  });

  $('.gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      },
      markups: '<button title="%title%" class="mfp-arrow" style="position: absolute; top: 30px; right: -15px"><img src="img/vector.svg" width="25" height="29"/></button>',
    })
  })

  // $('.popup-link').magnificPopup({
  //   callbacks: {
  //     open: function () {
  //       $('.popup-slide').slick({
  //         infinite: true
  //       });
  //     }
  //   }
  // });


  $('.call').click(function () {
    $('#modal_box, #black_fill').show();
  })

  $('#close_modal, #black_fill').click(function () {
    $('#modal_box, #black_fill').hide();
  })

});
