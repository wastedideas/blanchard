$(document).ready(function() {
  $('.gallery__swiper-wrapper').magnificPopup({
    delegate: '.swiper-wrapper__image',
    closeOnContentClick: true,
		closeBtnInside: true,
    tClose: 'Закрыть (Esc)',
    tLoading: 'Загрузка...',
    type:'image',
    gallery: {
      enabled: true, // set to true to enable gallery

      preload: [0,2], // read about this option in next Lazy-loading section

      navigateByImgClick: true,

      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

      tPrev: 'Предыдущая', // title for left button
      tNext: 'Следующая', // title for right button
      tCounter: '', // markup of counter
    },
    image: {
			markup: '<div class="mfp-figure">'+
            '<div class="mfp-close"></div>'+
            '<img class="mfp-img"></img>'+
            '<div class="mfp-bottom-bar">'+
              '<div class="mfp-title"></div>'+
            '</div>'+
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
      titleSrc: function(item) {
        return '<h4 class="mfp-hide__author">' + item.el.find('.mfp-hide__author').html() + '</h4>' +
        '<div class="mfp-hide__picture">' + item.el.find('.mfp-hide__picture').html() + '</div>' +
        '<div class="mfp-hide__years">' + item.el.find('.mfp-hide__years').html() + '</div>' +
        '<p class="mfp-hide__desc">' + item.el.find('.mfp-hide__desc').html() + '</p>'
      },
      verticalFit: true, // Fits image in area vertically

    tError: '<a href="%url%">Изображение</a> не получилось загрузить',
		},
  });
});

