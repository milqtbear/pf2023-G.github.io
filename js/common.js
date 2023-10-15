// const IMAGES = require( './details/images');

$(function () {
  $('.e-header__btn-close').click(function () {
    location.href= './../map/index.html';
  });

  $('.e-header__btn-menu').click(function () {
    $('.e-header__drawer-container').toggleClass('hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'false');
  });

  $('.e-header__btn-aside-close').click(function () {
    $('.e-header__drawer-container').toggleClass('hidden');
    $('.header__btn-aside-close').toggleAttribute('aria-hidden', 'true');
  });
});