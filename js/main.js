//главный файл
'use strict';

$(function () {


  $(document).on('click', '.menu', function () {

    $('.main-nav__list').toggleClass('main-nav__list--closed');
    $('.menu').toggleClass('menu--active');

  });

});
