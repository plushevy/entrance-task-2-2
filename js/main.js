//главный файл
'use strict';

$(function () {


  $(document).on('click', '.menu', function () {

    $('.main-nav__list').toggleClass('main-nav__list--closed');
    $('.menu').toggleClass('menu--active');

  });

  $(document).on('click', '.widgets__item', function (e) {
    $(this).css({
      'position': 'absolute',
      'left':'50%',
      'top': '50%',
      'marginLeft': '-50%',
      'marginTop:': '-50%',
      'transform': 'scale(1.2)',
      'z-index' : '100'
    });
  })
















  var posX1;
  var posX2;
  var swipeSide;

  $(".widgets__list").on("touchstart", function (e) {
    e.preventDefault();
    e.stopPropagation();
    posX1 = e.originalEvent.changedTouches[0].pageX;
  });

  $(".widgets__list").on("touchend", function (e) {
    e.preventDefault();
    e.stopPropagation();
    posX2 = e.originalEvent.changedTouches[0].pageX;
    swipeSide = posX2 - posX1;

    if (swipeSide > 20) {
      tapHandlerLeft();
      console.log('tapHandlerLeft');
      console.log(e);
      console.log('posX2' + posX2);

    } else if (swipeSide < -20) {
      tapHandlerRight();
      console.log('tapHandlerRight');
      console.log(e);
      console.log('posX2' + posX2);
    }

  });

  function tapHandlerLeft() {
    var wrapWidth = $('.widgets__list').innerWidth();
    var offset = $('.widgets__list').offset();
    console.log(offset);
    var slide = $('.widgets__item');
    var width = slide.innerWidth();
    $('.widgets__list').animate({
      marginLeft: "+=" + width
    }, 300)
  }


  function tapHandlerRight() {
    var wrapWidth = $('.widgets__list').innerWidth();
    var offset = $('.widgets__list').offset();
    console.log(offset);
    var slide = $('.widgets__item');
    var width = slide.innerWidth();
    $('.widgets__list').animate({
      marginLeft: "-=" + width
    }, 300)
  }



});
